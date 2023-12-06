import { NextRequest, NextResponse } from "next/server";

const data = [
    {
        id: 1,
        name: "Sepatu Baru",
        price: 100000,
    },
    {
        id: 2,
        name: "Sepatu Baru 2",
        price: 10000000,
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