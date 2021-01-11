import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import Jobs from './data';

const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [job, setJob]= useState([]);
  const [value, setValue] = useState(0);
  const fetchJobs = async () =>{
    const response = await fetch(url)
    const jobs = await response.json();
    setJob(jobs)
    setLoading(false)
  };
  useEffect(()=>{
    fetchJobs();
  },[]);
  
  if (loading) {
    return (
      <section className="section loading"> 
      <h1> loading</h1>
    </section>
    );
  }
  const {company, dates, duties, title} = job[value]
  return <section className="section">
    <div className="title">
      <h2>Experience</h2>
      <div className="underline"></div>
    </div>
    <div className="job-center">
      <div className="btn-container">
        {
          job.map((item, index)=>{
            return <button key={item.id} 
            onClick={()=> setValue(index)}
            className={`job-btn ${index === value && 'active-btn'}`}
            >
              {item.company}
            </button>
          })
        }
      </div>
      <article className="job-info">
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className="job-date">{dates}</p>
        {duties.map((duty, index)=>{
          return <div key={index} className="job-desc">
            <FaAngleDoubleRight className="job-icon">
            </FaAngleDoubleRight>
            <p>{duty}</p>
          </div>
        })}
      </article>
    </div>
  </section>

}

export default App
