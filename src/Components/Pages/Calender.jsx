import React from 'react'
import { ReactCalendarScheduler } from 'react-calendar-scheduler';
import Navbar from '../Navbar/Navbar'
import LeftSide from '../LeftSidebar/LeftSide'
import RightSide from '../RightSidebar/RightSide'
const Calender = () => {
    const events = [];
  return (
    <div className='w-full'>
      <div className='fixed top-0 z-10 w-full bg-white'>
      <Navbar></Navbar>
      </div>
      <div className='flex bg-gray-100'>
        <div className='flex-auto w-[80%] absolute left-[10%] top-14 bg-gray-100 rounded-xl'>
          {/* <CardSection></CardSection> */}
          <ReactCalendarScheduler
        events={events}
        // Other props
      />
        </div>
      </div>
    </div>
  )
}

export default Calender
