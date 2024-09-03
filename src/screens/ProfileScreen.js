import React from 'react'
import "./ProfileScreen.css"
import Nav from '../components/Nav.js'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice.js'
import { auth } from '../components/firebase.js'
import PlanScreen from './PlanScreen.js'

function ProfileScreen() {
    const user = useSelector(selectUser);
  return (
    <div className='profileScreen'>
        <Nav/>
        <div className="profileScreen_body">
            <h1>Edit Profile</h1>
            <div className="profileScreen_info">
                <img src="https://www.i2clipart.com/cliparts/8/f/2/5/clipart-generic-male-avatar-rectangular-256x256-8f25.png" alt="" />
                <div className="profileScreen_details">
                    <h2>{user.email}</h2>
                    <div className="profileScreen_plans">
                        <h3>Plans</h3>
                        <PlanScreen/>
                        <button onClick={() => auth.signOut()} className='profileScreen_signOut'>Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen