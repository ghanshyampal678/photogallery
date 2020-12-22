import React, { useState } from 'react'


const Input = ({getQuery}) => {
  const [text, setText] = useState('')

  const onChange = (q) => {
    setText(q)
    getQuery(q)
  
  }

  return (
    <section className='search'>
      <form>
        <input
          type='text'
          className='form-control'
          placeholder='Search your image'
          value={text}
          onChange={(e) => {
            onChange(e.target.value)
            e.preventDefault()
          }}
          autoFocus
        
        />
      </form>
    </section>
  )
}

export default Input