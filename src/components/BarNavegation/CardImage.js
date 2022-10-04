import React from 'react'
const CardImage = ({imagen, titulo, description, text}) => {
  return (
    <div className='container w-4/12 flex m-auto'>
      <div>
        <img src={imagen} alt='imagen'/>
      </div>
       <div className='absolute '>
        <div className='mt-10 ml-4'>
        <h1 className='font-bold text-base'>{titulo}</h1>
        <p className='text-sm text-green-800 font-bold'>{description}</p>
        </div>
        <button class="bg-main-light hover:bg-white text-white font-bold py-2 px-6 mt-10 ml-4">
        {text}
        </button>
       </div>
    </div>
  )
}

export default CardImage