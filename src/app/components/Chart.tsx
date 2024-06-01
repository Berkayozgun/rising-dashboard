import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "tailwindcss/tailwind.css";
import "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface ChartProps{
  options: ApexOptions;
}

const options: ApexOptions = {
  chart: {
    height: "100%",
    type: "area",
    fontFamily: "Inter, sans-serif",
    dropShadow: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    enabled: true,
    x: {
      show: false,
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      opacityFrom: 0,
      opacityTo: 0,
      shade: "#000",
      gradientToColors: ["#1C64F2"],
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 2,
  },
  grid: {
    show: true,
    strokeDashArray: 4,
    padding: {
      left: 2,
      right: 2,
      top: 2,
    },
  },
  series: [
    {
      name: "Usage",
      data: [0, 1.5, 3, 2.5, 4, 5, 10],
      color: "#000",
    },
  ],
  xaxis: {
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    labels: {
      show: true,
    },
    axisBorder: {
      show: true,
    },
    axisTicks: {
      show: true,
    },
  },
  yaxis: {
    show: true,
    labels: {
      formatter: function (value:any) {
        return value + " GB";
      },
    },
  },
};

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const UserChart = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const defaultSeries = [
    {
      name: "Usage",
      data: [0, 1.5, 3, 2.5, 4, 5, 10],
      color: "#000",
    },
  ];

  const options = {
    chart: {
      height: "100%",
      maxWidth: "100%",
      type: "area",
      fontFamily: "Inter, sans-serif",
      dropShadow: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0,
        opacityTo: 0,
        shade: "#000",
        gradientToColors: ["#1C64F2"],
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 2,
    },
    grid: {
      show: true,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: 2,
      },
    },
    series: [
      {
        name: "Usage",
        data: [0, 1.5, 3, 2.5, 4, 5, 10],
        color: "#000",
      },
    ],
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      labels: {
        show: true,
      },
      axisBorder: {
        show: true,
      },
      axisTicks: {
        show: true,
      },
    },
    yaxis: {
      show: true,
      labels: {
        formatter: function (value:any) {
          return value + " GB";
        },
      },
    },
  };

  if (!isMounted) {
    return null;
  }

  try {
    return (
      <div className='w-7/12 bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6'>
        <div className='flex justify-between'>
          <div>
            <p className='text-base font-bold text-black dark:text-gray-400'>
              Data usage per network
            </p>
          </div>
        </div>
        <div id='area-chart'>
          {typeof window !== "undefined" && (
            <ReactApexChart
              options={options}
              series={options.series || defaultSeries}
              type='area'
              height={443}
            />
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error rendering chart:", error);
    setHasError(true);
    return null;
  }
};

export default UserChart;
