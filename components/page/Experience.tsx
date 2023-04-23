import { useState } from "react";

import Image from "next/image";

const Experience = () => {
	const [selectedExperience, setSelectedExperience] = useState(0);

	return (
		<div className="hidden laptop:flex flex-row h-[400px] w-full px-[22vw]">
			{/* Experience Selector */}
			<div className="flex flex-col border-r-[1px] border-[#838383] h-full w-2/5">
				<div className="flex flex-row">
					<Image
						src="/icons/Bullet.png"
						alt="Bullet"
						width={20}
						height={20}
						className={`object-contain [h-20px] w-[20px] mx-[14px] ${
							selectedExperience == 0 ? "opacity-100" : "opacity-0"
						}`}
					/>
					<button
						onClick={() => setSelectedExperience(0)}
						className={`py-[15px] pl-[20px] text-left w-full ${
							selectedExperience == 0 && "bg-[#D9D9D9]/20"
						}`}
					>
						<h1
							className={`font-primary-medium text-[17px] ${
								selectedExperience == 0 ? "text-gradient " : "text-[#838383]"
							}`}
						>
							Lightning Team
						</h1>
					</button>
				</div>
				<div className="flex flex-row">
					<Image
						src="/icons/Bullet.png"
						alt="Bullet"
						width={20}
						height={20}
						className={`object-contain [h-20px] w-[20px] mx-[14px] ${
							selectedExperience == 1 ? "opacity-100" : "opacity-0"
						}`}
					/>
					<button
						onClick={() => setSelectedExperience(1)}
						className={`py-[15px] pl-[20px] text-left w-full ${
							selectedExperience == 1 && "bg-[#D9D9D9]/20"
						}`}
					>
						<h1
							className={`font-primary-medium text-[17px] ${
								selectedExperience == 1 ? "text-gradient" : "text-[#838383]"
							}`}
						>
							Universidad Advenitsta del Plata
						</h1>
					</button>
				</div>
				<div className="flex flex-row">
					<Image
						src="/icons/Bullet.png"
						alt="Bullet"
						width={20}
						height={20}
						className={`object-contain [h-20px] w-[20px] mx-[14px] ${
							selectedExperience == 2 ? "opacity-100" : "opacity-0"
						}`}
					/>
					<button
						onClick={() => setSelectedExperience(2)}
						className={`py-[15px] pl-[20px] text-left w-full ${
							selectedExperience == 2 && "bg-[#D9D9D9]/20"
						}`}
					>
						<h1
							className={`font-primary-medium text-[17px] ${
								selectedExperience == 2 ? "text-gradient" : "text-[#838383]"
							}`}
						>
							Freelance
						</h1>
					</button>
				</div>
			</div>
			{/* Experience Content */}
			<div className="relative h-full w-3/5">
				<div
					className={`absolute flex flex-col py-[10px] px-[40px] ${
						selectedExperience == 0 ? "opacity-100" : "opacity-0"
					}`}
				>
					<h1 className="text-[23px]">
						<span className="font-primary-semi-bold text-[#DEDEDE]">
							Software Engineer
						</span>{" "}
						<span className="font-primary-regular text-[#838383]">and</span>{" "}
						<span className="font-primary-semi-bold text-[#DEDEDE]">
							Developer
						</span>{" "}
					</h1>
					<h5 className="font-primary-reguar text-[13px] text-[#838383]">
						Jan 2023 - Present
					</h5>
					<div className="mt-[20px]">
						<p className="font-primary-medium text-[#838383] text-[17px] leading-[30px] pb-[12px] flex flex-row items-start">
							<Image
								className="h-[10px] w-[10px] mr-[5px] mt-[10px]"
								src="/icons/Bullet.png"
								alt="Velo by Wix"
								width={10}
								height={10}
							/>
							Develop various integrations of third party services such as AWS
							and Redsys, not supported by Velo with Wix Websites.
						</p>
						<p className="font-primary-medium text-[#838383] text-[17px] leading-[30px] pb-[12px] flex flex-row items-start">
							<Image
								className="h-[10px] w-[10px] mr-[5px] mt-[10px]"
								src="/icons/Bullet.png"
								alt="Velo by Wix"
								width={10}
								height={10}
							/>
							Work with a team of developers to create custom Wix websites and
							apps designed for various use cases.
						</p>
						<p className="font-primary-medium text-[#838383] text-[17px] leading-[30px] pb-[12px] flex flex-row items-start">
							<Image
								className="h-[10px] w-[10px] mr-[5px] mt-[10px]"
								src="/icons/Bullet.png"
								alt="Velo by Wix"
								width={10}
								height={10}
							/>
							Develop custom solutions to satisfy a wide variety of customers
							with a multi-disciplinary team.
						</p>
					</div>
				</div>
				<div
					className={`absolute flex flex-col py-[10px] px-[40px] ${
						selectedExperience == 1 ? "opacity-100" : "opacity-0"
					}`}
				>
					<h1 className="text-[23px]">
						<span className="font-primary-semi-bold text-[#DEDEDE]">
							Fullstack Developer
						</span>
					</h1>
					<h5 className="font-primary-reguar text-[13px] text-[#838383] self-start">
						Apr 2022 - Apr 2023
					</h5>
					<div className="mt-[20px]">
						<p className="font-primary-medium text-[#838383] text-[17px] leading-[30px] pb-[12px] flex flex-row items-start">
							<Image
								className="h-[10px] w-[10px] mr-[5px] mt-[10px]"
								src="/icons/Bullet.png"
								alt="Velo by Wix"
								width={10}
								height={10}
							/>
							Collaborative and individual Front End and Back End development
							with Ruby on Rails.
						</p>
						<p className="font-primary-medium text-[#838383] text-[17px] leading-[30px] pb-[12px] flex flex-row items-start">
							<Image
								className="h-[10px] w-[10px] mr-[5px] mt-[10px]"
								src="/icons/Bullet.png"
								alt="Velo by Wix"
								width={10}
								height={10}
							/>
							Design of data structures and management of roles and privileges
							in PostgreSQL.
						</p>
						<p className="font-primary-medium text-[#838383] text-[17px] leading-[30px] pb-[12px] flex flex-row items-start">
							<Image
								className="h-[10px] w-[10px] mr-[5px] mt-[10px]"
								src="/icons/Bullet.png"
								alt="Velo by Wix"
								width={10}
								height={10}
							/>
							Development of new functionalities and maintenance of existing in
							the Student Portal, a web application used in a daily basis by
							hundreds of students to attend their academic and financial
							issues.
						</p>
					</div>
				</div>
				<div
					className={`absolute flex flex-col py-[10px] px-[40px] ${
						selectedExperience == 2 ? "opacity-100" : "opacity-0"
					}`}
				>
					<h1 className="text-[23px]">
						<span className="font-primary-semi-bold text-[#DEDEDE]">
							Fullstack Developer
						</span>
					</h1>
					<div className="mt-[20px]">
						<p className="font-primary-medium text-[#838383] text-[17px] leading-[30px] pb-[12px] flex flex-row items-start">
							<Image
								className="h-[10px] w-[10px] mr-[5px] mt-[10px]"
								src="/icons/Bullet.png"
								alt="Velo by Wix"
								width={10}
								height={10}
							/>
							Development of multiple web applications for different clients, or
							for the only purpose of learning new technologies.
						</p>
						<p className="font-primary-medium text-[#838383] text-[17px] leading-[30px] pb-[12px] flex flex-row items-start">
							<Image
								className="h-[10px] w-[10px] mr-[5px] mt-[10px]"
								src="/icons/Bullet.png"
								alt="Velo by Wix"
								width={10}
								height={10}
							/>
							Among those apps, I developed my two personal sites.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
