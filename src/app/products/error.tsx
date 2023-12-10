"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const Error: React.FC<ErrorProps> = ({
    error,
    reset
}) => {
    return ( 
        <div className="flex flex-col items-center justify-center p-24">
            <h2>
                Something went wrong!
            </h2>
            <button onClick={() => reset()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Try Again
            </button>
        </div>
     );
}
 
export default Error;