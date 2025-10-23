
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
    "description": "AWS-backed dashboard that ingests loan spreadsheets and flags which notes investors should hold or sell.",
    "image": "img/notereview.png",
    "imageSize": "col-sm-12",
    "alt": "notereview"
  },
  { "name": "Morse Bot",
    "github": "http://www.github.com/rsandeep15/MorseBot",
    "description": "Raspberry Pi-powered Morse straight key that chats with a companion web app; won 2nd place at IEEE UCSD.",
    "image": "img/morsebot.png",
    "imageSize": "col-sm-12",
    "alt": "morsebot"
  }],
  [
    {"name": "Yelp++",
      "github": "https://github.com/rsandeep15/YelpPlus",
      "description": "CodePath iOS project recreating Yelp with their public API but swapping in Google Maps.",
      "image": "img/yelp++.gif",
      "imageSize": "col-md-6",
      "alt": "yelp++"},
    {"name": "Flicks",
      "github": "https://github.com/rsandeep15/Flicks",
      "description": "CodePath iOS app for current theater releases with a Yahoo Movies-inspired UI.",
      "image": "img/flicks.gif",
      "imageSize": "col-md-6",
      "alt": "flicks"}
  ],
  [
    {"name": "EventLit",
      "github": "https://github.com/LIT-Chorus/EventLIT",
      "description": "CSE 110 team project where UCSD student orgs post events and share them with campus.",
      "image": "img/eventlit_demo.gif",
      "imageSize": "col-md-6",
      "alt": "EventLit"},
    {"name": "Headlines",
      "github": "https://github.com/rsandeep15/Headlines",
      "description": "macOS Touch Bar app streaming live New York Times headlines via NewsAPI for quick reads.",
      "image": "img/headlines.png",
      "imageSize": "col-sm-12",
      "alt": "Headlines "}
  ]
];


ReactDOM.render(<Projects data={data}/>, document.getElementById('app'));
