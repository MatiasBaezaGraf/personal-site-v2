import Image from "next/image";

const ProjectButton = ({ url, purpose }: { url: string; purpose: string }) => {
	return (
		<div className="bg-main-gradient p-[2px] rounded-[3px] mt-[20px] w-fit">
			<button
				onClick={() => window.open(url, "_blank")}
				className="flex flex-row items-center justify-between bg-[#010010] w-full h-full px-[15px] py-[5px]"
			>
				<h1 className="font-primary-medium text-[15px] text-[#DEDEDE] mr-[10px]">
					{purpose === "github" && "Source Code"}
					{purpose === "visit" && "Visit Website"}
				</h1>
				<Image
					src={`/icons/${purpose === "github" ? "GitHubIcon" : "Link"}.png`}
					alt="Logo"
					width={30}
					height={30}
					className="[h-30px] w-[30px]"
				/>
			</button>
		</div>
	);
};

export default ProjectButton;
