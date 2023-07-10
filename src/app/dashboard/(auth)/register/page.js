"use client"

import React, { useState } from 'react';
import styles from "./page.module.scss";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Register = () => {
    const [err, setErr] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
    
        try {
          const res = await fetch("/api/auth/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              password,
            }),
          });
          res.status === 201 && router.push("/dashboard/login?success=Account has been created");
        } catch (err) {
          setErr(err);
        }
      };
    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='username' required />
                <input type="text" placeholder='email' required />
                <input type="text" placeholder='password' required />
                <button type='submit'>Register</button>
            </form>
            {err !== "" && err.message}
            <small>
                Have an account? <Link href="/dashboard/login"> Login</Link>
            </small>
        </div>
    );
};

export default Register;