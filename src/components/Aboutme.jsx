import React from 'react'


const Aboutme = () => {
    return (
        <div className='vh-100 d-flex Aboutme' id='Aboutme'>
            <div className='d-flex flex-column mx-auto my-auto align-items-start justify-content-center aboutmeinner'>
                    <div className='w-100'>
                        <h1 className='fw-bold text-brown w-100 text-center'>
                            ABOUT ME
                        </h1>

                    </div>
                    <div className='w-100'>
                        <p className='text-green w-100 text-center'>
                            Graduating in Computer Engineering now and looking to discover the chance to work in a fun and testing
                            working environment that will urge me to improve and acquire new essential abilities and be motivated by
                            the organization to do my best for myself and the organization.
                        </p>
                    </div>
                    <div className='d-flex flex-column '>
                        <h3 className='fw-bold text-brown'>
                            Here are few highlights
                        </h3>
                        <ul className='list-unstyled '>
                            <li >COMPUTER ENGINEER</li>
                            <li>MERN STACK DEVELOPER</li>
                            <li>REACT DEVELOPER</li>

                        </ul>
                    </div>
                    <div className='align-self-center'>
                        <a href="resume.pdf" className='' download='saad resume.pdf'>
                            <button className='button text-green fw-bold mb-3'> GET RESUME</button>
                        </a>
                    </div>

                </div>
        </div>
    )
}

export default Aboutme