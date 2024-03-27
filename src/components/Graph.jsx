import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Line, Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

// Feching data for Population and Crypto-currency 
export const getData =  (url) => {
   return fetch(url)
}

const Graph = () => {

const [data, setData] = useState([])

useEffect(()=>{
    getData("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
    .then((res)=>res.json())
    .then((data)=>setData(data.data))
    .catch((err)=>console.log(err))
},[])


// Chart.js config
const chartData = {
          labels: data.map((el) => el.Year),
          datasets: [
            {
              
              label: "United States Population",
              data: data.map((el) => el.Population),
              borderColor: "limegreen",
              tension: 0.5,
              backgroundColor: ["limegreen"],
            },
          ],
        }
  
const chartOptions = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Year",
          color: "white", 
        },
        ticks: {
          color: "white", 
        },
      },
      y: {
        title: {
          display: true,
          text: "Population",
          color: "white", 
        },
        ticks: {
          color: "white", 
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "white", 
        },
      },
    },
  };


  
  return (
    <div className="population-graph-container">
      <Line
        data={chartData}
        options={chartOptions}
      />
    </div>
  );
};

export default Graph;
