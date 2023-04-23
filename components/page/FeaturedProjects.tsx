import Image from "next/image";
import { Project } from "@/pages";
import ProjectButton from "@/components/design/ProjectButton";

const FeaturedProjects = ({ projects }: { projects: Project[] }) => {
	return (
		<>
			{projects.map(
				(project, index) =>
					project.featured && (
						<div key={project.id} className="relative mb-[30px]">
							<Image
								src={`/projects/${project.imagePath}.png`}
								alt={project.name}
								fill={true}
								className="object-cover w-full h-full z-0"
							/>
							<div className="relative flex flex-col top-0 left-0 w-full h-full z-10 bg-[#030120]/90 border-[#838383] border-[2px] p-[15px]">
								<h1 className="font-primary-bold text-[#DEDEDE] text-[32px]">
									{project.name}
								</h1>
								<h5 className="font-primary-medium text-gradient text-[15px]">
									{project.technologies}
								</h5>
								<p className="font-primary-medium text-[#838383] text-[19px] leading-[30px] mt-[20px]">
									{project.description}
								</p>
								<div
									className="flex 
								flex-col
								tablet:flex-row"
								>
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
							</div>
						</div>
					)
			)}
		</>
	);
};

export default FeaturedProjects;
