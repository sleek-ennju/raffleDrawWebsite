import ScrollSurface from "../../motionComponents/ScrollSurface";
import FaqItem from "../../ui/FaqItem";


const Faq = () => {

    const faqs = [
        {
            "question": "How do I enter the raffle?",
            "answer": "You can enter the raffle by registering on our website and selecting the raffle you wish to participate in. Follow the prompts to complete your entry."
        },
        {
            "question": "What are the prizes for the raffle?",
            "answer": "The prizes for each raffle vary and can include items like electronics, gift cards, or exclusive experiences. Details are listed on each raffle's page."
        },
        {
            "question": "Is there a limit to how many tickets I can buy?",
            "answer": "No, there is no limit to the number of tickets you can purchase. Buying more tickets increases your chances of winning."
        },
        {
            "question": "How is the winner chosen?",
            "answer": "Winners are chosen through a random drawing from all the entries received. The draw is conducted by our automated system to ensure fairness."
        },
        {
            "question": "When will the winners be announced?",
            "answer": "Winners are announced within 48 hours after the raffle closes. All participants will be notified via email and the results will be posted on our website."
        }
    ]

    return (
        <ScrollSurface>
            <section id="faq" className="mx-3 sm:mx-4 md:mx-12 w-full lg:max-w-[80%] lg:mx-auto">
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