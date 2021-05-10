import React from 'react'

function Home() {
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
          <a href="#contact" class="btn">Contact Me</a>
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
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem
                ipsum </p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-4 about-wthree-images">
              <img src="web/images/ab1.jpg" alt="news image" class="img-fluid" />
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 about-wthree-images">
              <img src="web/images/ab2.jpg" alt="news image" class="img-fluid" />
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 about-wthree-images">
              <img src="web/images/ab3.jpg" alt="news image" class="img-fluid" />
            </div>
          </div>
          <div class="about-history my-lg-5 my-md-4 my-3">
            <h2 class="pb-lg-4 pb-3">Some Facts About Me</h2>
            <p>sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, eiusmod tempor incididunt
              ut labore et consectetur adipiscing sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet Lorem ipsum
              dolor sit amet, eiusmod tempor incididunt ut labore et consectetur adipiscing</p>
          </div>
          <div class="row text-center">

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
            <div class="sub-position">
              <h3 class="text-center title mb-3">My Achievement & Award</h3>
            </div>
            <div class="title-wls-text text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem
                ipsum </p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6 my-grid-awards">
              <h4>Experience</h4>
              <div class="skills-grids-w3layouts mt-lg-4 mt-3">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem
                  ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                  et Lorem ipsum </p>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 my-grid-awards">
              <h4>Runway Model</h4>
              <div class="skills-grids-w3layouts mt-lg-4 mt-3">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem
                  ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                  et Lorem ipsum </p>
              </div>
            </div>
          </div>
          <div class="row my-lg-4 my-3">
            <div class="col-lg-6 col-md-6 col-sm-6 my-grid-awards">
              <h4>Inter National Model</h4>
              <div class="skills-grids-w3layouts mt-lg-4 mt-3">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem
                  ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                  et Lorem ipsum </p>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 my-grid-awards">
              <h4>Brand Model</h4>
              <div class="skills-grids-w3layouts mt-lg-4 mt-3">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem
                  ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                  et Lorem ipsum </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6 my-grid-awards">
              <h4>Fresh Face</h4>
              <div class="skills-grids-w3layouts mt-lg-4 mt-3">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem
                  ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                  et Lorem ipsum </p>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 my-grid-awards">
              <h4>Fashion Model</h4>
              <div class="skills-grids-w3layouts mt-lg-4 mt-3">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem
                  ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                  et Lorem ipsum </p>
              </div>
            </div>
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
        <div class="container pt-lg-5 pt-md-4 pt-sm-4 pt-3">
          <div class="position-title position-relative">
            <h6 class="text-center top-title mb-2">PROJECTS DONE</h6>
            <div class="sub-position">
              <h3 class="text-center title mb-3">Check Out My Projects</h3>
            </div>
            <div class="title-wls-text text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem
                ipsum </p>
            </div>
          </div>
          <div class="row gallery-info">
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
        
        </div>
      </section>
   
      <section class="blog py-lg-4 py-md-3 py-sm-3 py-3" id="blog">
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
      </section>
    
      <section class="contact py-lg-4 py-md-3 py-sm-3 py-3" id="contact">
        <div class="container py-lg-5 py-md-4 py-sm-4 py-3">
          <div class="position-title position-relative">
            <h6 class="text-center top-title mb-2">Contact Me</h6>
            <div class="sub-position">
              {/* <h3 class="text-center title mb-3"></h3> */}
            </div>
            <div class="title-wls-text text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">
              <p>You can send a message for consultations and any job (remote and full time) available</p>
            </div>
          </div>
          <div class=" contact-form-txt">
            <form action="#" method="post">
              <div class="w3pvt-wls-contact-mid">
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-6 form-group contact-forms">
                    <input type="text" class="form-control" placeholder="First Name" required="" />
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6 form-group contact-forms">
                    <input type="text" class="form-control" placeholder="Last Name" required="" />
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-6 form-group contact-forms">
                    <input type="email" class="form-control" placeholder="Email" required="" />
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6 form-group contact-forms">
                    <input type="text" class="form-control" placeholder="Phone" required="" />
                  </div>
                </div>
                <div class="form-group contact-forms">
                  <textarea class="form-control" placeholder="Message" rows="3" required=""></textarea>
                </div>
                <button type="submit" class="btn sent-butnn">Send</button>
              </div>
            </form>
          </div>
        </div>
      </section>
   
      <section class="map-address py-3">
        <div class="container py-2">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6 address_mail_footer_grids ">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3539.812628729253!2d153.014155!3d-27.4750921!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a0835840a2f%3A0xdd5e3f5c208dc0e1!2sMelbourne+St%2C+South+Brisbane+QLD+4101%2C+Australia!5e0!3m2!1sen!2sin!4v1492257477691"></iframe>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 contact-w3pvt-address">
              <div class=" footer-top">
                <h4 class="mb-lg-4 mb-3">Contact Me</h4>
                <p>
                  <span>Address</span> :Lagos, 102241
                  <br/>Nigeria.</p>
                <p class="pt-2">
                  <span> Phone</span> :+234 8137253138</p>
                <p class="pt-2">
                  <span>Email</span> :
                  <a href="/">ujunwasamuelk@yahoo.com</a>
                </p>
              </div>
              <div class="social-icons mt-lg-3 mt-2">
                <ul>
                  <li>
                    <a href="#">
                      <span class="fa fa-facebook mr-lg-3 mr-2"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="fa fa-twitter mr-lg-3 mr-2"></span>
                    </a>
                  </li>
                  {/* <li>
                    <a href="#">
                      <span class="fa fa-rss mr-lg-3 mr-2"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="fa fa-envelope mr-lg-3 mr-2"></span>
                    </a>
                  </li> */}
                  <li>
                    <a href="#">
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