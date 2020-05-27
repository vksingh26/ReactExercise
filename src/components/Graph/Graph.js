import React, { Component } from "react";
import { Line } from "react-chartjs-2";

import './Graph.css';
class FeedGraph extends Component {
    constructor(props){
        super(props);
    }
  render() {
    let getVotes = [];
    let getId = [];
    this.props.feeds.map((feed) => {
        getVotes.push(feed.points);
        getId.push(feed.objectID);
    })
    const data = {
        labels: getId,
        datasets: [
          {
            label: 'Vote / ID',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgb(25,25,112,0.4)',
            borderColor: 'rgb(25,25,112,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgb(25,25,112,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgb(25,25,112,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: getVotes
          }
        ]
      };
    const options = {
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Vote',
              fontColor: "black",
              fontFamily: "Gamja Flower",
                fontSize: 24,
                fontStyle: "bold"
            },
            ticks: {
                fontColor: "#999999",
                fontFamily: "Gamja Flower",
                fontSize: 14,
                fontStyle: "bold"
            }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'ID',
              fontColor: "black",
              fontFamily: "Gamja Flower",
                fontSize: 24,
                fontStyle: "bold"
            },
            ticks: {
                fontColor: "#999999",
                fontFamily: "Gamja Flower",
                fontSize: 14,
                fontStyle: "bold"
            }
          }],
        }     
      };
    return (
      <div className="Graph">
        <Line data={data} options={options}/>
      </div>
    );
  }
}

export default FeedGraph;
