import React from 'react';

const List = ({person}) => {
  return (
    <>
      {person.map((per)=>{
        const {id,name,age,image} = per;
        return (
        <article key={id} className='per'> 
          <img src={image} alt={name}/>
          <div>
            <h4>{name}</h4>
            <p>{age} years</p>
          </div>
        </article>
        );
      })}
    </>
  );
};

export default List;
