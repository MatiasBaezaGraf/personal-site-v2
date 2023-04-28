import { Project } from "@/pages";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import supabase from "supabase.js";

const UpdateSidebar = ({
	open,
	project,
	close,
}: {
	open: boolean;
	project: Project | null;
	close: () => void;
}) => {
	const router = useRouter();

	const [name, setName] = useState<string>("");
	const [description, setDescription] = useState<string>(
		project?.description || ""
	);
	const [technologies, setTechnologies] = useState<string>(
		project?.technologies || ""
	);
	const [featured, setFeatured] = useState<boolean>(false);
	const [visitUrl, setVisitUrl] = useState<string>("");
	const [githubUrl, setGithubUrl] = useState<string>("");
	const [imagePath, setImagePath] = useState<string>("");

	useEffect(() => {
		if (project) {
			setName(project.name);
			setDescription(project.description);
			setTechnologies(project.technologies);
			setFeatured(project.featured);
			setVisitUrl(project.visitUrl);
			setGithubUrl(project.githubUrl);
			setImagePath(project.imagePath);
		}
	}, [project]);

	const updateProject = async () => {
		const { data, error } = await supabase
			.from("Projects")
			.update({
				name,
				description,
				technologies,
				featured,
				visitUrl,
				githubUrl,
				imagePath,
			})
			.eq("id", project?.id);

		if (error) {
			alert(error.message);
		} else {
			close();
			router.reload();
		}
	};

	return (
		<div>
			<div
				className={`transform duration-[400ms] right-0 top-0 fixed h-screen bg-[#282828] z-30 ${
					open ? "translate-x-0" : "translate-x-[1500px]"
				}  w-2/3 tablet:w-2/5`}
			>
				<h1 className="font-primary-bold text-[#DEDEDE] text-[25px] text-start p-[20px]">
					Edit Project
				</h1>
				<div className="flex flex-col">
					<div className="flex flex-row justify-between mb-[25px]">
						<h1 className="font-primary-medium text-[#838383] text-[15px] py-[11px] px-[20px]">
							Name
						</h1>
						<input
							type="text"
							value={name}
							className="w-3/5 font-primary-medium bg-transparent text-[#DEDEDE] bg-[#222222] placeholder-[#636363] text-[15px] p-[11px] border-b-[2px] border-[#838383] focus:outline-none focus:border-[#FFB800] mr-[20px]"
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div className="flex flex-row justify-between items-start mb-[25px]">
						<h1 className="font-primary-medium text-[#838383] text-[15px] py-[13px] px-[20px]">
							Description
						</h1>
						<textarea
							rows={5}
							value={description}
							className="w-3/5 resize-none font-primary-medium bg-transparent text-[#DEDEDE] bg-[#222222] placeholder-[#636363] text-[15px] p-[11px] mb-[20px] border-b-[2px] border-[#838383] focus:outline-none focus:border-[#FFB800] mr-[20px]"
							onChange={(e) => setDescription(e.target.value)}
						/>
					</div>
					<div className="flex flex-row justify-between mb-[25px]">
						<h1 className="font-primary-medium text-[#838383] text-[15px] py-[11px] px-[20px]">
							Technologies
						</h1>
						<input
							type="text"
							value={technologies}
							className="w-3/5 font-primary-medium bg-transparent text-[#DEDEDE] bg-[#222222] placeholder-[#636363] text-[15px] p-[11px] border-b-[2px] border-[#838383] focus:outline-none focus:border-[#FFB800] mr-[20px]"
							onChange={(e) => setTechnologies(e.target.value)}
						/>
					</div>
					<div className="flex flex-row justify-between mb-[25px]">
						<h1 className="font-primary-medium text-[#838383] text-[15px] py-[11px] px-[20px]">
							Featured
						</h1>
						<input
							type="checkbox"
							checked={featured}
							className="w-3/5 accent-[#FF7400] text-left mr-[20px]"
							onChange={(e) => setFeatured(e.target.checked)}
						/>
					</div>
					<div className="flex flex-row justify-between mb-[25px]">
						<h1 className="font-primary-medium text-[#838383] text-[15px] py-[11px] px-[20px]">
							Visit URL
						</h1>
						<input
							type="text"
							value={visitUrl ? visitUrl : ""}
							className="w-3/5 font-primary-medium bg-transparent text-[#DEDEDE] bg-[#222222] placeholder-[#636363] text-[15px] p-[11px] border-b-[2px] border-[#838383] focus:outline-none focus:border-[#FFB800] mr-[20px]"
							onChange={(e) => setVisitUrl(e.target.value)}
						/>
					</div>
					<div className="flex flex-row justify-between mb-[25px]">
						<h1 className="font-primary-medium text-[#838383] text-[15px] py-[11px] px-[20px]">
							Github URL
						</h1>
						<input
							type="text"
							value={githubUrl ? githubUrl : ""}
							className="w-3/5 font-primary-medium bg-transparent text-[#DEDEDE] bg-[#222222] placeholder-[#636363] text-[15px] p-[11px] border-b-[2px] border-[#838383] focus:outline-none focus:border-[#FFB800] mr-[20px]"
							onChange={(e) => setGithubUrl(e.target.value)}
						/>
					</div>
					<div className="flex flex-row justify-between mb-[25px]">
						<h1 className="font-primary-medium text-[#838383] text-[15px] py-[11px] px-[20px]">
							Image Path
						</h1>
						<input
							type="text"
							value={imagePath}
							className="w-3/5 font-primary-medium bg-transparent text-[#DEDEDE] bg-[#222222] placeholder-[#636363] text-[15px] p-[11px] border-b-[2px] border-[#838383] focus:outline-none focus:border-[#FFB800] mr-[20px]"
							onChange={(e) => setImagePath(e.target.value)}
						/>
					</div>
					<button
						onClick={updateProject}
						className="flex flex-row justify-center transform duration-[200ms] bg-main-gradient px-[50px] py-[12px] rounded-md hover:scale-105 w-[120px] mx-[20px]"
					>
						<h1 className="font-primary-bold text-[14px] text-black">Update</h1>
					</button>
				</div>
			</div>
			{/* Backdrop filter */}
			<div
				className={`transform fixed h-screen top-0 w-full bg-black/50 left-0 ${
					open ? "opacity-1 translate-x-0" : "opacity-0 translate-x-[1500px]"
				}`}
				onClick={close}
			/>
		</div>
	);
};

export default UpdateSidebar;
