import React from 'react';
import Project from "./Project";

class Row extends React.Component {
  render() {
    const project1 = this.props.project1;
    const project2 = this.props.project2;
    return(
      <div className="row">
        <Project name={project1.name}
                 description={project1.description}
                 github={project1.github}
                 imageSize={project1.imageSize}
                 image={project1.image}
                 alt={project1.alt}/>
       <Project name={project2.name}
                description={project2.description}
                github={project2.github}
                imageSize={project2.imageSize}
                image={project2.image}
                alt={project2.alt}/>
      </div>
    );
  }
}

export default Row;
