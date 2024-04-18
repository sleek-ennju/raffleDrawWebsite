import HowToCard from "../../ui/HowToCard";
import { TicketIcon, ShoppingCartIcon, TrophyIcon } from "@heroicons/react/24/outline";

function HowToPlay() {
    const steps = [
        {
            icon: <TicketIcon className="w-12 h-12 text-white" />,
            step: 1,
            title: "Choose",
            description: "Register to esquire & choose your contest"
        },
        {
            icon: <ShoppingCartIcon className="w-12 h-12 text-white" />,
            step: 2,
            title: "Buy",
            description: "Pick your numbers & complete your purchase"
        },
        {
            icon: <TrophyIcon className="w-12 h-12 text-white" />,
            step: 3,
            title: "Win",
            description: "Start dreaming, you're almost there"
        },
    ]

  return (
    <section className="mx-3 sm:mx-4 md:mx-6 lg:mx-20">
        <div className="flex flex-col gap-2 items-center">
            <h3 className="text-yellowShine text-lg font-medium font-dmsans">Need to know about</h3>
            <h2 className="text-white text-3xl font-bold font-lato uppercase"> How To Play?</h2>
            <p className="text-white text-sm font-normal font-dmsans">Follow these three easy steps!</p>
        </div>
        <div className="flex flex-col items-center md:flex-row md:justify-evenly mt-8 gap-8">
            {/* card */}
            {steps.map(({icon, step,title, description}, index) => (
                <HowToCard 
                  key={index} 
                  icon={icon} 
                  step={step} 
                  title={title} 
                  description={description} 
                />
            ))}
        </div>
    </section>
  )
}

export default HowToPlay