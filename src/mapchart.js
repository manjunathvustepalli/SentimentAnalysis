import React, { Component } from "react";
import { Chart } from "react-google-charts";
export default class mapchart extends Component {
  render() {
    return (
      <div>
        <Chart
          width={"500px"}
          height={"250px"}
          chartType="GeoChart"
          data={[
            ["latitude","longititude","color"],
            [23.8103, 90.4125,"Covid"],
            [22.3569,91.7832,"Covid"]
          
          ]}
          options={{
            region: "BD",
            displayMode: "markers",
            colorAxis: { colors: ["green", "blue"] },
          }}
          
          mapsApiKey="AIzaSyBObgBsE05dyln5jCbiz74L0cQTTHTeaXQ"
          rootProps={{ "data-testid": "2" }}
        />
      </div>
    );
  }
}
