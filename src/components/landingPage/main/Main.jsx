import Contact from "./Contact";
import Faq from "./Faq";
import FeaturedTickets from "./FeaturedTickets";
import HowToPlay from "./HowToPlay";
import Testimonials from "./Testimonials";
import TopClient from "./TopClient";
import Winner from "./Winner";

function Main() {
  return (
    <main className="mt-36 lg:mt-48 flex flex-col gap-36">
        <HowToPlay />
        <FeaturedTickets />
        <Winner />
        <TopClient />
        <Faq />
        <Testimonials />
        <Contact />
    </main>
  )
}

export default Main