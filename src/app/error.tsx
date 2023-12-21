'use client'

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Error = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleRefresh = async () => {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        router.refresh();
        setLoading(false);
    }

    return ( 
        <>
        {loading ? (
            <div className="loader"></div>
            ) : (
                <div className='flex flex-col items-center min-h-screen justify-center'>
                    <h1 className="text-9xl">500</h1>
                    <h2 className="text-xl mb-5">Something went wrong</h2>
                    <button 
                        onClick={handleRefresh}
                        className="bg-gray-500 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded animate-bounce transition"
                    >
                        Refresh
                    </button>
                </div>
            )}
        </>
    );
}
 
export default Error;
