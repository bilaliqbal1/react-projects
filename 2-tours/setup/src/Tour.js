import React, { useState } from 'react';

const Tour = ({id, image, info, price, name, removeTour }) => {
  const [more, setMore] = useState(false)
  return <article className="single-tour">
    <img src={image} alt={name}/>
    <footer>
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">${price}</h4>
      </div>
      <p>{more? info:`${info.substring(0,100)}...`}
      <button onClick={()=>setMore(!more)}>
        {more? 'Show less':'more'}
      </button>
      </p>
      <button className="delete-btn" onClick={()=>removeTour(id)}>Not Interested </button>
    </footer>
  </article>
};

export default Tour;
