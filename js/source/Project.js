import React from 'react';

class Project extends React.Component {
  render() {
    return(
      <div className="col-md-6">
        <div className="embedded-1 jumbotron">
          <a href={this.props.github}>
            <div className={"container " + this.props.imageSize}>
              <img src={this.props.image} alt={this.props.alt}/>
              <div className="overlay">
                <div className="text">Click to view on Github</div>
              </div>
            </div>
          </a>
          <h2>{this.props.name}</h2>
          <p id="left">{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default Project
