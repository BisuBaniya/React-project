import './Navbar.css'

const Navbar = ()=>{
    return(
        <>
        <nav>
            <div className="Logo">
                <img src="./public/brand_logo.png" alt="Logo" />
            </div>
        <ul>
            <li className='border'>MENU</li>
            <li className='border'>LOCATION</li>
            <li className='border'>ABOUT</li>
            <li className='border'>CONTACT</li>
        </ul>
        <button className='btn'>Login</button>
        </nav>
        </>
    )
}

export default Navbar;
