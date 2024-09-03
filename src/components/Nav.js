import React, { useEffect, useState } from 'react'
import "./Nav.css"
import { useNavigate } from 'react-router-dom';

function Nav() {
    const navigate = useNavigate()

    const [show, handleShow] = useState(false);

    const transitionNavbar = () => {
        if(window.scrollY>100){
            handleShow(true);
        }
        else {
            handleShow(false);
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',transitionNavbar);
        return () => window.removeEventListener('scroll',transitionNavbar);
    }, [])

  return (
    <div className={`nav ${show && 'nav_black'}`}>
        <div className="nav_contents">
            <img onClick={() => navigate('/')} className='nav_logo' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt=""/>

            <img onClick={() => navigate('/profile')} className='nav_avatar' src="https://www.i2clipart.com/cliparts/8/f/2/5/clipart-generic-male-avatar-rectangular-256x256-8f25.png" alt="" />
        </div>
    </div>
  )
}

export default Nav