import React from 'react'
import "./education.css";

const Education = () => {
  return (
    <div className="outterEducation" >
      <div id='education' className="innerEducation leftAdjectment">
        <div className='front-end'><h2>Front-End Skills</h2></div>
      <div className="innerLeft">
          <div className="box">
          <h3>HTML</h3>
          <p>Level <meter max="100" value="92" >85%</meter></p>
          <p>Experiance:8Months</p>
          <p>Made 7project Using HTML</p>
        </div>
        <div className="box">
        <h3>CSS</h3>
          <p>Level<meter max="100" value="86" >85%</meter></p>
          <p>Experiance:7Months</p>
          <p>Made 6project Using CSS</p>
        </div>
        <div className="box">
        <h3>JAVASCRIPT</h3>
          <p>Level <meter max="100" value="68" >85%</meter></p>
          <p>Experiance:4Months</p>
          <p>Made 3project Using HTML</p>
        </div>
        <div className="box">
        <h3>REACT JS</h3>
          <p>Level <meter max="100" value="80" >85%</meter></p>
          <p>Experiance:2Months</p>
          <p>Made 6 project Using HTML</p>
        </div>
      </div>

        <div className="innerCenter">
          <div className="skills"><h1> <span style={{fontSize:'2.3rem'}}>TECHNICAL</span> SKILLS</h1></div>
          <div className="education" style={{
            display: 'flex',
            justifyContent: 'center',
            color:'rgb(93, 217, 176)'
          }}><h2>QUALIFICATION</h2></div>

        <div className="college center">
          <h2>B.COM(COMPUTER APPLICATION)</h2>
          <h3>A.M JAIN COLLEGE</h3>
          <b>University Of Madras</b>
          <p>2020-2023</p>
        </div>
        <div className="tweelth center">
          <h3>Higher Secondary Schooling</h3>
          <h4>P.M.S Matriculation Higher Secondary School</h4>
          <p>2019-2020</p>
        </div>
        <div className="tenth center">
          <h3>Secondary Level Schooling</h3>
          <h4>P.M.S Matriculation Higher Secondary School</h4>
          <p>2018-2019</p>
        </div>
      </div>

      <div className="back-end"><h2>Back-End Skills</h2></div>
        <div className="innerRight">
        <div className="box">
          <h3>NODE-JS</h3>
            <p>Level <meter max="100" value="18" >85%</meter></p>
            <p>Experiance:2Month</p>
        </div>
        <div className="box">
        <h3>EXPRESS-JS</h3>
            <p>Level <meter max="100" value="23" >85%</meter></p>
            <p>Experiance:1Month</p>
        </div>
        <div className="box">
        <h3>MONGO-DB</h3>
            <p>Level <meter max="100" value="16" >85%</meter></p>
            <p>Experiance:2Month</p>
        </div>
        <div className="box">
        <h3>MONGOES</h3>
            <p>Level <meter max="100" value="20" >85%</meter></p>
            <p>Experiance:1Month</p>

           </div>
         </div>
       </div>
     </div>
  )
}

export default Education