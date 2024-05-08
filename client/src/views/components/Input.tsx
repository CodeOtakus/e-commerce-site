

interface InputProps {
  name: string; 
  type?: string;
  label: string;
  placeholder?: string; 
  customStyle?: string
  value?: string
  required?: boolean,
  onchange?: any
}

export default function Input({ name, type, label, placeholder, customStyle , value, required, onchange}: InputProps) {



  return (
    <div className="flex flex-col mt-3 w-full">
      <label className={` ${ required ? "after:content-['*'] after:ml-0.5 after:text-red-500": "" } block text-md font-medium text-slate-700 md:text-xl capitalize `}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={ type === "file" ? "block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100 p-3 px-10 max-md:px-5 rounded-md shadow-lg focus:outline-none " :`${customStyle} p-3 px-10 max-md:px-5 rounded-md shadow-lg focus:outline-none `}
        name={name}
        defaultValue={value}
        required = {required}
        onChange={onchange}
      />
    </div>
  );
}