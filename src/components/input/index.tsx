import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const Input = ({ label, name, ...props }: InputProps) => {
  return (
    <>
      <label htmlFor={name} className="text-purple-400 font-semibold mb-2">
        {label}
      </label>

      <input id={name} name={name} className="border border-gray-300 focus:border-purple-400 focus:ring-purple-400 block bg-gray-50 py-3 px-4 rounded-md w-full max-w-lg mb-3 text-purple-700" {...props} />
    </>
  )
}

export default Input;
