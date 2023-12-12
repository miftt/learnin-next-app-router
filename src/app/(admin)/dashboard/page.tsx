"use client"

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const DashboardPage = () => {
    const {data: session, status}: {data: any; status:string;} = useSession();
    const router = useRouter();
    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/login");
        } else {
            if(session !== undefined && session?.user.role !== 'admin') {
                router.push("/");
            }
        }
    },[router, session, session?.user.role, status])
    return ( 
        <div 
            className="
             w-full h-96
             bg-gray-300
             rounded-[12px]
             flex
             justify-center
             items-center
             "
            >
                Dashboard
        </div>
     );
}
 
export default DashboardPage;