import React from 'react'
import saadmalik from "../assets/saadmalik.jpg"
import Typewriter from "typewriter-effect";
import {Link} from 'react-scroll'


const Profile = () => {
    return ( 
        <div className='container-fluid bg-green vh-100 d-flex flex-column justify-content-around Profile' id='Profile'>
            {/* <ul className="nav justify-content-center mb-5 fs-4">
                <li className="nav-item">
                    <a className="nav-link text-grey" aria-current="page" href="#">Active</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-grey" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-grey" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link  text-grey" href="#" tavIndex="-1" aria-disabled="true">Disabled</a>
                </li>
            </ul> */}
            <nav className="navbar navbar-expand-lg bg-green">

                <Link className="navbar-brand text-grey  fs-4" spy={true}   to="Profile">SAAD MALIK</Link>
                <button className="navbar-toggler navbar-dark " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon text-grey"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-5 fs-4 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link  text-grey" aria-current="page" spy={true}  to="Aboutme">ABOUT ME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-grey" spy={true}  to="Education">EDUCATION</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-grey" spy={true}   to="Projects" tabIndex="-1" >PROJECTS</Link>
                        </li>
                    </ul>

                </div>

            </nav>
            <div className='container px-0 my-auto d-flex flex-row flex-wrap  justify-content-center align-items-center justify-self-center'>
                <div className='d-flex flex-column justify-content-center align-items-center profile-inner-left'>
                    <div>
                        <strong className='text-grey display-5'>HI I AM SAAD MALIK!</strong>
                    </div>
                    <div className='text-brown typewriter fw-bold'> 
                    {/* fs-1 fw-bold */}
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                            }}

                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("COMPUTER ENGINEER")
                                    .deleteAll()
                                    .typeString("MERN STACK DEVELOPER")
                                    .deleteAll()
                                    .typeString("REACT DEVELOPER")
                                    .deleteAll()
                                    .start()
                            }}
                        />
                    </div>
                    
                    <div>
                        <a href="resume.pdf" className='' download= 'saad resume.pdf'>
                            <button className='button text-grey fw-bold mb-3'> GET RESUME</button>
                        </a>
                    </div>

                </div>
                <div className='d-flex flex-column align-items-center profile-inner-right'>
                    <img src={saadmalik} className="profile-pic w-50 " alt="" />


                </div>

            </div>
        </div>
    )
}

export default Profile