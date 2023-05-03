import { Project } from "@/pages";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import supabase from "supabase.js";
import SVG from "../design/SVG";

const DeleteSidebar = ({
	open,
	project,
	close,
	onDelete,
}: {
	open: boolean;
	project: Project | null;
	close: () => void;
	onDelete: () => void;
}) => {
	const [name, setName] = useState<string>("");

	useEffect(() => {
		if (project) {
			setName(project.name);
		}
	}, [project]);

	const deleteProject = async () => {
		const { data, error } = await supabase
			.from("Projects")
			.delete()
			.eq("id", project?.id);

		if (error) {
			alert(error.message);
		} else {
			onDelete();
			close();
		}
	};

	return (
		<div>
			<div
				className={`transform duration-[400ms] right-0 top-0 fixed h-screen bg-[#282828] z-30 flex flex-col items-start justify-center ${
					open ? "translate-x-0" : "translate-x-[1500px]"
				}  w-2/3 laptop:w-2/5`}
			>
				<button className="absolute top-[30px] right-0" onClick={close}>
					<SVG type="close" />
				</button>
				<h1 className="font-primary-semi-bold text-[#DEDEDE] text-[25px] text-start py-[10px] px-[20px]">
					Are you sure you want to delete{" "}
					<span className="text-gradient">{name}</span>?
				</h1>
				<h2 className="font-primary-medium text-[#838383] text-[15px] text-start px-[20px]">
					This action cannot be undone
				</h2>
				<button
					onClick={deleteProject}
					className="transform duration-[200ms] bg-red-700 rounded px-[30px] py-[10px] m-[20px]
					hover:scale-105"
				>
					<h1 className="font-primary-bold text-white text-[16px]">Delete</h1>
				</button>
				<div className="h-1/2" />
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

export default DeleteSidebar;
