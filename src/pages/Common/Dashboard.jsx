import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import BarChart from '../../components/BarChart';
import { getRandNumber } from '../../utils';

const options = {
  chart: {
    id: "basic-bar",
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Api",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
  },
};

const Dashboard = () => {
  const [bitcoin, setBitCoin] = useState([
    {
      name: 'Bit Coin',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },

  ]);

  useEffect(() => {
    setTimeout(() => {
      const rand = getRandNumber(0, 100);
      let tempList = bitcoin[0].data;
      tempList.shift();
      tempList.push(rand);
      setBitCoin([
        {
          name: 'BitCoin',
          data: options.xaxis.categories.map((temp, index) => {
            if (index == 11) return Math.random() * 50 + 50
            else return tempList[index];
          }),
        },
      ]);
    }, 1000)
  }, [bitcoin])

  return (
    <div className='flex w-full justify-center items-center'>
      <BarChart />

      <ReactApexChart
        options={options}
        series={bitcoin}
        type={"line"}
        height={400}
        width={1000}
      />
    </div >
  )
}

export default Dashboard;