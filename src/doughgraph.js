import React, { Component } from 'react'
import { Doughnut } from 'react-chartjs-2';
import { BottomNavigation } from '@material-ui/core';
import { Grid, Typography } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
let data=[10,20,30,40]
export default class doughgraph extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          dropMenuValue:"twitter",
            
                Newspaperchartdata:{
                  labels: ['Positive', 'Negative', 'Neutral','Unsure'],
                  datasets:[
                    {
                      label:'Population',
                      data:[
                       3028,
                        6201,
                        1258,
                        948

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
                   
            },
            Twiterchartdata:{
              labels: ['Positive', 'Negative', 'Neutral','Unsure'],
              datasets:[
                {
                  label:'Population',
                  data:[
                   243,
                    138,
                    99,
                    1

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
        <Grid container spacing={2} justify="space-between">
          <Grid item xs={12}>
            <FormControl variant="outlined" fullWidth size='small'>
              <InputLabel id="demo-simple-select-outlined-label">Select</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={this.state.dropMenuValue}
                onChange={(event)=> this.setState({dropMenuValue: event.target.value}, console.log(event.target.value))}
                label="Select"
              >
                <MenuItem value='twitter'>Twitter</MenuItem>
                <MenuItem value='newspaper'>Newspaper</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {this.state.dropMenuValue === 'twitter'? (
            <Grid item xs={12}>
              {/* <Typography>Twitter</Typography> */}
              <Doughnut data={this.state.Twiterchartdata}  options={this.state.Option} />
          </Grid>
          ): (
            <Grid item xs={12}>
              {/* <Typography>Newspaper</Typography> */}
              <Doughnut data={this.state.Newspaperchartdata}  options={this.state.Option} />
          </Grid>
          )}
        </Grid>
      </div>
           
        )
    }
}
