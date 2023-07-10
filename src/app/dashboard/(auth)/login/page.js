"use client"

import { signIn, useSession } from 'next-auth/react';
import React,{useState} from 'react';
import styles from "./page.module.scss";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Login = () => {
    const [err, setErr] = useState("");

    const session = useSession();
    const router = useRouter();

    if (session.status === "loading") {
        return <p>loading</p>
    }
    if (session.status === "authenticated") {
        router?.push("/dashboard")
    }

    const handleSubmit =async (e)=>{
        e.preventDefault();

        const email = e.target[0].value;
        const password = e.target[1].value;

        signIn("credentials", {email, password})
    }
    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='email' required />
                <input type="text" placeholder='password' required />
                <button type='submit'>Login</button>
            </form>
            {err !== "" && err.message}
            <small>
                Don't have an account? <Link href="/dashboard/register"> Register</Link>
            </small>
            <button onClick={()=> signIn("google")}>Login with Google</button>
        </div>
    );
};

export default Login;