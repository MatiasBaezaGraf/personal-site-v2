import { useState } from "react";

const SmallCarousel = () => {
	const [currentTranslationInVW, setcurrentTranslationInVW] = useState(0);

	return (
		<div className="relative overflow-hidden">
			<div
				className={`transform duration-[500ms] flex flex-row w-[300vw]
                ${currentTranslationInVW == 0 && "translate-x-0"}
                ${currentTranslationInVW == 100 && "translate-x-[-100vw]"}
                ${currentTranslationInVW == 200 && "translate-x-[-200vw]"}
                
                `}
			>
				{/* -------------------------------- Slide 1 - Lightning Team -------------------------------- */}
				<div className="w-screen bg-cover left-0 px-[12px]">
					<h1 className="text-[23px]">
						<span className="font-primary-bold text-[#DEDEDE]">
							Software Engineer
						</span>
						&nbsp;
						<span className="font-primary-regular text-[#838383]">
							and
						</span>{" "}
						<span className="font-primary-bold text-[#DEDEDE]">Developer</span>{" "}
						<span className="font-primary-regular text-[#838383]">@</span>{" "}
						<span className="font-primary-bold text-gradient">
							Lightning Team
						</span>{" "}
					</h1>
				</div>
				{/* -------------------------------- Slide 2 - Universidad Adventista del Plata -------------------------------- */}
				<div className="w-screen bg-cover left-full px-[12px]">
					<h1>2</h1>
				</div>
				{/* -------------------------------- Slide 3 - Freelance -------------------------------- */}
				<div className="w-screen bg-cover left-[200vw] px-[12px]">
					<h1>3</h1>
				</div>
			</div>
		</div>
	);
};

export default SmallCarousel;
