
import React from 'react';
import ReactDOM from 'react-dom';
import Row from './Row';

class Projects extends React.Component {
  render() {
    const rows = this.props.data;
    const projects = data.map((row, idx) =>
        <Row key={idx} project1={row[0]} project2={row[1]}/>
    );
    return <div>{projects}</div>;
  }
}

var data = [
  [{ "name": "Note Review",
    "github": "https://github.com/rtrounday/note-eval-client.git",
    "description": "A web application for real estate investors to track the "
    + "loan notes they have invested in. Clients upload excel spreadsheets with " +
    "loan sheet info that are parsed to give clients advice on whether to hold " +
    "or sell specific notes. Built as a summer side project for exploring the features of AWS.",
    "image": "img/notereview.png",
    "imageSize": "col-sm-12",
    "alt": "notereview"
  },
  { "name": "Morse Bot",
    "github": "http://www.github.com/rsandeep15/MorseBot",
    "description": "A project that allows two users, one on a web application" +
    " and the other on a Morse straightkey (build using a Raspberry Pi), to" +
    " communicate with each other in Morse code. " + "This group project won second" +
    " prize at the IEEE Fall Quarterly Projects at UC San Diego.",
    "image": "img/morsebot.png",
    "imageSize": "col-sm-12",
    "alt": "morsebot"
  }],
  [
    {"name": "Yelp++",
      "github": "https://github.com/rsandeep15/YelpPlus",
      "description": "A project built as part of CodePath iOS University. " +
                  "An app that mimics Yelp using the company's public API." +
                  " Only difference being that it uses Google Maps instead of Apple Maps.",
      "image": "img/yelp++.mp4",
      "imageSize": "col-md-6",
      "alt": "yelp++"},
    {"name": "Flicks",
      "github": "https://github.com/rsandeep15/Flicks",
      "description": "Another project built as part of CodePath iOS University." +
        " An app to view the latest movies in theaters." +
        " The UI was inspired by Yahoo Movies.",
      "image": "img/flicks.mp4",
      "imageSize": "col-md-6",
      "alt": "flicks"}
  ],
  [
    {"name": "EventLit",
      "github": "https://github.com/LIT-Chorus/EventLIT",
      "description": "A group project that my team in CSE 110"
                    + " built over the quarter. The application is for student" +
                    " organizations to share events they are hosting with UCSD students.",
      "image": "img/eventlit_demo.mp4",
      "imageSize": "col-md-6",
      "alt": "EventLit"},
    {"name": "Headlines",
      "github": "https://github.com/rsandeep15/Headlines",
      "description": "A macOS TouchBar Application to view the current headlines" +
                  "on the New York Times. Users can click on each headline to navigate" +
                  "to the corresponding New York Times article on the newspaper's website. The headlines" +
                  "are fetched by using the NewsAPI.",
      "image": "img/headlines.png",
      "imageSize": "col-sm-12",
      "alt": "Headlines "}
  ]
];


ReactDOM.render(<Projects data={data}/>, document.getElementById('app'));
