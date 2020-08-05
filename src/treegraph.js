import React, { Component } from 'react'
import Chart from "react-google-charts";

const data = [
    [
      "Location",
      "Parent",
      "Market trade volume (size)",
      "Market increase/decrease (color)"
    ],
    ["Sentiment", null, 0, 0],
    ["Postive", "Sentiment", 0, 0],
    ["Negative", "Sentiment", 0, 0],
    ["Neutral", "Sentiment", 0, 0],
    ["Unsure", "Sentiment", 0, 0],
    ["Brazil", "Postive", 11, 10],
    ["USA", "Postive", 52, 31],
    ["Mexico", "Postive", 24, 12],
    ["Canada", "Postive", 16, -23],
    ["France", "Negative", 42, -11],
    ["Germany", "Negative", 31, -2],
    ["Sweden", "Negative", 22, -13],
    ["Italy", "Negative", 17, 4],
    ["UK", "Negative", 21, -5],
    ["China", "Neutral", 36, 4],
    ["Japan", "Neutral", 20, -12],
    ["India", "Neutral", 40, 63],
    ["Laos", "Neutral", 4, 34],
    ["Mongolia", "Neutral", 1, -5],
    ["Israel", "Neutral", 12, 24],
    ["Iran", "Neutral", 18, 13],
    ["Pakistan", "Neutral", 11, -52],
    ["Egypt", "Unsure", 21, 0],
    ["S. Unsure", "Unsure", 30, 43],
    ["Sudan", "Unsure", 12, 2],
    ["Congo", "Unsure", 10, 12],
    ["Zaire", "Unsure", 8, 10]
  ];
  const options = {
    minColor: "#f00",
    midColor: "#ddd",
    maxColor: "#0d0",
    headerHeight: 15,
    fontColor: "black",
    showScale: true
  };
export default class treegraph extends Component {
    render() {
        return (
            <div className="App" >
            <Chart
              chartType="TreeMap"
             
              data={data}
              options={options}
            />
          </div>
        )
    }
}
