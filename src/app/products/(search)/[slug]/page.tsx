'use client'

import { useSearchParams } from "next/navigation";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const SearchProducts = () => {
    const search = useSearchParams();
    const searchQuery = search ? search?.get('q'): null;
    
    const encodedSearchQuery = encodeURI(searchQuery || '');
    const {data, isLoading} = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/product?q=${encodedSearchQuery}`, fetcher); 

   console.log(data)
    return ( 
        <div>
            <h1>Search Products</h1>
            <p>{searchQuery}</p>
        </div>
     );
}
 
export default SearchProducts;