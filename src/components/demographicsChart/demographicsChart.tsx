"use client";

import { Chart, registerables } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { motion } from 'framer-motion';

Chart.register(...registerables);

interface DemographicsData {
  gender: {
    male: number;
    female: number;
    other: number;
  };
  country: { [key: string]: number };
  age: { [key: string]: number };
  city: { [key: string]: number };
}

interface DemographicsChartProps {
  data: DemographicsData;
  title: string;
  colorScheme?: 'purple' | 'blue' | 'green';
}

const DemographicsChart = ({ data, title, colorScheme = 'purple' }: DemographicsChartProps) => {

  const colorSchemes = {
    purple: {
      primary: '#8b5cf6',
      secondary: '#ec4899',
      tertiary: '#a855f7',
      background: 'rgba(139, 92, 246, 0.1)'
    },
    blue: {
      primary: '#3b82f6',
      secondary: '#06b6d4',
      tertiary: '#1d4ed8',
      background: 'rgba(59, 130, 246, 0.1)'
    },
    green: {
      primary: '#10b981',
      secondary: '#059669',
      tertiary: '#047857',
      background: 'rgba(16, 185, 129, 0.1)'
    }
  };

  const colors = colorSchemes[colorScheme];

  const chartData = {
    labels: ['Male', 'Female', 'Other'],
    datasets: [
      {
        data: [data.gender.male, data.gender.female, data.gender.other],
        backgroundColor: [colors.primary, colors.secondary, colors.tertiary],
        borderColor: [colors.primary, colors.secondary, colors.tertiary],
        borderWidth: 2,
        hoverBackgroundColor: [colors.primary, colors.secondary, colors.tertiary],
        hoverBorderColor: [colors.primary, colors.secondary, colors.tertiary],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          padding: 20,
          usePointStyle: true,
          font: {
            size: 12,
            weight: 500,
          },
          color: '#374151',
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: colors.primary,
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: true,
        callbacks: {
          label: function(context: { label?: string; parsed: number; dataset: { data: number[] } }) {
            const label = context.label || '';
            const value = context.parsed;
            const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0);
            const percentage = ((value / total) * 100).toFixed(1);
            return `${label}: ${value} (${percentage}%)`;
          }
        }
      },
    },
    cutout: '60%',
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
  };

  // Get top countries
  const topCountries = Object.entries(data.country)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 5);

  return (
    <motion.div 
      className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div 
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: colors.primary }}
        ></div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Gender Distribution Chart */}
        <div className="min-w-0">
          <h4 className="text-lg font-semibold text-gray-700 mb-4">Gender Distribution</h4>
          <div className="relative h-64">
            <Doughnut data={chartData} options={options} />
          </div>
        </div>

        {/* Top Countries */}
        <div className="min-w-0">
          <h4 className="text-lg font-semibold text-gray-700 mb-4">Top Countries</h4>
          <div className="space-y-3 overflow-hidden">
            {topCountries.map(([country, percentage], index) => {
              // Normalize percentage to prevent overflow
              const normalizedPercentage = (percentage / Math.max(...topCountries.map(([, p]) => p))) * 100;
              
              return (
                <div key={country} className="flex items-center justify-between gap-3 min-w-0">
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <span className="text-sm font-medium text-gray-600 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-sm font-medium text-gray-700 capitalize truncate">
                      {country}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <div className="w-16 bg-gray-200 rounded-full h-2 flex-shrink-0">
                      <div 
                        className="h-2 rounded-full transition-all duration-500"
                        style={{ 
                          width: `${normalizedPercentage}%`,
                          backgroundColor: colors.primary
                        }}
                      ></div>
                    </div>
                    <span className="text-sm font-semibold text-gray-700 min-w-[50px] text-right">
                      {percentage.toFixed(1)}%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Age Distribution */}
      <div className="mt-8">
        <h4 className="text-lg font-semibold text-gray-700 mb-4">Age Distribution</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(data.age)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 4)
            .map(([age, percentage]) => (
              <div key={age} className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="text-2xl font-bold text-gray-900 mb-1">{percentage.toFixed(1)}%</div>
                <div className="text-sm text-gray-600">{age}</div>
              </div>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default DemographicsChart; 