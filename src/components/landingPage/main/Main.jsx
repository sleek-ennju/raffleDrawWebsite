import FeaturedTickets from "./FeaturedTickets";
import HowToPlay from "./HowToPlay";

function Main() {
  return (
    <main className="mt-8 lg:mt-24 flex flex-col gap-24">
        <HowToPlay />
        <FeaturedTickets />
    </main>
  )
}

export default Main