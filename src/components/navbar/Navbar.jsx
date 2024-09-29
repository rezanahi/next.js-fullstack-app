import './Navbar.css'
import Links from "./Links/Links";


function Navbar () {



    return(
        <>
            <div className='navbar'>
                <div className='navbar__logo'>Logo</div>
                <div className='navbar__links'>
                    <Links></Links>
                </div>
            </div>
        </>
    )
}


export default Navbar