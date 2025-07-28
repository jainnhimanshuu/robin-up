"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Card, CardBody } from "@nextui-org/react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  change?: number;
  colorScheme?: 'purple' | 'blue' | 'green' | 'orange';
  delay?: number;
}

const StatsCard = ({ 
  title, 
  value, 
  icon: Icon, 
  change, 
  colorScheme = 'purple',
  delay = 0 
}: StatsCardProps) => {
  const colorSchemes = {
    purple: {
      primary: '#8b5cf6',
      secondary: '#ec4899',
      background: 'from-purple-500 to-pink-500',
      text: 'from-purple-600 to-pink-600',
      bg: 'from-purple-50 to-pink-50',
      border: 'border-purple-200'
    },
    blue: {
      primary: '#3b82f6',
      secondary: '#06b6d4',
      background: 'from-blue-500 to-cyan-500',
      text: 'from-blue-600 to-cyan-600',
      bg: 'from-blue-50 to-cyan-50',
      border: 'border-blue-200'
    },
    green: {
      primary: '#10b981',
      secondary: '#059669',
      background: 'from-green-500 to-emerald-500',
      text: 'from-green-600 to-emerald-600',
      bg: 'from-green-50 to-emerald-50',
      border: 'border-green-200'
    },
    orange: {
      primary: '#f59e0b',
      secondary: '#dc2626',
      background: 'from-orange-500 to-red-500',
      text: 'from-orange-600 to-red-600',
      bg: 'from-orange-50 to-red-50',
      border: 'border-orange-200'
    }
  };

  const colors = colorSchemes[colorScheme];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        y: -4,
        transition: { duration: 0.2 }
      }}
    >
      <Card className={`bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300`}>
        <CardBody className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 bg-gradient-to-r ${colors.background} rounded-xl shadow-lg`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            {change !== undefined && (
              <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                change >= 0 
                  ? 'text-green-600 bg-green-100' 
                  : 'text-red-600 bg-red-100'
              }`}>
                {change >= 0 ? '+' : ''}{change}%
              </span>
            )}
          </div>
          
          <h3 className="text-lg font-semibold text-gray-700 mb-1">{title}</h3>
          <p className={`text-3xl font-bold bg-gradient-to-r ${colors.text} bg-clip-text text-transparent`}>
            {value}
          </p>
          
          {/* Animated progress bar */}
          <motion.div 
            className="mt-4 w-full bg-gray-200 rounded-full h-1 overflow-hidden"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1, delay: delay + 0.3 }}
          >
            <motion.div 
              className={`h-full bg-gradient-to-r ${colors.background}`}
              initial={{ width: 0 }}
              animate={{ width: '70%' }}
              transition={{ duration: 1, delay: delay + 0.5 }}
            />
          </motion.div>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default StatsCard; 