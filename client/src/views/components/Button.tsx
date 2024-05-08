

interface types{
  name: string,
  onClick: any,
  type?:any,
  customClass:string
}
export default function Button({name, onClick, type, customClass}:types) {
  return (
    <button className={`  ${customClass} button`} type={type} onClick={onClick}>
        {name}
    </button>
  )
}
