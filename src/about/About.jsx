import React from 'react'
import "./about.css";

const About = () => {
  return (
    <div>
      <div id='about'  className="outterAbout">
        <div className="innerAbout">
          <h1 className='aboutMe'>About Me</h1>
          <div className="top">
            <div className="photoAbout"> </div>
            <div className="aboutMePara"> Hello, I'm Sridar, a dedicated web developer with a passion for crafting seamless and visually appealing user experiences. With a strong foundation in frontend development, I'm actively seeking opportunities for both internships and full-time positions. My daily routine revolves around honing my skills through hands-on practice, tackling diverse projects, and continuously enhancing my problem-solving abilities. I thrive on creating elegant and functional websites that marry aesthetics with functionality. If you're looking for a motivated and adaptable web developer, I'm excited to bring my expertise to your team.</div>
          </div>
          <div className="dailyRotine">
            <div className="sec1">
              <b>Future Plans</b>
              <ul>
                <li>Youtube chennel</li>
                <li>Became a Full Stack Developer</li>
                <li>Build a Food delivery app</li>
              </ul>
            </div>
            <div className="arowLogo"></div>
            <div className="sec1">
              <b>Hobbies</b>
              <ul>
                <li>Shuttlecock</li>
                <li>Cricket</li>
                <li>Swimming</li>
              </ul>
            </div>
            <div className="arowLogo"></div>
            <div className="sec1">
              <b>Interest</b>
              <ul>
                <li>Web Development</li>
                <li>App Development</li>
                <li>Editing</li>
              </ul>
            </div>
            <div className="arowLogo"></div>
            <div className="sec1">
              <b>Productivity</b>
              <ul>
                <li>LeetCode</li>
                <li>Learning Back-End Technology</li>
                <li>Working on Project</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
   </div>
  )
}

export default About