import './Navbar.css'
import Links from "./Links/Links";
import Link from 'next/link'
import {auth} from "../../../lib/auth";

async function Navbar () {

    const session = await auth()

    return(
        <>
            <div className='navbar'>
                <Link href='/' className='navbar__logo'>Logo</Link>
                <div className='navbar__links'>
                    <Links session={session}></Links>
                </div>
            </div>
        </>
    )
}


export default Navbar