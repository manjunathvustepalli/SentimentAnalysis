import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { Grid, Typography } from '@material-ui/core';

export default class linechart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: {
        labels: [
          "02-Aug-2020","03-Aug-2020","04-Aug-2020", "05-Aug-2020",
         
        
        ],
        datasets: [
          {
            label: "Population",
            data: [124,2222,3224,65],
            label: "positive",
            borderColor: "rgba(255, 99, 132, 0.6)",
            fill: "true",
            backgroundColor: "rgba(255, 99, 132, 0.6)",
            pointBackgroundColor: "white",
            pointRadius:4,
            pointBorderWidth:2

          },
          {
            label: "Population",
            data: [500,1000,6245,102],
            label: "negative",
            borderColor: "rgba(54, 162, 235, 0.6)",
            fill: "true",
            backgroundColor: "rgba(54, 162, 235, 0.6)",
            pointBackgroundColor: "white",
            pointRadius:4,
            pointBorderWidth:2
            
          },
          {
            label: "Population",
            data: [800,1600,1341,18],
            label: "Neutral",
            borderColor: 'rgba(255, 206, 86, 0.6)',
            
            fill: "true",
            backgroundColor: "rgba(54, 162, 235, 0.6)",
            pointBackgroundColor: "white",
            pointRadius:4,
            pointBorderWidth:2
            
          },
          {
            label: "Population",
            data: [20,200,942,7],
            label: "Unsure",
            borderColor: 'rgba(75, 192, 192, 0.6)',
            fill: "true",
            backgroundColor: "rgba(54, 162, 235, 0.6)",
            pointBackgroundColor: "white",
            pointRadius:4,
            pointBorderWidth:2
            
          },
        ],
      },
      Option: {
        scales: {
          xAxes: [
            {
               scaleLabel:{
                   display:true,
                   labelString:"August 2020"
               },
              gridLines: {
                drawOnChartArea: false,
              },
            },
          ],
          yAxes: [
            {
              //labelOffset: 20,
              scaleLabel:{
                display:true,
                labelString:"Data %"
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
          display: true,position: "right" },
      },
    };
  }
  render() {
    return (
      <div>
        
        <Line data={this.state.chartData} height={200} options={this.state.Option} />
      </div>
    );
  }
}
