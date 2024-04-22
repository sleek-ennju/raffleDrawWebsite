import car from "../../../assets/images/superCar3.png";
import client from "../../../assets/images/happyClient.png";

function TopClient() {
  return (
    <section id="topclient" className="testimonial mx-3 sm:mx-4 md:mx-6 lg:mx-20 ">
        <div className="flex flex-col gap-2 items-center text-center">
            <h3 className="text-yellowShine text-lg font-medium font-dmsans">The Biggest Raffle Winner of The Month</h3>
            <h2 className="text-white text-3xl font-bold font-lato uppercase">Top Winning Client</h2>
            <p className="text-white text-sm font-normal font-dmsans ">There have been numerous winners, but some winners are luckier than others.</p>
        </div>
        <div className="flex flex-col md:flex-row md:justify-around md:items-center bg-gradient-to-r from-gradientTop to-gradientBottom rounded-lg mt-12">
          <div className="self-center max-w-[24rem] sm:max-w-[28rem] md:max-w-[30rem] md:transform md:-translate-x-4 md:translate-y-16">
            <img src={car} className="w-full h-full" alt="prize" />
          </div>
          <div className="relative xxsm:min-h-[12.5rem] min-h-[15.8rem] md:self-end">
            <img src={client} className="w-full max-w-[16rem] mx-auto h-auto object-cover" alt="happy client" />
            <div className="absolute bottom-0 w-full text-center py-2  bg-gradient-to-b from-buttonTop to-buttonBottom rounded-t-lg">
              <p className="text-white font-dmsans text-base font-semibold">Henry Dawson</p>
              <p className="text-blackclr font-dmsans text-sm font-medium">Draw took place on</p>
              <p className="text-white font-lato text-base font-semibold">19/04/2024</p>
            </div>
          </div>
        </div>

    </section>
  )
}

export default TopClient;