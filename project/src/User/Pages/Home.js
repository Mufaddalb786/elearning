import React from 'react'

const Home = () => {
  return (
    <>

          <nav className="site-nav">
          <div className="container">
            <div className="site-navigation">
              <a href="index.html" className="logo m-0">Tour <span className="text-primary">.</span></a>

              <ul className="js-clone-nav d-none d-lg-inline-block text-left site-menu float-right">
                <li className="active"><a href="index.html">Home</a></li>
                <li className="has-children">
                  <a href="/">Dropdown</a>
                  <ul className="dropdown">
                    <li><a href="elements.html">Elements</a></li>
                    <li><a href="/">Menu One</a></li>
                    <li className="has-children">
                      <a href="/">Menu Two</a>
                      <ul className="dropdown">
                        <li><a href="/">Sub Menu One</a></li>
                        <li><a href="/">Sub Menu Two</a></li>
                        <li><a href="/">Sub Menu Three</a></li>
                      </ul>
                    </li>
                    <li><a href="/">Menu Three</a></li>
                  </ul>
                </li>
                <li><a href="services.html">Services</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact Us</a></li>
              </ul>

              <a href="/" className="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-none light" data-toggle="collapse" data-target="/main-navbar">
                <span></span>
              </a>

            </div>
          </div>
      </nav>


      <div className="hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="intro-wrap">
                <h1 className="mb-5"><span className="d-block">Let's Enjoy Your</span> Trip In <span className="typed-words"></span></h1>

                <div className="row">
                  <div className="col-12">
                    <form className="form">
                      <div className="row mb-2">
                        <div className="col-sm-12 col-md-6 mb-3 mb-lg-0 col-lg-4">
                          <select name="" id="" className="form-control custom-select">
                            <option value="">Destination</option>
                            <option value="">Peru</option>
                            <option value="">Japan</option>
                            <option value="">Thailand</option>
                            <option value="">Brazil</option>
                            <option value="">United States</option>
                            <option value="">Israel</option>
                            <option value="">China</option>
                            <option value="">Russia</option>
                          </select>
                        </div>
                        
                        <div className="col-sm-12 col-md-6 mb-3 mb-lg-0 col-lg-3">
                          <input type="text" className="form-control" placeholder="/ of People"/>
                        </div>

                      </div>    
                      <div className="row align-items-center">
                        <div className="col-sm-12 col-md-6 mb-3 mb-lg-0 col-lg-4">
                          <input type="submit" className="btn btn-primary btn-block" value="Search"/>
                        </div>
                        {/* <div className="col-lg-8">
                          <label className="control control--checkbox mt-3">
                            <span className="caption">Save this search</span>
                            <input type="checkbox" checked="checked" />
                            <div className="control__indicator"></div>
                          </label>
                        </div> */}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="slides">
                <img src="/Assets/images/hero-slider-1.jpg" alt="Image" className="img-fluid active"/>
                <img src="/Assets/images/hero-slider-2.jpg" alt="Image" className="img-fluid"/>
                <img src="/Assets/images/hero-slider-3.jpg" alt="Image" className="img-fluid"/>
                <img src="/Assets/images/hero-slider-4.jpg" alt="Image" className="img-fluid"/>
                <img src="/Assets/images/hero-slider-5.jpg" alt="Image" className="img-fluid"/>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="untree_co-section">
        <div className="container">
          <div className="row mb-5 justify-content-center">
            <div className="col-lg-6 text-center">
              <h2 className="section-title text-center mb-3">Our Services</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            </div>
          </div>
          
        </div>
      </div>

      <div className="untree_co-section count-numbers py-5">
        <div className="container">
          <div className="row">
            <div className="col-6 col-sm-6 col-md-6 col-lg-3">
              <div className="counter-wrap">
                <div className="counter">
                  <span className="" data-number="9313">0</span>
                </div>
                <span className="caption">No. of Travels</span>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-3">
              <div className="counter-wrap">
                <div className="counter">
                  <span className="" data-number="8492">0</span>
                </div>
                <span className="caption">No. of Clients</span>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-3">
              <div className="counter-wrap">
                <div className="counter">
                  <span className="" data-number="100">0</span>
                </div>
                <span className="caption">No. of Employees</span>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-3">
              <div className="counter-wrap">
                <div className="counter">
                  <span className="" data-number="120">0</span>
                </div>
                <span className="caption">No. of Countries</span>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="untree_co-section">
        <div className="container">
          <div className="row text-center justify-content-center mb-5">
            <div className="col-lg-7"><h2 className="section-title text-center">Popular Destination</h2></div>
          </div>

          <div className="owl-carousel owl-3-slider">

            <div className="item">
              <a className="media-thumb" href="/Assets/images/hero-slider-1.jpg" data-fancybox="gallery">
                <div className="media-text">
                  <h3>Pragser Wildsee</h3>
                  <span className="location">Italy</span>
                </div>
                <img src="/Assets/images/hero-slider-1.jpg" alt="Image" className="img-fluid"/>
              </a> 
            </div>

            <div className="item">
              <a className="media-thumb" href="/Assets/images/hero-slider-2.jpg" data-fancybox="gallery">
                <div className="media-text">
                  <h3>Oia</h3>
                  <span className="location">Greece</span>
                </div>
                <img src="/Assets/images/hero-slider-2.jpg" alt="Image" className="img-fluid"/>
              </a> 
            </div>

            <div className="item">
              <a className="media-thumb" href="/Assets/images/hero-slider-3.jpg" data-fancybox="gallery">
                <div className="media-text">
                  <h3>Perhentian Islands</h3>
                  <span className="location">Malaysia</span>
                </div>
                <img src="/Assets/images/hero-slider-3.jpg" alt="Image" className="img-fluid"/>
              </a> 
            </div>


            <div className="item">
              <a className="media-thumb" href="/Assets/images/hero-slider-4.jpg" data-fancybox="gallery">
                <div className="media-text">
                  <h3>Rialto Bridge</h3>
                  <span className="location">Italy</span>
                </div>
                <img src="/Assets/images/hero-slider-4.jpg" alt="Image" className="img-fluid"/>
              </a> 
            </div>

            <div className="item">
              <a className="media-thumb" href="/Assets/images/hero-slider-5.jpg" data-fancybox="gallery">
                <div className="media-text">
                  <h3>San Francisco, United States</h3>
                  <span className="location">United States</span>
                </div>
                <img src="/Assets/images/hero-slider-5.jpg" alt="Image" className="img-fluid"/>
              </a> 
            </div>

            <div className="item">
              <a className="media-thumb" href="/Assets/images/hero-slider-1.jpg" data-fancybox="gallery">
                <div className="media-text">
                  <h3>Lake Thun</h3>
                  <span className="location">Switzerland</span>
                </div>
                <img src="/Assets/images/hero-slider-2.jpg" alt="Image" className="img-fluid"/>
              </a> 
            </div>

          </div>

        </div>
      </div>


      <div className="untree_co-section testimonial-section mt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <h2 className="section-title text-center mb-5">Testimonials</h2>

              <div className="owl-single owl-carousel no-nav">
                <div className="testimonial mx-auto">
                  <figure className="img-wrap">
                    <img src="/Assets/images/person_2.jpg" alt="Image" className="img-fluid"/>
                  </figure>
                  <h3 className="name">Adam Aderson</h3>
                  <blockquote>
                    <p>&ldquo;There live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
                  </blockquote>
                </div>

                <div className="testimonial mx-auto">
                  <figure className="img-wrap">
                    <img src="/Assets/images/person_3.jpg" alt="Image" className="img-fluid"/>
                  </figure>
                  <h3 className="name">Lukas Devlin</h3>
                  <blockquote>
                    <p>&ldquo;There live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
                  </blockquote>
                </div>

                <div className="testimonial mx-auto">
                  <figure className="img-wrap">
                    <img src="/Assets/images/person_4.jpg" alt="Image" className="img-fluid"/>
                  </figure>
                  <h3 className="name">Kayla Bryant</h3>
                  <blockquote>
                    <p>&ldquo;There live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
                  </blockquote>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>


      <div className="untree_co-section">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-6">
              <h2 className="section-title text-center mb-3">Special Offers &amp; Discounts</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
              <div className="media-1">
                <a href="/" className="d-block mb-3"><img src="/Assets/images/hero-slider-1.jpg" alt="Image" className="img-fluid"/></a>
                <span className="d-flex align-items-center loc mb-2">
                  <span className="icon-room mr-3"></span>
                  <span>Italy</span>
                </span>
                <div className="d-flex align-items-center">
                  <div>
                    <h3><a href="/">Rialto Mountains</a></h3>
                    <div className="price ml-auto">
                      <span>$520.00</span>
                    </div>
                  </div>
                  
                </div>
                
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
              <div className="media-1">
                <a href="/" className="d-block mb-3"><img src="/Assets/images/hero-slider-2.jpg" alt="Image" className="img-fluid"/></a>
                <span className="d-flex align-items-center loc mb-2">
                  <span className="icon-room mr-3"></span>
                  <span>United States</span>
                </span>
                <div className="d-flex align-items-center">
                  <div>
                    <h3><a href="/">San Francisco</a></h3>
                    <div className="price ml-auto">
                      <span>$520.00</span>
                    </div>
                  </div>
                  
                </div>
                
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
              <div className="media-1">
                <a href="/" className="d-block mb-3"><img src="/Assets/images/hero-slider-3.jpg" alt="Image" className="img-fluid"/></a>
                <span className="d-flex align-items-center loc mb-2">
                  <span className="icon-room mr-3"></span>
                  <span>Malaysia</span>
                </span>
                <div className="d-flex align-items-center">
                  <div>
                    <h3><a href="/">Perhentian Islands</a></h3>
                    <div className="price ml-auto">
                      <span>$750.00</span>
                    </div>
                  </div>
                  
                </div>
                
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
              <div className="media-1">
                <a href="/" className="d-block mb-3"><img src="/Assets/images/hero-slider-4.jpg" alt="Image" className="img-fluid"/></a>

                <span className="d-flex align-items-center loc mb-2">
                  <span className="icon-room mr-3"></span>
                  <span>Switzerland</span>
                </span>

                <div className="d-flex align-items-center">
                  <div>
                    <h3><a href="/">Lake Thun</a></h3>
                    <div className="price ml-auto">
                      <span>$520.00</span>
                    </div>
                  </div>
                  
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="untree_co-section">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            
            <div className="col-lg-6">
              <figure className="img-play-video">
                <a id="play-video" className="video-play-button" href="https://www.youtube.com/watch?v=mwtbEGNABWU" data-fancybox>
                  <span></span>
                </a>
                <img src="/Assets/images/hero-slider-2.jpg" alt="Image" className="img-fluid rounded-20"/>
              </figure>
            </div>

            <div className="col-lg-5">
              <h2 className="section-title text-left mb-4">Take a look at Tour Video</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

              <p className="mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>

              {/* <ul className="list-unstyled two-col clearfix">
                <li>Outdoor recreation activities</li>
                <li>Airlines</li>
                <li>Car Rentals</li>
                <li>Cruise Lines</li>
                <li>Hotels</li>
                <li>Railways</li>
                <li>Travel Insurance</li>
                <li>Package Tours</li>
                <li>Insurance</li>
                <li>Guide Books</li>
              </ul> */}

              <p><a href="/" className="btn btn-primary">Get Started</a></p>

              
            </div>
          </div>
        </div>
      </div>

      
      
      <div className="py-5 cta-section">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12">
              <h2 className="mb-2 text-white">Lets you Explore the Best. Contact Us Now</h2>
              <p className="mb-4 lead text-white text-white-opacity">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, fugit?</p>
              <p className="mb-0"><a href="booking.html" className="btn btn-outline-white text-white btn-md font-weight-bold">Get in touch</a></p>
            </div>
          </div>
        </div>
      </div>

      <div className="site-footer">
        <div className="inner first">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className="widget">
                  <h3 className="heading">About Tour</h3>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                <div className="widget">
                  {/* <ul className="list-unstyled social">
                    <li><a href="/"><span className="icon-twitter"></span></a></li>
                    <li><a href="/"><span className="icon-instagram"></span></a></li>
                    <li><a href="/"><span className="icon-facebook"></span></a></li>
                    <li><a href="/"><span className="icon-linkedin"></span></a></li>
                    <li><a href="/"><span className="icon-dribbble"></span></a></li>
                    <li><a href="/"><span className="icon-pinterest"></span></a></li>
                    <li><a href="/"><span className="icon-apple"></span></a></li>
                    <li><a href="/"><span className="icon-google"></span></a></li>
                  </ul> */}
                </div>
              </div>
              <div className="col-md-6 col-lg-2 pl-lg-5">
                <div className="widget">
                  <h3 className="heading">Pages</h3>
                  {/* <ul className="links list-unstyled">
                    <li><a href="/">Blog</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact</a></li>
                  </ul> */}
                </div>
              </div>
              <div className="col-md-6 col-lg-2">
                <div className="widget">
                  <h3 className="heading">Resources</h3>
                  {/* <ul className="links list-unstyled">
                    <li><a href="/">Blog</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact</a></li>
                  </ul> */}
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="widget">
                  <h3 className="heading">Contact</h3>
                  {/* <ul className="list-unstyled quick-info links">
                    <li className="email"><a href="/">mail@example.com</a></li>
                    <li className="phone"><a href="/">+1 222 212 3819</a></li>
                    <li className="address"><a href="/">43 Raymouth Rd. Baltemoer, London 3910</a></li>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
        </div>



        
      </div>

      

    </>
  )
}

export default Home