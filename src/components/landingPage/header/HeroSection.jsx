import Button from "../../ui/Button";
import prize from "../../../assets/images/superCar3.png";


function HeroSection() {
  return (
    <section className="mx-3 sm:mx-4 md:mx-6 lg:mx-20 grid grid-cols-1 md:grid-cols-2 md:items-center gap-4 md:gap-8">
      <div className="flex flex-col gap-1">
        <h3 className="text-base sm:text-lg lg:text-xl text-yellowShine uppercase font-dmsans font-semibold">Contest for your chance to</h3>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-white uppercase font-lato font-bold tracking-wide">Win Big </h1>
        <p className="text-sm sm:text-base lg:text-lg text-white font-dmsans font-normal my-4 w-full max-w-[90%] md:max-w-full">Now&#39;s your chance to win a car! Check out the prestige cars you can win in our car prize draws. Will you be our next lucky winner?</p>
        <div>
          <Button title="Participate Now" />
        </div>
      </div>
      <div className="w-full h-full max-w-[30rem] lg:max-w-[40rem]">
        <img src={prize} className="w-full h-full object-cover" alt="potential winning" />
      </div>
    </section>
  )
}

export default HeroSection;