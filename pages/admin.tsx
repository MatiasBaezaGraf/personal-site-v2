import Auth from "@/components/page/Auth";
import { Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

import supabase from "supabase.js";

import { Project } from "@/pages";
import ProjectManagement from "@/components/page/ProjectManagement";
import Link from "next/link";

export const getServerSideProps = async () => {
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

const Admin = ({ projects }: { projects: Project[] }) => {
	const [session, setSession] = useState<Session | null>(null);

	useEffect(() => {
		supabase.auth.getSession().then(({ data: { session } }) => {
			setSession(session);
		});

		supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session);
		});
	}, []);

	const signOut = async () => {
		const { error } = await supabase.auth.signOut();
		if (error) alert(`Error logging out: ${error.message}`);
	};

	return (
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
					<ProjectManagement projects={projects} />
				</div>
			) : (
				<Auth />
			)}
		</div>
	);
};

export default Admin;
