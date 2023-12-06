import { NextRequest, NextResponse } from "next/server";

const data = [
    {
        id: 1,
        title: "Nike Dunk Retro",
        price: 1700000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a3e7dead-1ad2-4c40-996d-93ebc9df0fca/dunk-low-retro-shoe-66RGqF.png"
    },
    {
        id: 2,
        title: "Nike Air Force 1",
        price: 1400000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/air-force-1-07-shoes-WrLlWX.png"
    }
];

export async function GET(request: NextRequest) {
    const {searchParams} = new URL(request.url);
    const id = searchParams.get("id");
    if (id) {
        const detailProduct = data.find((item) => item.id === Number(id))
        if (detailProduct) {
            return NextResponse.json({
                status: 200,
                message: "Success",
                data: detailProduct
            })
        }
        return NextResponse.json({
            status: 404,
            message: "Not Found",
            data: {}
        })
    }
    return NextResponse.json({
        status: 200,
        message: "Success",
        data: data
    })
}