import React from 'react'
import "./nav.css";

const Nav = () => {
  return (
    <nav>
      <div className="outterNav">
        <div className="li">
          <ul className='ul'>
            <li><a href="#home">  <i className='icon-home'></i>  </a></li>
            <li><a href="#about"> <i className='icon-user'></i></a></li>
            <li><a href="#education"> <i className='icon-graduation'></i></a></li>
            <li><a href="#project"> <i className='icon-docs'></i></a></li>
            <li><a href="#contact"> <i className='icon-info'></i></a></li>
          </ul>
        </div>
      </div>
    </nav>
    
  )
}

export default Nav