import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Collections", "Donations"],
  ["2019", 1000, 960],
  ["2020", 2870, 2523],
  ["2021", 2060, 1720],
  ["2022", 1130,1340],
  ["2023", 800, 500],
];

export const options = {
  title: "Collections vs. Donations",
  curveType: "function",
  legend: { position: "bottom" },
  colors: ["rgb(53, 138, 148)", "rgb(37, 11, 165)", "#188310"],
};

export function LineChart() {
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="300px"
      data={data}
      options={options}
    />
  );
}