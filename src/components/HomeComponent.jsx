import React from 'react'
import myImage from '../assets/myImage.jpg'
import mySkills from '../assets/skills.png'
import '../components/Styles/HomeComponent.css'

const HomeComponent=()=> {
  return (
    <div className='HomeComponent'>
      <img src={myImage} className='myImage' alt="Munyiri's image" />
    </div>
  )
}

export default HomeComponent
