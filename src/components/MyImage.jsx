import React from 'react'
import Face from '../assets/myImage.jpg'
import './MyImage.css'

function MyImage() {
  return (
    <div>
      <img className='pic' src={Face} alt="my face" />
    </div>
  )
}

export default MyImage
