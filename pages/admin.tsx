import Auth from "@/components/admin/Auth";
import { Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

import supabase from "supabase.js";

import { Project } from "@/pages";
import ProjectManagement from "@/components/admin/ProjectManagement";
import Link from "next/link";
import Head from "next/head";

const Admin = () => {
	const [session, setSession] = useState<Session | null>(null);

	const [projects, setProjects] = useState<any>([]);
	const [images, setImages] = useState<any>([]);

	const [change, setChange] = useState<boolean>(false);

	useEffect(() => {
		supabase.auth.getSession().then(({ data: { session } }) => {
			setSession(session);
		});

		supabase
			.from("Projects")
			.select("*")
			.then(({ data: projects }) => {
				setProjects(projects);
			});

		supabase.storage
			.from("projectImages")
			.list("images")
			.then(({ data: images }) => {
				setImages(images);
			});

		supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session);
		});
	}, [change]);

	const signOut = async () => {
		const { error } = await supabase.auth.signOut();
		if (error) alert(`Error logging out: ${error.message}`);
	};

	const triggerChange = () => {
		setChange(!change);
	};

	return (
		<>
			<Head>
				<title>Matias Baeza Graf | Dashboard</title>
				<meta
					name="Matias Baeza Graf"
					content="Personal Site, by Matias Baeza Graf"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>
				{session ? (
					<div className="w-screen min-h-screen bg-[#010010] p-[30px] text-center">
						<h1></h1>
						<div className="absolute top-0 left-0 p-[30px]">
							<button onClick={signOut}>
								<h1
									className="font-primary-medium text-[18px] text-[#DEDEDE] mr-[20px]
                        		transform duration-[200ms] hover:-translate-y-[5px] hover:text-gradient hover:fill-[#FF5400]"
								>
									Sign Out
								</h1>
							</button>

							<button>
								<Link href="/">
									<h1
										className="font-primary-medium text-[18px] text-[#DEDEDE] 
                        		transform duration-[200ms] hover:-translate-y-[5px] hover:text-gradient"
									>
										Home
									</h1>
								</Link>
							</button>
						</div>

						<h1 className="font-primary-bold text-[#DEDEDE] text-[30px] mt-[70px] mb-[70px]">
							Projects
						</h1>
						<ProjectManagement
							projects={projects}
							onChange={triggerChange}
							images={images}
						/>
					</div>
				) : (
					<Auth />
				)}
			</div>
		</>
	);
};

export default Admin;
