import Image from "next/image";

const Gallery = () => {
	return (
		<section className="flex w-screen h-screen">
			<Image
				className="w-[0px] grow object-cover opacity-[0.8] transform duration-[300ms] ease-in-out hover:cursor-crosshair hover:w-[800px] hover:opacity-100"
				src="/images/Landscape.jpg"
				alt="placeholder"
				width={1200}
				height={1200}
			/>
			<Image
				className="w-[0px] grow object-cover opacity-[0.8] transform duration-[300ms] ease-in-out hover:cursor-crosshair hover:w-[800px] hover:opacity-100"
				src="/images/Landscape2.jpg"
				alt="placeholder"
				width={1200}
				height={1200}
			/>
			<Image
				className="w-[0px] grow object-cover opacity-[0.8] transform duration-[300ms] ease-in-out hover:cursor-crosshair hover:w-[800px] hover:opacity-100"
				src="/images/Landscape3.jpg"
				alt="placeholder"
				width={1200}
				height={1200}
			/>
			<Image
				className="w-[0px] grow object-cover opacity-[0.8] transform duration-[300ms] ease-in-out hover:cursor-crosshair hover:w-[800px] hover:opacity-100"
				src="/images/Landscape.jpg"
				alt="placeholder"
				width={1200}
				height={1200}
			/>
			<Image
				className="w-[0px] grow object-cover opacity-[0.8] transform duration-[300ms] ease-in-out hover:cursor-crosshair hover:w-[800px] hover:opacity-100"
				src="/images/Landscape2.jpg"
				alt="placeholder"
				width={1200}
				height={1200}
			/>
		</section>
	);
};

export default Gallery;
