import React, {useState} from 'react'
// import {useHistory} from "react-router-dom"
// import Modal from "./Modal"
import ProjectCards from './ProjectCards'
import SkillSets from './SkillSets'
import DataCollection from './Images/Data-Collection.jpg'
import FundRaising from './Images/Fund Raising.jpg'
import LotsCharity from './Images/Lots Charity.jpg'
import Secure from './Images/Security-App.jpg'
import Umbrela from './Images/Umbrella.jpg'

import {app} from "../Base"

const db = app.firestore();

function Home() {
  // const hist = useHistory();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");


  const PostMessage = async () => {
    await db
    .collection("porfoliomessage")
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
            {/* <li>
              <a href="#blog">Blog</a>
            </li> */}
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
  
      <div class="banner-right-txt text-center">
        <h5 class="mb-2">Hi, There</h5>
        <h4>I'M Samuel Kelechi</h4>
        <div class="two-demo-button mt-3">
          <h5 style={{fontSize:"25px"}}>Web Developer</h5>
        </div>
        <div class="view-buttn mt-md-4 mt-sm-4 mt-3">
          <a href="#contact" class="btn" style={{margin:"5px"}}>Want to Hire?</a>
          <a href="#contact" class="btn" style={{margin:"5px"}}>Need an App?</a>
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
                  I am a creative and motivated Web Developer with experience in creating Web Applications.
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
            <p>sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, eiusmod tempor incididunt
              ut labore et consectetur adipiscing sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet Lorem ipsum
              dolor sit amet, eiusmod tempor incididunt ut labore et consectetur adipiscing</p>
          </div>
          <div class="row text-center" style={{display:"flex", justifyContent:"center"}}>

            <div class="col-lg-3 col-md-3 col-sm-3 col-6 count-num-txt">
              <div class="number-w3three-info">
                <h5>1+</h5>
                <h6 class="pt-2">Experience</h6>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3 col-6 count-num-txt">
              <div class="number-w3three-info">
                <h5>6+</h5>
                <h6 class="pt-2">Projects</h6>
              </div>
            </div>
            {/* <div class="col-lg-3 col-md-3 col-sm-3 col-6 count-num-txt">
              <div class="number-w3three-info">
                <h5>150</h5>
                <h6 class="pt-2">Awards</h6>
              </div>
            </div> */}
            {/* <div class="col-lg-3 col-md-3 col-sm-3 col-6 count-num-txt">
              <div class="number-w3three-info">
                <h5>125</h5>
                <h6 class="pt-2">Tea</h6>
              </div>
            </div> */}
          </div>
        </div>
      </section>
   
      <section class="skills py-lg-4 py-md-3 py-sm-3 py-3" id="skills">
        <div class="container py-lg-5 py-md-4 py-sm-4 py-3">
          <div class="position-title position-relative">
            <h6 class="text-center top-title mb-2">My Skills</h6>
            {/* <div class="sub-position">
              <h3 class="text-center title mb-3">My Achievement & Award</h3>
            </div> */}
            <div class="title-wls-text text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem
                ipsum </p> */}
                <SkillSets />
            </div>
            <hr/>
            <br/>
          </div>
          <h3 style={{textAlign:"center", fontWeight:"bold"}}>Projects Highlight</h3>
          <br/>

          <div class="row" id="gallery">
            <div class="col-lg-6 col-md-6 col-sm-6 my-grid-awards">
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
            <div class="col-lg-6 col-md-6 col-sm-6 my-grid-awards">
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
            <div class="col-lg-6 col-md-6 col-sm-6 my-grid-awards">
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
            <div class="col-lg-6 col-md-6 col-sm-6 my-grid-awards">
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
            <div class="col-lg-6 col-md-6 col-sm-6 my-grid-awards">
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
            <div class="col-lg-6 col-md-6 col-sm-6 my-grid-awards">
              <h4>Rental Application</h4>
              <div class="skills-grids-w3layouts mt-lg-4 mt-3">
                <p>
                  Worked on the Front End with a team to build a web rental platform where estate agents can upload available
                  houses for rental and purchase means, and users can contact them through the platform.
                  <br/>
                  <br/>
                 I see to the market testing of the platform to ascertain users satisfaction before it is launched to the market.
                </p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6 my-grid-awards">
              <h4>School Management App</h4>
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
                {/* <div class="col-lg-6 col-md-6 col-sm-6 my-grid-awards">
              <h4>CodeLab Fund Raising App</h4>
              <div class="skills-grids-w3layouts mt-lg-4 mt-3">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem
                  ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                  et Lorem ipsum </p>
              </div>
            </div> */}
          </div>


        </div>
      </section>
{/*    
      <section class="newsletter py-lg-4 py-md-3 py-sm-3 py-3" id="newsletter">
        <div class="container py-lg-5 py-md-4 py-sm-4 py-3">
          <div class="get-update-wthree">
            <h5 class="mb-2">Get Updates...!</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem
              ipsum </p>
            <form action="#" method="post">
              <div class="mt-lg-5 mt-md-4 mt-3 form-group contact-forms">
                <input type="email" class="form-control" placeholder="Email" required="" />
              </div>
              <button type="submit" class="btn sent-butnn">Subscribe</button>
            </form>
          </div>
        </div>
      </section> */}

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
          Project_Title="Umbrella for the African Child(UTAC) Web Platform"
          Description="A Web platform for an NGO (Umbrella for the African Child (UTAC)). An Organization that is based in Ghana and Nigeria."
          Avatar={Umbrela}
          Link="https://utacngo.web.app/"
          />
          <ProjectCards 
          Project_Title="Web Platform for Lots Foundation"
          Description="This is a web platform developed for an Organization (Lots Charity Foundation), an NGO that caters for Homeless Kids and Motherless Babies."
          Avatar={LotsCharity}
          Link="https://lotsngo.web.app/" 
          />
        </div>

          {/* <div class="row gallery-info">
            <div class="col-lg-4 col-md-4 col-sm-4 gallery-img-grid p-0">
              <div class="gallery-grids">
                <a href="#gal1">
                  <img src="web/images/g1.jpg" alt="news image" class="img-fluid" />
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 gallery-img-grid p-0">
              <div class="gallery-grids">
                <a href="#gal2">
                  <img src="web/images/g2.jpg" alt="news image" class="img-fluid" />
                </a>
              </div>
              <div class="gallery-grids">
                <a href="#gal3">
                  <img src="web/images/g3.jpg" alt="news image" class="img-fluid" />
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 gallery-img-grid p-0">
              <div class="gallery-grids">
                <a href="#gal4">
                  <img src="web/images/g4.jpg" alt="news image" class="img-fluid" />
                </a>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 gallery-img-grid p-0">
              <div class="gallery-grids">
                <a href="#gal5">
                  <img src="web/images/g6.jpg" alt="news image" class="img-fluid" />
                </a>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 gallery-img-grid p-0">
              <div class="gallery-grids">
                <a href="#gal6">
                  <img src="web/images/g5.jpg" alt="news image" class="img-fluid" />
                </a>
              </div>
            </div>
          </div>

          <div id="gal1" class="popup-effect">
            <div class="popup">
              <img src="web/images/g1.jpg" alt="Popup Image" class="img-fluid" />
              <a class="close" href="#gallery">&times;</a>
            </div>
          </div>
      
          <div id="gal2" class="popup-effect">
            <div class="popup">
              <img src="web/images/g2.jpg" alt="Popup Image" class="img-fluid" />
              <a class="close" href="#gallery">&times;</a>
            </div>
          </div>
        
          <div id="gal3" class="popup-effect">
            <div class="popup">
              <img src="web/images/g3.jpg" alt="Popup Image" class="img-fluid" />
              <a class="close" href="#gallery">&times;</a>
            </div>
          </div>
     
          <div id="gal4" class="popup-effect">
            <div class="popup">
              <img src="web/images/g4.jpg" alt="Popup Image" class="img-fluid" />
              <a class="close" href="#gallery">&times;</a>
            </div>
          </div>
         
          <div id="gal5" class="popup-effect">
            <div class="popup">
              <img src="web/images/g6.jpg" alt="Popup Image" class="img-fluid" />
              <a class="close" href="#gallery">&times;</a>
            </div>
          </div>
         
          <div id="gal6" class="popup-effect">
            <div class="popup">
              <img src="web/images/g5.jpg" alt="Popup Image" class="img-fluid" />
              <a class="close" href="#gallery">&times;</a>
            </div>
          </div>
         */}
        </div>
      </section>
   
      {/* <section class="blog py-lg-4 py-md-3 py-sm-3 py-3" id="blog">
        <div class="container py-lg-5 py-md-4 py-sm-4 py-3">
          <div class="position-title position-relative">
            <h6 class="text-center top-title mb-2">My Blog</h6>
            <div class="sub-position">
              <h3 class="text-center title mb-3">Latest Post Blog & News</h3>
            </div>
            <div class="title-wls-text text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem
                ipsum </p>
            </div>
          </div>
          <div class="row mt-lg-4 mt-3">
            <div class="col-lg-6 col-md-6 col-sm-6 blog-two-two">
              <div class="blog-date-time mb-2">
                <ul>
                  <li>
                    <a href="#contact">July 2020/7</a>
                  </li>
                  <li>
                    <a href="#contact">Comments 5</a>
                  </li>
                </ul>
              </div>
              <h4 class="mb-3">
                <a href="#contact">Lorem ipsum dolor</a>
              </h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum nibh urna Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.Vestibulum nibh urna</p>
              <div class="view-buttn my-md-4 my-sm-4 my-3">
                <a href="#contact" class="btn">Book Me</a>
              </div>
              <img src="web/images/blog2.jpg" alt="news image" class="img-fluid" />
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 blog-two-two mt-3">
              <img src="web/images/blog1.jpg" alt="news image" class="img-fluid" />
              <div class="blog-date-time mt-lg-4 mt-3 mb-2">
                <ul>
                  <li>
                    <a href="#contact">July 2020/7</a>
                  </li>
                  <li>
                    <a href="#contact">Comments 5</a>
                  </li>
                </ul>
              </div>
              <h4 class="mb-3">
                <a href="#contact">Lorem ipsum dolor</a>
              </h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum nibh urna Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.Vestibulum nibh urna</p>
              <div class="view-buttn mt-md-4 mt-sm-4 mt-3">
                <a href="#contact" class="btn">Book Me</a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    
      <section class="contact py-lg-4 py-md-3 py-sm-3 py-3" id="contact">
        <div class="container py-lg-5 py-md-4 py-sm-4 py-3">
          <div class="position-title position-relative">
            <h6 class="text-center top-title mb-2">Contact Me</h6>
            <div class="sub-position">
              {/* <h3 class="text-center title mb-3"></h3> */}
            </div>
            <div class="title-wls-text text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">
              <p>Send a message for consultations, training and teamup for any Project <br/>(remote and full time)</p>
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
                    // required="true"
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
                    <a href="https://web.facebook.com/skelechi3" target="blank">
                      <span class="fa fa-facebook mr-lg-3 mr-2"></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/SamuelKelechi" target="blank">
                      <span class="fa fa-github mr-lg-3 mr-2"></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/Samuel_Kelechi1" target="blank">
                      <span class="fa fa-twitter mr-lg-3 mr-2"></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/samuel-kelechi-932984210" target="blank">
                      <span class="fa fa-linkedin mr-lg-3 mr-2"></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/samuelkelechi1/" target="blank">
                      <span class="fa fa-instagram mr-lg-3 mr-2"></span>
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
              <a href="#" target="_blank"> Team CodeLab</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  </div>
    );
  }
  
  export default Home;