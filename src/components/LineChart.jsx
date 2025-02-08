import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend);

function LineChart() {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      }
    },
  };

  const labels = ['Team1', 'Team2', 'Team3', 'Team4', 'Team5', 'Team6', 'Team7'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Store 1',
        data: labels.map(() => { return Math.random() * 1000 + 500 }),
        backgroundColor: 'rgba(255, 99, 132, 1)',
      },
      {
        label: 'Store 2',
        data: labels.map(() => { return Math.random() * 1000 + 500 }),
        backgroundColor: 'rgba(53, 162, 235, 1)',
      },
    ],
  };

  return (
    <div>
      <Line options={options} data={data} />
    </div>

  )
}


export default LineChart