import React from 'react'
import hotelImage from '../Pictures/wss-main.avif';
import './Card.css';



const Card = () => {
  return (
    <div className="card-box">
      <img
        src={hotelImage}
        alt="image of westin in seattle"
        className="meetingPic"
      />
      <div className="divider"></div>
      <h2 className="card-title">The Westin Seattle</h2>
    </div>
  );
};



export default Card
