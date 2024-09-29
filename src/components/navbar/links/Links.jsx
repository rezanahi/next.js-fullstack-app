"use client"

import './Links.css'
import Link from 'next/link';

import { usePathname } from "next/navigation";

function Links () {
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
    const session = true

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
                {session ? (
                    <>
                        {
                            isAdmin && (
                                <Link
                                    className={pathName === '/admin' ? 'link-container active' : 'link-container'}
                                    href={'/admin'}>Admin</Link>
                            )
                        }
                        <button className='link--logout'>Logout</button>
                    </>
                ) : (
                    <Link href={'/login'}>Login</Link>
                )}
            </div>
        </>
    )
}



export default Links