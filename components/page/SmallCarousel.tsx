import { useState } from "react";
import Image from "next/image";

const SmallCarousel = () => {
	const [currentTranslationInVW, setcurrentTranslationInVW] = useState(0);

	return (
		<div className="laptop:hidden relative overflow-hidden">
			<div
				className={`transform duration-[500ms] flex flex-row w-[300vw]
                ${currentTranslationInVW == 0 && "translate-x-0"}
                ${currentTranslationInVW == 100 && "translate-x-[-100vw]"}
                ${currentTranslationInVW == 200 && "translate-x-[-200vw]"}
				${currentTranslationInVW == 300 && "translate-x-[-300vw]"}
                
                `}
			>
				{/* -------------------------------- Slide 1 - Xirect -------------------------------- */}

				<div
					className="flex flex-col w-screen bg-cover left-0 
					px-[12px]
					tablet:px-[100px]
					
				"
				>
					<h1 className="text-[23px]">
						<span className="font-primary-semi-bold text-[#DEDEDE]">
							Software Engineer
						</span>{" "}
						<span className="font-primary-regular text-[#838383]">and</span>{" "}
						<span className="font-primary-semi-bold text-[#DEDEDE]">
							Developer
						</span>{" "}
						<span className="font-primary-regular text-[#838383]">@</span>{" "}
						<span className="font-primary-semi-bold text-gradient">
							Lightning Team
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
					<button
						className="self-end"
						onClick={() => setcurrentTranslationInVW(100)}
					>
						<Image
							className="h-[30px] w-[30px] mr-[5px] mt-[10px]"
							src="/icons/Next.png"
							alt="Velo by Wix"
							width={30}
							height={30}
						/>
					</button>
				</div>
				{/* -------------------------------- Slide 2 - Lightning Team -------------------------------- */}
				<div
					className="flex flex-col w-screen bg-cover left-0 
					px-[12px]
					tablet:px-[100px]
					
				"
				>
					<h1 className="text-[23px]">
						<span className="font-primary-semi-bold text-[#DEDEDE]">
							Software Engineer
						</span>{" "}
						<span className="font-primary-regular text-[#838383]">and</span>{" "}
						<span className="font-primary-semi-bold text-[#DEDEDE]">
							Developer
						</span>{" "}
						<span className="font-primary-regular text-[#838383]">@</span>{" "}
						<span className="font-primary-semi-bold text-gradient">
							Lightning Team
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
					<button onClick={() => setcurrentTranslationInVW(0)}>
						<Image
							className="h-[30px] w-[30px] mr-[5px] mt-[10px]"
							src="/icons/Prev.png"
							alt="Velo by Wix"
							width={30}
							height={30}
						/>
					</button>
					<button
						className="self-end"
						onClick={() => setcurrentTranslationInVW(200)}
					>
						<Image
							className="h-[30px] w-[30px] mr-[5px] mt-[10px]"
							src="/icons/Next.png"
							alt="Velo by Wix"
							width={30}
							height={30}
						/>
					</button>
				</div>
				{/* -------------------------------- Slide 3 - Universidad Adventista del Plata -------------------------------- */}
				<div
					className="flex flex-col w-screen bg-cover left-full 
					px-[12px]
					tablet:px-[100px]
					"
				>
					<h1 className="text-[23px]">
						<span className="font-primary-semi-bold text-[#DEDEDE]">
							Fullstack Developer
						</span>{" "}
						<span className="font-primary-regular text-[#838383]">@</span>{" "}
						<span className="font-primary-semi-bold text-gradient">
							Universidad Adventista del Plata
						</span>{" "}
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
					<div className="flex flex-row justify-between">
						<button onClick={() => setcurrentTranslationInVW(100)}>
							<Image
								className="h-[30px] w-[30px] mr-[5px] mt-[10px]"
								src="/icons/Prev.png"
								alt="Velo by Wix"
								width={30}
								height={30}
							/>
						</button>
						<button onClick={() => setcurrentTranslationInVW(300)}>
							<Image
								className="h-[30px] w-[30px] mr-[5px] mt-[10px]"
								src="/icons/Next.png"
								alt="Velo by Wix"
								width={30}
								height={30}
							/>
						</button>
					</div>
				</div>
				{/* -------------------------------- Slide 4 - Freelance -------------------------------- */}
				<div
					className="flex flex-col w-screen bg-cover left-[200vw] 
					px-[12px]
					tablet:px-[100px]
					"
				>
					<h1 className="text-[23px]">
						<span className="font-primary-semi-bold text-[#DEDEDE]">
							Fullstack Developer
						</span>{" "}
						<span className="font-primary-semi-bold text-gradient">
							By Myself
						</span>{" "}
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
					<button onClick={() => setcurrentTranslationInVW(200)}>
						<Image
							className="h-[30px] w-[30px] mr-[5px] mt-[10px]"
							src="/icons/Prev.png"
							alt="Velo by Wix"
							width={30}
							height={30}
						/>
					</button>
				</div>
			</div>
		</div>
	);
};

export default SmallCarousel;
