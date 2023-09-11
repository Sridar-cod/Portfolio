import React from 'react'
import "./home.css";
import { FaInstagram,FaLinkedin } from "react-icons/fa";
import { AiOutlineMail, AiFillGithub } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";


const Home = () => {
  return (
    <>
      <div className="outterHome" id='home'>
        <div className="innerHome">
        <div className="profile"></div>
        <div className="name"> <h1>Sridar M</h1></div>
        <div className="para"><p>I'm a front-end developer</p></div>
        <div className="links">
          <ul className='homeLi'>
            <li><a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#search/sridar9771%40gamil.com?compose=CllgCJvkXPvkFSjDCWGWzwHBMdfXWJgkCvjncWRchQfZLJdZtjjVJHmvGgcfPTFwJJnJGBXGCqV">  <AiOutlineMail className="icon" /></a></li>
            <li><a href="https://www.instagram.com/_dhar_sri/"> <FaInstagram className="icon" /></a> </li>
            <li><a href="https://www.linkedin.com/in/sridar-m-37a1a1253/"> <FaLinkedin className="icon" /></a> </li>
            <li><a href="https://github.com/Sridar-cod"><AiFillGithub /></a> </li>
            <li><a href="https://leetcode.com/Sridar-M/"><SiLeetcode /></a> </li>       
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home