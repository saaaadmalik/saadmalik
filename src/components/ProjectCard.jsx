import React from 'react'
import blog from "../assets/blog.jpg"
import store from "../assets/store.jpg"
import portfolio from "../assets/portfolio.jpg"

const ProjectCard = ({ data }) => {

    return (
        <div className="col-md-4 col-sm-12 projectcard">
            {data.id===1?<img src={blog} className="card-img-top" alt="..." />
            :data.id===2?<img src={store} className="card-img-top" alt="..." />
            :data.id===3?<img src={portfolio} className="card-img-top" alt="..." />
            :null}
            <div className="card-body text-dark ">
                <h5 className="card-title ">{data.title}</h5>
                <hr />
                <p className="card-text fw-bold">{data.description}</p>
                {data.id==1?<a href={"https://github.com/saaaadmalik/webproject"} className="button text-decoration-none text-green">VIEW SOURCE CODE</a>
                :data.id==2?<a href={"https://github.com/saaaadmalik/react-app"} className="button text-decoration-none text-green">VIEW SOURCE CODE</a>
                :data.id==3?<a href="#" className="button text-decoration-none text-green">VIEW SOURCE CODE</a>
                :null}
            </div>
        </div>
    )
}

export default ProjectCard