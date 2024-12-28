import { Bar } from "react-chartjs-2";
import { ChartOptions } from "chart.js";
import "../chartSetup/chartSetup";

interface IBarChartProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor?: string | string[];
      borderColor?: string | string[];
      borderWidth?: number;
    }[];
  };
  options?: ChartOptions<"bar">;
  horizontal?: boolean;
}

const BarChart = (props: IBarChartProps) => {
  const { data, options, horizontal } = props;

  const defaultOptions: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: true,
    indexAxis: horizontal ? "y" : "x",
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full h-full">
      <Bar data={data} options={options || defaultOptions} />
    </div>
  );
};

export default BarChart;
