import car from "../../../assets/images/superCar3.png";
import ticket from "../../../assets/images/luckyTicket.svg";
import Button from "../../ui/Button";

function Winner() {
  return (
    <section className="testimonial mx-3 sm:mx-4 md:mx-6 lg:mx-20 ">
        <div className="flex flex-col gap-2 items-center text-center">
            <h3 className="text-yellowShine text-lg font-medium font-dmsans">Unveiling the Star of the Show</h3>
            <h2 className="text-white text-3xl font-bold font-lato uppercase">Our Latest Raffle Winner</h2>
            <p className="text-white text-sm font-normal font-dmsans ">Join us in celebrating the joy of our lucky winner. Every draw brings a new chance to win big!</p>
        </div>
        <div className="grid grid-cols-1 justify-center mt-12 gap-8">
            <div className="relative max-w-[24rem] sm:max-w-[28rem] md:max-w-[30rem] rounded-lg">
                <img src={car} className="w-full h-full" alt="prize" />
                <div className="absolute top-0 left-0 w-full h-full  bg-gradient-to-b from-gradientTop to-gradientBottom opacity-75 rounded-lg">
                </div>
                <div className="absolute w-[70%] top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] text-white text-center">
                    <h3 className="font-lato font-semibold text-lg">Raffle ended</h3>
                    <p className="font-dmsans font-normal text-sm">The draw was provided and verified at 11:00 on the 03/05/2024</p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-4">
                <h3 className="bg-gradientTop py-1 px-4 text-yellowShine w-fit rounded-lg font-lato font-semibold text-lg">Winner</h3>
                <h4 className="text-white text-base font-lato font-medium w-[60%] text-center">Lisa Mitchell Won The AMG 450 Super Car</h4>
                <p className="text-white text-xs font-dmsans font-light">with lucky ticket number</p>
                <div className="relative">
                    <img src={ticket} alt="lucky ticket id" />
                    <p className="absolute text-white text-4xl font-lato font-semibold top-[.3rem] left-[36%] ">512</p>
                </div>
                <div>
                    <Button title="join more competitions" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Winner;