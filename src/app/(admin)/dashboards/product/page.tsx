"use client";

import { useState } from "react";

import getDate from "@/components/getDate";

const AdminProductPage = () => {
    const [status, setStatus] = useState("");
    const [color, setColor] = useState("");
    const revalidate = async () => {
        const res = await fetch("http://localhost:3000/api/revalidate?tag=products&secret=123456", {
            method: "POST",
        });
        
        if (!res.ok){
            setStatus(`Revalidate Failed at ${getDate().allData}`);
            setColor("text-red-500");
            return
        } else {
            const response = await res.json();
            if(response.revalidate){
                setStatus(`Revalidate Success at ${getDate()}`);
                setColor("text-green-500");
            };
        }   
    }

    return ( 
        <div>
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
