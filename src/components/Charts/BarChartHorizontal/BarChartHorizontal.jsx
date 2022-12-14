import React from "react";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

/**
 * A component for the horizontal bar chart to be used in the visualizations of the survey results.
 * @param {type} data something
 * @param {type} title something
 * @param {type} settings something
 * @returns {Bar} a configured chartjs horizontal bar chart component
 */

export const BarChartHorizontal = ({ data, title, settings }) => {
  const options = {
    indexAxis: "x",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: settings.hasLegend,
        position: settings.legendPosition,
        font: {
          size: settings.legendFontSize,
        },
        labels: {
          usePointStyle: settings.legendPointStyle,
        },
      },
      title: {
        display: settings.hasTitle,
        text: title,
        align: settings.titleAlignment,
        font: {
          weight: "bold",
          size: settings.titleFontSize,
          family: "'Poppins', sans-serif"
        },
      },
      datalabels: {
        display: settings.hasDataLabels,
        anchor: settings.dataLabelPosition,
        align: settings.dataLabelAlignment,
        font: {
          weight: "bold",
          size: settings.dataLabelFontSize,
        },
        color: "black",
        formatter: (value, ctx) => {
          if (settings.dataLabelPercentages === true) {
            let sum = 0;
            let dataArr = ctx.chart.data.datasets[0].data;
            dataArr.map((data) => {
              sum += data;
            });
            let percentage =
              ((value * 100) / sum).toFixed(settings.dataLabelSigFig) + "%";
            return percentage;
          } else {
            return value;
          }
        },
      },
    },
  };
  return (
      <Bar options={options} data={data} width={"auto"} />
  );
};
