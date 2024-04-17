import Button from "../../ui/Button";
import prize from "../../../assets/images/superCar2.png";


function HeroSection() {
  return (
    <section className="mx-3 sm:mx-4 lg:mx-16 grid grid-cols-1 md:grid-cols-2 md:gap-4">
      <div className="flex flex-col gap-1">
        <h3 className="text-base sm:text-lg text-yellowShine uppercase font-dmsans font-semibold">Contest for your chance to</h3>
        <h1 className="text-4xl sm:text-6xl text-white uppercase font-lato font-bold tracking-wide ">Big win</h1>
        <p className="text-sm sm:text-base text-white font-dmsans font-normal my-4">Now&#39;s your chance to win car! Check out the prestige cars you can win in our car prize draws. Will you our next lucky winner?</p>
        <div>
          <Button title="Participate Now" />
        </div>
      </div>
      <div className="w-full h-full max-w-[30rem] ">
        <img src={prize} className="w-full h-full object-cover transform md:-translate-y-12" alt="potential winning" />
      </div>
    </section>
  )
}

export default HeroSection;