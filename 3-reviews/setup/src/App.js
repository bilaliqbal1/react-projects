import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
//react icons he jis me se koe bhi laga sakhte hain
// jus us ka link dalna hoga
// import { FaGithubSquare } from 'react-icons/fa';
const url = 'https://course-api.com/react-tours-project'
function App() {
  // return <h2>Tours Project Setup
  //   {/* <FaGithubSquare /> */}
  // </h2>
  return <main>
    <section className="container">
        <div className="title">
          <h2>Our reviews</h2>
          <div className="underline"></div>
        </div>
        <Review />
    </section>
  </main>
}

export default App
