"use client";

import { useState, useEffect } from "react";
import { Toaster, toast } from "sonner";

import getDate from "@/components/getDate";

const AdminProductPage = () => {
    const [loading, setLoading] = useState(false);
    const [loadingText, setLoadingText] = useState('Revalidating');

    useEffect(() => {
        const intervalId = setInterval(() => {
            setLoadingText((prevLoadingText) => {
                return prevLoadingText === 'Revalidating...' ? 'Revalidating' : `${prevLoadingText}.`;
            });
        }, 1000); // Set interval to 500ms

        return () => clearInterval(intervalId); // Clear interval on unmount
    }, []);

    const revalidate = async () => {
        setLoading(true);
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/revalidate?tag=products&secret=Mifuzi12345`, {
            method: "POST",
        });
        if (!res.ok){
            setLoading(false);
            toast.error(`Revalidate Failed at ${getDate().allData}`);
            return
        } else {
            const response = await res.json();
            if(response.revalidate){
                toast.success(`Revalidate Success at ${getDate().allData}`);
            };
            setLoading(false);
        }   
    }

    return ( 
        <div className="w-3/6 h-96 bg-gray-300 rounded-[12px] flex justify-center items-center mr-5">
            {/* <Toaster position="bottom-left" richColors/> */}
            <button
             onClick={() => revalidate()}
             className="bg-slate-400 m-5 rounded-md px-3 text-sm h-7 hover:bg-slate-500 transition"
             >
                {loading ? loadingText : 'Revalidate'}
            </button>
        </div>
     );
}
 
export default AdminProductPage;
