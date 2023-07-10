"use client"

import Link from 'next/link';
import React, { useContext } from 'react';
import styles from "./navbar.module.scss";
import DarkMode from '../DarkMode/DarkMode';
import { ThemeContext } from '@/Context/ThemeContext';
import { signOut, useSession } from 'next-auth/react';

const Navbar = () => {
    const { mode } = useContext(ThemeContext);
    const session = useSession();
    return (
        <div className={styles.container} style={mode === "light" ? { background: "#f3f3f3" } : { background: "#222" }}>
            <Link href="/" className={styles.logo}>OWLS</Link>
            <ul>
                <li><DarkMode /></li>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/about'>About</Link></li>
                <li><Link href='/blog'>Blog</Link></li>
                <li><Link href='/portfolio'>Portfolio</Link></li>
                <li><Link href='/contact'>Contact</Link></li>
                <li><Link href='/dashboard'>Dashboard</Link></li>
                {session.status === "authenticated" && <button onClick={signOut}>Logout</button>}
            </ul>
        </div>
    );
};

export default Navbar;