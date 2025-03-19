import { useEffect, useState, useRef } from 'react'
import './Navbar.css'
// import Logo from '../../Bright infotech/Logo.jpg'
import Logo from '../../Bright infotech/school_logo.png'


import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll';


const Navbar = () => {

    const [sticky, setSticky] = useState(false);
    // const [isMobile, setisMobile] = useState(false);
    // const [sidebarOpen, setsidebarOpen] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })

        // window.innerWidth < 450 ? setisMobile(true) : setisMobile(false);
        // if (window.innerWidth < 450) {
        //     setisMobile(true);
        //     setsidebarOpen(false);
        //     side_bar.current.style.transform = `translateX(${100}%)`;
        // }
        // else
        // if (window.innerWidth > 450){
        //     side_bar.current.style.transform = `translateX(${0}%)`;
        //     setisMobile(false);
        //     setsidebarOpen(false);
        // }

        // window.addEventListener('resize', () => {
        //     window.innerWidth < 450 ? setisMobile(true) : setisMobile(false);
        //     // window.innerWidth < 450 ? setsidebarOpen(false) : setsidebarOpen(true);
        //     if(isMobile == true) {
        //         if(sidebarOpen == true){
        //             side_bar.current.style.transform = `translateX(${100}%)`;
        //             setsidebarOpen(false);
        //         }else
        //         if(sidebarOpen == false){
        //             side_bar.current.style.transform = `translateX(${0}%)`;
        //             setsidebarOpen(true);
        //         }
        //     }
        // });

    }, []);

    const side_bar = useRef();

    const toggleMenu = () => {
        // if(isMobile == true) {
        //     if(sidebarOpen == true){
        //         side_bar.current.style.transform = `translateX(${100}%)`;
        //         setsidebarOpen(false);
        //     }else
        //     if(sidebarOpen == false){
        //         side_bar.current.style.transform = `translateX(${0}%)`;
        //         setsidebarOpen(true)
        //     }
        // }
    }


    return (
        <nav className={`container ${sticky ? 'darker' : ''}`}>
            <img src={Logo} alt="" className='logo' />
            <ul ref={side_bar}>
                {/* <li><Link onClick={toggleMenu} to='home' smooth={true} offset={0} duration={500}>Home</Link></li> */}
                <li><Link onClick={toggleMenu} to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link onClick={toggleMenu} to='programs' smooth={true} offset={0} duration={500}>Programs</Link></li>
                <li><Link onClick={toggleMenu} to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
                <li><Link onClick={toggleMenu} to='news' smooth={true} offset={-260} duration={500}>News</Link></li>
                <li><Link onClick={toggleMenu} to='result' smooth={true} offset={-260} duration={500}>Result</Link></li>
                <li><Link onClick={toggleMenu} to='contact' smooth={true} offset={-260} duration={500}>Contact us</Link></li>
                {/* <li><Link onClick={toggleMenu} to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link></li> */}
                <li><a onClick={toggleMenu} className='btn'>Login</a></li>

            </ul>

            <div className="navbar_right_side_btn">
                <a onClick={toggleMenu} className='btn external_login_btn'>Login</a>
                <img src={menu_icon} alt="" id="menu_toggle_btn" className='menu-icon' onClick={toggleMenu} />
            </div>
        </nav>
    )
}

export default Navbar
