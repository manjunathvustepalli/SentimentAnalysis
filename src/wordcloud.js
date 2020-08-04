import React, { Component } from 'react'
import ReactWordcloud from 'react-wordcloud';
import words from './words';
import { Box } from '@material-ui/core';

const options = {
    colors: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b'],
    enableTooltip: true,
    deterministic: false,
    fontFamily: 'impact',
    fontSizes: [5, 60],
    fontStyle: 'normal',
    fontWeight: 'normal',
    padding: 1,
    rotations: 0,
    rotationAngles: [0, 90],
    scale: 'sqrt',
    spiral: 'archimedean',
    transitionDuration: 1000,
  };
export default class wordcloud extends Component {
    render() {
        return (
            <div style={{maxHeight:210}}>
               <Box m={0}>
        <ReactWordcloud options={options} words={words} />
                   </Box> 
      
            </div>
        )
    }
}
