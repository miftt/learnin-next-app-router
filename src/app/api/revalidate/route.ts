import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request: NextRequest){
    let date = new Date();
    let waktu = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    let tanggal = date.getDate();
    let bulan = date.getMonth() + 1; // Bulan dimulai dari 0, jadi kita tambahkan 1.
    let tahun = date.getFullYear();

    const tag = request.nextUrl.searchParams.get('tag');
    const secret = request.nextUrl.searchParams.get('secret');

    if(secret !== process.env.REVALIDATE_TOKEN){
        return NextResponse.json({
            status: 401,
            message: "Invalid secret"
        },{
            status: 401
        })
    }

    if(!tag){
        return NextResponse.json({
            status: 400,
            message: "Tag param is required"
        })
    }
    revalidateTag(tag);

    return NextResponse.json({
        revalidate: true,
        now: `${waktu} WIB - ${tanggal}/${bulan}/${tahun}`,
    });
}