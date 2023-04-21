import Image from "next/image";

const Sidebar = (props: { open: boolean; onClose: () => void }) => {
	// This fucntion checks if the sidebar is open or not, if it is, it closes it, if it isn't, it does nothing.
	const clickedBackdrop = () => {
		if (props.open) props.onClose();
	};

	return (
		<>
			<div
				className={`tablet:hidden transform duration-[800ms] w-2/3 right-0 fixed h-screen bg-[#04021b] z-20 ${
					props.open ? "translate-x-0" : "translate-x-[700px]"
				}`}
			>
				{/* Close sidebar button svg */}
				<div className="w-full flex flex-row items-center h-[72px]">
					<button
						onClick={props.onClose}
						className="top-0 my-[20px] ml-[20px] mr-[10px]"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-[30px] w-[30px] text-stone-200 tablet:hidden"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>
				<div className="flex flex-col items-start">
					<a
						onClick={props.onClose}
						href="#about"
						className="flex flex-row justify-start items-center bg-transparent w-full pl-[20px] py-[20px] text-[#838383] font-primary-medium text-[19px] tablet:hidden"
					>
						<Image
							className="h-[10px] w-[10px] mr-[12px]"
							src="/icons/Bullet.png"
							alt="Velo by Wix"
							width={10}
							height={10}
						/>
						About Me
					</a>
					<a
						onClick={props.onClose}
						href="#experience"
						className="flex flex-row justify-start items-center bg-transparent w-full pl-[20px] py-[20px] text-[#838383] font-primary-medium text-[19px] tablet:hidden"
					>
						<Image
							className="h-[10px] w-[10px] mr-[12px]"
							src="/icons/Bullet.png"
							alt="Velo by Wix"
							width={10}
							height={10}
						/>
						Experience
					</a>
					<a
						onClick={props.onClose}
						href="#work"
						className="flex flex-row justify-start items-center bg-transparent w-full pl-[20px] py-[20px] text-[#838383] font-primary-medium text-[19px] tablet:hidden"
					>
						<Image
							className="h-[10px] w-[10px] mr-[12px]"
							src="/icons/Bullet.png"
							alt="Velo by Wix"
							width={10}
							height={10}
						/>
						Work
					</a>
					<a
						onClick={props.onClose}
						href="#contact"
						className="flex flex-row justify-start items-center bg-transparent w-full pl-[20px] py-[20px] text-[#838383] font-primary-medium text-[19px] tablet:hidden"
					>
						<Image
							className="h-[10px] w-[10px] mr-[12px]"
							src="/icons/Bullet.png"
							alt="Velo by Wix"
							width={10}
							height={10}
						/>
						Contact
					</a>
				</div>
			</div>
			{/* Backdrop Filter */}
			<div
				className={`transform duration-[800ms] fixed h-screen w-full bg-black/50 left-0 ${
					props.open ? "opacity-1 z-10" : "opacity-0 z-0"
				}`}
				onClick={clickedBackdrop}
			/>
		</>
	);
};

export default Sidebar;
