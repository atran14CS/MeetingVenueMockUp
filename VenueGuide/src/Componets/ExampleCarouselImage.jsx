import React from 'react'
import hotelImage from '../Pictures/wss-main.avif';
// import './Card.css';

const ExampleCarouselImage = () => {
  return (
    <div>
     <img
      className="d-block w-100"
      src={hotelImage}
      alt="hotel"
      style={{ maxHeight: '400px', objectFit: 'cover' }}
    />
    </div>
  )
}

export default ExampleCarouselImage
