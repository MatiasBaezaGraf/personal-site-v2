import Image from "next/image";

const Navbar = () => {
	return (
		<nav className="flex flex-row px-[25px] items-center justify-between w-full h-[100px] fixed top-0 z-20">
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
