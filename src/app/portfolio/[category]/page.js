import React from 'react';
import styles from "../page.module.scss";
import Image from 'next/image';
import { items } from './data';
import { notFound } from 'next/navigation';

const getData = (cat) => {
    const data = items[cat];

    if (data) {
        return data;
    }

    return notFound();
}

const Category = ({ params }) => {
    const data = getData(params.category)
    console.log(params);
    return (
        <div className={styles.container}>
            <h2 className={styles.catTitle}>{params.category}</h2>
            {data?.map((item) => (
                <div className={styles.item} key={item?.id}>
                    <div className={styles.content}>
                        <h3>{item?.title}</h3>
                        <p>{item?.desc}</p>
                        <button url='#'>See more</button>
                    </div>
                    <div className={styles.content_img}>
                        <Image src={item?.image} alt='' fill={true} />
                    </div>
                </div>
            ))
            }
        </div>
    );
};

export default Category;