import ScrollSurface from "../../motionComponents/ScrollSurface";
import FaqItem from "../../ui/FaqItem";


const Faq = () => {

    const faqs = [
        {
            question:"What distinguishes Delight Media House's digital signage?",
            answer:"Delight Media House stands out for creating immersive digital signage solutions with cutting-edge customization to maximize brand engagement and recognition in public spaces."
        },
        {
            question:"How are social media and digital signage integrated in your strategies?",
            answer:"We blend digital signage with social media to create a cohesive advertising ecosystem that amplifies brand messages and enhances audience interaction."
        },
        {
            question:"Can you create a strategy for both digital and physical ads?",
            answer:"Yes, our consulting services design integrated strategies that effectively bridge digital and traditional advertising, ensuring message consistency across all platforms."
        },
        {
            question:"Which businesses benefit most from your services?",
            answer:"Our expertise is beneficial for a wide array of clients, especially tech and e-commerce brands seeking innovative promotion in both digital and physical realms."
        },
        {
            question:"How do you measure campaign success?",
            answer:"We track success using advanced analytics to measure key performance indicators, providing transparent results and actionable insights for ongoing optimization."
        }
    ]

    return (
        <ScrollSurface>
            <section id="faq" className="mx-3 sm:mx-4 md:mx-12 lg:w-[80%] lg:mx-auto">
                <h2 className="text-[2rem] font-lato font-semibold mb-4 text-center w-full md:max-w-[60%] mx-auto text-white">Quick Insights and Solutions!</h2>
                <div className=" flex flex-col gap-6 mt-16">
                    {faqs.map(({question, answer},index)=>(
                        <FaqItem
                            key={index}
                            question={question}
                            ans={answer}
                        />
                    ))}
                </div>
            </section>
        </ScrollSurface>
    )
}

export default Faq;