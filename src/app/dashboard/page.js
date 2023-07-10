"use client"

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import styles from "./page.module.scss";
import Image from 'next/image';
import Link from 'next/link';


const Dashboard = () => {
    const session = useSession();
    const router = useRouter();

    const fetcher = (...args) => fetch(...args).then(res => res.json());

    const { data, mutate, error, isLoading } = useSWR(`/api/posts?username=${session?.data?.user?.name}`, fetcher);
    

    if (session.status === "loading") {
        return <p>loading</p>
    }
    if (session.status === "unauthenticated") {
        router?.push("/dashboard/login")
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const title = e.target[0].value;
        const img = e.target[1].value;
        const desc = e.target[2].value;

        try {
            await fetch("/api/posts", {
                method: "POST",
                body: JSON.stringify({
                    title,
                    img,
                    desc,
                    username: session?.data?.user?.name
                })
            })
            mutate();
            e.target.reset();
        } catch (error) {
            throw new Error(error);
        }
    }

    const handleDelete = async (id)=>{
        try {
            await fetch(`/api/posts/${id}`,{
                method: "DELETE",
            });
            mutate();
        } catch (error) {
            console.log(error);
        }
    }

    if (session.status === "authenticated") {
        return (
            <div className={styles.container}>
                <div className={styles.posts}>
                    {isLoading
                        ? "loading"
                        : data?.map((item) => (
                            <div className={styles.item} key={item?._id}>
                                <Image src={item?.img} alt='' fill={true} />

                                <Link href={`/blog/${item?._id}`} className={styles.detail}>
                                    <span>{item?.title}</span>
                                    <p>{item?.desc}</p>
                                </Link>
                                <div className={styles.delete} onClick={()=>handleDelete(item?._id)}>
                                    <span>X</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <form className={styles.add_post} onSubmit={handleSubmit}>
                    <h2>Add New Post</h2>
                    <input type="text" placeholder='Title' required />
                    <input type="text" placeholder='Image link(only from pexel.com)' required />
                    <textarea placeholder='Description' required></textarea>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }
};

export default Dashboard;