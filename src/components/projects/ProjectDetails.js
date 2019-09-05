import React from 'react'

// here  const id = props.match.params.id is taken from /:id path

const ProjectDetails = (props) => {
    const id = props.match.params.id
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id} </span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo delectus rerum consectetur repudiandae adipisci aut beatae quasi repellat odit, consequatur aliquid recusandae repellendus incidunt dignissimos quibusdam dolore architecto doloremque quidem.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Aleks</div>
                    <div>én September, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails

