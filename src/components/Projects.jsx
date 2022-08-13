import React from 'react'
import { useState } from 'react'
import { projects } from "../assets/Projectsdata"
import ProjectCard from './ProjectCard.jsx'

const Projects = () => {
    const [project, setProjects] = useState(projects)
    return (
        <div className='d-flex vh-100 projectsection Projects' id='Projects'>
            <div className='row container mx-auto my-auto '>
                <h2 className='text-brown mb-3'>PROJECTS</h2>
                {project.map(p => <ProjectCard key={p.id} data={p} />)}

            </div>

        </div>
    )
}

export default Projects