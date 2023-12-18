import { getData } from "@/services/products";
import Image from "next/image";
import Link from "next/link";

type ProductPageProps = {
  params: {
    slug: string;
  };
};

const ProductPage = async (props: ProductPageProps) => {
  const { params } = props;
  const products = await getData(`http://localhost:3000/api/product`);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-5 gap-5 place-items-center">
      {/* <h1>{params.slug ? "Detail Product Page" : "Product Page"}</h1> */}
      {products.data.length > 0 &&
        products.data.map((products: any) => (
          <Link
            href={`/products/detail/${products.id}`}
            key={products.id}
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-5"
          >
            <Image
              className="p-8 rounded-t-lg object-cover h-96 w-full"
              width={500}
              height={500}
              src={products.image}
              alt="product image"
              loading="lazy"
            />
            <div className="px-5 pb-5">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">
                {products.name}
              </h5>
              <div className="flex items-center justify-between mt-3">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${products.price}
                </span>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </Link>
        ))}

      {params.slug && (
        <>
          <p>Category: {params.slug[0]} </p>
          <p>Gender: {params.slug[1]} </p>
          <p>Id: {params.slug[2]} </p>
        </>
      )}
    </div>
  );
};

export default ProductPage;
