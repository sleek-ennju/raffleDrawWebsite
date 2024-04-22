import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp  } from "react-icons/fa6";

function Footer() {
    const navLinks = [
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
        {
            title: "Sign up",
            link: "#"
        },
        {
            title: "Login",
            link: "#"
        },
    ]
  return (
    <footer className='relative w-full h-full py-12 flex flex-col gap-12'>
        <div  className='bent-top-container absolute bottom-0 left-0  w-full h-[70%] hidden md:block bg-footerBg'>
        </div>
        {/* Newsletter container */}
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-evenly p-8 md:py-14 max-w-[90%] lg:max-w-[70%] mx-auto bg-gradient-to-r from-bgPurple relative z-10 to-bgBlue rounded-lg">
            <div className="text-center md:text-start md:self-end">
                <p className="text-yellowShine text-base font-medium font-dmsans">Subscribe to X</p>
                <h3 className="text-white text-xl md:text-2xl font-semibold tracking-wide font-lato">To Get Exclusive Benefits</h3>
            </div>
            <div className="md:self-end">
                <form action="#" method="post" encType="application/x-www-form-urlencoded">
                    <div className="bg-bgPrimaryBlue w-fit flex gap-2 pl-4 rounded-3xl">
                        <input type="email" name="email" placeholder="johndoe@email.com" className="w-full bg-transparent outline-none text-white placeholder:text-white placeholder:font-dmsans placeholder:text-xs placeholder:font-light"  />
                        <button className="w-fit lg:w-auto flex items-center text-white font-lato text-sm sm:text-base lg:text-lg tracking-wide capitalize bg-gradient-to-b from-buttonTop to-buttonBottom hover:bg-gradient-to-l transition ease-in-out duration-1000 py-2 px-6 rounded-3xl">Subscribe</button>
                    </div>
                </form>
            </div>
        </div>

        <ul className="flex justify-center flex-wrap gap-4 relative z-10  border-b border-solid border-[rgb(64,27,122)] mx-4 md:mx-12 pb-8">
            {navLinks.map(({title, link}, index) => (
                <li  key={index}>
                    <Link className="text-white text-sm md:text-base font-lato font-semibold hover:text-yellowShine transition-all duration-300"  to={link}>{title}</Link>
                </li>
            ))}
        </ul>

        <div className="relative z-10 flex flex-col items-center md:flex-row md:justify-between gap-4 mx-4 md:mx-12">
            <p className="text-white text-xs font-dmsans font-normal text-center">copyright @2024. All rights reserved By <span className="text-buttonBottom font-lato font-semibold">X</span></p>
            <div className="flex items-center gap-3">
                <div className="bg-gradient-to-b from-buttonTop to-buttonBottom p-1 text-white rounded-full cursor-pointer  hover:bg-white transition-colors duration-300"><a href="/"><FaFacebook size={16}/></a></div>
                <div className="bg-gradient-to-b from-buttonTop to-buttonBottom p-1 text-white rounded-full cursor-pointer  hover:bg-white transition-colors duration-300"><a href="/"><FaInstagram size={16}/></a></div>
                <div className="bg-gradient-to-b from-buttonTop to-buttonBottom p-1 text-white rounded-full cursor-pointer  hover:bg-white transition-colors duration-300"><a href="/"><FaTwitter size={16}/></a></div>
                <div className="bg-gradient-to-b from-buttonTop to-buttonBottom p-1 text-white rounded-full cursor-pointer  hover:bg-white transition-colors duration-300"><a href="/"><FaWhatsapp size={16}/></a></div>
          </div>
        </div>
        
    </footer>
    )
}

export default Footer