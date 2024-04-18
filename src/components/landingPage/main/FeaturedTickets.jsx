import Button from "../../ui/Button";


function FeaturedTickets() {
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
    
    </section>
  )
}

export default FeaturedTickets;