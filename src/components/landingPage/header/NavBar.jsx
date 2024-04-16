
import logo1 from "../../../assets/images/raffleLogo2.png";
import { Bars3BottomRightIcon } from '@heroicons/react/24/outline';

function NavBar() {
    const navLinks = [
        {
            title: "Contest",
            link: "#"
        },
        {
            title: "Winners",
            link: "#"
        },
        {
            title: "How it works",
            link: "#"
        },
        {
            title: "FAQ",
            link: "#"
        },
        {
            title: "Contact",
            link: "#"
        },
        
    ]

  return (
    <section className="h-[16dvh] flex justify-between sm:justify-normal items-center mx-4 sm:mx-16">
        {/* brand logo */}
        <div className="w-full max-w-[5rem] sm:max-w-[6rem] h-auto">
            <a href="#">
                <img src={logo1} className="w-full" alt="logo" />
            </a>
        </div>

        {/* mobile hamburger icon */}
        <div className="sm:hidden">
            <Bars3BottomRightIcon className="w-7 h-7 text-white" />
        </div>

        {/*nav view */}
        <nav className="absolute top-0 right-0 w-[60%] h-[100dvh] bg-black sm:relative flex flex-col sm:flex-row sm:flex-1 sm:justify-end sm:items-center gap-12 sm:gap-16 ">
            <ul className="flex flex-col sm:flex-row gap-6 sm:gap-8">
                {navLinks.map(({title, link}, index) => (
                    <li key={index}>
                        <a className="text-white" href={link}>{title}</a>
                    </li>
                ))}
            </ul>
            <ul className="flex flex-col sm:flex-row gap-6 sm:gap-8">
                <li><a className="text-white" href="#">Sign Up</a></li>
                <li><a className="text-white" href="#">Login</a></li>
            </ul>
        </nav>
        
    </section>
  )
}

export default NavBar;