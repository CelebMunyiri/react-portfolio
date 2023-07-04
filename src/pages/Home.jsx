import React from 'react'
import Navbar from '../components/Navbar'
//import HomeComponent from '../components/HomeComponent'
import '../components/Styles/Home.css'
import myImage from '../assets/myImage.jpg'


const Home=()=>{
  return (
    <div className='div'>
    <div>
    <Navbar/>
    </div>
    <div>
      <img src={myImage} className="myImage" alt='MyImage'/>
    </div>


</div>


  )
}

export default Home
