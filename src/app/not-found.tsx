'use client';
import { useRouter } from "next/navigation";

const NotFound = () => {
    const router = useRouter();
    return ( 
        <div className="flex flex-col items-center min-h-screen justify-center">
            <h1 className="text-9xl">404</h1>
            <h2 className="text-xl mb-5">Page Not Found</h2>
            <button 
             onClick={() => router.push('/')}
             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
             >Go Home</button>
        </div>
     );
}
 
export default NotFound;