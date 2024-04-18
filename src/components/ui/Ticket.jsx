import { ClockIcon, TicketIcon } from "@heroicons/react/24/outline";
function Ticket({winning, title, ticketCost, countdown, totalTickets }) {
  return (
    <div className="bg-cardBg rounded-lg relative w-full max-w-[18rem]">
      <div className="px-4 py-8">
        <img src={winning} alt="contest price" />
      </div>
      <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2  bg-gradient-to-r from-gradientBottom to-gradientTop hover:bg-gradient-to-l px-4 py-4 rounded-full w-fit cursor-pointer">
        <span className="text-white text-center block font-lato text-sm font-semibold shadow-sm">Get<br/>Ticket</span>
      </div>
      <div className="bg-cardBg2 p-4 flex flex-col gap-6 rounded-b-lg">
        <div className="flex justify-between">
          <h4 className="font-lato text-sm text-white font-semibold max-w-[35%]">{title}</h4>
          <h4 className="font-lato text-lg text-money font-semibold">{ticketCost}</h4>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <ClockIcon className="w-5 h-5 text-white" />
            <p className="text-yellowShine text-sm font-dmsans font-medium">{countdown}</p>
          </div>
          <div className="flex gap-2 items-center">
            <TicketIcon className="w-5 h-5 text-white" />
            <p className="text-yellowShine text-sm font-dmsans font-medium">{totalTickets}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ticket;