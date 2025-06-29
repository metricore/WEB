import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Counter component with animation
const AnimatedCounter = ({ target, suffix = "", duration = 2 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [target, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

// Mini graph component
const MiniGraph = ({ data, className }) => (
  <svg width="40" height="20" className={className}>
    {data.map((point, i) => (
      <motion.circle
        key={i}
        cx={i * 8 + 4}
        cy={20 - point * 16}
        r="1.5"
        fill="currentColor"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: i * 0.1, duration: 0.3 }}
      />
    ))}
    <motion.polyline
      points={data
        .map((point, i) => `${i * 8 + 4},${20 - point * 16}`)
        .join(" ")}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    />
  </svg>
);

// Pulse indicator
const PulseIndicator = ({ color = "green" }) => {
  const colorClasses = {
    green: "bg-green-400",
    blue: "bg-blue-400",
    purple: "bg-purple-400",
    cyan: "bg-cyan-400",
  };

  return (
    <div className="flex items-center space-x-2">
      <div
        className={`w-2 h-2 ${colorClasses[color]} rounded-full animate-pulse`}
      ></div>
      <span className="text-xs text-gray-400">LIVE</span>
    </div>
  );
};

// Tech icon components
const icons = {
  cloud: (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
      />
    </svg>
  ),
  shield: (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  ),
  cpu: (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
      />
    </svg>
  ),
  analytics: (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    </svg>
  ),
};

// Individual metric card component
const MetricCard = ({
  icon,
  title,
  value,
  suffix,
  color = "green",
  graph,
  position,
  delay = 0,
}) => {
  const colorClasses = {
    green: "text-green-400",
    blue: "text-blue-400",
    purple: "text-purple-400",
    cyan: "text-cyan-400",
  };

  return (
    <motion.div
      className={`absolute ${position} bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-lg p-3 min-w-[140px]`}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: delay + 1.5, duration: 0.6 }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className={colorClasses[color]}>{icons[icon]}</div>
        <PulseIndicator color={color} />
      </div>
      <div className="text-xs text-gray-400 mb-1">{title}</div>
      <div className={`text-lg font-bold ${colorClasses[color]}`}>
        <AnimatedCounter target={value} suffix={suffix} duration={2} />
      </div>
      {graph && (
        <div className="mt-2">
          <MiniGraph data={graph} className={colorClasses[color]} />
        </div>
      )}
    </motion.div>
  );
};

const TechMetrics = () => {
  const metrics = [
    {
      icon: "analytics",
      title: "PERFORMANCE",
      value: 99,
      suffix: "%",
      color: "green",
      position: "top-20 left-20",
      graph: [0.3, 0.7, 0.4, 0.8, 0.9],
      delay: 0,
    },
    {
      icon: "shield",
      title: "SECURITY",
      value: 256,
      suffix: "-bit",
      color: "blue",
      position: "top-32 right-16",
      delay: 0.2,
    },
    {
      icon: "cpu",
      title: "AI PROCESSING",
      value: 1.2,
      suffix: "M ops/s",
      color: "purple",
      position: "bottom-40 left-16",
      graph: [0.2, 0.5, 0.8, 0.6, 0.9],
      delay: 0.4,
    },
    {
      icon: "cloud",
      title: "UPTIME",
      value: 99.9,
      suffix: "%",
      color: "cyan",
      position: "bottom-32 right-20",
      delay: 0.6,
    },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  );
};

export default TechMetrics;
