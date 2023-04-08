import React from 'react'
import { useState } from 'react'
import './Card.css'
import more from './more.png'
import { Link } from 'react-router-dom'


const Card = (props) =>  {

  // const [count, setCount] = useState(0)
  // const updateCount = () => {
  //   setCount((count) => count + 1);
  // }

  return (
      <div className="Card">
          <Link to={'edit/'+ props.id}><img className="moreButton" alt="edit button" src={more} /></Link>
          <h2 className="title">Name of Studymate: {props.name}</h2>
          <h3 className="author">Major: {props.major}</h3>
          <h5 className="description">Grade: {props.grade}</h5>
          <Link to={'display/'+ props.id}><button>Read Info</button></Link>
      </div>
  );
};

export default Card;