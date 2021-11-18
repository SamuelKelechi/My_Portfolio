import React, {useState} from 'react'
import styled from 'styled-components'
import ProjectCards from './ProjectCards'
import SkillSets from './SkillSets'
import DataCollection from './Images/Data-Collection.jpg'
import FundRaising from './Images/Fund Raising.jpg'
import LotsCharity from './Images/Lots Charity.jpg'
import Secure from './Images/Security-App.jpg'
import Umbrela from './Images/Umbrella.jpg'
import School from './Images/School.png'
import Back from './Images/back.jpg'

import {app} from "../Base"

const db = app.firestore();

function Home() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");


  const PostMessage = async () => {
    await db
    .collection("portfoliomessage")
    .doc()
    .set({
      firstName,
      lastName,
      email,
      phone,
      message
    });
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };



  return (
  <div class="banner-two-img" id="home">
    <div class=" banner-left-side">
      <div class="logo" style={{display:"flex", height:"60px", width:"60px",borderRadius:"30px", backgroundColor:"black", justifyContent:"center",alignItems:"center", color:"white", marginTop:"8px", marginLeft:"5px", border:"1px solid whitesmoke" }}>
        <h1>
          SK
        </h1>
      </div>

      <ul id="menu">
        <li>
          <input id="check02" type="checkbox" name="menu" />
          <label for="check02">
            <span class="fa fa-bars" aria-hidden="true"></span>
          </label>
          <ul class="submenu">
            <li>
              <a href="index.html" class="active">Home</a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#skills">My Skills</a>
            </li>
            <li>
              <a href="#gallery">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
        </li>
      </ul>
 
    </div>
    <div class="banner-right-side">
  
      <div class="banner-right-txt text-center" style={{
        // backgroundImage: `url(${Back})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition:"center",
        backgroundSize:"cover"
      }}>
        <h5 class="mb-2" style={{fontSize:"20px", fontWeight:"bolder"}}>Hi, There</h5>
        <h4><NameContainer>I'M Samuel Kelechi</NameContainer></h4>
        <div class="two-demo-button mt-3">
          <h5 style={{fontSize:"25px", fontWeight:"bolder"}}>Web Developer</h5>
        </div>
        <div class="view-buttn mt-md-4 mt-sm-4 mt-3">   
          <a href="#contact" class="btn" style={{margin:"5px", borderRadius:"4px", backgroundColor:"white"}}>Want to Hire?</a>
          <a href="https://wa.me/2348137253138" target="_blank" message="Hi, Just viewed your Portfolio" rel="noopener noreferrer" class="btn" style={{margin:"5px", borderRadius:"4px", backgroundColor:"white"}}>Want to Chat?<i class="fa fa-whatsapp whatsapp-icon" style={{
            color:"#FFF", backgroundColor:"#25d366", borderRadius:"50px", fontSize: "15px", boxShadow: "2px 2px 3px #999", margin:"2px"
          }}></i></a>
        </div>
      </div>
   
   
      <section class="about py-lg-4 py-md-3 py-sm-3 py-3" id="about">
        <div class="container py-lg-5 py-md-4 py-sm-4 py-3">
          <div class="position-title position-relative">
            <h6 class="text-center top-title mb-2">My History</h6>
            <div class="sub-position">
              <h3 class="text-center title mb-3">About Me</h3>
            </div>
            <div class="title-wls-text text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">
              <p>
                <b>
                  I am a creative and motivated Web Developer with experience in creating Interactive Web Applications.
                  Strong Collaboration Skills and Proven history of Application Development.
                </b> 
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-4 about-wthree-images">
              <img src="web/images/ab1.jpg" alt="news image1" class="img-fluid" />
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 about-wthree-images">
              <img src="web/images/ab2.jpg" alt="news image2" class="img-fluid" />
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 about-wthree-images">
              <img src="web/images/ab3.jpg" alt="news image3" class="img-fluid" />
            </div>
          </div>
          <div class="about-history my-lg-5 my-md-4 my-3">
            <h2 class="pb-lg-4 pb-3">Education</h2>
            <h6><b>Web Development (Full Stack)</b></h6>Codelab, Lagos, Nigeria. <br/>2020-2021
            <br/>
            <br/>
            <h6><b>B.Sc Computer Science</b></h6>ESCAE University, Benin Rep. <br/>2014-2018
          </div>
          <br/>
          <div class="row text-center" style={{display:"flex", justifyContent:"center"}}>
            <div class="col-lg-3 col-md-3 col-sm-3 col-6 count-num-txt">
              <div class="number-w3three-info">
                <h5>1+</h5>
                <h6 class="pt-2">Experience</h6>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3 col-6 count-num-txt">
              <div class="number-w3three-info">
                <h5>8+</h5>
                <h6 class="pt-2">Projects</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
   
      <section class="skills py-lg-4 py-md-3 py-sm-3 py-3" id="skills">
        <div class="container py-lg-5 py-md-4 py-sm-4 py-3">
          <div class="position-title position-relative">
            <h6 class="text-center top-title mb-2">My Skills</h6>
            <div class="title-wls-text text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">
                <SkillSets />
            </div>
            <hr/>
            <br/>
          </div>
          <h3 style={{textAlign:"center", fontWeight:"bold"}}>Projects Highlight</h3>
          <br/>

          <div class="row" id="gallery">
            <div class="col-lg-6 col-md-6 col-sm-6 my-grid-awards" style={{borderBottom: "4px solid whitesmoke"}}>
              <h4>AJ Developers Data Collection App</h4>
              <div class="skills-grids-w3layouts mt-lg-4 mt-3">
                <p>
                AJ Developers Data Collection App was build in order to gather data's of developers living in Ajegunle, as
                it is very important in decision making.
                <br />
                <br />
                Worked with the Front End Developers team.
                </p>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 my-grid-awards" style={{borderBottom: "4px solid whitesmoke"}}>
              <h4>CodeLab Fund Raising App</h4>
              <div class="skills-grids-w3layouts mt-lg-4 mt-3">
                <p>
                As means of giving young people the opportunity to become software developers at no cost, CodeLab Fund Raising App was
                developed for fund raising purpose to help sponsor young people living in Ajegunle that wish to start up a career in tech.
                <br/>
                <br/>
                Played role in brainstorming and implementation of the Application
                </p>
              </div>
            </div>
          </div>
          <br/>
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6 my-grid-awards" style={{borderBottom: "4px solid whitesmoke"}}>
              <h4>AJ Report Center</h4>
              <div class="skills-grids-w3layouts mt-lg-4 mt-3">
                <p>
                 Led a team of Developers that build a web application to help curb security challenges facing our community in the
                 first ever Ajegunle Hackathon, which we won in March 2021.
                  <br/>
                  <br/>
                  Played part in the Front End Development
                </p>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 my-grid-awards" style={{borderBottom: "4px solid whitesmoke"}}>
              <h4>Web Platform for An NGO (UTAC)</h4>
              <div class="skills-grids-w3layouts mt-lg-4 mt-3">
                <p>
                  Was the team lead that developed a Web platform for an NGO (Umbrella for the African Child (UTAC)). An Organization
                  that is based in Ghana and Nigeria.
                  <br/>
                  <br/>
                  Serve as DevOps, from development and test to 
                  Deployment and Operations.
                </p>
              </div>
            </div>
          </div>
          <div class="row my-lg-4 my-3">
            <div class="col-lg-6 col-md-6 col-sm-6 my-grid-awards" style={{borderBottom: "4px solid whitesmoke"}}>
              <h4>Web Platform for Lots Foundation</h4>
              <div class="skills-grids-w3layouts mt-lg-4 mt-3">
                <p>
                  Was team lead for the development of an Organization (Lots Charity Foundation) Web Platform, an NGO 
                  that caters for Homeless Kids and Motherless Babies
                  <br/>
                  <br/>
                  Serve as DevOps, from development and test to 
                  Deployment and Operations.
                </p>
              </div>
            </div>

            <div class="col-lg-6 col-md-6 col-sm-6 my-grid-awards" style={{borderBottom: "4px solid whitesmoke"}}>
              <h4>School Project App</h4>
              <div class="skills-grids-w3layouts mt-lg-4 mt-3">
                <p>
                  Was involved in the development of a school Management application for Primary and Secondary Schools 
                  that will help to monitor student learning progress in Coding and Robotics training.
                  <br/>
                  <br/>
                  The platform also contains learning materials.
                </p>
              </div>
            </div>
          </div>

          {/* <div class="row">
            
          </div> */}

        </div>
      </section>
      
      <section class="gallery pt-lg-4 pt-md-3 pt-sm-3 pt-3" id="gallery">
        <div class="container pt-lg-5 pt-md-4 pt-sm-4 pt-3" >
          <div class="position-title position-relative">
            <h6 class="text-center top-title mb-2">PROJECTS DONE</h6>
            <div class="sub-position">
              <h3 class="text-center title mb-3">Check Out My Projects</h3>
            </div>
            <div class="title-wls-text text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">
              <p>You can click on the Card to view some of the hosted Projects</p>
            </div>
          </div>
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
          <ProjectCards
          Project_Title="Developers Data Collection App"
          Description="A Data Collection Application build to gather data of developers living in Ajegunle, which will be vital in decision making."
          Avatar={DataCollection}
          Link="https://ajegunle-developers.web.app" 
          />
          <ProjectCards
          Project_Title="CodeLab Fund Raising App"
          Description="CodeLab Fund Raising App was developed for fund raising purpose to help sponsor young people living in Ajegunle that wish to start up a career in tech."
          Avatar={FundRaising}
          Link="https://codelab-support.web.app"  
          />
          <ProjectCards 
          Project_Title="AJ Report Center"
          Description="A web application developed during an Hackathon to help curb security challenges facing the Ajegunle community."
          Avatar={Secure}
          Link="https://security-dev-project.web.app"  
          />
           <ProjectCards 
          Project_Title="School Project App"
          Description="A school Management application for Primary and Secondary Schools 
                  that will help to monitor student learning progress in Coding and Robotics training."
          Avatar={School}
          Link="https://schoolproject-e54ac.web.app/"
          />
              <ProjectCards 
          Project_Title="Web Platform for Lots Foundation"
          Description="This is a web platform developed for an Organization (Lots Charity Foundation), an NGO that caters for Homeless Kids and Motherless Babies."
          Avatar={LotsCharity}
          Link="https://lotsngo.web.app/" 
          />
          <ProjectCards 
          Project_Title="Umbrella for the African Child(UTAC) Web Platform"
          Description="A Web platform for an NGO (Umbrella for the African Child (UTAC)). An Organization that is based in Ghana and Nigeria."
          Avatar={Umbrela}
          Link="https://utacngo.web.app/"
          />
        </div>


        </div>
      </section>
    
      <section class="contact py-lg-4 py-md-3 py-sm-3 py-3" id="contact">
        <div class="container py-lg-5 py-md-4 py-sm-4 py-3">
          <div class="position-title position-relative">
            <h6 class="text-center top-title mb-2">Contact Me</h6>
            <div class="sub-position">
            </div>
            <div class="title-wls-text text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">
              <p>Send a message for consultations, training and teamup for any Project <br/>(Remote and Onsite)</p>
            </div>
          </div>
          <div class=" contact-form-txt">
            <form>
              <div class="w3pvt-wls-contact-mid">
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-6 form-group contact-forms">
                    <input 
                    type="text" 
                    class="form-control" 
                    placeholder="First Name" 
                    value={firstName} 
                    required="true" 
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6 form-group contact-forms">
                    <input 
                    type="text" 
                    class="form-control" 
                    placeholder="Last Name" 
                    value={lastName} 
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }} 
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-6 form-group contact-forms">
                    <input 
                    type="email" 
                    class="form-control" 
                    placeholder="Email" 
                    value={email} 
                    required="true"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }} 
                    />
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6 form-group contact-forms">
                    <input 
                    type="text" 
                    class="form-control" 
                    placeholder="Phone" 
                    value={phone} 
                    required="true"
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    />
                  </div>
                </div>
                <div class="form-group contact-forms">
                  <textarea 
                  class="form-control" 
                  placeholder="Message" 
                  value={message} 
                  rows="3" 
                  required="true"
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  >

                  </textarea>
                </div>
                <a href="#" class="move-top text-center mt-3">
                <button 
                class="btn sent-butnn"
                onClick={() => {
                  PostMessage();
                  // alert("Message Sent Successfully")
                }}
                style={{
                  display:"flex"
                }}
                >Send</button>
                </a>

              </div>
            </form>
          </div>
        </div>
      </section>
   
      <section class="map-address py-3">
        <div class="container py-2">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6 address_mail_footer_grids ">
            <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Ajeromi%20ifelodun&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 contact-w3pvt-address">
              <div class=" footer-top">
                <h4 class="mb-lg-4 mb-3">Contact Me</h4>
                <p>
                  <span>Address</span> :Lagos, 102241, Nigeria.
                  
                </p>
                <p class="pt-2">
                  <span> Phone</span> :+234 8137253138</p>
                <p class="pt-2">
                  <span>Email</span> :ujunwasamuelk@yahoo.com
                </p>
              </div>
              <div class="social-icons mt-lg-3 mt-2">
                <ul>
                  <li>
                    <a href="https://github.com/SamuelKelechi" target="blank">
                      <span class="fa fa-github mr-lg-3 mr-2"></span>
                    </a>
                  </li>
                  
                  <li>
                    <a href="https://www.linkedin.com/in/samuel-kelechi-932984210" target="blank">
                      <span class="fa fa-linkedin mr-lg-3 mr-2"></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://web.facebook.com/skelechi3" target="blank">
                      <span class="fa fa-facebook mr-lg-3 mr-2"></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/Samuel_Kelechi1" target="blank">
                      <span class="fa fa-twitter mr-lg-3 mr-2"></span>
                    </a>
                  </li>
                  <li>
                  <a href="https://wa.me/2348137253138" target="_blank" rel="noopener noreferrer">
                  <span class="fa fa-whatsapp whatsapp-icon" ></span>
                  </a> 
                  </li>
                </ul>
              </div>
            </div>
          </div>
      </div>

      <div>
          <div class="text-right">
            <a href="#" class="move-top text-center mt-3">
              <span class="fa fa-arrow-up" aria-hidden="true"></span>
            </a>
          </div>

        </div>
      </section>
    
      <footer class=" py-lg-3 py-md-2 py-sm-3 py-2">
        <div class="container pb-lg-3 pb-2">
          <div class="bottem-txt-footer text-center pt-md-4 pt-3">
            <p>
              ©2021 SamTech. All Rights Reserved | Design by
              <a href="#" target="_blank"> Team Soft Inc.</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  </div>
    );
  }
  
  export default Home;

const NameContainer = styled.div`
  background-color:white;
  overflow: hidden;       /* Ensures the content is not revealed until the animation */
  border-right: .15em solid C3008B;       /* The typwriter cursor */
  white-space: nowrap;      /* Keeps the content on a single line */
  margin: 0 auto;       /* Gives that scrolling effect as the typing happens */
  // letter-spacing: .15em;    /* Adjust as needed */
  animation: typing 10s steps(40, end), blink-caret .75s step-end infinite;

  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }
  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: orange; }
    }
  }
}
`



// <div class="col-lg-6 col-md-6 col-sm-6 my-grid-awards" style={{borderBottom: "4px solid whitesmoke"}}>
// <h4>Rental Application</h4>
// <div class="skills-grids-w3layouts mt-lg-4 mt-3">
//   <p>
//     Worked on the Front End with a team to build a web rental platform where estate agents can upload available
//     houses for rental and purchase means, and users can contact them through the platform.
//     <br/>
//     <br/>
//    I see to the market testing of the platform to ascertain users satisfaction before it is launched to the market.
//   </p>
// </div>
// </div>