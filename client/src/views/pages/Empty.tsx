


type Import ={
  item: any,
  top?: string
}

export default function Empty({item , top}:Import) {
  return (
    <div className={`w-full p-4  ${! top ? " mt-[10rem]" : top} items-center flex justify-center  text-center `}>You currently have no {item}s</div>
  )
}
