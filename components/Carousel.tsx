import { useState } from "react";

const Carousel = () => {
	const [currentTranslationInVW, setcurrentTranslationInVW] = useState(0);

	return (
		<div className="relative h-screen overflow-hidden">
			<div
				className={`transform duration-[500ms] flex flex-row w-[300vw] h-full translate-x-[-${currentTranslationInVW}vw]`}
			>
				<div className="h-screen w-screen bg-mobile-landscape bg-cover left-0">
					<div className="h-full w-full bg-[#010010]/70"></div>
				</div>
				<div className="h-screen w-screen bg-blue-200 left-full"></div>
				<div className="h-screen w-screen bg-green-200 left-[200vw]"></div>
			</div>
		</div>
	);
};

export default Carousel;
