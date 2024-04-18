
function Button({title, action}) {
  return (
    <button 
      onClick={action}
      className="w-fit lg:w-auto flex items-center text-white font-lato text-sm sm:text-base lg:text-lg tracking-wide uppercase bg-gradient-to-b from-buttonTop to-buttonBottom hover:bg-gradient-to-l transition ease-in-out duration-1000 py-2 px-6 rounded-2xl"
    >{title}
    </button>
  )
}

export default Button;