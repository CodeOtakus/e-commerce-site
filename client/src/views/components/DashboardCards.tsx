export default function ({name, value, icon}:any) {
  return (
    <div className='flex md:w-1/4 w-full justify-between  p-3 bg-white shadow-lg rounded-md items-center'>
      <div className="flex flex-col">
        <h1 className='text-md text-gray-500 capitalize '>{name}</h1>
        <h1 className={`text-3xl font-bold text-orange-500`}>{value}</h1>
      </div>
      <div className="text-4xl text-orange-500">
        {icon}
      </div>
    </div>
  )
}
