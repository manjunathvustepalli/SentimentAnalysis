import React, { Component } from 'react'
import { Doughnut } from 'react-chartjs-2';
import { BottomNavigation } from '@material-ui/core';
let data=[10,20,30,40]
export default class doughgraph extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            
                chartData:{
                  labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
                  datasets:[
                    {
                      label:'Population',
                      data:[
                        617594,
                        181045,
                        153060,
                        106519,
                        105162,
                        95072
                      ],
                      backgroundColor:[
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgba(255, 99, 132, 0.6)'
                      ]
                    },
                   
                  ],
                 
                },
                Option:{
                //     datalabels:{
                //         color: '#fff',
                //   }
                cutoutPercentage:60,
                
                legend:{position:'bottom'}
                   
            }
        }
             
        
    }
    render() {
       
        
        return (
            <div>

                <Doughnut data={this.state.chartData}  options={this.state.Option} />

            </div>
        )
    }
}
