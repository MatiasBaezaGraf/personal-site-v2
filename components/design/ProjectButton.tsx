import Image from "next/image";

const ProjectButton = ({
	url,
	purpose,
	format,
	className,
}: {
	url: string;
	purpose: string;
	format: string;
	className?: string;
}) => {
	return (
		<div
			className={`transform duration-[200ms]  p-[2px] rounded-[3px] w-fit ${className}
			`}
		>
			<button
				onClick={() => window.open(url, "_blank")}
				className={`transform duration-[200ms] flex flex-row items-center justify-between bg-secondary-gradient text-[#DEDEDE] w-full h-full ${
					format == "large" ? "px-[15px] py-[5px]" : "p-[7px]"
				} 
				hover:bg-[#000000]/80 hover:text-[#FFFFFF] rounded`}
			>
				<h1
					className={`font-primary-medium  mr-[10px] ${
						format == "small" && "hidden"
					} text-[15px]
					laptop:text-[14px]`}
				>
					{purpose === "github" && "Source Code"}
					{purpose === "visit" && "Visit Website"}
				</h1>
				<Image
					src={`/icons/${
						purpose === "github" ? "GitHubIconWhite" : "Link"
					}.png`}
					alt="Logo"
					width={30}
					height={30}
					className="
					h-[30px] w-[30px]
					laptop:h-[25px] laptop:w-[25px]"
				/>
			</button>
		</div>
	);
};

export default ProjectButton;
