import Image from "next/image";
const Decoration = () => {
	return (
		<div className="hidden laptop:flex flex-col justify-center items-center right-0 h-screen fixed z-20 px-[35px]">
			<div className="w-[2px] bg-[#838383] h-screen rounded-b-full mb-[20px]"></div>
			<a
				className="z-20 my-[20px]"
				target="_blank"
				href="https://github.com/MatiasBaezaGraf"
			>
				<Image
					src="/icons/GitHubIcon.png"
					alt="Logo"
					width={20}
					height={20}
					className="object-contain h-[20px] w-[20px] mx-[14px]"
				/>
			</a>
			<a
				className="z-20 my-[20px]"
				target="_blank"
				href="https://ig.me/m/matibaezagraf"
			>
				<Image
					src="/icons/InstagramIcon.png"
					alt="Logo"
					width={20}
					height={20}
					className="object-contain h-[20px] w-[20px] mx-[14px]"
				/>
			</a>
			<a
				className="z-20 my-[20px]"
				target="_blank"
				href="https://twitter.com/matibaezagraf"
			>
				<Image
					src="/icons/TwitterIcon.png"
					alt="Logo"
					width={20}
					height={20}
					className="object-contain h-[20px] w-[20px] mx-[14px]"
				/>
			</a>

			<a
				className="z-20 my-[20px]"
				target="_blank"
				href="https://www.linkedin.com/in/matias-baeza-graf-28781a224"
			>
				<Image
					src="/icons/LinkedInIcon.png"
					alt="Logo"
					width={20}
					height={20}
					className="object-contain h-[20px] w-[20px] mx-[14px]"
				/>
			</a>
			<div className="w-[3px] bg-[#838383] h-screen rounded-t-full mt-[20px]" />
		</div>
	);
};

export default Decoration;
