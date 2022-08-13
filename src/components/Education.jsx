import React from 'react'
import html from "../assets/icons/html.svg"
import css from "../assets/icons/css.svg"
import bootstrap from "../assets/icons/bootstrap.svg"
import node from "../assets/icons/node.svg"
import react from "../assets/icons/react.svg"

const Education = () => {
    return (
        <div className='d-flex vh-100 Education' id='Education'>
            <div className='m-auto row d-flex flex-row flex-md-wrap border justify-content-center align-items-center eduouter'>
                <div className='d-flex flex-column col-md-6 justify-content-center align-items-start eduinnerleft'>
                    <div className='w-100 text-center my-3'>
                        <h2 className='text-brown fw-bold'> EDUCATION</h2>
                    </div>

                    <div className='w-100 d-flex flex-column align-items-start my-3 educard'>
                        <h3 className='text-brown w-100'>UNIVERSITY OF ENGINEERING AND TECHNOLOGY TAXILA</h3>
                        <h6 >BACHELORS OF SCIENCE IN COMPUTER ENGINEERING.</h6>
                        <hr />
                        <p> (2019-2023)</p>
                    </div>
                    <div className='w-100 d-flex flex-column align-items-start my-3 educard'>
                        <h3 className='text-brown w-100'> PUNJAB COLLEGE</h3>
                        <h6 >FSC PRE-ENGINEERING</h6>
                        <hr />
                        <p> (2017-2019)</p>
                    </div>
                </div>
                <div className='d-flex flex-column col-md-6 justify-content-center align-items-center eduinnerright'>
                    <div className='w-100 text-center my-3' >
                    <h2 className='text-brown fw-bold'>SKILLS</h2>
                    </div>
                    <div>
                        <h3>LANGUAGES AND TOOLS</h3>
                    </div>
                    <div className="d-flex flex-row flex-wrap justify-content-center my-4">
                    
                        <img src={html} className="icon" alt="" />
                        <img src={css} className="icon"  alt="" />
                        <img src={bootstrap} className="icon"  alt="" />
                        <img src={react} className="icon"  alt="" />
                        <img src={node} className="icon"  alt="" />

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Education