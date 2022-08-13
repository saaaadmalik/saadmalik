import React from 'react'

const Footer = () => {
    return (

//         <div className='container-fluid bg-green vh-100 d-flex flex-column'>
// footer
//         </div>
        // <footer className="mt-auto py-3 bg-dark">
            <div className='d-flex flex-column justify-content-center bg-green algn-items-center'>
                <div>
                    <a href='mailto:saadmalik4694@gmail.com ' className='text-decoration-none text-grey fs-5'>saadmalik4694gmail.com</a>
                </div>
                <div className="d-flex flex-row justify-content-center my-2">
                    <a href="https://www.facebook.com/profile.php?id=100052685202050" ><i className="bi bi-facebook text-grey display-6 mx-2"></i> </a>
                    <a href="https://twitter.com/Saaaadmalik " > <i className="bi bi-twitter text-grey display-6 mx-2"></i></a>
                    <a href="https://www.linkedin.com/in/saad-malik-7850711b1 " > <i className="bi bi-linkedin text-grey display-6 mx-2"></i></a>
                    <a href="https://www.instagram.com/saaaadmalik/" > <i className="bi bi-instagram text-grey display-6 mx-2"></i></a>

                </div>
            </div>
        //     {/* <div className="container">
        //             <span className="text-light">&copy;2021 MyBlog. All Rights Reserved !</span>
        //         </div> */}

        // </footer>


    )
}

export default Footer