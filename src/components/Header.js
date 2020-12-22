import React from 'react'
import src from '../img/th.jpg'


const Header = () => {
  return (
   <header className="text-center mt-4">
     <img src={src} alt="" style={{borderRadius:"50px"}}/>

     <h2 className=" mt-4 mb-3" style={{color:"green",fontSize:"35px"}}>Photo Search App</h2>
   </header>
  )
}

export default Header
