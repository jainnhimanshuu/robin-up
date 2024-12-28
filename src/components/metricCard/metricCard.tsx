import { Card } from "@nextui-org/react";
import { Metric } from "@rbu/types/metric";

interface MetricCardProps {
  metric: Metric;
}

const MetricCard = ({ metric }: MetricCardProps) => {
  const { title, value, change, icon, positive } = metric;

  return (
    <Card className="p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:scale-105 bg-gradient-to-br from-white to-gray-50">
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl `}>
          <div className="text-blue-600">{icon}</div>
        </div>
        <span
          className={`text-sm font-medium ${
            positive ? "text-green-600" : "text-red-600"
          } px-2 py-1 rounded-full bg-opacity-10 ${
            positive ? "bg-green-100" : "bg-red-100"
          }`}
        >
          {change}
        </span>
      </div>
      <h3 className="text-lg font-medium text-gray-700 mb-1">{title}</h3>
      <p className="text-2xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
        {value}
      </p>
    </Card>
  );
};

export default MetricCard;
