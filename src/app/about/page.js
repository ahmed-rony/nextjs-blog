import React from 'react';
import styles from "./page.module.scss";
import Image from 'next/image';

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.about_img}>
                <Image src="https://images.pexels.com/photos/16516/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600" fill={true} alt='' />
                <h3>DESIGNS YOU DREAMED OF</h3>
            </div>
            <div className={styles.about_desc}>
                <div className={styles.about_left}>
                    <h3>What is this all about?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quas itaque explicabo quasi tempore dolorum esse aut recusandae omnis mollitia?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolor mollitia atque sit delectus consequuntur, nesciunt aut exercitationem aliquam nemo facere laudantium illum nostrum. Deleniti dolor eaque consectetur non dolorum?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias dolores magni voluptates, cupiditate iusto quia.</p>
                </div>
                <div className={styles.about_right}>
                    <h3>What is this all about?</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias dolores magni voluptates, cupiditate iusto quia.</p>
                    <ul>
                        <li>- Lorem ipsum dolor sit amet consectet.</li>
                        <li>- Lorem ipsum dolor sit amet consectet.</li>
                        <li>- Lorem ipsum dolor sit amet consectet.</li>
                        <li>- Lorem ipsum dolor sit amet consectet.</li>
                        <li>- Lorem ipsum dolor sit amet consectets.</li>
                    </ul>
                </div>

            </div>

        </div>
    );
};

export default About;