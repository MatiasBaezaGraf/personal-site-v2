import { useEffect, useState } from "react";

import Image from "next/image";
import SVG from "../design/SVG";

const FileUpload = ({
	open,
	submit,
}: {
	open: boolean;
	submit: (imagePath: string) => Promise<void>;
}) => {
	const [uploading, setUploading] = useState(false);
	const [selectedImage, setSelectedImage] = useState("");
	const [selectedFile, setSelectedFile] = useState<File>();
	const [selectedFileName, setSelectedFileName] = useState("");

	// I use the useEffect hook to return everything to its default state when the component is unmounted:
	useEffect(() => {
		return () => {
			setUploading(false);
			setSelectedImage("");
			setSelectedFile(undefined);
			setSelectedFileName("");
		};
	}, [open]);

	const handleUpload = async () => {
		setUploading(true);
		try {
			if (!selectedFile) {
				console.log(
					"No file selected. The project will be created without an image."
				);
				return;
			}
			const formData = new FormData();
			formData.append("image", selectedFile);
			const res = await fetch("/api/image", {
				method: "POST",
				body: formData,
			});
			const data = await res.json();
			console.log(data);
		} catch (error: any) {
			console.log(error);
		}
		setUploading(false);
	};

	return (
		<div className="flex flex-col justify-center py-[10px] items-end">
			<label className="self-center mb-[20px]">
				<input
					type="file"
					hidden
					onChange={({ target }) => {
						if (target.files) {
							const file = target.files[0];
							setSelectedImage(URL.createObjectURL(file));
							setSelectedFile(file);
							setSelectedFileName(file.name);
						}
					}}
				/>
				<div className="flex flex-col justify-center items-center border-[2px] border-dashed cursor-pointer rounded transform duration-[200ms] hover:scale-105">
					{selectedImage ? (
						<>
							<Image
								src={selectedImage}
								alt="selected"
								width={300}
								height={200}
								className="object-cover w-full"
							/>
							<h1 className="p-[8px] font-primary-medium text-[15px] text-[#DEDEDE]">
								{selectedFileName}
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
					handleUpload(), submit(selectedFileName);
				}}
				disabled={uploading}
				style={{ opacity: uploading ? ".5" : "1" }}
				className="flex flex-row justify-center transform duration-[200ms] bg-main-gradient px-[50px] py-[12px] rounded-md hover:scale-105 w-[120px]"
			>
				<h1 className="font-primary-bold text-[14px] text-black">Create</h1>
			</button>
		</div>
	);
};

export default FileUpload;
