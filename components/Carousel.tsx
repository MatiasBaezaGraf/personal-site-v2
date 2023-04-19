import Image from "next/image";
import { useState } from "react";

const Carousel = () => {
	const [currentTranslationInVW, setcurrentTranslationInVW] = useState(0);

	return (
		<div className="relative h-screen overflow-hidden">
			<div
				className={`transform duration-[500ms] flex flex-row w-[300vw] h-full 
                ${currentTranslationInVW == 0 && "translate-x-0"}
                ${currentTranslationInVW == 100 && "translate-x-[-100vw]"}
                ${currentTranslationInVW == 200 && "translate-x-[-200vw]"}
                
                `}
			>
				{/* --------------------------------------------------------- Slide 1 ---------------------------------------------------------  */}
				<div className="h-screen w-screen bg-mobile-landscape bg-cover left-0">
					{/* This div below exists to give a darker background to full screen */}
					<div className="flex flex-col h-full w-full justify-start bg-[#010010]/60 px-[12px]">
						{/* This div below exists to give a darker background to the texts */}
						<div className="bg-black/20 h-min mt-[130px] p-[5px] shadow-lg">
							<p className="font-primary-regular text-[16px] text-[#838383]">
								I was born in Mar del Plata, Argentina in 1999, in a family
								where english is almost like a second language. Since my
								childhood I have been attracted to technology. I love video
								games and always wanted to know how on earth a metal box allowed
								me to play them. I have always been very curious, and always
								wanted to understand how things worked.
							</p>
							<p className="font-primary-regular text-[16px] text-[#838383] pt-[15px]">
								As I grew up, so did my interest in tech, so I decided to study
								a tech-oriented carreer. When I turned 18, I decided to
								study&nbsp;
								<span className="text-gradient">Systems Engineering</span>.
								During my student years I discovered that what fascinated me the
								most was software development, especially&nbsp;
								<span className="text-gradient">web development</span>.
							</p>
							<p className="font-primary-regular text-[16px] text-[#838383] pt-[15px]">
								On top of that, becoming an Engineer endowed me with several
								soft skills. My goal is to keep learning and growing to become a
								great professional and even better human being.
							</p>
							<p className="font-primary-regular text-[16px] text-[#838383] pt-[15px]">
								These technologies are the most prominent in my tech stack:
							</p>

							{/* Here goes a grid of 3x3 with my skills */}

							<div className="grid grid-cols-3 font-primary-regular text-[14px] text-[#DEDEDE] pt-[15px]">
								<h1 className="flex flex-row items-center my-[2px]">
									<Image
										className="h-[10px] w-[10px] mr-[5px]"
										src="/icons/Bullet.png"
										alt="Velo by Wix"
										width={10}
										height={10}
									/>
									Next JS
								</h1>
								<h1 className="flex flex-row items-center my-[2px]">
									<Image
										className="h-[10px] w-[10px] mr-[5px]"
										src="/icons/Bullet.png"
										alt="Velo by Wix"
										width={10}
										height={10}
									/>
									TypeScript
								</h1>
								<h1 className="flex flex-row items-center my-[2px]">
									<Image
										className="h-[10px] w-[10px] mr-[5px]"
										src="/icons/Bullet.png"
										alt="Velo by Wix"
										width={10}
										height={10}
									/>
									Velo by Wix
								</h1>
								<h1 className="flex flex-row items-center my-[2px]">
									<Image
										className="h-[10px] w-[10px] mr-[5px]"
										src="/icons/Bullet.png"
										alt="Velo by Wix"
										width={10}
										height={10}
									/>
									React
								</h1>
								<h1 className="flex flex-row items-center my-[2px]">
									<Image
										className="h-[10px] w-[10px] mr-[5px]"
										src="/icons/Bullet.png"
										alt="Velo by Wix"
										width={10}
										height={10}
									/>
									JavaScript
								</h1>
								<h1 className="flex flex-row items-center my-[2px]">
									<Image
										className="h-[10px] w-[10px] mr-[5px]"
										src="/icons/Bullet.png"
										alt="Velo by Wix"
										width={10}
										height={10}
									/>
									PostgreSQL
								</h1>
								<h1 className="flex flex-row items-center my-[2px]">
									<Image
										className="h-[10px] w-[10px] mr-[5px]"
										src="/icons/Bullet.png"
										alt="Velo by Wix"
										width={10}
										height={10}
									/>
									Ruby on Rails
								</h1>
								<h1 className="flex flex-row items-center my-[2px]">
									<Image
										className="h-[10px] w-[10px] mr-[5px]"
										src="/icons/Bullet.png"
										alt="Velo by Wix"
										width={10}
										height={10}
									/>
									Tailwind CSS
								</h1>
								<h1 className="flex flex-row items-center my-[2px]">
									<Image
										className="h-[10px] w-[10px] mr-[5px]"
										src="/icons/Bullet.png"
										alt="Velo by Wix"
										width={10}
										height={10}
									/>
									Flutter
								</h1>
							</div>
						</div>
					</div>
				</div>
				{/* --------------------------------------------------------- Slide 2 ---------------------------------------------------------  */}
				<div className="h-screen w-screen bg-mobile-landscape2 bg-cover left-full">
					{/* This div below exists to give a darker background to full screen */}
					<div className="flex flex-col h-full w-full justify-start items-end text-right bg-[#010010]/60 px-[12px]">
						{/* This div below exists to give a darker background to the texts */}
						<div className="bg-black/20 h-min mt-[130px] p-[5px] w-5/6 shadow-lg">
							<p className="font-primary-regular text-[16px] text-[#838383] ">
								I love&nbsp;
								<span className="text-gradient">learning new technologies</span>
								, especially web related so while stuying, I began to delve into
								the subject on my own, learning various languages, frameworks,
								libraries and tools, in addition to the ones the carreer
								provided me.
							</p>
							<p className="font-primary-regular text-[16px] text-[#838383] pt-[15px] ">
								But of course, I have hobbies coming out of everything related
								to software development. In my free time I like to play
								videogames, watch movies and series, especially Star Wars.
							</p>
							<p className="font-primary-regular text-[16px] text-[#838383] pt-[15px]">
								<span className="text-gradient">Phyisical activity</span> is a
								very important part of my life. I love sports, especially soccer
								and volleyball. I also really enjoy going for a run, cycling or
								just a walk, and if I find myself in a mountainous area, I love
								hiking.
							</p>
							<p className="font-primary-regular text-[16px] text-[#838383] pt-[15px]">
								It is ironic that, as a Software Engineer and developer, I
								simply cannot sit still for long periods of time.
							</p>
						</div>
					</div>
				</div>
				{/* --------------------------------------------------------- Slide 3 ---------------------------------------------------------  */}
				<div className="h-screen w-screen bg-mobile-landscape3 bg-cover left-[200vw]">
					{/* This div below exists to give a darker background to full screen */}
					<div className="flex flex-col h-full w-full justify-start bg-[#010010]/60 px-[12px]">
						{/* This div below exists to give a darker background to the texts */}
						<div className="bg-black/20 h-min mt-[130px] p-[5px] w-5/6 shadow-lg">
							<p className="font-primary-regular text-[16px] text-[#838383]">
								Another thing I love is the trips we make with my family. My
								parents, my two brothers and I, love traveling to the Patagonia,
								where there are a lot of mountains and the most beautiful
								natural places I have ever been in my life.{" "}
							</p>
							<p className="font-primary-regular text-[16px] text-[#838383] pt-[15px]">
								We love camping, hiking, and discovering new trails, lakes or
								rivers in the middle of nowhere. We are always ready for
								adventure.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* The following absolute divs are the fixed elements */}

			{/* -----------------------------------------------------About Me Text------------------------------------------------------  */}
			<div
				className={`transform duration-[500ms] absolute flex flex-row top-0 w-screen mb-[18px] px-[10px] 
                ${currentTranslationInVW == 0 && "translate-x-0"} 
                ${currentTranslationInVW == 100 && "translate-x-[25vw]"}
                ${currentTranslationInVW == 200 && "translate-x-[50vw]"}
                `}
			>
				<h1 className="font-primary-bold text-[36px] text-[#DEDEDE] mt-[50px] ">
					About Me
				</h1>
			</div>
			{/* -----------------------------------------------------Crousel Selector------------------------------------------------------  */}
			<div className="absolute bottom-0 flex flex-row justify-center w-screen mb-[18px]">
				<button
					onClick={() => {
						setcurrentTranslationInVW(0);
					}}
					className={`rounded-full mx-[25px]  h-[15px] w-[15px] border-[2px] border-orange-600 ${
						currentTranslationInVW == 0 ? "bg-orange-500" : ""
					}`}
				/>
				<button
					onClick={() => {
						setcurrentTranslationInVW(100);
					}}
					className={`rounded-full mx-[25px] h-[15px] w-[15px] border-[2px] border-orange-600 ${
						currentTranslationInVW == 100 ? "bg-orange-500" : ""
					}`}
				/>
				<button
					onClick={() => {
						setcurrentTranslationInVW(200);
					}}
					className={`rounded-full mx-[25px] h-[15px] w-[15px] border-[2px] border-orange-600 ${
						currentTranslationInVW == 200 ? "bg-orange-500" : ""
					}`}
				/>
			</div>
		</div>
	);
};

export default Carousel;
