import React from 'react'
import Mainpage from './Mainpage';

function Landingpage() {
  return (
    <container>
        <section className='container0'>
        <section className="upperheader">
        <div className="heading">
            <h3>An IIT Delhi Alumni initiave</h3>
        </div>
        <div className='container1'>
            <div className='header-left'>
            <h5>the only programme with</h5>
            <h2>FULL<br/>REFUND</h2>
            <h6>on course completion</h6>
            <button type='button' className='know'>know HOW</button>
            </div>
            <div className='header-right'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHlxWP4aemwRFVYJ5EVqXMSpahhnRdHCSDtA&usqp=CAU'/>
            </div>
        </div>
        <div className='workbtn'>
            <button type='text' className='#'>How does it work?</button>
        </div>
        </section>
        <section className="lowerheader">
            <div className='container2'> 
                <div className='header2-left'>
                <h4>Brighten up Yourself with some Latest <br/>Skills</h4>
                <p>Learn any skill at your own pace with personal <br/>mentorship and immediate doubt clearing by<br/> your own dude</p>
                <button type='button' className='programbtn'><b>Explore Programs</b></button>
                </div>
                <div className='header2-right'>
                    <h3>Know About <br/>TuteDude</h3>
                </div>
            </div>     
        </section>
        <section className='middle-section'>
        <div className='main'>
            <div className='card'>
                <p><b>23</b><br/><h4>courses</h4></p>
            </div>
            <div className='card'>
                <p><b>200+</b><br/><h4>hours content</h4></p>
            </div>
            <div className='card'>
                <p><b>700+</b><br/><h4>students doubts solved</h4></p>
            </div>
        </div>
        <div className='second-main'>
            <div className='card'>
                <p><b>699</b><br/><h4>return advantage</h4></p>
            </div>
            <div className='card'>
                <p><h4>highly Skilled &<br/>Structured course</h4></p>
            </div>
            <div className='card'>
                <p><b>5 min</b><br/><h4>doubt clearance<br/>by experts</h4></p>
            </div>
        </div>
        </section>
        <Mainpage/>
        </section>
    </container>
  )
}

export default Landingpage