import { Project } from "@/pages";
import ProjectButton from "@/components/design/ProjectButton";

const OtherProjects = ({ projects }: { projects: Project[] }) => {
	const otherProjects = projects.filter((project) => !project.featured);
	const orderedProjects = otherProjects.sort(
		(a, b) => parseInt(a.id) - parseInt(b.id)
	);
	return (
		<div
			className="transform duration-[200ms] grid-cols-2 
			tablet:gap-[10px] tablet:grid 
			desktop:grid-cols-3 
			laptop:gap-[30px]"
		>
			{orderedProjects.map((project, index) => (
				<div key={project.id}>
					{/* Desktop View */}
					<div
						className="transform duration-[200ms] relative h-full
						hidden
						laptop:block 
						hover:scale-105"
					>
						<div className="relative flex flex-col justify-between top-0 left-0 w-full h-full z-10 bg-[#030120] border-[#838383] border-[1px]">
							<div className=" p-[20px]">
								<h1 className="font-primary-bold text-[#DEDEDE] text-[22px] w-5/6">
									{project.name}
								</h1>
								<p className="font-primary-medium text-[#838383] text-[16px] leading-[30px] mt-[20px]">
									{project.description}
								</p>
							</div>
							<div>
								<div className="flex flex-row mt-[20px] px-[20px]">
									{project.visitUrl != null && (
										<ProjectButton
											url={project.visitUrl}
											purpose="visit"
											format="large"
											className="ml-[5px]"
										/>
									)}
									{project.githubUrl != null && (
										<ProjectButton
											url={project.githubUrl}
											purpose="github"
											format="large"
										/>
									)}
								</div>
								<div className="w-full mt-[20px] border-t-[2px] border-[#838383] p-[15px]">
									<h5 className="font-primary-regular text-[#838383] text-[13px] ">
										{project.technologies}
									</h5>
								</div>
							</div>
						</div>
					</div>

					{/* Mobile View */}
					<div className="relative laptop:hidden pb-[20px] px-[10px] h-full">
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
				</div>
			))}
		</div>
	);
};

export default OtherProjects;
