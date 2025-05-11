import React from 'react'

const GalleryCard = ({photo}) => {
  return (
    <div className='border shadow-md relative overflow-hidden '>
        <img src={photo.image} alt="" className='transition-transform  hover:scale-125 duration-300'/>
    </div>
  )
}

export default GalleryCard