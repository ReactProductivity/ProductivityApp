import React, { useState, useEffect } from "react";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import "../../styles/content.css";

const Dankmemes = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      datasets: [
        {
          label: "Hours Spent",
          data: [4, 5, 20, 45, 80],
          backgroundColor: [
            "red",
            "blue",
            "green",
            "purple",
            "pink",
          ] /*"rgba(75, 192, 192, 0.6)",*/,
          borderWidth: 4,
        },
      ],
    });
  };

  const charDataOptions = {
    responsive: true,
    title: { text: "Hours spent during the last week", display: true },
    scales: {
      yAxes: [
        {
          ticks: {
            autoSkip: true,
            maxTicksLimit: 10,
            beginAtZero: true,
          },
          gridLines: {
            display: false,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            autoSkip: true,
            maxTicksLimit: 10,
            beginAtZero: true,
          },
          gridLines: {
            display: false,
          },
        },
      ],
    },
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div>
      <h1>Activity Graph</h1>
      <div className="LineGraph" style={{ height: "1000px", width: "1000px" }}>
        <Line data={chartData} options={charDataOptions} />
        <Doughnut data={chartData} options={charDataOptions} />
      </div>
    </div>
  );
};

export default Dankmemes;
// style={{ height: "500px", width: "500px" }}
