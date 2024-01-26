'use client'

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();
    const onSearch = (event: React.FormEvent) => {
        event.preventDefault();
        const encodedSearchQuery = encodeURI(searchQuery);
        router.push(`/products/search?q=${encodedSearchQuery}`);
        console.log('searchQuery', encodedSearchQuery);
    };
    
    return ( 
        <div className="flex justify-end mt-8 mr-16">
            <CiSearch size={30}/>
            <form className="flex" onSubmit={onSearch}>
                <input
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder="Search products..." 
                    className="
                        text-gray-600
                        text-xs 
                        font-bold 
                        rounded-none 
                        border-0 
                        border-b-2 
                        border-slate-400 
                        focus:border-slate-600 
                        focus:outline-none
                    "
                />
            </form>
        </div>
     );
}
 
export default SearchInput;