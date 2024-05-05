import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../landingPage/header/Header";
import Main from "../landingPage/main/Main";
import Footer from "../landingPage/footer/Footer";
import ScrollToHashElement from "../helpers/ScrollToHashElement";


function LandingPage() {
  const location = useLocation();

  useEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
      });
  }, [location]);

  return (
    <div className="bg-backgroundDark h-full">
      <ScrollToHashElement />
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default LandingPage;