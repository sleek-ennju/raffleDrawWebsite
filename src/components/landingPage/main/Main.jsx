import Contact from "./Contact";
import Faq from "./Faq";
import FeaturedTickets from "./FeaturedTickets";
import HowToPlay from "./HowToPlay";
import Testimonials from "./Testimonials";
import TopClient from "./TopClient";

function Main() {
  return (
    <main className="mt-8 lg:mt-24 flex flex-col gap-24">
        <HowToPlay />
        <FeaturedTickets />
        <TopClient />
        <Faq />
        <Testimonials />
        <Contact />
    </main>
  )
}

export default Main