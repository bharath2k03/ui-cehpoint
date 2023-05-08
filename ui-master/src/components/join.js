import React from 'react';
import './join.css';
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'

function Join() {

   
  return (
    <div>
      <nav>
        <ul>
          <li><svg width="48" height="28" viewBox="0 0 472 347" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M353.494 92.0419C313.738 92.0419 278.494 111.723 256.99 141.852C235.486 111.723 200.243 92.0419 160.487 92.0419H154.86V136.35H160.487C201.385 136.35 234.659 169.624 234.659 210.522C234.659 251.42 201.385 284.7 160.487 284.7C119.594 284.7 86.3143 251.431 86.3143 210.533V140.761V65.0972H42.0066V140.761V140.941V216.717H42.1698C43.6776 246.137 55.8869 273.577 76.907 294.501C99.2606 316.754 128.945 329.013 160.492 329.013C200.248 329.013 235.492 309.332 256.996 279.203C278.5 309.332 313.744 329.013 353.5 329.013H359.126V284.706H353.5C312.601 284.706 279.321 251.431 279.321 210.533C279.321 169.635 312.596 136.361 353.5 136.361C394.398 136.361 427.678 169.635 427.678 210.533V216.16H471.985V210.533C471.974 145.194 418.822 92.0419 353.494 92.0419Z" fill="#020203"/>
            <path d="M0 175.543L78.3304 97.2125H116.528L38.1918 175.543H0Z" fill="#E41313"/>
            <path d="M91.2205 322.436L169.551 244.106H207.748L129.418 322.436H91.2205Z" fill="#DDD703"/>
            <path d="M243.104 229.258L275.518 196.844H313.715L281.302 229.258H243.104Z" fill="#E41313"/>
            <path d="M40.116 245.467L72.5295 213.048H110.727L78.3078 245.467H40.116Z" fill="#0D71B9"/>
            <path d="M352.127 106.777L384.54 74.3638H422.738L390.324 106.777H352.127Z" fill="#DDD703"/>
            <path d="M365.883 156.965L254.484 268.365L255.28 269.16L366.679 157.761L365.883 156.965Z" fill="#0D71B9"/>
            <path d="M195.345 266.326L116.131 345.54L116.926 346.336L196.14 267.122L195.345 266.326Z" fill="#E41313"/>
            <path d="M407.424 41.1189L296.025 152.518L296.82 153.314L408.22 41.9146L407.424 41.1189Z" fill="#E41313"/>
            <path d="M83.6017 193.019L18.2722 258.349L19.0679 259.144L84.3973 193.815L83.6017 193.019Z" fill="#DDD703"/>
            <path d="M113.558 52.7123L2.15869 164.112L2.95437 164.907L114.354 53.5079L113.558 52.7123Z" fill="#DDD703"/>
            <path d="M86.2636 0H42.0066V35.6937H86.2636V0Z" fill="#020203"/>
            </svg>
          </li>
          <li>
            <div class="dropdown-center">
            <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Explore
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Action two</a></li>
              <li><a class="dropdown-item" href="#">Action three</a></li>
            </ul>
            </div>
          </li>
          <li><a href="#">For Enterprise</a></li>
          <li><a href="#">Students</a></li>
          <li><a href="#">Log In</a></li>
          <li>
            <svg width="30" height="35" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.33398 34.8327V32.0827H11.184V18.0577C11.184 15.491 11.9402 13.207 13.4527 11.2056C14.9652 9.20421 16.959 7.94379 19.434 7.42435V6.09518C19.434 5.3924 19.6861 4.81185 20.1902 4.35352C20.6944 3.89518 21.2979 3.66602 22.0007 3.66602C22.7034 3.66602 23.3069 3.89518 23.8111 4.35352C24.3152 4.81185 24.5673 5.3924 24.5673 6.09518V7.42435C27.0423 7.94379 29.0437 9.20421 30.5715 11.2056C32.0993 13.207 32.8632 15.491 32.8632 18.0577V32.0827H36.6673V34.8327H7.33398ZM22.0007 40.3327C21.0229 40.3327 20.1673 39.9737 19.434 39.2556C18.7007 38.5375 18.334 37.6744 18.334 36.666H25.6673C25.6673 37.6744 25.3083 38.5375 24.5902 39.2556C23.8722 39.9737 23.009 40.3327 22.0007 40.3327ZM13.934 32.0827H30.1132V18.0577C30.1132 15.7966 29.334 13.8716 27.7757 12.2827C26.2173 10.6938 24.3076 9.89935 22.0465 9.89935C19.7854 9.89935 17.868 10.6938 16.2944 12.2827C14.7208 13.8716 13.934 15.7966 13.934 18.0577V32.0827Z" fill="#121212"/>
            </svg>
          </li>
          <li>
            <svg width="38" height="35" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="24" fill="#2F80EC"/>
            <path d="M24.3671 22.5942C22.6667 22.5942 21.2754 22.0531 20.1932 20.971C19.1111 19.8889 18.57 18.4976 18.57 16.7971C18.57 15.0966 19.1111 13.7053 20.1932 12.6232C21.2754 11.5411 22.6667 11 24.3671 11C26.0676 11 27.4589 11.5411 28.5411 12.6232C29.6232 13.7053 30.1643 15.0966 30.1643 16.7971C30.1643 18.4976 29.6232 19.8889 28.5411 20.971C27.4589 22.0531 26.0676 22.5942 24.3671 22.5942ZM12 35V31.3671C12 30.3881 12.2448 29.5507 12.7343 28.8551C13.2238 28.1594 13.8551 27.6312 14.628 27.2705C16.3543 26.4976 18.0097 25.9179 19.5942 25.5314C21.1787 25.1449 22.7697 24.9517 24.3671 24.9517C25.9646 24.9517 27.5491 25.1514 29.1208 25.5507C30.6924 25.9501 32.3414 26.5233 34.0676 27.2705C34.8663 27.6312 35.5105 28.1594 36 28.8551C36.4895 29.5507 36.7343 30.3881 36.7343 31.3671V35H12Z" fill="white"/>
            </svg>
          </li>
          <li>
          <div class="dropdown-center">
            <p class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Tarun 
            </p>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Action two</a></li>
              <li><a class="dropdown-item" href="#">Action three</a></li>
            </ul>
          </div>
          </li>
        </ul>
      </nav>
    <div class="hero"> 
      <div class="hero-content">
        <h2 class="hero-welcome">Welcome!</h2> <br></br>
        <p class="hero-para">Upskill, Build and make yourself industry ready in emerging technologies with our-designed </p> <br></br> 
        <p class="hero-para">courses, Topline Trainers, Internship Programs In Association with world class companies </p> <br></br> 
        <p class="hero-para"> and universities.</p> </div>
        <div class="hero-inline-box"> 
          <h2 class="hero-inline-box-h2">Online CEP <br></br> <span class="hero-span">Solutions!</span></h2>
          <img class="hero-img" src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/01/18182329/basic-computer-courses-list.jpg"></img>
        </div>
      </div>
      <div className="button-group">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link active" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Completed</a>
          </li>
        </ul>
      </div>
      <div className="line"></div>

      <p class="get-started-p">Get started with These Free Courses</p>  
      
      <div class="below-hero">
        <div class="btn-group" role="group" aria-label="Basic outlined example">
          <button type="button" class="btn btn-outline-primary btn-left">Left</button>
          <button type="button" class="btn btn-outline-primary">Right</button>
        </div>
        <div class="container" style={{border:'1px solid #cecece'}}>
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
            <div class="col">
              <div class="card">
                <img src={img1} class="card-img-top" alt="Hollywood Sign on The Hill"/>
                <div class="card-body">
                  <h5 class="card-title">Blockchain</h5>
                  <p class="card-text">Course</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src={img2} class="card-img-top" alt="Palm Springs Road" />
                <div class="card-body">
                  <h5 class="card-title">Web 3.0</h5>
                  <p class="card-text">Course</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src={img3} class="card-img-top" alt="Los Angeles Skyscrapers" />
                <div class="card-body">
                  <h5 class="card-title">Rust</h5>
                  <p class="card-text">Course</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
  
  );
} //d

export default Join;
