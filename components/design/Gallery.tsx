import Image from "next/image";
import { Project } from "@/pages";

const Gallery = ({ projects }: { projects: Project[] }) => {
	const cdnUrl = process.env.NEXT_PUBLIC_SUPABASE_CDN_URL;
	const featuredProjects = projects.filter((project) => project.featured);
	const orderedProjects = featuredProjects.sort(
		(a, b) => parseInt(a.id) - parseInt(b.id)
	);

	return (
		<section className="flex desktop:w-[1700px] h-[500px]">
			{orderedProjects.map((project) => (
				<div
					key={project.id}
					className="relative w-[0px] h-full grow opacity-[0.8] transform duration-[300ms] ease-in-out hover:w-[800px] hover:opacity-100  hover:cursor-crosshair"
				>
					<Image
						className="object-cover w-full h-full absolute px-[10px]"
						src={cdnUrl + project.imagePath}
						alt={project.name}
						width={1200}
						height={1200}
					/>
					<h1 className="relative font-primary-medium text-[20px] text-white bg-black/90 p-[10px] my-[10px] mx-[20px] w-fit">
						{project.name}
					</h1>
				</div>
			))}
		</section>
	);
};

export default Gallery;
