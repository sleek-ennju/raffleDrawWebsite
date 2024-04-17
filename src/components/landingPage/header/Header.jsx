import HeroSection from "./HeroSection"
import NavBar from "./NavBar"


function Header() {
  return (
    <header className="relative w-full overflow-x-clip bg-gradient-to-b from-gradientTop to-gradientBottom">
        <NavBar />
        <div className="mt-8 md:mt-14">
          <HeroSection />
        </div>
    </header>
  )
}

export default Header