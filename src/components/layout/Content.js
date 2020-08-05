import React, { useState, useEffect } from "react";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import "../../styles/content.css";
import { Component } from "react";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charData: {},
    };
  }

  componentDidMount() {
    if (this.props.greeting === "line") {
      this.setState({ charData: setChartDataLine });
    } else {
      this.setState({ charData: setChartDataOther });
    }
  }

  renderSomething(randomArg) {
    if (randomArg === "line") {
      return (
        <div className="LineGraph">
          {
            <Line
              data={this.state.charData}
              options={charDataOptions}
              height={"100px"}
            />
          }
        </div>
      );
    } else if (randomArg === "doughnut") {
      return (
        <div className="LineGraph">
          {<Doughnut data={this.state.charData} />}
        </div>
      );
    } else {
    }
    return <div>{<Bar data={this.state.charData} />}</div>;
  }

  render() {
    return this.renderSomething(this.props.greeting);
    // <div className="LineGraph" style={{ height: "1000px", width: "1000px" }}>
    //   {<Doughnut data={this.state.charData} options={charDataOptions} />}
    // </div>
  }
}

const charDataOptions = {
  responsive: true,
  title: { text: "Hours spent during the last week", display: true },
  mainmaintainAspectRatio: true,
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

const setChartDataLine = {
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  datasets: [
    {
      label: "Hours Spent",
      lineTension: 0.5,
      data: [12, 5, 13, 18, 20],
      backgroundColor: "rgba(75, 192, 192, 0.6)",
      borderWidth: 2,
      borderColor: "rgba(0,0,0,1)",
    },
  ],
};

const setChartDataOther = {
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  datasets: [
    {
      label: "Hours Spent",
      lineTension: 1,
      data: [12, 5, 13, 18, 20],
      backgroundColor: [
        "rgba(75, 192, 192, 0.6)",
        "red",
        "green",
        "blue",
        "purple",
        "maroon",
        "grey",
      ],
      borderWidth: 2,
      borderColor: "rgba(0,0,0,1)",
    },
  ],
};

export default Content;

// const Dankmemes = () => {
//   const [chartData, setChartData] = useState({});

// const chart = () => {
//   setChartData({
//     labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
//     datasets: [
//       {
//         label: "Hours Spent",
//         lineTension: 1,
//         data: [3, 2, 1, 0, 8],
//         backgroundColor: "rgba(75, 192, 192, 0.6)",
//         borderWidth: 4,
//       },
//     ],
//   });
// };

//   useEffect(() => {
//     chart();
//   }, []);

//   return (
//     <div>
//       <h1>Activity Graph</h1>
// <div
//   className="LineGraph"
//   style={{ height: "000px", width: "1000px", margin: "400px" }}
// >
//         <Line data={chartData} options={charDataOptions} />
//         <Doughnut data={chartData} options={charDataOptions} />
//       </div>
//     </div>
//   );
// };

// export default Dankmemes;
// // style={{ height: "500px", width: "500px" }}
