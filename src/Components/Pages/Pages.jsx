import React from 'react'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import Reset from './Reset'
import {Routes,Route} from 'react-router-dom'
import FriendProfile from './FriendProfile'
import Calender from './Calender'
const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/reset' element={<Reset></Reset>}></Route>
        <Route path = '/calender'element={<Calender></Calender>}></Route>
        <Route path='/profile/:id' element={<FriendProfile></FriendProfile>}></Route>
      </Routes>
    </div>
  )
}

export default Pages
