import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project'
function App() {
  // const [loading, setLoading] = useState(true);
  const [job, setJob]= useState([]);
  const [value, setValue] = useState(0);
  const fetchJobs = async () =>{
    // setLoading(true)
    try {
      const response = await fetch(url)
      const jobs = await response.json();
      setJob(jobs)
    } catch (error) {
      console.log(error)
    }
    // console.log(tours)
  };
  useEffect(()=>{
    fetchJobs();
  },[]);
  
  if (!url) {
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
