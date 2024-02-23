import DashboardCards from '../components/DashboardCards'
import { FiTag } from "react-icons/fi";
import { LuLayoutGrid, LuBox , LuBadgeDollarSign } from "react-icons/lu";
import { Chart as ChartJS, registerables ,Colors} from 'chart.js';
ChartJS.register(Colors);
ChartJS.register(...registerables);

import { Bar , Doughnut } from 'react-chartjs-2'

export default function Dashboard() {
  return (
    <div className='flex flex-col gap-4'>
        <h1 className='text-3xl text-gray-600'> Welcome <span className='text-orange-500'>Kephas</span></h1>

       <div className='w-full mt-5 flex justify-between md:space-x-4 max-md:flex-col max-md:space-y-4 '>
        <DashboardCards name={"Revenue"} value={"$ 87,000"} icon={<FiTag />} />
        <DashboardCards name={"Profit"} value={"$ 45,000"} icon={<LuBadgeDollarSign/>} />
        <DashboardCards name={"Products"} value={"40,000"} icon={<LuLayoutGrid />} />
        <DashboardCards name={"Stores"} value={"300"} icon={<LuBox />} />
       </div>

       <div className='mt-5 w-full flex justify-between max-lg:flex-col max-lg:space-y-3 lg:space-x-3'>
        <div className='bg-white lg:w-1/3 w-full lg:h-[25rem] p-5 rounded-md shadow-lg'>
          <Doughnut 
            data={{
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
              datasets: [
                {
                  label: 'Revenue',
                  data: [12, 19, 3, 5, 2, 3],
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                  ],
                  borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                  ],
                  borderWidth: 1,
                },
              ],
            
            }}
          />
        
        </div>


        <div className='bg-white lg:w-2/3 w-full lg:h-[25rem] p-5 rounded-md shadow-lg '>
        <Bar
          data={{
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
              {
                label: 'Revenue',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
              },
            ],
          }}
         />
        </div>
       </div>
    </div>
  )
}