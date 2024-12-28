import { Logger } from "@rbu/helpers";
import "../chartSetup/chartSetup";
import { Pie } from "react-chartjs-2";

// ... imports remain the same ...

interface PieChartProps {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string[];
    borderColor?: string[];
    borderWidth?: number;
    hoverOffset?: number;
  }[];
  options?: {
    title?: string;
    legend?: boolean;
  };
}

const PieChart = ({ labels, datasets, options = {} }: PieChartProps) => {
  Logger.logMessage("labels and datasets", labels, datasets);

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: options.legend ?? true,
        position: "right" as const,
      },
      title: {
        display: !!options.title,
        text: options.title,
        font: {
          size: 16,
        },
      },
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  };

  return <Pie data={{ labels, datasets }} options={chartOptions} />;
};

export default PieChart;
