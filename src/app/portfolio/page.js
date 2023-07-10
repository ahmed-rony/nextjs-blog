import React from 'react';
import styles from "./page.module.scss";
import Link from 'next/link';

const Portfolio = () => {
    return (
        <div className={styles.container}>
            <h5>Choose Gallery</h5>
            <div className={styles.gallery}>
                <Link href="/portfolio/illustrations" className={styles.item}>
                    <span>Illustrations</span>
                </Link>
                <Link href="/portfolio/websites" className={styles.item}>
                    <span>Websites</span>
                </Link>
                <Link href="/portfolio/applications" className={styles.item}>
                    <span>Applications</span>
                </Link>
            </div>
        </div>
    );
};

export default Portfolio;