import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["March", 11],
  ["April", 2],
  ["May", 2],
  ["June", 2],
  ["July", 7],
  ["Aug", 7],
];

export const options = {
  title: "Last 6 Months Donations",
  is3D: true,
  colors: ["rgb(53, 138, 148)", "rgb(37, 11, 165)", "#188310"],
};

export default function PieChart() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"450px"}
    />
  );
}