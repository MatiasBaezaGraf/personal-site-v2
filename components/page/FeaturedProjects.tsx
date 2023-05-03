import Image from "next/image";
import { Project } from "@/pages";
import ProjectButton from "@/components/design/ProjectButton";

const FeaturedProjects = ({ projects }: { projects: Project[] }) => {
	const featuredProjects = projects.filter((project) => project.featured);

	const isOdd = (num: number) => num % 2;

	const orderedProjects = featuredProjects.sort(
		(a, b) => parseInt(a.id) - parseInt(b.id)
	);

	return (
		<>
			{orderedProjects.map((project, index) => (
				<div key={project.id}>
					{/* Desktop View */}
					<div
						className={`hidden laptop:flex justify-between mb-[100px] ${
							isOdd(index) ? "flex-row-reverse" : "flex-row"
						}`}
					>
						<div
							className="transform duration-[200ms] flex flex-col border-[2px] border-[#838383] 
							hover:scale-105"
						>
							<Image
								src={`/projects/${project.imagePath}`}
								alt={project.name}
								width={520}
								height={250}
								className="object-cover w-[520px] h-[250px] z-0"
							/>
							<div className="flex flex-row items-center h-[60px] border-t-[2px] border-[#838383]">
								<h5 className="ml-[20px] font-primary-medium text-[15px] text-gradient">
									{project.technologies}
								</h5>
							</div>
						</div>
						<div
							className={`flex flex-col laptop:w-[400px] desktop:w-[570px] ${
								isOdd(index) ? "items-start text-left" : "items-end text-right"
							}`}
						>
							<h1 className="font-primary-bold text-[30px] text-[#DEDEDE] mb-[10px]">
								{project.name}
							</h1>
							<p className="font-primary-regular text-[15px] leading-[23px] text-[#838383] mb-[10px]">
								{project.description}
							</p>
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
						</div>
					</div>

					{/* Mobile View */}
					<div className="laptop:hidden relative mb-[30px]">
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
				</div>
			))}
		</>
	);
};

export default FeaturedProjects;
