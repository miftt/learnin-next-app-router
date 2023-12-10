"use client";

import { useState } from "react";

import getDate from "@/components/getDate";

const AdminProductPage = () => {
    const [status, setStatus] = useState("");
    const [color, setColor] = useState("");
    const revalidate = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/revalidate?tag=products&secret=Mifuzi12345`, {
            method: "POST",
        });
        
        if (!res.ok){
            setStatus(`Revalidate Failed at ${getDate().allData}`);
            setColor("text-red-500");
            return
        } else {
            const response = await res.json();
            if(response.revalidate){
                setStatus(`Revalidate Success at ${getDate().allData}`);
                setColor("text-green-500");
            };
        }   
    }

    return ( 
        <div className="w-3/6 h-96 bg-gray-300 rounded-[12px] flex justify-center items-center mr-5">
            <h1 className={`${color}`}>{status}</h1>
            <button
             onClick={() => revalidate()}
             className="bg-slate-400 m-5 rounded-md px-3 text-sm h-7 hover:bg-slate-500 transition"
             >
                Revalidate
            </button>
        </div>
     );
}
 
export default AdminProductPage;
