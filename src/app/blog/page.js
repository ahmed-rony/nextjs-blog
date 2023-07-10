import React from 'react';
import styles from "./page.module.scss";
import Image from 'next/image';
import Link from 'next/link';

const getData = async () => {
    const res = await fetch('http://localhost:3000/api/posts', { cache: 'no-store' });
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}
const Blog = async () => {
    const data = await getData();
    return (
        <div className={styles.container}>
            {data?.map((item) => (
                <Link href={`/blog/${item?._id}`} className={styles.item} key={item?._id}>
                    <div className={styles.content_img}>
                        <Image src={item?.img} alt='' fill={true} />
                    </div>
                    <div className={styles.content}>
                        <h3>{item?.title}</h3>
                        <p>{item?.desc}</p>
                    </div>
                </Link>
            ))}

        </div>
    );
};

export default Blog;