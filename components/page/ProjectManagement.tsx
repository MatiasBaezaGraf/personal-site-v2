import { Project } from "@/pages";
import { useState } from "react";
import UpdateSidebar from "../design/UpdateSidebar";
import DeleteSidebar from "../design/DeleteSidebar";

const ProjectManagement = ({ projects }: { projects: Project[] }) => {
	const [currentProject, setCurrentProject] = useState<Project | null>(null);
	const [openUpdate, setOpenUpdate] = useState<boolean>(false);
	const [openDelete, setOpenDelete] = useState<boolean>(false);

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
				<div className="w-[120vw] bg-[#010010] font-primary-medium text-[#DEDEDE] text-[15px]">
					<div className="flex flex-row">
						<div className="p-[10px]">
							<svg
								fill="none"
								version="1.1"
								id="Capa_1"
								xmlns="http://www.w3.org/2000/svg"
								xmlnsXlink="http://www.w3.org/1999/xlink"
								width="18px"
								height="18px"
								viewBox="0 0 494.936 494.936"
								xmlSpace="preserve"
							>
								<g>
									<g>
										<path
											d="M389.844,182.85c-6.743,0-12.21,5.467-12.21,12.21v222.968c0,23.562-19.174,42.735-42.736,42.735H67.157
			c-23.562,0-42.736-19.174-42.736-42.735V150.285c0-23.562,19.174-42.735,42.736-42.735h267.741c6.743,0,12.21-5.467,12.21-12.21
			s-5.467-12.21-12.21-12.21H67.157C30.126,83.13,0,113.255,0,150.285v267.743c0,37.029,30.126,67.155,67.157,67.155h267.741
			c37.03,0,67.156-30.126,67.156-67.155V195.061C402.054,188.318,396.587,182.85,389.844,182.85z"
										/>
										<path
											d="M483.876,20.791c-14.72-14.72-38.669-14.714-53.377,0L221.352,229.944c-0.28,0.28-3.434,3.559-4.251,5.396l-28.963,65.069
			c-2.057,4.619-1.056,10.027,2.521,13.6c2.337,2.336,5.461,3.576,8.639,3.576c1.675,0,3.362-0.346,4.96-1.057l65.07-28.963
			c1.83-0.815,5.114-3.97,5.396-4.25L483.876,74.169c7.131-7.131,11.06-16.61,11.06-26.692
			C494.936,37.396,491.007,27.915,483.876,20.791z M466.61,56.897L257.457,266.05c-0.035,0.036-0.055,0.078-0.089,0.107
			l-33.989,15.131L238.51,247.3c0.03-0.036,0.071-0.055,0.107-0.09L447.765,38.058c5.038-5.039,13.819-5.033,18.846,0.005
			c2.518,2.51,3.905,5.855,3.905,9.414C470.516,51.036,469.127,54.38,466.61,56.897z"
										/>
									</g>
								</g>
							</svg>
						</div>
						<div className="p-[10px]">
							<svg
								width="24px"
								height="24px"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M10 10V16M14 10V16M18 6V18C18 19.1046 17.1046 20 16 20H8C6.89543 20 6 19.1046 6 18V6M4 6H20M15 6V5C15 3.89543 14.1046 3 13 3H11C9.89543 3 9 3.89543 9 5V6"
									stroke="none"
									stroke-width="1"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
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
								<svg
									fill="#dedede"
									version="1.1"
									id="Capa_1"
									xmlns="http://www.w3.org/2000/svg"
									xmlnsXlink="http://www.w3.org/1999/xlink"
									width="18px"
									height="18px"
									viewBox="0 0 494.936 494.936"
									xmlSpace="preserve"
								>
									<g>
										<g>
											<path
												d="M389.844,182.85c-6.743,0-12.21,5.467-12.21,12.21v222.968c0,23.562-19.174,42.735-42.736,42.735H67.157
			c-23.562,0-42.736-19.174-42.736-42.735V150.285c0-23.562,19.174-42.735,42.736-42.735h267.741c6.743,0,12.21-5.467,12.21-12.21
			s-5.467-12.21-12.21-12.21H67.157C30.126,83.13,0,113.255,0,150.285v267.743c0,37.029,30.126,67.155,67.157,67.155h267.741
			c37.03,0,67.156-30.126,67.156-67.155V195.061C402.054,188.318,396.587,182.85,389.844,182.85z"
											/>
											<path
												d="M483.876,20.791c-14.72-14.72-38.669-14.714-53.377,0L221.352,229.944c-0.28,0.28-3.434,3.559-4.251,5.396l-28.963,65.069
			c-2.057,4.619-1.056,10.027,2.521,13.6c2.337,2.336,5.461,3.576,8.639,3.576c1.675,0,3.362-0.346,4.96-1.057l65.07-28.963
			c1.83-0.815,5.114-3.97,5.396-4.25L483.876,74.169c7.131-7.131,11.06-16.61,11.06-26.692
			C494.936,37.396,491.007,27.915,483.876,20.791z M466.61,56.897L257.457,266.05c-0.035,0.036-0.055,0.078-0.089,0.107
			l-33.989,15.131L238.51,247.3c0.03-0.036,0.071-0.055,0.107-0.09L447.765,38.058c5.038-5.039,13.819-5.033,18.846,0.005
			c2.518,2.51,3.905,5.855,3.905,9.414C470.516,51.036,469.127,54.38,466.61,56.897z"
											/>
										</g>
									</g>
								</svg>
							</button>
							<button
								onClick={() => deleteProject(project)}
								className="p-[10px] transform duration-[200ms] hover:-translate-y-[7px]"
							>
								<svg
									width="24px"
									height="24px"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M10 10V16M14 10V16M18 6V18C18 19.1046 17.1046 20 16 20H8C6.89543 20 6 19.1046 6 18V6M4 6H20M15 6V5C15 3.89543 14.1046 3 13 3H11C9.89543 3 9 3.89543 9 5V6"
										stroke="#dedede"
										stroke-width="1"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</button>
							<div
								key={project.id}
								className={`grid grid-cols-7 border-t-[1px] border-[#393939] text-[#dedede] ${
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
		</>
	);
};

export default ProjectManagement;
