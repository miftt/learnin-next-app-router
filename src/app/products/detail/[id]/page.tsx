import { getData } from "@/services/products";
import Image from "next/image";

export default async function DetailProductPage(props: any){
    const {params} = props;
    const product = await getData(`http://localhost:3000/api/product?id=${params.id}`) // HARUS SESUAI DENGAN FOLDERNYA KALAU [SLUG YA SLUG]
    // console.log(product.data)
    return(
        <div className="container mx-auto my-10">
            <div className="w-1/2 mx-auto border border-gray-700">
                <Image
                 src={product.data.image}
                 width={300}
                 height={300}
                 alt="" 
                 className="w-full object-cover aspect-square col-span-2"
                 loading="lazy"
                />
                <div className="bg-white p-4 px-6">
                    <h3>{product.data.name}</h3>
                    <h4>{product.data.description}</h4>
                    <p>Price: Rp. {product.data.price}</p>
                </div>
            </div>
        </div>
    )
}