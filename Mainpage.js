import React from 'react'

function Mainpage() {
  return (
    <container>
        <section className='mainpage'>
        <div>
            <h2>The TuteDude Receipe of Success</h2>
        </div>
        <div className='main-flex'>
            <div className='box-shadow'>
                <h1>hello</h1>
            </div>
            <div className='list-text'>
                <li><h4>Learn at your own pace</h4></li>
                <li><p>Structure premium curriculum</p></li>
                <li><p>1:1 mentoring & doubt solving in 5 minutes</p></li>
                <li><p>Develop killer real-world projects</p></li>
                <li><p>Become certified Python developer</p></li>
            </div>
        </div>
        <div className='mainpage-btn'>
        <button type='button' className='#'><b>Explore Programs</b></button>
        </div>
        </section>
    </container>
  )
}

export default Mainpage