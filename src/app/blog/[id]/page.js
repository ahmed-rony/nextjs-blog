import React from 'react';
import styles from "./page.module.scss";
import Image from 'next/image';
import { notFound } from 'next/navigation';

const getData = async (id) => {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`, { cache: 'no-store' });
    if (!res.ok) {
        return notFound();
    }

    return res.json();
}

export const generateMetadata = async({ params })=> {
    const post = await getData(params.id)
    return {
        title: post.title,
        description: post.desc,
    };
}

const Post = async ({ params }) => {
    const data = await getData(params.id)
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.detail}>
                    <h3>{data?.title}</h3>
                    <div className={styles.user}>
                        <div className={styles.user_img}>
                            <Image src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&w=600" alt='' fill={true} />
                        </div>
                        <span>Alex Joe</span>
                    </div>
                </div>
                <div className={styles.content_img}>
                    <Image src={data?.img} alt='' fill={true} />
                </div>
            </div>
            <p>{data?.desc}</p>
        </div>
    );
};

export default Post;