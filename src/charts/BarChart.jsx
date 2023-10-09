import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Number of Beneficiaries"],
  ["2019", 2250],
  ["2020", 3570],
  ["2021", 3070],
  ["2022", 1760],
  ["2023", 2530],
];

export const options = {
  chart: {
    title: "Impact/Performance of MedBridge",
    subtitle: 'Annual Donations: Number of Beneficiaries Over the Years',
  },
  colors: ["rgb(53, 138, 148)", "rgb(37, 11, 165)", "#188310"],
};

export default function BarChart() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="350px"
      data={data}
      options={options}
    />
  );
}
