import { FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import supabase from "supabase.js";

const Auth = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const { data, error } = await supabase.auth.signInWithPassword({
			email: email,
			password: password,
		});

		if (error) {
			alert(error.message);
		}
	};

	return (
		<div className="w-screen h-screen bg-[#010010] flex flex-col justify-start items-center">
			<div className="absolute top-0 left-0 p-[30px]">
				<Link href="/">
					<h1
						className="font-primary-medium text-[18px] text-[#DEDEDE] 
                        transform duration-[200ms] hover:-translate-y-[5px] hover:text-gradient"
					>
						Home
					</h1>
				</Link>
			</div>
			<div className="flex flex-col justify-start items-center border-[2px] border-[#838383] mt-[13vh] p-[50px]">
				<div className=" mb-[30px]">
					<Image src="/icons/Logo.png" alt="Logo" width={100} height={100} />
				</div>
				<form className="w-full" onSubmit={handleLogin}>
					<div className="flex flex-col items-center">
						<input
							className="font-primary-medium bg-transparent text-[#838383] placeholder-[#636363] text-[16px] p-[13px] mb-[20px] border-b-[2px] border-[#838383] focus:outline-none focus:border-[#FFB800]
                        w-5/6 
                        tablet:w-[350px]"
							type="email"
							placeholder="Email"
							value={email}
							required={true}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input
							className="font-primary-medium bg-transparent text-[#838383] placeholder-[#636363] text-[16px] p-[13px] mb-[70px] border-b-[2px] border-[#838383] focus:outline-none focus:border-[#FFB800]
                        w-5/6 
                        tablet:w-[350px]"
							type="password"
							placeholder="Password"
							value={password}
							required={true}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<button className="transform duration-[200ms] bg-main-gradient px-[50px] py-[15px] rounded-md hover:scale-105">
							<h1 className="font-primary-bold text-[18px] text-black">
								Sign In
							</h1>
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Auth;
