import DashboardCards from '../components/DashboardCards'
import { FiTag } from "react-icons/fi";
import { LuLayoutGrid, LuBox , LuBadgeDollarSign } from "react-icons/lu";

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

        </div>
        <div className='bg-white lg:w-2/3 w-full lg:h-[25rem] p-5 rounded-md shadow-lg '>

        </div>
       </div>
    </div>
  )
}