import React from 'react'
import "./project.css";
import { useState } from 'react';


const Project = () => {
  // DATA
  var project1 = {
    que1: 'What is this?',
    ans1: ' This is aElectricity Bill Reduction Calculator with the features of calculate eletricity bill and tips to reduce eletricity.',

    que2: "What technology used?",
    ans2: {
      first: "Created by react js",
      second: "CodeEditor vscode",
      third: "Github for post",
      fourth: "Deployment on firebase",
    },

    que4: "What you learnd from this?",
    ans4:"Building a calculator likely involved handling user inputs, performing calculations, and displaying results accurately. I gained experience in data handling, validation,problem solving and manipulation.",

    que3: "How much time you taken?",
    ans3:"7Days"
  }
  const project2 = {
    que1: 'What is this?',
    ans1: 'This is a entry level portfolio represents me and provides insights into who I am.',

    que2: "What technology used?",
    ans2: {
      first: "HTML",
      second:'CSS',
      js: "JAVASCRIPT",
      third: " CodeEditor vscode",
      fourth: "Deployment on firebase",
    },

    que4: "What you learnd from this?",
    ans4:"I learned that how I present my work and myself matters greatly in making a strong impression and The importance of selecting and curating the right content to showcase my skills and achievements became clear.",

    que3: "How much time you taken?",
    ans3:"3Days"
  }
  
  const project3 = {
    que1: 'What is this?',
    ans1: ' Effortless Task Management TodayToDoList - My Daily Productivity Companion',

    que4: "What are the feature you invold?",
    ans4: " There is a features like users to create,manage,delete and track tasks for the day.",

    que3: "How much time you taken?",
    ans3:"15Days",

    que2: "What you learnd from this?",
    ans2: {
      first: "Response",
      second:'StateManagement',
      third: "Handle Local Storage",
      fourth: "Create,Delete,Update",
    },
  }
  

  const project4 = {
    que1: 'What is this?',
    ans1: 'This is  a static web page which represent booking a slot for home Painting',

    que2: "What technology used?",
    ans2: {
      first: "HTML",
      second:'CSS',
      js: "JAVASCRIPT",
      third: " CodeEditor vscode",
      fourth: "Deployment on firebase",
    },

    que4: "What you learnd from this?",
    ans4:"I have learned how to design and layout a webpage, create content, and establish user-friendly navigation. Additionally, I know how to make it easy for visitors to contact me by including a contact form, phone number, email address, and, if applicable, a physical address.",

    que3: "How much time you taken?",
    ans3:"5Days"
  }
  const project5 = {
    que1: 'What is this?',
    ans1: 'Its a basic calculator, and its my first project that I have completed.',

    que2: "What tech stack used?",
    ans2: {
      first: "HTML",
      second:'CSS',
      third: " CodeEditor vscode",
      fourth: "Deployment on firebase",
    },

    que4: "What you learnd from this?",
    ans4:"I have learned to work independently, deploy a project, and add a small animation in the button hovering  and how to placing an image in the background.",

    que3: "How much time you taken to complete?",
    ans3:"1Days"
  }

  // STATEMANAGEMENT


// FOR UPDATE liveLINK
  const [link, setLink] = useState('https://calculator-ece95.web.app/')
  
  // FOR UPDATE codeLink
 const [viewCode,setViewCode] = useState('https://github.com/Sridar-cod/calculator/tree/main/calculator')

// FOR UPDATE PROJECT-INFO
  const [info1, setInfo1] = useState(project5.ans1)
  const [info1q, setInfo1q] = useState(project5.que1)
  const [info2, setInfo2] = useState(project5.ans2)
  const [info2q, setInfo2q] = useState(project5.que2)
  const [info3, setInfo3] = useState(project5.ans3)
  const [info3q, setInfo3q] = useState(project5.que3)
  const [info4, setInfo4] = useState(project5.ans4)
  const [info4q, setInfo4q] = useState(project5.que4)
  const [discription, setDiscription] = useState("I created a basic calculator using HTML and CSS with the guidance of YouTube tutorials. This project helped me learn how to deploy a responsive design. It serves as a test of my knowledge in HTML and CSS. It's my first independent project, and I'm proud of what I've accomplished. This experience has boosted my confidence in web development. I look forward to expanding my skills and tackling more complex projects in the future. I'm grateful for the resources available online to help me learn and grow in this field. This calculator is just the beginning of my journey in web development. I'm excited to see what I can create next!")

// FOR UPDATE IMG
  const [pic, setPic] = useState( { img1: require('./cal.png')
  })
  // FOR UPDATE BORDER-SHAPE
  const [border1, setBorder1] = useState(['59% 41% 89% 11% / 11% 47% 53% 89% ','120px','410px'])
  const [border2, setBorder2] = useState( ['36% 64% 76% 64% / 80% 14% 64% 20%','280px','270px']
  )
  const [border3, setBorder3] = useState(['36% 144% 36% 64% / 80% 36% 641% 20%','120px','190']
  )
  const [border4, setBorder4] = useState(['36% 17% 36% 64% / 10% 36% 64% 20%','130px', '280px']
  )
  
  // FOR UPDATE COLOR
  const [colorChange1, setChangecolor1] = useState('#a200ff')
  const [colorChange2, setChangecolor2] = useState('#ff0000')
  const[colorChange3, setChangecolor3] = useState('#ffe603')
  const [colorChange4, setChangecolor4] = useState('#002fa7')
  
  
// FUNCTIONA
  const display1 = function () {
    //COLORCHANGING
    const newColor1 = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setChangecolor1(newColor1)
    const newColor2 = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setChangecolor2(newColor2)
    const newColor3 = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setChangecolor3(newColor3)
    const newColor4 = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setChangecolor4(newColor4)


    // FOR UPDATE PROJECT-INFO
    setInfo1(project1.ans1) 
    setInfo1q(project1.que1) 
    setInfo2(project1.ans2) 
    setInfo2q(project1.que2) 
    setInfo3(project1.ans3) 
    setInfo3q(project1.que3) 
    setInfo4(project1.ans4) 
    setInfo4q(project1.que4)

    // FOR UPDATE IMG
    setPic({ img1: require('./EB.png') })

      // FOR UPDATE codeLINK
    setViewCode('https://github.com/Sridar-cod/Reduce-EB')
    
    // FOR UPDATE LINK
    setLink('https://eb-calculator-d0adb.web.app/')
    //FOR DISCRIPTION UPDATA
    setDiscription("I have developed a web application that aims to reduce electricity bills, and I conceptualized and created it entirely on my own. This project has been instrumental in honing my coding skills, particularly in JavaScript. Through building an Electricity Bill (EB) calculator, I have learned to think logically and solve complex problems effectively.The EB calculator I designed helps users determine their daily and weekly electricity consumption, ultimately providing an estimate of their electricity bill. Additionally, it offers valuable tips on how to reduce electricity consumption, promoting energy efficiency. This web application serves as an educational tool, empowering users to take control of their electricity usage, make informed decisions, and contribute to a greener environment.In summary, my web application not only enhances my coding skills but also encourages responsible electricity usage and sustainability through practical, user-friendly features.")
   
    // FOR UPDATE BORDER
    setBorder1([
     '18% 52% 89% 11% / 10% 17% 13% 50% ','160px','530px']
    )
    setBorder2([
      '36% 14% 76% 64% / 40% 14% 64% 20%','330px','290px']
    )
    setBorder3([
     '16% 44% 6% 64% / 10% 36% 41% 20%','70px','220px' ]
    )
    setBorder4([
   '65% 35% 89% 11% / 47% 47% 53% 53% ','160px','230px'] 
    )

  }
  const display2 = function () {
    //COLORCHANGING
    const newColor1 = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setChangecolor1(newColor1)
    const newColor2 = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setChangecolor2(newColor2)
    const newColor3 = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setChangecolor3(newColor3)
    const newColor4 = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setChangecolor4(newColor4)
     //FOR DISCRIPTION UPDATA
    setDiscription("I created a new portfolio that better represents me, recognizing the shortcomings of my previous one. As I review this updated portfolio, I find it more satisfying, knowing that I've learned from my past mistakes. This experience has taught me valuable lessons on how to craft an effective portfolio, including the importance of responsiveness and other essential elements. I believe this new portfolio will serve as a valuable tool for showcasing my skills and achievements while demonstrating my growth and improvement.")
        // FOR UPDATE BORDER
        setBorder1([
          '20% 80% 46% 54% / 49% 34% 66% 51%','180px','420px']
         )
         setBorder2([
           '20% 80% 46% 54% / 49% 34% 66% 51%','290px','310px']
         )
         setBorder3([
          '20% 80% 46% 54% / 49% 34% 66% 51%','140px','180px'] 
         )
         setBorder4([
        '20% 80% 46% 54% / 49% 34% 66% 51%','130px','330px'] 
         )
     
     // FOR UPDATE PROJECT-INFO
    setInfo1(project2.ans1) 
    setInfo1q(project2.que1) 
    setInfo2(project2.ans2) 
    setInfo2q(project2.que2) 
    setInfo3(project2.ans3) 
    setInfo3q(project2.que3) 
    setInfo4(project2.ans4) 
    setInfo4q(project2.que4)

  // FOR UPDATE codeLINK
    setViewCode('https://github.com/Sridar-cod/Portfolio-old')
    
     // FOR UPDATE LINK
    setLink('https://portfolio-sd-3d29e.web.app/')
    //  FOR UPDATE IMG
    setPic({ img1: require('./portfolio.png') })
  }
  const display3 = function () {
    //COLORCHANGING
    const newColor1 = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setChangecolor1(newColor1)
    const newColor2 = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setChangecolor2(newColor2)
    const newColor3 = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setChangecolor3(newColor3)
    const newColor4 = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setChangecolor4(newColor4)
        // FOR UPDATE BORDER
        setBorder1([
          '100% 80% 46% 54% / 49% 134% 66% 51%','120px','420px']
         )
         setBorder2([
           '10% 90% 46% 14% / 19% 34% 66% 11%','180px','260px']
         )
         setBorder3([
          '10% 80% 16% 54% / 19% 34% 86% 51%','100px','220px'] 
         )
         setBorder4([
        '10% 40% 46% 54% / 89% 34% 36% 51%' ,'120px','300px']
         )
     
    //FOR DISCRIPTION UPDATAA
     setDiscription("I created a project using React.js, which is a to-do list application. This project has been a significant learning experience for me  development. While I acknowledge that many beginners start with a to-do list app, I chose this project to hone my React skills independently. I acquired valuable knowledge in key areas such as state management and component handling. Working with React allowed me to grasp fundamental concepts of web development, bolstering my confidence in taking on more complex projects in the future. This hands-on experience has been instrumental in my journey to becoming a proficient React developer. In summary, despite its simplicity, this to-do list project has served as a crucial stepping stone in my development as a programmer, enabling me to gain the skills and confidence necessary for more advanced React.js projects.")
     // FOR UPDATE PROJECT-INFO
    setInfo1(project3.ans1) 
    setInfo1q(project3.que1) 
    setInfo2(project3.ans2) 
    setInfo2q(project3.que2) 
    setInfo3(project3.ans3) 
    setInfo3q(project3.que3) 
    setInfo4(project3.ans4) 
    setInfo4q(project3.que4)

          // FOR UPDATE codeLINK
          setViewCode('https://github.com/Sridar-cod/Today-todo-list')
    // FOR UPDATE LINK
    setLink('https://todaytodolist-8ea5c.web.app/')
     // FOR UPDATE IMG
    setPic({ img1: require('./todolist.png') })
  }
  const display4 = function () {
    //COLORCHANGING
    const newColor1 = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setChangecolor1(newColor1)
    const newColor2 = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setChangecolor2(newColor2)
    const newColor3 = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setChangecolor3(newColor3)
    const newColor4 = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setChangecolor4(newColor4)
        // FOR UPDATE BORDER
        setBorder1(['20% 80% 46% 54% / 49% 34% 66% 51%','120px','450px']
          
         )
         setBorder2([
           '100% 0% 95% 5% / 0% 100% 0% 100% ','280px','270px']
         )
         setBorder3([
          '50% 50% 46% 14% / 19% 34% 66% 11%','90px','190px'] 
         )
         setBorder4([
        '40% 40% 46% 14% / 89% 34% 66% 11%' ,'130px','270px']
         )
     
    //FOR DISCRIPTION UPDATA
    setDiscription("I have created a simple Painting booking website with the name of SRIPS PAINTS and using only frontend technologies. The website includes a login form, a slot booking feature, and a paint calculator. The calculator helps users determine the cost and amount of paint required for their house. This project is designed for beginners and focuses solely on frontend development")
     // FOR UPDATE PROJECT-INFO
    setInfo1(project4.ans1) 
    setInfo1q(project4.que1) 
    setInfo2(project4.ans2) 
    setInfo2q(project4.que2) 
    setInfo3(project4.ans3) 
    setInfo3q(project4.que3) 
    setInfo4(project4.ans4) 
    setInfo4q(project4.que4)

          // FOR UPDATE codeLINK
          setViewCode('https://github.com/Sridar-cod/srips-paint')
     // FOR UPDATE LINK
    setLink('https://paints-7b709.web.app/')
     // FOR UPDATE IMG
    setPic({ img1: require('./paint.png') })
  }
  const display5 = function () {
       //COLORCHANGING
       const newColor1 = '#' + Math.floor(Math.random() * 16777215).toString(16);
       setChangecolor1(newColor1)
       const newColor2 = '#' + Math.floor(Math.random() * 16777215).toString(16);
       setChangecolor2(newColor2)
       const newColor3 = '#' + Math.floor(Math.random() * 16777215).toString(16);
       setChangecolor3(newColor3)
       const newColor4 = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setChangecolor4(newColor4)
      // FOR UPDATE BORDER
      setBorder1([
        '48% 52% 89% 11% / 10% 47% 53% 90%   ', '120px','410px']
       )
       setBorder2([
         '36% 64% 76% 64% / 80% 14% 64% 20%', '280px','270px']
       )
       setBorder3([
         '36% 144% 36% 64% / 80% 36% 641% 20%',
         '120px','190']
       )
       setBorder4([
         '36% 17% 36% 64% / 10% 36% 64% 20%',
         '130px', '280px']
       )
   
     //FOR DISCRIPTION UPDATA
     setDiscription("I created a basic calculator using HTML and CSS with the guidance of YouTube tutorials. This project helped me learn how to deploy a responsive design. It serves as a test of my knowledge in HTML and CSS. It's my first independent project, and I'm proud of what I've accomplished. This experience has boosted my confidence in web development. I look forward to expanding my skills and tackling more complex projects in the future. I'm grateful for the resources available online to help me learn and grow in this field. This calculator is just the beginning of my journey in web development. I'm excited to see what I can create next!")
     // FOR UPDATE PROJECT-INFO
    setInfo1(project5.ans1) 
    setInfo1q(project5.que1) 
    setInfo2(project5.ans2) 
    setInfo2q(project5.que2) 
    setInfo3(project5.ans3) 
    setInfo3q(project5.que3) 
    setInfo4(project5.ans4) 
    setInfo4q(project5.que4)

          // FOR UPDATE codeLINK
          setViewCode('https://github.com/Sridar-cod/calculator/tree/main/calculator')
     // FOR UPDATE LINK
    setLink('https://calculator-ece95.web.app/')
     // FOR UPDATE IMG
    setPic({ img1: require('./cal.png') })
  }

  return (
    <>
      <div className='outterProject leftAdjectment' id='project'>
        <div className="leftBox">
          <div className="demo">
            <h2 className='myProject'>My Project</h2>
            <b className='demoText'>Demo</b></div>
          <div className="outterPhotoBox">
            
            <div className="innerPhotoBox" style={{
              transitionDuration:'1s',
            backgroundImage: `url(${pic.img1})`,
           
          }}></div>
            </div>
            <div className="outterButton">
              <div className="viewCodeButton">
                <a  href={viewCode} style={{fontSize:'1.4rem',letterSpacing:'1px',color:'rgb(93, 217, 176)'}}>ViewCode</a>
              </div>
              <div className="viewLiveButton" >
                <a href={link} style={{fontSize:'1.4rem',letterSpacing:'1px',color:'rgb(93, 217, 176)'}}>ViewLive</a>
              </div>
          </div>
        </div>

        <div className="centerBox">
          <div className="heading">
            <p>Let's see my work</p>
            <h2> <b> MY PROJECTS</b> </h2>  
          </div>
          <div className="project">
          <div className="outter1">
              <div  onClick={()=>display1()} className="inner1">
                <h3 >REDUCE EB</h3>
                <b>Project 5</b>
                <p>August 2023</p>
            </div>
          </div>
          <div className="outter1">
              <div   onClick={()=>display2()}className="inner1">
              <h3>PORTFOLIO</h3>
                <b>Project 4</b>
                <p>July 2023</p>
            </div>
          </div>
          <div className="outter1">
              <div  onClick={()=>display3()}className="inner1">
              <h3>TODAY TO-DO LIST</h3>
                <b>Project 3</b>
                <p>June 2023</p>
            </div>
          </div>
          <div  onClick={()=>display4()}className="outter1">
              <div className="inner1">
              <h3>SRIPS PAINTS</h3>
                <b>Project 2</b>
                <p>May 2023</p>
            </div>
          </div>
          <div  onClick={()=>display5()}className="outter1">
              <div className="inner1">
              <h3>BASIC CALCULATOR</h3>
                <b>Project 1</b>
                <p>April 2023</p>
            </div>
            </div>
            </div>

        </div>
        <div className="outterRightBox">
        <div className="upperBox">
          <div className="outterCircleUp">
              <div style={{
                border: `3px solid${colorChange1}`,
                width: `${border1[2]}`,
                height: `${border1[1]}`,
                transitionDuration: '1s',
                borderRadius:`${border1[0]}`,
              }} className="circle1" >
                <section className='innercircle1'>
                <b>{info1q}</b>
                  <p>{info1}</p>
                  </section>
              </div>
          </div> 
        </div>  
          
          <div className="information">
            <div style={{
              border: `3px solid${colorChange2}`,
              width: `${border2[2]}`,
              height:`${border2[1]}`,
              transitionDuration: '1s',
              borderRadius:`${border2[0]}`,
            }} className="circle3">
            <section className='innercircle3'>
                <b style={{fontSize:'1.2rem'}}>{info4q}</b>
                  <p className='lerned'>{info4}</p>
                  </section>
            </div>
            <b className='aboutProject'>{discription}</b>
          </div>
            
        <div className="lowerBox">
          <div className="outterCircleLow">
              <div style={{
                border: `3px solid${colorChange3}`,
                width: `${border3[2]}`,
                height:`${border3[1]}`,transitionDuration: '1s',
                borderRadius:`${border3[0]}`,
              }} className="circle4">
                <section className='innercircle4'>
                <b>{info3q}</b>
                  <p>{info3}</p>
                  </section>
            </div>
              <div style={{
                border: `3px solid${colorChange4}`,
                width: `${border4[2]}`,
                height:`${border4[1]}`,
                transitionDuration: '1s',
                borderRadius:`${border4[0]}`,
              }} className="circle5">
              <section className='innercircle5'>
                <b>{info2q}</b>
                <ol type='a' style={{fontSize:'.9rem'}}>
                  <li>{info2.first}</li>
                  <li>{info2.second}</li>
                  <li>{info2.third}</li>
                  <li>{info2.fourth}</li>
                  </ol>
                  <p></p>
                  </section>
          </div>
         </div>
        </div>
       </div>
      </div>
       
      </>
  )
}

export default Project