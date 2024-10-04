import React from 'react'

import "./index.css"
function NoResults(props) {
    const {func, details}=props
    const {paraText,buttonText}=details

    const onclick=()=>{
        func()
    }
  return (
    <div className='no-results-main-container'>
        <img className='no-results-img' src='https://res.cloudinary.com/dtqmufptd/image/upload/v1727970141/Screenshot_2024-10-03_211208_ndt7f3.png' alt="no-results" />
      <p className='no-results-para'>{paraText}</p>
      <button onClick={onclick} className='try-again'>{buttonText}</button>
    </div>
  )
}

export default NoResults
