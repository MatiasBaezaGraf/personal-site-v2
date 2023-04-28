import { Project } from "@/pages";
import { useState } from "react";
import UpdateSidebar from "../design/UpdateSidebar";
import DeleteSidebar from "../design/DeleteSidebar";
import SVG from "../design/SVG";
import CreateSidebar from "../design/CreateSidebar";

const ProjectManagement = ({ projects }: { projects: Project[] }) => {
	const [currentProject, setCurrentProject] = useState<Project | null>(null);
	const [openUpdate, setOpenUpdate] = useState<boolean>(false);
	const [openDelete, setOpenDelete] = useState<boolean>(false);
	const [openCreate, setOpenCreate] = useState<boolean>(false);

	const updateProject = (project: Project) => {
		setCurrentProject(project);
		setOpenUpdate(true);
	};

	const deleteProject = (project: Project) => {
		setCurrentProject(project);
		setOpenDelete(true);
	};

	// Order projects by id
	const orderedProjects = projects.sort(
		(a, b) => parseInt(a.id) - parseInt(b.id)
	);

	return (
		<>
			<div className="overflow-x-auto">
				<div className="w-[120vw] bg-[#010010] font-primary-medium text-[#DEDEDE] text-[15px] py-[10px]">
					<div className="flex flex-row mb-[10px]">
						<div className="p-[10px]">
							<SVG type="edit" fill="none" />
						</div>
						<div className="p-[10px]">
							<SVG type="delete" fill="none" />
						</div>
						<button
							onClick={() => setOpenCreate(true)}
							className="flex flex-row justify-center items-center transform duration-[200ms] bg-main-gradient px-[50px] py-[1px] rounded-md hover:scale-105"
						>
							<h1 className="font-primary-bold text-[14px] text-black">
								+ New Project
							</h1>
						</button>
					</div>
					<div className="flex flex-row">
						<div className="p-[10px]">
							<SVG type="edit" fill="none" />
						</div>
						<div className="p-[10px]">
							<SVG type="delete" fill="none" />
						</div>
						<div
							className={`grid grid-cols-7 text-[#dedede] bg-[#151515] w-full border-t-[1px] border-[#393939]`}
						>
							<div className="h-[50px] truncate p-[15px] flex flex-row items-start border-x-[1px] border-[#393939]">
								<h1 className="font-primary-bold text-[18px]  ">Name</h1>
							</div>
							<div className="h-[50px] truncate p-[15px] flex flex-row items-start">
								<h1 className="font-primary-bold text-[18px]">Description</h1>
							</div>
							<div className="h-[50px] truncate p-[15px] flex flex-row items-start border-l-[1px] border-[#393939]">
								<h1 className="font-primary-bold text-[18px]">Technologies</h1>
							</div>
							<div className="h-[50px] truncate p-[15px] flex flex-row items-start border-l-[1px] border-[#393939]">
								<h1 className="font-primary-bold text-[18px]">Featured</h1>
							</div>
							<div className="h-[50px] truncate p-[15px] flex flex-row items-start border-l-[1px] border-[#393939]">
								<h1 className="font-primary-bold text-[18px]">Visit URL</h1>
							</div>
							<div className="h-[50px] truncate p-[15px] flex flex-row items-start border-l-[1px] border-[#393939]">
								<h1 className="font-primary-bold text-[18px]">Github URL</h1>
							</div>
							<div className="h-[50px] truncate p-[15px] flex flex-row items-start border-x-[1px] border-[#393939]">
								<h1 className="font-primary-bold text-[18px]">Image Name</h1>
							</div>
						</div>
					</div>
					{orderedProjects.map((project, index) => (
						<div key={index} className="flex flex-row">
							<button
								onClick={() => updateProject(project)}
								className="p-[10px] transform duration-[200ms] hover:-translate-y-[7px]"
							>
								<SVG type="edit" />
							</button>
							<button
								onClick={() => deleteProject(project)}
								className="p-[10px] transform duration-[200ms] hover:-translate-y-[7px]"
							>
								<SVG type="delete" />
							</button>
							<div
								key={project.id}
								className={`grid grid-cols-7 border-t-[1px] border-[#393939] text-[#dedede] w-full ${
									index == projects.length - 1 ? "border-b-[1px]" : ""
								}`}
							>
								<div className="h-[50px] truncate p-[15px] text-[13px] flex flex-row items-start border-l-[1px] text-gradient border-[#393939]">
									{project.name}
								</div>
								<div className="h-[50px] truncate p-[15px] text-[13px] flex flex-row items-start border-l-[1px] border-[#393939]">
									{project.description}
								</div>
								<div className="h-[50px] truncate p-[15px] text-[13px] flex flex-row items-start border-l-[1px] border-[#393939]">
									{project.technologies}
								</div>
								<div className="h-[50px] truncate p-[15px] text-[13px] flex flex-row items-start border-l-[1px] border-[#393939]">
									{project.featured ? "Yes" : "No"}
								</div>
								<div className="h-[50px] truncate p-[15px] text-[13px] flex flex-row items-start border-l-[1px] border-[#393939]">
									{project.visitUrl}
								</div>
								<div className="h-[50px] truncate p-[15px] text-[13px] flex flex-row items-start border-l-[1px] border-[#393939]">
									{project.githubUrl}
								</div>
								<div className="h-[50px] truncate p-[15px] text-[13px] flex flex-row items-start border-x-[1px] border-[#393939]">
									{project.imagePath}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Update sidebar */}
			<UpdateSidebar
				open={openUpdate}
				project={currentProject}
				close={() => setOpenUpdate(false)}
			/>

			{/* Delete sidebar */}
			<DeleteSidebar
				open={openDelete}
				project={currentProject}
				close={() => setOpenDelete(false)}
			/>

			{/* Create sidebar */}
			<CreateSidebar open={openCreate} close={() => setOpenCreate(false)} />
		</>
	);
};

export default ProjectManagement;
