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

const Graph = () => {
  const [data, setData] = useState([])

  const getData = () =>{
    fetch(`https://datausa.io/api/data?drilldowns=Nation&measures=Population`)
    .then((res)=>res.json())
    .then((data)=>setData(data.data))
    .catch((err)=>console.log(err))
  }

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
                color: "#b2b2b2",
              },
            },
            y: {
              title: {
                display: true,
                text: "Population",
                color: "#b2b2b2",
              },
            },
          },
        }


  useEffect(()=>{
    getData()
  },[])
  
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
