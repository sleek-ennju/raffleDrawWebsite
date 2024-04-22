import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo1 from "../../../assets/images/raffleLogo2.png";
import { Bars3BottomRightIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { TicketIcon } from '@heroicons/react/24/outline';

function NavBar() {
    const [revealNav, setRevealNav] = useState(false);
    const [navBackground, setNavBackground] = useState("bg-transparent");
    const [vw, setVw] = useState(null);
    const checkViewWidth = ()=> {
        setVw(window.innerWidth);
    }

    // hide mobile nav bar when link is clicked
    useEffect(()=>{
        if(vw <= 1022){
            setRevealNav(false);
            setVw(null);
        }
    }, [vw]);

    // navbar background scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10 && window.scrollY <= 420) {
                setNavBackground("bg-backgroundDark")
            } else if(window.scrollY > 420 ) {
                setNavBackground("bg-gradient-to-b from-gradientTop to-gradientBottom")
            }else {
                setNavBackground("bg-transparent");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navLinks = [
        {
            title: "How it works",
            link: "#howtoplay"
        },
        {
            title: "FAQ",
            link: "#faq"
        },
        {
            title: "Contact",
            link: "#contact"
        },
        {
            title: "Sign up",
            link: "/signup"
        },
        {
            title: "Login",
            link: "/login"
        },
    ]
    
    
  return (
    <section className={`fixed top-0 w-full z-50 ${navBackground} h-[16dvh] flex justify-between lg:justify-normal items-center px-3 sm:px-4 md:px-6 lg:px-20 transition-all duration-200`}>
        {/* brand logo */}
        <div className="w-full max-w-[5rem] h-auto">
            <Link to="/">
                <img src={logo1} className="w-full transform -translate-x-3" alt="logo" />
            </Link>
        </div>

        {/* mobile hamburger icon */}
        <div className="lg:hidden cursor-pointer" onClick={()=> setRevealNav(true)}>
            <Bars3BottomRightIcon className="w-7 h-7 text-white" />
        </div>

        {/*nav view */}
        <nav className={`absolute top-0 ${revealNav ? "right-0" : "-right-full"} w-[70%] sm:w-[60%] h-[100dvh] z-50 bg-backgroundDark transition-all duration-500 lg:transition-none lg:bg-transparent shadow-sm lg:static lg:w-full lg:h-auto flex flex-col justify-center lg:flex-row lg:flex-1 lg:justify-end lg:items-center gap-12 lg:gap-16 rounded-l-lg`}>
            <div className="absolute top-2 left-4 cursor-pointer lg:hidden" onClick={()=> setRevealNav(false)}>
                <XMarkIcon className="w-6 h-6 text-white" />
            </div>
            
            <ul className="flex flex-col items-center lg:flex-row gap-6 lg:gap-8">
                {navLinks.map(({title, link}, index) => (
                    <li key={index}>
                        <NavLink 
                            className="text-white uppercase tracking-wide font-lato text-sm md:text-base hover:text-yellowShine transition-all duration-300" 
                            to={link}
                            onClick={checkViewWidth}
                        >{title}
                        </NavLink>
                    </li>
                ))}
            </ul>
            
            <button type="button" className="w-fit mx-auto lg:w-auto lg:mx-0 flex items-center bg-gradient-to-r from-gradientBottom to-gradientTop hover:bg-gradient-to-l transition ease-in-out duration-1000 py-2 px-6 rounded-2xl">
                <span>
                    <TicketIcon className="w-4 h-4 text-yellowShine font-semibold transform -rotate-90"/>
                </span>
                <span className="text-white uppercase tracking-wide font-lato text-sm md:text-base">Buy tickets</span>
            </button>
        </nav>
        
    </section>
  )
}

export default NavBar;