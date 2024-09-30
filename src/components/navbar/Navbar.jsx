import './Navbar.css'
import Links from "./Links/Links";
import Link from 'next/link'

function Navbar () {



    return(
        <>
            <div className='navbar'>
                <Link href='/' className='navbar__logo'>Logo</Link>
                <div className='navbar__links'>
                    <Links></Links>
                </div>
            </div>
        </>
    )
}


export default Navbar