import FeaturedTickets from "./FeaturedTickets";
import HowToPlay from "./HowToPlay";

function Main() {
  return (
    <main className="mt-8 lg:mt-10 flex flex-col gap-14">
        <HowToPlay />
        <FeaturedTickets />
    </main>
  )
}

export default Main