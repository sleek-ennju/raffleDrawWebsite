

function HowToCard({icon, step, title, description}) {
  return (
    <div className="bg-cardBg flex flex-col items-center w-full max-w-[17rem] rounded-md py-8 px-4 md:px-3">
        <div className="innerShadow border border-solid border-gradientBottom p-5 rounded-full relative">
            {icon}
            <div className="bg-cardStepBg w-fit text-sm text-white font-semibold font-lato py-1 px-[0.35rem] rounded-full absolute -right-2">
                0{step}
            </div>
        </div>
        <div className="text-center">
            <h4 className="text-white text-2xl font-bold font-lato tracking-wider uppercase mt-8 mb-4">{title}</h4>
            <p className="text-white text-sm font-normal font-dmsans tracking-wide max-w-[85%] mx-auto">{description}</p>
        </div>
    </div>
  )
}

export default HowToCard;