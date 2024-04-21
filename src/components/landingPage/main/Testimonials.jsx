import client from '../../../assets/images/happyClient.png';
import { StarIcon } from '@heroicons/react/16/solid';

function Testimonials() {
  return (
    <section className='relative w-full h-full pt-12'>
        <div  className='bent-bottom-container absolute top-0 left-0 w-full h-[70%] hidden md:block bg-gradient-to-b from-gradientTop to-gradientBottom'>
            
        </div>
        <div className="relative z-10 flex flex-col gap-2 items-center text-center ">
            <h3 className="text-yellowShine text-lg font-medium font-dmsans">Testimonial</h3>
            <h2 className="text-white text-3xl font-bold font-lato uppercase xxsm:max-w-[100%] max-w-[90%] sm:max-w-[60%] md:max-w-[50%] lg:max-w-[40%] xl:max-w-[30%]">Our Happy Customers All Around The World</h2>
            <p className="text-white text-sm font-normal font-dmsans xxsm:max-w-[100%] max-w-[90%] sm:max-w-[70%]">With over x years of experience as the worlds leading online raffle service provider. Find out what our members have to say about us!</p>
        </div>
        <div className="max-w-[90%] md:max-w-[50%] mx-auto rounded-lg bg-gradient-to-b from-buttonTop to-buttonBottom backdrop-blur-sm mt-12">
            <div className='flex flex-col items-center gap-4 py-6 px-4'>
                <div className='w-[6rem] h-[6rem] rounded-[50%] overflow-hidden bg-white'>
                    <img src={client} className='w-full h-full  object-cover' alt="client close up" />
                </div>
                <p className='text-white text-base md:text-lg font-lato font-bold tracking-wide'>Henry Dawson</p>
                <p className='text-white text-sm md:text-base font-dmsans font-normal text-center'>&rdquo; I&#39;m absolutely thrilled to announce that I&#39;ve just won the raffle contest! A huge thank you to the team for organizing such a fantastic event. &rdquo;</p>
                <div className='flex gap-2'>
                    <StarIcon className='w-4 h-4 md:w-5 md:h-5 text-white' />
                    <StarIcon className='w-4 h-4 md:w-5 md:h-5 text-white' />
                    <StarIcon className='w-4 h-4 md:w-5 md:h-5 text-white' />
                    <StarIcon className='w-4 h-4 md:w-5 md:h-5 text-white' />
                    <StarIcon className='w-4 h-4 md:w-5 md:h-5 text-white' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials;