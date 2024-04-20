import HeroSection from "./HeroSection"
import NavBar from "./NavBar"


function Header() {
  return (
    <header id="header" className="relative w-full md:h-dvh overflow-x-clip bg-gradient-to-b from-gradientTop to-gradientBottom">
        <NavBar />
        <div className="mt-8 lg:mt-10">
          <HeroSection />
        </div>
    </header>
  )
}

export default Header