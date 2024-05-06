import Ticket from "../ui/Ticket";
import { WalletIcon, BellIcon } from "@heroicons/react/24/outline";
import userImg from "../../assets/images/happyClient.png";
import potentialWinning from "../../assets/images/superCar3.png";

function HomeUser() {
  const moods = ["😎", "🙂", "🥲", "👎"];
  const contests = [
    {
      winning: potentialWinning,
      title: "The breeze zodiac IX" ,
      ticketCost: "$3.99",
      countdown: "5d",
      totalTickets: 400
    },
    {
      winning: potentialWinning,
      title: "The Del Sol Trailblazer" ,
      ticketCost: "$5.99",
      countdown: "8d",
      totalTickets: 300
    },
    {
      winning: potentialWinning,
      title: "The Miata Dart IV" ,
      ticketCost: "$3.99",
      countdown: "3d",
      totalTickets: 412
    },
  ]
  return (
    <section className="py-4 px-8  flex flex-col gap-5">
      <nav className="flex justify-end items-center gap-6">
        <div className="shadow-sm relative cursor-pointer">
            <BellIcon className="w-6 h-6 text-blackclr" />
            <div className="w-2 h-2 absolute top-0 right-[0.15rem] rounded-full bg-red-600"></div>
        </div>
        <div className="flex items-center gap-2 border border-solid border-blackclr rounded-3xl max-w-fit pr-2">
          <div className="bg-blackclr shadow-sm border border-solid border-blackclr rounded-3xl py-1 px-3">
            <WalletIcon className="w-6 h-6 text-white" />
          </div>
          <h4 className="text-base font-lato font-medium"><span className="mr-1">₦</span>2,350,000</h4>
        </div>
        <div className='w-[2rem] h-[2rem] rounded-[50%] overflow-hidden bg-white shadow-lg'>
          <img src={userImg} className='w-full h-full object-cover' alt="client close up" />
        </div>
      </nav>

      {/* mood section */}
      <div className="flex flex-col gap-5">
        <h2 className="font-lato font-bold text-3xl">Welcome back to Lucky Ralph, Jimmy</h2>
        <div className="bg-gradient-to-r from-bgBlue to-bgPurple rounded-lg py-7 px-9 flex flex-col gap-5">
          <h3 className="text-white font-dmsans font-bold text-lg">How are you feeling today?</h3>
          <div className="flex justify-between">
            {moods.map((mood,index)=>(
              <div key={index} className="py-1 px-12 bg-white rounded-2xl ">{mood}</div>
            ))}
          </div>
        </div>
      </div>

      {/* active tickets */}
      <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3 mt-12 gap-8">
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

export default HomeUser;