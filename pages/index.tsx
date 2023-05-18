import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import supabase from "supabase.js";

import Navbar from "@/components/design/Navbar";

import SmallCarousel from "@/components/page/SmallCarousel";
import Carousel from "@/components/page/Carousel";
import FeaturedProjects from "@/components/page/FeaturedProjects";
import OtherProjects from "@/components/page/OtherProjects";
import Decoration from "@/components/design/Decoration";
import Experience from "@/components/page/Experience";

import IntroAnimation from "@/components/design/IntroAnimation";
import { useState } from "react";
import Gallery from "@/components/design/Gallery";

export type Project = {
	id: string;
	name: string;
	description: string;
	technologies: string;
	imagePath: string;
	visitUrl: string;
	githubUrl: string;
	featured: boolean;
};

export const getServerSideProps = async () => {
	const { data: projects, error } = await supabase.from("Projects").select("*");
	const { data: images, error: imagesError } = await supabase.storage
		.from("projectImages")
		.list("images");

	if (error) {
		console.error(error);
		return {
			notFound: true,
		};
	}

	return {
		props: {
			projects,
			images,
		},
	};
};

const Home = ({ projects, images }: { projects: Project[]; images: any[] }) => {
	//The first time the page loads, the intro animation plays, and then the page is loaded.

	//This first state exists to prevent the page from loading before the intro animation is finished.
	//The page with content is in display:hidden until the intro animation is finished.
	const [loaded, setLoaded] = useState(false);

	//This second div existis to play the fadeIn animation of the elments once display:block is applied
	//to the content page because if this is triggered at the same time as the intro
	//animation, the fadeIn animation is not played.
	const [loadPage, setLoadPage] = useState(false);

	//Every element that is inside the <main> tag and has an animation, MUST have it's animation
	//triggered with loadPage, not loaded, because loaded is triggered before the fadeIn animation.
	const loadIn = () => {
		setLoaded(true);
		setTimeout(() => {
			setLoadPage(true);
		}, 500);
	};

	return (
		<>
			<Head>
				<title>Matias Baeza Graf</title>
				<meta
					name="Matias Baeza Graf"
					content="Personal Site, by Matias Baeza Graf"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div
				className={`${
					loaded ? "hidden" : "flex"
				} flex-col justify-center items-center w-screen h-screen bg-[#010010] z-50`}
			>
				<IntroAnimation onStopPlaying={loadIn} />
			</div>

			<div
				id="particles-js"
				className={`fixed transform duration-[500ms] ${
					loaded ? "opacity-1" : "opacity-0"
				}`}
			></div>

			<Script src="/scripts/particles.js"></Script>
			<Script src="/scripts/app.js"></Script>

			{/* Fixed elements */}
			<Navbar
				className={`transform duration-[500ms] ${
					loaded ? "opacity-100" : "opacity-0 -translate-y-[50px]"
				}`}
			/>
			<Decoration
				className={`transform duration-[500ms] ${
					loaded ? "opacity-100" : "opacity-0 translate-x-[50px]"
				}`}
			/>

			<a
				href="mailto:matiasbaezagraf@gmail.com"
				className="hidden tablet:block"
			>
				<Image
					src="/icons/EmailIcon.png"
					alt="Logo"
					width={48}
					height={48}
					className={`transform duration-[200ms]  fixed bottom-0 left-0 h-[48px] w-[48px] mx-[25px] mb-[15px] z-20
						hover:-translate-y-[5px] hover:scale-110
						${loaded ? "opacity-100" : "opacity-0 scale-75"}`}
				/>
			</a>
			{/* Scrollable section */}
			<main className={`${loaded ? "block" : "hidden"} bg-[#010010] z-20`}>
				{/* ------------------------------------------------------------- Home ------------------------------------------------------------- */}
				<div
					id="home"
					className="h-screen flex flex-col justify-center snap-start 
					px-[10px]
					tablet:px-[100px]
					laptop:px-[25vw]"
				>
					{/* This invisible div exists to center the content. It balances the footer mt-auto with mb-auto */}
					<div className="mb-auto" />
					<h4
						className={`font-primary-medium text-[20px] text-gradient transform duration-[400ms] ${
							loadPage ? "opacity-100" : "opacity-0 -translate-y-[10px]"
						}`}
					>
						Welcome! My name is
					</h4>
					<h1
						className={`font-primary-bold leading-none text-[#DBDBDB]  mt-[15px] text-[40px] tablet:text-[60px] 
						transform delay-[200ms] duration-[400ms] ${
							loadPage ? "opacity-100" : "opacity-0 -translate-y-[10px]"
						}`}
					>
						Matias Baeza Graf
					</h1>
					<h1
						className={`font-primary-bold leading-none text-[#838383]  mt-[5px] text-[40px] tablet:text-[60px]
						transform delay-[400ms] duration-[400ms] ${
							loadPage ? "opacity-100" : "opacity-0 -translate-y-[10px]"
						}`}
					>
						Software Engineer
					</h1>
					<p
						className={`font-primary-medium text-[#838383] text-[17px] leading-[30px] mt-[20px] laptop:w-2/3
						transform delay-[400ms] duration-[400ms] ${
							loadPage ? "opacity-100" : "opacity-0 -translate-y-[10px]"
						}`}
					>
						Hello there! I’m a Software Engineer born, raised and based in
						Argentina. I love software development and I’m always willing to
						learn new ways to do so. Currently developing solutions with{" "}
						<a target="_blank" href="https://www.lightningteam.co/">
							<span className="text-gradient">Lightning Team.</span>
						</a>
					</p>
					<div
						className={`bg-main-gradient p-[2px] rounded-[3px] w-[200px] h-[64px] mt-[30px]
						transform delay-[600ms] duration-[400ms] ${
							loadPage ? "opacity-100 " : " opacity-0 -translate-y-[10px]"
						}`}
					>
						<a href="CV.pdf" download className="z-20">
							<button
								className="transform duration-[200ms] bg-[#010010] w-full h-full 
								hover:bg-black/80 
								"
							>
								<h1 className="font-primary-medium text-[15px] text-gradient">
									Check out my resume!
								</h1>
							</button>
						</a>
					</div>
					<div className="flex flex-row justify-center mb-[30px] mt-auto">
						<a
							className="z-20 laptop:hidden"
							target="_blank"
							href="https://github.com/MatiasBaezaGraf"
						>
							<Image
								src="/icons/GitHubIcon.png"
								alt="Logo"
								width={25}
								height={25}
								className="object-contain [h-25px] w-[25px] mx-[14px]"
							/>
						</a>
						<a
							className="z-20 laptop:hidden"
							target="_blank"
							href="https://ig.me/m/matibaezagraf"
						>
							<Image
								src="/icons/InstagramIcon.png"
								alt="Logo"
								width={25}
								height={25}
								className="object-contain [h-25px] w-[25px] mx-[14px]"
							/>
						</a>
						<a
							className="z-20 laptop:hidden"
							target="_blank"
							href="https://twitter.com/matibaezagraf"
						>
							<Image
								src="/icons/TwitterIcon.png"
								alt="Logo"
								width={25}
								height={25}
								className="object-contain [h-25px] w-[25px] mx-[14px]"
							/>
						</a>

						<a
							className="z-20 laptop:hidden"
							target="_blank"
							href="https://www.linkedin.com/in/matias-baeza-graf-28781a224"
						>
							<Image
								src="/icons/LinkedInIcon.png"
								alt="Logo"
								width={25}
								height={25}
								className="object-contain [h-25px] w-[25px] mx-[14px]"
							/>
						</a>
					</div>
				</div>
				{/* ------------------------------------------------------------- About ------------------------------------------------------------- */}
				{/* The whole page is inside the Carousel component because the carousel */}
				{/* covers the entire screen */}
				<div id="about">
					<Carousel />
				</div>
				{/* ------------------------------------------------------------- Experience ------------------------------------------------------------- */}

				<div id="experience" className="h-screen">
					<h1
						className="font-primary-bold text-[#DEDEDE] 
						px-[12px] text-[36px] pt-[90px] pb-[50px] 
						tablet:px-[100px] tablet:text-[48px]
						laptop:px-[25vw] laptop:text-[36px] laptop:pt-[140px] laptop:pb-[70px]
					"
					>
						My Experience
					</h1>
					{/* This carousel uses the same logic as the prior one, but it takes a small part of the screen. */}
					<SmallCarousel />
					<Experience />
				</div>

				{/* ------------------------------------------------------------- Featured Projects ------------------------------------------------------------- */}
				<div
					id="work"
					className="
					px-[12px] 
					tablet:px-[100px]
					laptop:px-[20vw]"
				>
					<h1
						className="font-primary-bold text-[#DEDEDE] pt-[90px] pb-[30px]
						text-[36px]
						tablet:text-[48px]
						laptop:text-[36px]
					"
					>
						Highlighted Projects
					</h1>
					<FeaturedProjects projects={projects} images={images} />
				</div>

				{/* ------------------------------------------------------------- Other Projects ------------------------------------------------------------- */}
				<div
					className="
					px-[12px] 
					tablet:px-[80px]
					laptop:px-[20vw]"
				>
					<h1
						className="font-primary-bold text-[#DEDEDE] pt-[80px] pb-[30px]
						text-[36px]
						tablet:text-[48px]
						laptop:text-[36px]
					"
					>
						Other Projects
					</h1>
					<OtherProjects projects={projects} />
				</div>
				{/* ------------------------------------------------------------- Contact ------------------------------------------------------------- */}
				<div
					id="contact"
					className="h-screen flex flex-col justify-between items-center py-[15px] 
					px-[15px]
					tablet:px-[100px]"
				>
					<div
						className="flex flex-col items-center 
						mt-[150px]
						desktop:mt-[220px]"
					>
						<h1
							className="font-primary-bold text-[#DEDEDE] pt-[2vh] pb-[30px]
							text-[40px]
							tablet:text-[56px]
							laptop:text-[45px]
							desktop:text-[56px]"
						>
							Let’s Get In Touch!
						</h1>
						<p className="font-primary-regular text-[17px] leading-[30px] text-[#838383] text-center pb-[20px]">
							Tell me what you have in your mind! I always have time for a new
							project, idea or simply to chat.
						</p>
						<div
							className="transform duration-[200ms] bg-main-gradient p-[2px] rounded-[3px] w-[220px] h-[76px] mt-[20px]
							hover:-translate-y-[5px]"
						>
							<a href="mailto:matiasbaezagraf@gmail.com">
								<button
									className="transform duration-[200ms] bg-[#010010] w-full h-full
									hover:bg-black/80"
								>
									<h1 className="font-primary-medium text-[22px] text-gradient">
										Let’s Talk!
									</h1>
								</button>
							</a>
						</div>
					</div>
					<h5
						className="font-primary-regular text-[#838383]
					text-[16px]
					laptop:text-[14px]"
					>
						Developed by Matias Baeza Graf | 2023
					</h5>
				</div>
				<Gallery />
			</main>
		</>
	);
};

export default Home;
