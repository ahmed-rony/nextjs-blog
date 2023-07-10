import React from 'react';
import styles from "./page.module.scss";
import Image from 'next/image';

export const metadata = {
    title: 'OWLS | Contact',
    description: 'SEO description',
  }

const Contact = () => {
    return (
        <div className={styles.container}>
            <h1>Let's Keep In Touch</h1>
            <div className={styles.content}>
                <div className={styles.left}>
                    <Image src="https://images.pexels.com/photos/4659806/pexels-photo-4659806.jpeg?auto=compress&cs=tinysrgb&w=600" alt='' fill={true}/>
                </div>
                <div className={styles.right}>
                    <input type="text" placeholder='name' />
                    <input type="text" placeholder='email' />
                    <textarea type="text" placeholder='message' />
                    <button>send</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;