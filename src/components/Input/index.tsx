interface InputProps {
    type: string;
    name: string;
    id: string;
    placeholder: string
    required: boolean
}

const Input: React.FC<InputProps> = ({
    type,
    name,
    id,
    placeholder,
    required
}) => {
    return ( 
            <input
                type={type}
                name={name}
                id={id}
                className="
                 bg-gray-50
                 border 
                 border-gray-300 
                 text-gray-900 
                 sm:text-sm rounded-lg 
                 focus:ring-blue-500 
                 focus:border-blue-500 
                 block w-full p-2.5 
                 dark:bg-gray-600 
                 dark:border-gray-500 
                 dark:placeholder-gray-400 
                 dark:text-white"
                 placeholder={placeholder}
                required={required}
              />
     );
}
 
export default Input;