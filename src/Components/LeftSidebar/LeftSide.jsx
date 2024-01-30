import React, { useContext } from 'react'
import {AuthContext} from '../AppContext/AppContext'
import ava from "../../Assets/3551739.jpg"
import { Avatar, Tooltip } from '@material-tailwind/react'
const LeftSide = () => {
  const {user,userData} = useContext(AuthContext);
  return (
    <div className='flex flex-col h-screen bg-white pb-4 border-2 rounded-r-xl shadow-lg'>
       <div  className='flex flex-col items-center relative'>
        <img className='h-28 w-full rounded-r-xl' src={ava} alt="natire"/>
        <div className='absolute -bottom-4'>
            <Tooltip content="profile" placement="top">
                <Avatar size = "md" src={ava} alt='avatar'></Avatar>
            </Tooltip>
        </div>
      </div>
       <div className='flex flex-col items-center pt-6'>
         <p className='font-roboto font-medium text-md text-gray-700 no-underline tracking-normal leading-none'>
             {user?.email || userData?.email}
         </p>
         {/* <p className='font-roboto font-medium text-xs text-gray-700 no-underline tracking-normal leading-none'>
             Access exclusive tools & insights
             </p>
         <p className='font-roboto font-medium text-sm text-gray-700 no-underline tracking-normal leading-none py-2'>
             try premium for free
         </p> */}
       </div>{/*
      // <div className='flex flex-col pl-2'>
      //   <div className='flex items-center pb-4'>
      //       <img src={ava} alt='job' className='h-10'/>
      //       <p className='font-roboto font-bold text-lg no-underline tracking-normal leading-none'>
      //           Calionia
      //       </p>
      //   </div>
      //   <div className='flex items-center '>
      //       <img src={ava} alt='job' className='h-10'/>
      //       <p className='font-roboto font-bold text-lg no-underline tracking-normal leading-none'>
      //           React Developer
      //       </p>
      //   </div>
      //   <div className='flex justify-center pt-4'>
      //     <p className='font-roboto font-bold text-md text-[#0177b7] no-underline tracking-normal leading-none'>
      //       Events
      //     </p>
      //     <p className='font-roboto font-bold text-md text-[#0177b7] no-underline tracking-normal leading-none mx-2'>
      //       Groups
      //     </p>
      //     <p className='font-roboto font-bold text-md text-[#0177b7] no-underline tracking-normal leading-none'>
      //       Follow
      //     </p>
      //     <p className='font-roboto font-bold text-md text-[#0177b7] no-underline tracking-normal leading-none mx-2'>
      //       More
      //     </p>
      //   </div>
      // </div>
      // <div className='ml-2 '>
      //   <p className='font-roboto font-bold text-lg no-underline tracking-normal leading-none py-2'>
      //     social Profiles
      //   </p>
      //   <div className='flex items-center'>
      //     <img src={ava} alt='job' className='h-10 mb-4 mr-2'/>
      //     <p className='font-roboto font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r to-red-700 from-blue-500 no-underline tracking-normal leading-none py-2'>
      //       Social Network
      //     </p>
      //   </div>
      //   <div className='flex items-center'>
      //     <img src={ava} alt='job' className='h-10 mb-4 mr-2'/>
      //     <p className='font-roboto font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r to-red-700 from-blue-500 no-underline tracking-normal leading-none py-2'>
      //       Social Network
      //     </p>
      //   </div>
      // </div> */}
    </div>
  )
}

export default LeftSide
