import Modal from "@/components/core/Modal";
import { getData } from "@/services/products";
import Image from "next/image";

export default async function DetailProductPage(props: any){
    const {params} = props;
    const product = await getData(`http://localhost:3000/api/product?id=${params.id}`) // HARUS SESUAI DENGAN FOLDERNYA KALAU [SLUG YA SLUG]
    // console.log(product.data)
    return(
        <Modal>
                <Image
                 src={product.data.image}
                 width={500}
                 height={500}
                 alt="product image" 
                 className="w-full object-cover aspect-square col-span-2"
                 loading="lazy"
                />
                <div className="bg-white p-4 px-6">
                    <h3>{product.data.name}</h3>
                    <p>Price: Rp. {product.data.price}</p>
                </div>
        </Modal>
    )
}
