import { useState } from "react";

import Image from "next/image";

const Experience = () => {
	const [selectedExperience, setSelectedExperience] = useState(0);

	const changeSelectedExperience = (state: number) => {
		if (state != selectedExperience) {
			setSelectedExperience(-1);
			setTimeout(function () {
				setSelectedExperience(state);
			}, 300);
		}
	};

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
						className={`transform duration-[200ms] object-contain [h-20px] w-[20px] mx-[14px] ${
							selectedExperience == 3
								? "opacity-100"
								: "opacity-0 -translate-x-[10px]"
						}`}
					/>
					<button
						onClick={() => changeSelectedExperience(3)}
						className={`transform duration-[200ms] py-[15px] pl-[20px] text-left w-full ${
							selectedExperience == 3 && "bg-[#D9D9D9]/20"
						}`}
					>
						<h1
							className={`font-primary-medium text-[17px] ${
								selectedExperience == 3 ? "text-gradient " : "text-[#838383]"
							}`}
						>
							Xirect Software Solutions
						</h1>
					</button>
				</div>
				<div className="flex flex-row">
					<Image
						src="/icons/Bullet.png"
						alt="Bullet"
						width={20}
						height={20}
						className={`transform duration-[200ms] object-contain [h-20px] w-[20px] mx-[14px] ${
							selectedExperience == 2
								? "opacity-100"
								: "opacity-0 -translate-x-[10px]"
						}`}
					/>
					<button
						onClick={() => changeSelectedExperience(2)}
						className={`transform duration-[200ms] py-[15px] pl-[20px] text-left w-full ${
							selectedExperience == 2 && "bg-[#D9D9D9]/20"
						}`}
					>
						<h1
							className={`font-primary-medium text-[17px] ${
								selectedExperience == 2 ? "text-gradient " : "text-[#838383]"
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
						className={`transform duration-[200ms] object-contain [h-20px] w-[20px] mx-[14px] ${
							selectedExperience == 1
								? "opacity-100"
								: "opacity-0 -translate-x-[10px]"
						}`}
					/>
					<button
						onClick={() => changeSelectedExperience(1)}
						className={`transform duration-[200ms] py-[15px] pl-[20px] text-left w-full ${
							selectedExperience == 1 && "bg-[#D9D9D9]/20"
						}`}
					>
						<h1
							className={`font-primary-medium text-[17px] ${
								selectedExperience == 1 ? "text-gradient" : "text-[#838383]"
							}`}
						>
							Universidad Adventista del Plata
						</h1>
					</button>
				</div>
				<div className="flex flex-row">
					<Image
						src="/icons/Bullet.png"
						alt="Bullet"
						width={20}
						height={20}
						className={`transform duration-[200ms] object-contain [h-20px] w-[20px] mx-[14px] ${
							selectedExperience == 0
								? "opacity-100"
								: "opacity-0 -translate-x-[10px]"
						}`}
					/>
					<button
						onClick={() => changeSelectedExperience(0)}
						className={`transform duration-[200ms] py-[15px] pl-[20px] text-left w-full ${
							selectedExperience == 0 && "bg-[#D9D9D9]/20"
						}`}
					>
						<h1
							className={`font-primary-medium text-[17px] ${
								selectedExperience == 0 ? "text-gradient" : "text-[#838383]"
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
					className={`transform duration-[200ms] absolute flex flex-col py-[10px] px-[40px] ${
						selectedExperience == 3
							? "opacity-100"
							: "opacity-0 translate-x-[100px]"
					}`}
				>
					<h1 className="text-[23px]">
						<span className="font-primary-semi-bold text-[#DEDEDE]">
							Front End Developer
						</span>{" "}
					</h1>
					<h5 className="font-primary-reguar text-[13px] text-[#838383]">
						Jul 2023 -
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
							Had a leading role in the development of complex CRM and LMS
							systems from the beginning. My strongest tech is React.
						</p>
						<p className="font-primary-medium text-[#838383] text-[17px] leading-[30px] pb-[12px] flex flex-row items-start">
							<Image
								className="h-[10px] w-[10px] mr-[5px] mt-[10px]"
								src="/icons/Bullet.png"
								alt="Velo by Wix"
								width={10}
								height={10}
							/>
							Worked in support roles on several of the company's projects and
							teams, always with Javascript frameworks such as React and Vue.
						</p>
					</div>
				</div>
				<div
					className={`transform duration-[200ms] absolute flex flex-col py-[10px] px-[40px] ${
						selectedExperience == 2
							? "opacity-100"
							: "opacity-0 translate-x-[100px]"
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
						Jan 2023 - Dec 2024
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
							Develop various integrations of third party services such as AWS,
							Redsys and Payphone, not supported natively by Wix Websites.
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
							Build solutions that heavily rely on web services for seamless
							integration and data exchange between different applications.
						</p>
					</div>
				</div>
				<div
					className={`transform duration-[200ms] absolute flex flex-col py-[10px] px-[40px] ${
						selectedExperience == 1
							? "opacity-100"
							: "opacity-0 translate-x-[100px]"
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
					className={`transform duration-[200ms] absolute flex flex-col py-[10px] px-[40px] ${
						selectedExperience == 0
							? "opacity-100 "
							: "opacity-0 translate-x-[100px]"
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
