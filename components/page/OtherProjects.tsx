import { Project } from "@/pages";
import ProjectButton from "@/components/design/ProjectButton";

const OtherProjects = ({ projects }: { projects: Project[] }) => {
	return (
		<div className="grid grid-cols-2">
			{projects.map(
				(project, index) =>
					!project.featured && (
						<div key={project.id} className="relative pb-[20px] px-[10px]">
							<div className="relative flex flex-col top-0 left-0 w-full h-full z-10 bg-[#030120] border-[#838383] border-[1px] p-[20px]">
								<div className="flex flex-row justify-between items-center">
									<h1 className="font-primary-bold text-[#DEDEDE] text-[22px] w-5/6">
										{project.name}
									</h1>
									{project.visitUrl != null && (
										<ProjectButton
											url={project.visitUrl}
											purpose="visit"
											format="small"
											className="ml-[5px]"
										/>
									)}
									{project.githubUrl != null && (
										<ProjectButton
											url={project.githubUrl}
											purpose="github"
											format="small"
										/>
									)}
								</div>

								<p className="font-primary-medium text-[#838383] text-[16px] leading-[30px] mt-[20px]">
									{project.description}
								</p>
								<h5 className="font-primary-regular text-[#DEDEDE] text-[16px] mt-[20px]">
									{project.technologies}
								</h5>
							</div>
						</div>
					)
			)}
		</div>
	);
};

export default OtherProjects;
