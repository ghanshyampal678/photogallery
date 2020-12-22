import React from 'react'
import Image from '../components/Image'
import src from '../img/spinner.gif'

const Gallery = ({isLoading,items}) => {
 
  
  return isLoading? <img src={src} alt="" className="center m-auto"/>:<section className="cards">
    {
      items.map(item=>(
       <Image key={item.id} item={item}/>
      ))
    }

  </section>
}

export default Gallery
