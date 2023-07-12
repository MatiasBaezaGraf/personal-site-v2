import Image from "next/image";
import { Project } from "@/pages";
import { useEffect, useState } from "react";
import ProjectButton from "../design/ProjectButton";

const Gallery = ({ projects }: { projects: Project[] }) => {
	const cdnUrl = process.env.NEXT_PUBLIC_SUPABASE_CDN_URL;
	const featuredProjects = projects.filter((project) => project.featured);
	const orderedProjects = featuredProjects.sort(
		(a, b) => parseInt(a.id) - parseInt(b.id)
	);

	const [activeProject, setActiveProject] = useState<string>("");
	const [entertimeoutId, setEnterTimeoutId] = useState<any | null>(null);

	return (
		<section className="hidden laptop:flex desktop:w-[1700px] laptop:w-[1400px] h-[500px]">
			{orderedProjects.map((project) => (
				<div
					onMouseEnter={() => {
						const id = setTimeout(() => {
							setActiveProject(project.id);
						}, 300);
						setEnterTimeoutId(id);
					}}
					onMouseLeave={() => {
						setActiveProject("");
						if (entertimeoutId) {
							clearTimeout(entertimeoutId); // Clear the timeout
							setEnterTimeoutId(null); // Reset the timeout ID
						}
					}}
					key={project.id}
					className="relative w-[0px] h-full flex flex-col justify-center items-center grow opacity-[0.8] mx-[10px] transform duration-[300ms] ease-in-out hover:w-[600px] laptop:hover:w-[400px] hover:opacity-100 bg-featured-projects border-[1px] border-[#838383] overflow-clip"
				>
					<Image
						className="m-auto object-contain w-[32vh] h-[32vh] absolute px-[10px]"
						src={cdnUrl + project.imagePath}
						alt={project.name}
						width={1200}
						height={1200}
					/>
					<div
						className={`flex flex-col justify-between h-full p-[30px] transform duration-[150ms] cursor-pointer ${
							project.id == activeProject ? "opacity-1" : "opacity-0"
						}`}
					>
						<h1 className="text-[#DEDEDE] text-[25px] font-primary-medium border-b-[1px] border-[#838383] pb-[10px]">
							{project.name}
						</h1>
						<p
							className={`transform duration-[100ms] text-[#949494] text-[16px] leading-[30px] bg-black/90 p-[15px] z-[-10] ${
								project.id == activeProject ? "text-[16px]" : ""
							}`}
						>
							{project.description}
						</p>
						<div>
							<div className="flex flex-row">
								{project.visitUrl != null && (
									<ProjectButton
										url={project.visitUrl}
										purpose="visit"
										format="large"
										className="mt-[20px] tablet:mr-[10px]"
									/>
								)}
								{project.githubUrl != null && (
									<ProjectButton
										url={project.githubUrl}
										purpose="github"
										format="large"
										className="mt-[20px]"
									/>
								)}
							</div>
							<div className="bg-[#090f4e] p-[10px] mt-[30px]">
								<h1 className="font-primary-medium text-[#DEDEDE] text-[20px] leading-[30px] ">
									Developed using:{" "}
								</h1>
								<h1 className="font-primary-medium text-gradient text-[16px] mt-[16px] ">
									{project.technologies}
								</h1>
							</div>
						</div>
					</div>
				</div>
			))}
		</section>
	);
};

export default Gallery;
