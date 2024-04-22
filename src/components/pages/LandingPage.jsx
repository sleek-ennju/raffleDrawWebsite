import Header from "../landingPage/header/Header";
import Main from "../landingPage/main/Main";
import Footer from "../landingPage/footer/Footer";
import ScrollToHashElement from "../helpers/ScrollToHashElement";


function LandingPage() {
  return (
    <>
      <ScrollToHashElement />
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default LandingPage;