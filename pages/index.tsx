import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import FeaturedProjects from "@/components/FeaturedProjects";
import Head from "next/head";
import Image from "next/image";

import supabase from "supabase.js";
import SmallCarousel from "@/components/SmallCarousel";

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

export const getStaticProps = async () => {
	const { data: projects, error } = await supabase.from("Projects").select("*");

	if (error) {
		console.error(error);
		return {
			notFound: true,
		};
	}

	return {
		props: {
			projects,
		},
	};
};

const Home = ({ projects }: { projects: Project[] }) => {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<main className="bg-[#010010]">
				{/* ------------------------------------------------------------- Home ------------------------------------------------------------- */}
				<div className="h-screen flex flex-col justify-center px-[10px]">
					{/* This invisible div exists to center the content. It balances the footer mt-auto with mb-auto */}
					<div className="mb-auto" />
					<h4 className="font-primary-medium text-[20px] text-gradient">
						Welcome! My name is
					</h4>
					<h1 className="font-primary-bold leading-none text-[#DBDBDB] text-[40px] mt-[15px]">
						Matias Baeza Graf
					</h1>
					<h1 className="font-primary-bold leading-none text-[#838383] text-[40px] mt-[5px]">
						Software Engineer
					</h1>
					<p className="font-primary-medium text-[#838383] text-[17px] mt-[20px]">
						Hello there! I’m a Software Engineer born, raised and based in
						Argentina. I love software development and I’m always willing to
						learn new ways to do so. Currently developing solutions with{" "}
						<span className="text-gradient">Lightning Team.</span>
					</p>
					<div className="bg-main-gradient p-[2px] rounded-[3px] w-[200px] h-[64px] mt-[20px]">
						<button className="bg-[#010010] w-full h-full">
							<h1 className="font-primary-medium text-[15px] text-gradient">
								Check out my resume!
							</h1>
						</button>
					</div>
					<div className="flex flex-row justify-center mb-[30px] mt-auto">
						<Image
							src="/icons/GitHubIcon.png"
							alt="Logo"
							width={25}
							height={25}
							className="object-contain [h-25px] w-[25px] mx-[14px]"
						/>
						<Image
							src="/icons/InstagramIcon.png"
							alt="Logo"
							width={25}
							height={25}
							className="object-contain [h-25px] w-[25px] mx-[14px]"
						/>
						<Image
							src="/icons/TwitterIcon.png"
							alt="Logo"
							width={25}
							height={25}
							className="object-contain [h-25px] w-[25px] mx-[14px]"
						/>
						<Image
							src="/icons/LinkedInIcon.png"
							alt="Logo"
							width={25}
							height={25}
							className="object-contain [h-25px] w-[25px] mx-[14px]"
						/>
					</div>
				</div>
				{/* ------------------------------------------------------------- About ------------------------------------------------------------- */}
				{/* The whole page is inside the Carousel component because the carousel */}
				{/* covers the entire screen */}
				<Carousel />
				{/* ------------------------------------------------------------- Experience ------------------------------------------------------------- */}

				<div className="h-screen">
					<h1 className="font-primary-bold text-[36px] text-[#DEDEDE] pt-[50px] pb-[50px] px-[12px]">
						My Experience
					</h1>
					{/* This carousel uses the same logic as the prior one, but it takes a small part of the screen. */}
					<SmallCarousel />
				</div>

				{/* ------------------------------------------------------------- Featured Projects ------------------------------------------------------------- */}
				<div className="px-[12px]">
					<h1 className="font-primary-bold text-[36px] text-[#DEDEDE] pt-[50px] pb-[50px]">
						Featured Projects
					</h1>
					<FeaturedProjects projects={projects} />
				</div>
			</main>
		</>
	);
};

export default Home;
