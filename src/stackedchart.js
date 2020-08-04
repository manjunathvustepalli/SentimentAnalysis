import React, { Component } from "react";
import { Line } from "react-chartjs-2";
export default class stackchart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: {
        labels: [
          "Boston",
          "Worcester",
          "Springfield",
          "Lowell",
          "Cambridge",
          "New Bedford",
        ],
        datasets: [
          {
            label: "Population",
            data: [617594, 181045, 153060, 106519, 105162, 95072],
            label: "cehck",
            // borderColor: "white",
            // fill: "true",
            backgroundColor: "rgba(255, 99, 132, 0.6)",
            pointBackgroundColor: "rgba(255, 99, 132, 0.6)",
            // pointRadius:4,
            // pointBorderWidth:2

          },
          {
            label: "Population",
            data: [2000, 4000, 60000, 80000, 100000, 800000],
            label: "cehck",
            backgroundColor:"rgba(54, 162, 235, 0.6)",
            // borderColor: "white",
            // fill: "true",
            // backgroundColor: "rgba(54, 162, 235, 0.6)",
            pointBackgroundColor: "rgba(54, 162, 235, 0.6)",
            // pointRadius:4,
            // pointBorderWidth:2
            
          },
        ],
      },
      Option: {
        elements: {
            point:{
                radius: 0
            }
        },
        scales: {
          xAxes: [
            {
               scaleLabel:{
                   display:true,
                   labelString:"hello"
               },
              gridLines: {
                drawOnChartArea: false,
              },
            },
          ],
          yAxes: [
            {
                // stacked: true,
              //labelOffset: 20,
              scaleLabel:{
                display:true,
                labelString:"hello"
            },
              DrawTicks:false,
              gridLines: {
                drawOnChartArea: false,
              },
            //   ticks: {
            //     beginAtZero: true,
            //     display: true,
            //     padding: 20,
            //   },
            },
          ],
        },
        legend: { 
            labels: {
            usePointStyle: true,
            pointBackgroundColor:"rgba(54, 162, 235, 0.6)",
            
            boxWidth:8,
          },
          display: true,position: "top" },
      },
    };
  }
  render() {
    return (
      <div>
        <Line data={this.state.chartData} options={this.state.Option} />
      </div>
    );
  }
}
