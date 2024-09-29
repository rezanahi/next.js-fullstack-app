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
            </div>
        </>
    )
}



export default Links