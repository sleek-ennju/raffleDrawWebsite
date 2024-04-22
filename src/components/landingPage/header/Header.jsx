import HeroSection from "./HeroSection"
import NavBar from "./NavBar"


function Header() {
  return (
    <header id="header" className="w-full h-dvh overflow-x-clip bg-gradient-to-b from-gradientTop to-gradientBottom">
        <NavBar />
        <div className="pt-[24dvh]">
          <HeroSection />
        </div>
    </header>
  )
}

export default Header