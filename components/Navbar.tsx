import Image from "next/image";
import { useEffect, useState } from "react";

//Scroll direction hook
function useScrollDirection() {
	const [scrollDirection, setScrollDirection] = useState(null);

	useEffect(() => {
		let lastScrollY = window.pageYOffset;

		const updateScrollDirection = () => {
			const scrollY = window.pageYOffset;
			const direction: any = scrollY > lastScrollY ? "down" : "up";
			if (
				direction !== scrollDirection &&
				(scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
			) {
				setScrollDirection(direction);
			}
			lastScrollY = scrollY > 0 ? scrollY : 0;
		};
		window.addEventListener("scroll", updateScrollDirection); // add event listener
		return () => {
			window.removeEventListener("scroll", updateScrollDirection); // clean up
		};
	}, [scrollDirection]);

	return scrollDirection;
}

const Navbar = () => {
	const scrollDirection = useScrollDirection();

	return (
		<nav
			className={`transform duration-[500ms] flex flex-row px-[25px] items-center justify-between w-full h-[100px] fixed  z-20 bg-transparent backdrop-blur-sm ${
				scrollDirection == "down" ? "-top-[100px]" : "top-0"
			}`}
		>
			<Image
				src="/icons/Logo.png"
				alt="Logo"
				width={75}
				height={75}
				className="object-contain h-[75px] w-[75px]"
			/>
			<Image
				src="/icons/Menu.png"
				alt="Logo"
				width={35}
				height={35}
				className="object-contain [h-35px] w-[35px]"
			/>
		</nav>
	);
};

export default Navbar;
