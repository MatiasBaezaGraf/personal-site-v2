import { useEffect, useState } from "react";

import Image from "next/image";
import SVG from "../design/SVG";
import supabase from "@/supabase";

const FileManagement = ({
	open,
	submit,
	image,
}: {
	open: boolean;
	submit: (imagePath: any) => Promise<void>;
	image?: string;
}) => {
	const cdnUrl = process.env.NEXT_PUBLIC_SUPABASE_CDN_URL;

	const [changed, setChanged] = useState(false);

	const [uploading, setUploading] = useState(false);
	const [selectedImage, setSelectedImage] = useState("");
	const [selectedFile, setSelectedFile] = useState<File>();
	const [selectedFileName, setSelectedFileName] = useState("");

	console.log(changed);

	// I use the useEffect hook to return everything to its default state when the component is unmounted:
	// If the component is rendered with an image prop, the image will be displayed, and useEffect will depend from the image prop.
	// If the component is rendered without an image prop, the image will not be displayed, and useEffect will depend from the open prop.
	useEffect(() => {
		setChanged(false);
		setUploading(false);
		setSelectedFile(undefined);
		setSelectedFileName("");
		// If the component is rendered with an image prop, the image will be displayed.
		if (image) {
			setSelectedImage(cdnUrl + image);
		} else {
			setSelectedImage("");
		}
	}, [image ? image : open]);

	// The handleUpload function is called when a user is creating a new project and wants to upload an image.
	const handleUpload = async () => {
		try {
			submit(selectedFileName);
			if (!selectedFile) {
				console.log(
					"No file selected. The project will continue or be created without an image."
				);
				return;
			}

			//Upload the project's image to the storage
			const { data, error } = await supabase.storage
				.from("projectImages")
				.upload("images/" + selectedFile.name, selectedFile);

			console.log(selectedFile.name, "uploaded");
		} catch (error: any) {
			console.log(error);
		}
	};

	// The handleReplace function is called when a user is updating a project and wants to replace the current image.
	const handleReplace = async () => {
		try {
			if (!selectedFile && !changed) {
				console.log(
					"No file selected. The project will be updated without an image or mantain the previous one."
				);
				submit(-1);
				return;
			} else if (!selectedFile && changed) {
				console.log(
					"No file selected and change detected. The project image will be deleted."
				);
				submit(false);
				//Delete the project's image from the storage
				const { data, error } = await supabase.storage
					.from("projectImages")
					.remove(["images/" + image]);

				return;
			} else if (selectedFile) {
				console.log(
					"File selected. The projects old image will be deleted and thw new one will be uploaded."
				);
				submit(selectedFileName);
				//Upload the project's image to the storage
				const { data, error } = await supabase.storage
					.from("projectImages")
					.upload("images/" + selectedFile.name, selectedFile);

				console.log(selectedFile.name, "uploaded");
				//Delete the project's previous image from the storage
				const { data: data2, error: error2 } = await supabase.storage
					.from("projectImages")
					.remove(["images/" + image]);
			}
		} catch (error: any) {
			console.log(error);
		}
	};

	return (
		<div className="flex flex-col justify-center py-[10px] items-end">
			<label className="self-center mb-[20px]">
				<input
					type="file"
					hidden
					onChange={({ target }) => {
						if (target.files!.length > 0) {
							console.log(target.files![0]);
							const file = target.files![0];
							setSelectedImage(URL.createObjectURL(file));
							setSelectedFile(file);
							setSelectedFileName(file.name);
						}
					}}
				/>
				<div className="flex flex-col justify-center items-center border-[2px] border-dashed cursor-pointer rounded transform duration-[200ms] hover:scale-105">
					{selectedImage ? (
						<>
							<button
								className="absolute top-[20px] right-0"
								onClick={() => {
									setChanged(true);
									setSelectedImage("");
									setSelectedFile(undefined);
									setSelectedFileName("");
								}}
							>
								<SVG type="close" />
							</button>
							<Image
								src={selectedImage}
								alt="selected"
								width={300}
								height={200}
								className="object-cover w-full"
							/>
							<h1 className="p-[8px] font-primary-medium text-[15px] text-[#DEDEDE]">
								{image ? image : selectedFileName}
							</h1>
						</>
					) : (
						<span className="flex flex-row text-center p-[8px] font-primary-medium text-[15px] text-[#DEDEDE]">
							Select Image
							<SVG type="upload" className="ml-[5px]" />
						</span>
					)}
				</div>
			</label>
			<button
				onClick={() => {
					if (!image) {
						handleUpload();
					} else {
						handleReplace();
					}
				}}
				disabled={uploading}
				style={{ opacity: uploading ? ".5" : "1" }}
				className="flex flex-row justify-center transform duration-[200ms] bg-main-gradient px-[50px] py-[12px] rounded-md hover:scale-105 w-[120px]"
			>
				<h1 className="font-primary-bold text-[14px] text-black">
					{image ? "Update" : "Create"}
				</h1>
			</button>
		</div>
	);
};

export default FileManagement;
