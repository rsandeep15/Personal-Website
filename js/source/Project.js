import React from 'react';

class Project extends React.Component {
  render() {

    if (this.props.image.endsWith(".mp4")) {
        return(
          <div className="col-md-6">
            <div className="embedded-1 jumbotron">
              <a href={this.props.github}>
                <div className={"container " + this.props.imageSize}>
                  <video controls>
                    <source src={this.props.image} alt={this.props.alt} type="video/mp4"/>
                      <div className="overlay">
                        <div className="text">Click to view on Github</div>
                      </div>
                    </video>
                </div>
              </a>
              <h2>{this.props.name}</h2>
              <p id="left">{this.props.description}</p>
            </div>
          </div>
        );
    } else {
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
}

export default Project
