import Image from "next/image";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

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
	const [open, setOpen] = useState(false);

	const toggleSidebar = () => {
		setOpen(!open);
	};

	return (
		<>
			<nav
				className={`transform duration-[500ms] flex flex-row px-[25px] items-center w-full h-[80px] fixed  z-20 bg-transparent backdrop-blur-sm ${
					scrollDirection == "down" ? "-top-[100px]" : "top-0"
				}
					justify-between
					
				`}
			>
				<Image
					src="/icons/Logo.png"
					alt="Logo"
					width={75}
					height={75}
					className="left-0 object-contain h-[75px] w-[75px]"
				/>
				<div
					className="
					hidden 
					laptop:flex flex-row"
				>
					<a className="px-[20px]" href="#about">
						<h1 className="font-primary-medium text-[18px] text-[#DEDEDE] ">
							About
						</h1>
					</a>
					<a className="px-[20px]" href="#experience">
						<h1 className="font-primary-medium text-[18px] text-[#DEDEDE] ">
							Experience
						</h1>
					</a>
					<a className="px-[20px]" href="#work">
						<h1 className="font-primary-medium text-[18px] text-[#DEDEDE] ">
							Work
						</h1>
					</a>
					<a className="px-[20px]" href="#contact">
						<h1 className="font-primary-medium text-[18px] text-[#DEDEDE] ">
							Contact
						</h1>
					</a>
				</div>
				<div className="hidden laptop:block h-[75px] w-[75px]" />
				<button className="laptop:hidden" onClick={toggleSidebar}>
					<Image
						src="/icons/Menu.png"
						alt="Logo"
						width={35}
						height={35}
						className="object-contain [h-35px] w-[35px]"
					/>
				</button>
			</nav>
			{/* --------------------------------------------- Sidebar --------------------------------------------- */}
			<Sidebar open={open} onClose={toggleSidebar} />
		</>
	);
};

export default Navbar;