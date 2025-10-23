import React from 'react';

class Project extends React.Component {
  render() {
    return (
      <div className="col-md-6">
        <a className="project-card" href={this.props.github}>
          <div className="project-media">
            <img src={this.props.image} alt={this.props.alt} />
          </div>
          <div className="project-content">
            <h3>{this.props.name}</h3>
            <p>{this.props.description}</p>
          </div>
        </a>
      </div>
    );
  }
}

export default Project
