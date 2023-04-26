import Auth from "@/components/page/Auth";
import { Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import supabase from "supabase.js";

const Admin = () => {
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
				<div>
					<h1>Admin</h1>
					<button onClick={signOut}>Sign out</button>
				</div>
			) : (
				<Auth />
			)}
		</div>
	);
};

export default Admin;
