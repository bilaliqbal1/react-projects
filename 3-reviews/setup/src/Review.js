import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex]= useState(0)
  const {name, job, image, text} = people[index]

  const check = (number) =>{
    if (number > people.length -1) {
      return 0
    }
    if (number < 0) {
      return people.length -1
    }
    return number
  }

  const nextPerson = () =>{
    setIndex((index)=>{
      let newIndex = index +1;
      return check(newIndex);
    })
  }
  const prevPerson = () =>{
    setIndex((index)=>{
      let newIndex = index - 1;
      return check(newIndex);
    })
  }

  const random = ()=>{
    let randomNum =Math.floor(Math.random()*people.length);
    if (randomNum === index) {
      randomNum = index + 1; 
    }
    setIndex(check(randomNum))
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon" >
          <FaQuoteLeft />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job" >{job}</p>
      <p className="info" >{text}</p>
      <div  className="botton-container">
      <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="prev-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className= "random-btn" onClick={random} >Surprise me</button>
    </article>
  )
};

export default Review;
