import Head from "next/head";
import Image from "next/image";
import supabase from "supabase.js";

import Navbar from "@/components/design/Navbar";

import SmallCarousel from "@/components/page/SmallCarousel";
import Carousel from "@/components/page/Carousel";
import FeaturedProjects from "@/components/page/FeaturedProjects";
import OtherProjects from "@/components/page/OtherProjects";
import Decoration from "@/components/design/Decoration";
import Experience from "@/components/page/Experience";

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
				<title>Matias Baeza Graf</title>
				<meta
					name="description"
					content="Personal Site, by Matias Baeza Graf"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<Decoration />
			<a
				href="mailto:matiasbaezagraf@gmail.com"
				className="hidden tablet:block"
			>
				<Image
					src="/icons/EmailIcon.png"
					alt="Logo"
					width={48}
					height={48}
					className=" fixed bottom-0 left-0 h-[48px] w-[48px] mx-[25px] mb-[15px] z-20"
				/>
			</a>
			<main className="bg-[#010010]">
				{/* ------------------------------------------------------------- Home ------------------------------------------------------------- */}
				<div
					id="home"
					className="h-screen flex flex-col justify-center 
					px-[10px]
					tablet:px-[100px]
					laptop:px-[25vw]"
				>
					{/* This invisible div exists to center the content. It balances the footer mt-auto with mb-auto */}
					<div className="mb-auto" />
					<h4 className="font-primary-medium text-[20px] text-gradient">
						Welcome! My name is
					</h4>
					<h1 className="font-primary-bold leading-none text-[#DBDBDB]  mt-[15px] text-[40px] tablet:text-[60px]">
						Matias Baeza Graf
					</h1>
					<h1 className="font-primary-bold leading-none text-[#838383]  mt-[5px] text-[40px] tablet:text-[60px]">
						Software Engineer
					</h1>
					<p className="font-primary-medium text-[#838383] text-[17px] leading-[30px] mt-[20px] laptop:w-2/3">
						Hello there! I’m a Software Engineer born, raised and based in
						Argentina. I love software development and I’m always willing to
						learn new ways to do so. Currently developing solutions with{" "}
						<span className="text-gradient">Lightning Team.</span>
					</p>
					<div
						className="transform duration-[200ms] bg-main-gradient p-[2px] rounded-[3px] w-[200px] h-[64px] mt-[30px]
						hover:-translate-y-[5px]"
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
						Featured Projects
					</h1>
					<FeaturedProjects projects={projects} />
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
					<div className="flex flex-col items-center mt-[150px]">
						<h1
							className="font-primary-bold text-[#DEDEDE] pt-[2vh] pb-[30px]
							text-[40px]
							tablet:text-[56px]
							laptop:text-[45px]"
						>
							Let’s Get In Touch!
						</h1>
						<p className="font-primary-regular text-[17px] leading-[30px] text-[#838383] text-center pb-[20px]">
							Tell me what you have in your mind! I always have time for a new
							project, idea or simply to chat.
						</p>
						<div className="bg-main-gradient p-[2px] rounded-[3px] w-[220px] h-[76px] mt-[20px]">
							<a href="mailto:matiasbaezagraf@gmail.com">
								<button className="bg-[#010010] w-full h-full">
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
			</main>
		</>
	);
};

export default Home;
