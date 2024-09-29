import Link from 'next/link';

function Links () {
    let links = [
        {
            title: "Homepage",
            path: '/'
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
            path: '/posts'
        },
    ]
    return(
        <>
            <div>
                {links.map( (link) => {
                    return(
                        <Link href={link.path} key={link.title}>{link.title}</Link>
                    )
                })}
            </div>
        </>
    )
}



export default Links