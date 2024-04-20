import { PlusIcon, MinusIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const FaqItem = ({question, ans}) =>{
    const [expand, setExpand] = useState(false);

    return (
        <div className="border-b border-solid border-b-gradientTop ">
                <div className="flex items-center justify-between gap-4 mb-4">
                    <h3 className=" text-lg md:text-2xl font-semibold font-lato text-white">{question}</h3>
                    <div className="text-base cursor-pointer" onClick={()=> setExpand(!expand)}>
                        {expand ? <MinusIcon className="w-4 h-4 text-white"/> : <PlusIcon className="w-4 h-4 text-white" />}
                    </div>
                </div>
                <AnimatePresence>
                    ${expand && (
                        <motion.p 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        exit={{ opacity: 0, height: 0 }}
                        className={`faq-ans font-dmsans text-sm text-white font-normal mb-4`}>{ans}</motion.p>
                        )}
                </AnimatePresence>
        </div>
    )
}

export default FaqItem;