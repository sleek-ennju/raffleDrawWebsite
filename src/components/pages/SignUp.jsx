import { useState } from 'react';
import { Link } from 'react-router-dom';
import client from '../../assets/images/happyClient.png';
import svgBG from '../../assets/images/signup_bg.svg';
import client4 from '../../assets/images/Ellipse4.png';
import client5 from '../../assets/images/Ellipse5.png';
import client6 from '../../assets/images/Ellipse6.png';
import client7 from '../../assets/images/Ellipse7.png';
import { PlusIcon, EyeIcon, EyeSlashIcon, ArrowLeftStartOnRectangleIcon } from '@heroicons/react/16/solid';



function SignUp() {
  const [revealPassword, setRevealPassword] = useState(false);
  const [revealConfirmPassword, setRevealConfirmPassword] = useState(false);

  return (
    <section className="relative w-full h-full bg-white px-3 sm:px-4 md:px-6 lg:px-20 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* background image */}
      <div className='absolute top-0 left-0 w-full h-full'>
        <img src={svgBG} alt="background shape" />
      </div>

      <Link to="/" className='absolute top-2 left-4 cursor-pointer'>
        <ArrowLeftStartOnRectangleIcon className='w-6 h-6 text-blackclr'/>
      </Link>

      {/* sign up sub heading */}
      <div className='relative z-10'>
        <p className='text-blackclr text-lg md:text-xl font-medium font-dmsans'>Unlock Your Luck with Every Entry</p>
        <h2 className="text-blackclr text-3xl md:text-4xl font-bold font-lato capitalize mt-4 mb-8 xxsm:max-w-[100%] max-w-[90%] sm:max-w-[60%] md:max-w-[80%]">Sign Up, Join the Thrill, <span className='text-buttonBottom'>&</span> Be the Next Big Winner!</h2>
        <div className='flex items-center'>
          <div className='w-[2rem] h-[2rem] rounded-[50%] overflow-hidden bg-white relative z-[5] shadow-lg border-2 border-solid border-buttonBottom'>
            <img src={client} className='w-full h-full  object-cover' alt="client close up" />
          </div>
          <div className='w-[2rem] h-[2rem] rounded-[50%] overflow-hidden relative z-[4] shadow-lg -ml-1 border-2 border-solid border-buttonBottom'>
            <img src={client4} className='w-full h-full  object-cover' alt="client close up" />
          </div>
          <div className='w-[2rem] h-[2rem] rounded-[50%] overflow-hidden relative z-[3] shadow-lg  -ml-1 border-2 border-solid border-buttonBottom'>
            <img src={client5} className='w-full h-full  object-cover' alt="client close up" />
          </div>
          <div className='w-[2rem] h-[2rem] rounded-[50%] overflow-hidden relative z-[2] shadow-lg bg-blackclr -ml-1 border-2 border-solid border-buttonBottom'>
            <img src={client} className='w-full h-full  object-cover' alt="client close up" />
          </div>
          <div className='w-[2rem] h-[2rem] rounded-[50%] overflow-hidden relative z-[1] shadow-lg -ml-1 border-2 border-solid border-buttonBottom'>
            <img src={client6} className='w-full h-full  object-cover' alt="client close up" />
          </div>
          <div>
            <PlusIcon className='w-6 h-6 text-black font-semibold' />
          </div>
          <div className='w-[2rem] h-[2rem] rounded-[50%] overflow-hidden shadow-lg border-2 border-solid border-buttonBottom'>
            <img src={client7} className='w-full h-full  object-cover' alt="client close up" />
          </div>
        </div>
      </div>

      {/* sign up form */}
      <div className='grid grid-cols-1 gap-8 relative z-10 bg-signupBg shadow-md p-8 rounded-lg'>
        <div>
          <h3 className='text-2xl text-blackclr font-bold font-lato mb-2'>Join Us<span className='text-buttonBottom'>!</span></h3>
          <p className='text-textGrey text-sm md:text-base font-light'>Are you ready to take a chance and join the thrill? Become a part of our vibrant community and stand a chance to win big!</p>
        </div>
        <form action="" method='post' className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='flex flex-col gap-1'>
            <label htmlFor="firstName">First Name<span className='text-buttonBottom ml-2'>*</span></label>
            <input type="text" name="firstName" id="firstName" className='outline-none border border-solid border-textGrey text-blackclr text-base rounded-lg p-2' />
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="lastName">Last Name<span className='text-buttonBottom ml-2'>*</span></label>
            <input type="text" name="lastName" id="lastName" className='outline-none border border-solid border-textGrey text-blackclr text-base rounded-lg p-2' />
          </div>
          <div className='flex flex-col gap-1 md:col-span-2'>
            <label htmlFor="email">Email<span className='text-buttonBottom ml-2'>*</span></label>
            <input type="email" name="email" id="email" className='outline-none border border-solid border-textGrey text-blackclr text-base rounded-lg p-2' />
          </div>
          <div className='flex flex-col gap-1 md:col-span-2'>
            <label htmlFor="password">Password<span className='text-buttonBottom ml-2'>*</span></label>
            <div className='relative w-full border border-solid border-textGrey rounded-lg'>
              <input type={revealPassword ? "password" : "text"} name="password" id="password" className='w-full text-blackclr text-base py-2 pl-2 pr-7 outline-none rounded-lg' />
              <span className='absolute top-[50%] right-1 transform translate-y-[-50%] cursor-pointer' onClick={()=> setRevealPassword(!revealPassword)}>{revealPassword ? <EyeIcon className='w-4 h-4 text-blackclr' /> : <EyeSlashIcon className='w-4 h-4 text-blackclr'/> }</span>
            </div>
          </div>
          <div className='flex flex-col gap-1 md:col-span-2'>
            <label htmlFor="confirmPassword">Confirm Password<span className='text-buttonBottom ml-2'>*</span></label>
            <div className='relative w-full outline-none border border-solid border-textGrey rounded-lg'>
              <input type={revealConfirmPassword ? "password" : "text"} name="confirmPassword" id="confirmPassword" className='w-full text-blackclr text-base py-2 pl-2 pr-7 outline-none rounded-lg' />
              <span className='absolute top-[50%] right-1 transform translate-y-[-50%] cursor-pointer' onClick={()=> setRevealConfirmPassword(!revealConfirmPassword)}>{revealConfirmPassword ? <EyeIcon className='w-4 h-4 text-blackclr' /> : <EyeSlashIcon className='w-4 h-4 text-blackclr'/> }</span>
            </div>
          </div>
          <button className='bg-gradient-to-b from-buttonTop to-buttonBottom text-white p-2 rounded-lg font-lato text-lg md:col-span-2' type="submit">Register</button>
        </form>

        {/* already a user section */}
        <div className='flex justify-center gap-2'>
          <h3>Already a user?</h3>
          <Link to="/login" className='text-buttonBottom'>Login</Link>
        </div>
      </div>
    </section>
  )
}

export default SignUp