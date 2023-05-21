import Image from "next/image";
const Decoration = ({ className }: { className?: string }) => {
	return (
		<div
			className={`${className} hidden flex-col justify-center items-center right-0 h-screen fixed z-20 
			tablet:px-[20px] tablet:flex 
			laptop:px-[35px]`}
		>
			<div className="w-[2px] bg-[#838383] h-screen rounded-b-full mb-[20px]"></div>
			<a
				className="z-20 py-[20px] rounded-full"
				target="_blank"
				href="https://github.com/MatiasBaezaGraf"
			>
				<Image
					src="/icons/GitHubIcon.png"
					alt="Logo"
					width={20}
					height={20}
					className="transform duration-[200ms]  hover:scale-110 object-contain h-[20px] w-[20px] mx-[14px]"
				/>
			</a>
			<a
				className="z-20 py-[20px] rounded-full"
				target="_blank"
				href="https://ig.me/m/matibaezagraf"
			>
				<Image
					src="/icons/InstagramIcon.png"
					alt="Logo"
					width={20}
					height={20}
					className="transform duration-[200ms]  hover:scale-110 object-contain h-[20px] w-[20px] mx-[14px]"
				/>
			</a>
			<a
				className="z-20 py-[20px] rounded-full"
				target="_blank"
				href="https://twitter.com/matibaezagraf"
			>
				<Image
					src="/icons/TwitterIcon.png"
					alt="Logo"
					width={20}
					height={20}
					className="transform duration-[200ms]  hover:scale-110 object-contain h-[20px] w-[20px] mx-[14px]"
				/>
			</a>

			<a
				className="z-20 py-[20px] rounded-full"
				target="_blank"
				href="https://www.linkedin.com/in/matias-baeza-graf-28781a224"
			>
				<Image
					src="/icons/LinkedInIcon.png"
					alt="Logo"
					width={20}
					height={20}
					className="transform duration-[200ms]  hover:scale-110 object-contain h-[20px] w-[20px] mx-[14px]"
				/>
			</a>
			<div className="w-[2px] bg-[#838383] h-screen rounded-t-full mt-[20px]" />
		</div>
	);
};

export default Decoration;
