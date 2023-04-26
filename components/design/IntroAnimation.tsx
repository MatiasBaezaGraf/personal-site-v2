import { useState, useEffect } from "react";

const IntroAnimation = ({
	className,
	onStopPlaying,
}: {
	className?: string;
	onStopPlaying: () => void;
}) => {
	const [isPlaying, setIsPlaying] = useState(true);

	useEffect(() => {
		setTimeout(function () {
			setIsPlaying(false);
		}, 3000);
		setTimeout(function () {
			onStopPlaying();
		}, 3300);
	}, []);

	return (
		<div
			className={`transform duration-[300ms] ${
				!isPlaying && "scale-150 opacity-0"
			}`}
		>
			<svg
				className="w-[130px]"
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				width="375"
				zoomAndPan="magnify"
				viewBox="0 0 375 374.999991"
				height="375"
				preserveAspectRatio="xMidYMid meet"
				version="1.0"
			>
				<defs>
					<linearGradient
						x1="3.171962"
						gradientTransform="matrix(1.701687, 0, 0, 1.701031, 15.08161, 57.916349)"
						y1="156.737035"
						x2="208.342315"
						gradientUnits="userSpaceOnUse"
						y2="7.713067"
						id="583bcb82ee"
					>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 32.899475%, 0%)"
							offset="0"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 32.899475%, 0%)"
							offset="0.25"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 32.997131%, 0%)"
							offset="0.353122"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 33.094788%, 0%)"
							offset="0.375"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 33.251953%, 0%)"
							offset="0.382812"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 33.56781%, 0%)"
							offset="0.390625"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 33.882141%, 0%)"
							offset="0.398438"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 34.196472%, 0%)"
							offset="0.40625"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 34.510803%, 0%)"
							offset="0.414062"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 34.825134%, 0%)"
							offset="0.421875"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 35.139465%, 0%)"
							offset="0.429688"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 35.453796%, 0%)"
							offset="0.4375"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 35.768127%, 0%)"
							offset="0.445313"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 36.082458%, 0%)"
							offset="0.453125"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 36.39679%, 0%)"
							offset="0.460938"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 36.711121%, 0%)"
							offset="0.46875"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 37.025452%, 0%)"
							offset="0.476563"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 37.339783%, 0%)"
							offset="0.484375"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 37.654114%, 0%)"
							offset="0.492188"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 37.968445%, 0%)"
							offset="0.5"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 38.282776%, 0%)"
							offset="0.507813"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 38.597107%, 0%)"
							offset="0.515625"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 38.911438%, 0%)"
							offset="0.523438"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 39.225769%, 0%)"
							offset="0.53125"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 39.5401%, 0%)"
							offset="0.539062"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 39.854431%, 0%)"
							offset="0.546875"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 40.170288%, 0%)"
							offset="0.554688"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 40.484619%, 0%)"
							offset="0.5625"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 40.79895%, 0%)"
							offset="0.570312"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 41.113281%, 0%)"
							offset="0.578125"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 41.427612%, 0%)"
							offset="0.585938"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 41.741943%, 0%)"
							offset="0.59375"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 42.056274%, 0%)"
							offset="0.601562"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 42.370605%, 0%)"
							offset="0.609375"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 42.684937%, 0%)"
							offset="0.617188"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 42.999268%, 0%)"
							offset="0.625"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 43.313599%, 0%)"
							offset="0.632813"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 43.62793%, 0%)"
							offset="0.640625"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 43.942261%, 0%)"
							offset="0.646878"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 44.099426%, 0%)"
							offset="0.648438"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 44.256592%, 0%)"
							offset="0.65625"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 44.570923%, 0%)"
							offset="0.664063"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 44.885254%, 0%)"
							offset="0.671875"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 45.199585%, 0%)"
							offset="0.679688"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 45.513916%, 0%)"
							offset="0.6875"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 45.828247%, 0%)"
							offset="0.695312"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 46.142578%, 0%)"
							offset="0.703125"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 46.456909%, 0%)"
							offset="0.710938"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 46.772766%, 0%)"
							offset="0.71875"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 47.087097%, 0%)"
							offset="0.726562"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 47.401428%, 0%)"
							offset="0.734375"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 47.715759%, 0%)"
							offset="0.742188"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 48.03009%, 0%)"
							offset="0.75"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 48.344421%, 0%)"
							offset="0.757813"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 48.658752%, 0%)"
							offset="0.765625"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 48.973083%, 0%)"
							offset="0.773438"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 49.287415%, 0%)"
							offset="0.78125"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 49.601746%, 0%)"
							offset="0.789063"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 49.916077%, 0%)"
							offset="0.796875"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 50.230408%, 0%)"
							offset="0.804688"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 50.544739%, 0%)"
							offset="0.8125"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 50.85907%, 0%)"
							offset="0.820313"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 51.173401%, 0%)"
							offset="0.828125"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 51.487732%, 0%)"
							offset="0.835938"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 51.802063%, 0%)"
							offset="0.84375"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 52.116394%, 0%)"
							offset="0.851562"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 52.430725%, 0%)"
							offset="0.859375"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 52.745056%, 0%)"
							offset="0.867188"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 53.059387%, 0%)"
							offset="0.875"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 53.375244%, 0%)"
							offset="0.882813"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 53.689575%, 0%)"
							offset="0.890625"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 54.003906%, 0%)"
							offset="0.898438"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 54.318237%, 0%)"
							offset="0.90625"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 54.632568%, 0%)"
							offset="0.914063"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 54.946899%, 0%)"
							offset="0.921875"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 55.26123%, 0%)"
							offset="0.929688"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 55.575562%, 0%)"
							offset="0.9375"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 55.889893%, 0%)"
							offset="0.945313"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 56.204224%, 0%)"
							offset="0.953125"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 56.518555%, 0%)"
							offset="0.960938"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 56.832886%, 0%)"
							offset="0.96875"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 57.147217%, 0%)"
							offset="0.976562"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 57.461548%, 0%)"
							offset="0.984375"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 57.775879%, 0%)"
							offset="0.992188"
						></stop>
						<stop
							stop-opacity="1"
							stop-color="rgb(100%, 58.09021%, 0%)"
							offset="1"
						></stop>
					</linearGradient>
				</defs>

				<g fill="none">
					<path
						stroke-width="4"
						stroke="url(#583bcb82ee)"
						fill="rgb(100%, 50.518555%, 0%)"
						d="M 283.351562 87.71875 L 283.609375 125.378906 L 298.683594 113.863281 L 298.683594 57.917969 L 187.496094 137.015625 L 77.023438 57.917969 L 77.023438 301.777344 L 30.398438 301.777344 L 30.398438 119.542969 L 62.730469 142.96875 L 63 124.257812 L 15.082031 89.285156 L 15.082031 317.101562 L 92.371094 317.101562 L 92.371094 87.785156 L 187.460938 155.929688 Z"
						className="svg-elem-1"
					></path>
					<path
						stroke-width="4"
						stroke="url(#583bcb82ee)"
						fill="rgb(100%, 40.170288%, 0%)"
						d="M 187.53125 212.421875 L 107.550781 154.175781 L 107.550781 172.429688 L 187.34375 231.320312 L 344.664062 119.289062 L 344.664062 301.777344 L 298.683594 301.777344 L 298.683594 171.765625 L 283.371094 183.144531 L 283.371094 317.101562 L 360.097656 317.101562 L 360.097656 89.539062 Z M 187.53125 212.421875 "
						className="svg-elem-2"
					></path>
				</g>
			</svg>
		</div>
	);
};

export default IntroAnimation;
