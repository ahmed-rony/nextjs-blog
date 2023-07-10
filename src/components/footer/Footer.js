import React from 'react';
import styles from "./footer.module.scss";

const Footer = () => {
    return (
        <div className={styles.container}>
            <small>&copy; Copyright 2023 | All rights reserved</small>
        </div>
    );
};

export default Footer;