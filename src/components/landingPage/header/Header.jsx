import HeroSection from "./HeroSection"
import NavBar from "./NavBar"


function Header() {
  return (
    <header className="relative w-full h-full">
        <NavBar />
        <HeroSection />
    </header>
  )
}

export default Header