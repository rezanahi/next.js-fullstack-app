"use client"

import './Links.css'
import Link from 'next/link';

import { usePathname } from "next/navigation";
import {useState} from "react";
import {handleGithubLogout} from "../../../../lib/actions";
import {auth} from "../../../../lib/auth";

function Links ({session}) {
    const pathName = usePathname();
    let links = [
        {
            title: "Homepage",
            path: '/',
        },
        {
            title: "About",
            path: '/about'
        },
        {
            title: "Contact",
            path: '/contact'
        },
        {
            title: "Blog",
            path: '/blog'
        },
    ]
    //TEMP
    const isAdmin = true

    //STATES
    const [open, setOpen] = useState(false);
    return(
        <>
            <div className='navbar__link'>
                {links.map( (link) => {
                    return(
                        <Link
                            href={link.path}
                            key={link.title}
                            className={pathName === link.path ? 'link-container active' : 'link-container'}>
                                {link.title}
                        </Link>
                    )
                })}
                {session?.user ? (
                    <>
                        {
                            session.user?.isAdmin && (
                                <Link
                                    className={pathName === '/admin' ? 'link-container active' : 'link-container'}
                                    href={'/admin'}>Admin
                                </Link>
                            )
                        }
                        <form action={handleGithubLogout}>
                            <button className='link--logout' type='submit'>Logout</button>
                        </form>
                    </>
                ) : (
                    <Link href={'/login'}>Login</Link>
                )}
            </div>
            <button className='mobile-menu-btn' onClick={() => setOpen((prev) => !prev)}>Menu</button>
            {
                open && (
                    <div className='mobile-links'>
                        {links.map((link) => (
                            <Link
                                href={link.path}
                                key={link.title}
                                className={pathName === link.path ? 'link-container active' : 'link-container'}>
                                {link.title}
                            </Link>
                        ))}
                    </div>
                )
            }
        </>
    )
}



export default Links