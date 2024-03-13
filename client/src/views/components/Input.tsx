

interface InputProps {
  name: string; 
  type: string;
  label: string;
  placeholder?: string; 
  customStyle?: string
  value?: string
  required?: boolean,
  onchange?: (event: React.ChangeEvent<HTMLInputElement>) => void | PromiseLike<void>;
}

export default function Input({ name, type, label, placeholder, customStyle , value, required, onchange}: InputProps) {



  return (
    <div className="flex flex-col mt-3 w-full">
      <label className={` ${ required ? "after:content-['*'] after:ml-0.5 after:text-red-500": "" } block text-md font-medium text-slate-700 md:text-xl  `}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={`${customStyle} p-3 px-10 max-md:px-5 rounded-md shadow-lg focus:outline-none `}
        name={name}
        defaultValue={value}
        required = {required}
        onChange={onchange}
      />
    </div>
  );
}