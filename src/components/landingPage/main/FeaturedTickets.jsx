import Button from "../../ui/Button";
import Ticket from "../../ui/Ticket";
import car from "../../../assets/images/superCar3.png";


function FeaturedTickets() {
  const contests = [
    {
      winning: car,
      title: "The breeze zodiac IX" ,
      ticketCost: "$3.99",
      countdown: "5d",
      totalTickets: 400
    },
    {
      winning: car,
      title: "The Del Sol Trailblazer" ,
      ticketCost: "$5.99",
      countdown: "8d",
      totalTickets: 300
    },
    {
      winning: car,
      title: "The Miata Dart IV" ,
      ticketCost: "$3.99",
      countdown: "3d",
      totalTickets: 412
    },
    {
      winning: car,
      title: "The Fabia Magnum" ,
      ticketCost: "$2.99",
      countdown: "6d",
      totalTickets: 700
    },
    {
      winning: car,
      title: "The Omega Navigator" ,
      ticketCost: "$2.99",
      countdown: "1d",
      totalTickets: 120
    },
    {
      winning: car,
      title: "The Shelby Cobra" ,
      ticketCost: "$3.99",
      countdown: "5d",
      totalTickets: 400
    },
  ]
  return (
    <section className="howtoplay mx-3 sm:mx-4 md:mx-6 lg:mx-20">
        <div className="flex flex-col gap-2 items-center text-center">
            <h3 className="text-yellowShine text-lg font-medium font-dmsans">Try Your Chance At Winning</h3>
            <h2 className="text-white text-3xl font-bold font-lato uppercase">Again & Again</h2>
            <p className="text-white text-sm font-normal font-dmsans ">Participants buy tickets and lots are drawn to determine the winners.</p>
            <div className="mt-4">
                <Button title="Dream Car" />
            </div>
        </div>
        <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3 mt-8 gap-8">
          {contests.map(({winning, title, ticketCost, countdown, totalTickets}, index) => (
            <Ticket 
              key={index} 
              winning={winning} 
              title={title} 
              ticketCost={ticketCost} 
              countdown={countdown} 
              totalTickets={totalTickets} 
            />
          ))};
        </div>
    
    </section>
  )
}

export default FeaturedTickets;