import React from 'react'

const Image = ({item}) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.urls.raw} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.user.name}</h1>
          <ul>
            <li>
              <strong>Description:</strong> {item.alt_description}
            </li>
            <li>
              <strong>Download:</strong>
              <a href={item.links.download} >Click here</a>
            </li>
           
          </ul>
        </div>
       
      </div>
    </div>
  )
}

export default Image
