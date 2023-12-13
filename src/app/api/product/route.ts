import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

// const data = [
//   {
//     id: 1,
//     title: "Nike Dunk Retro",
//     description: "Created for the hardwood but taken to the streets, the Nike Dunk Low Retro returns with crisp overlays and original team colours. This basketball icon channels '80s vibes with premium leather in the upper that looks good and breaks in even better. Modern footwear technology helps bring the comfort into the 21st century.",
//     price: 1700000,
//     image:
//       "https://static.nike.com/a/images/t_PDP_1728_v1,f_auto/t_product_v1/a3e7dead-1ad2-4c40-996d-93ebc9df0fca/dunk-low-retro-shoe-66RGqF.png",
//   },
//   {
//     id: 2,
//     title: "Air Jordan 1 Low",
//     description: "Inspired by the original that debuted in 1985, the Air Jordan 1 Low offers a clean, classic look that's familiar yet always fresh. With an iconic design that pairs perfectly with any 'fit, these kicks ensure you'll always be on point.",
//     price: 1729000,
//     image:
//       "https://static.nike.com/a/images/t_PDP_1728_v1,f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1c0c434c-9802-4556-89c7-a8600b2828d8/air-jordan-1-low-shoes-6Q1tFM.png",
//   },
//   {
//     id: 3,
//     title: "Nike Air Force 1",
//     description: "The radiance lives on in the Nike Air Force 1 '07, the basketball original that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.",
//     price: 1400000,
//     image:
//       "https://static.nike.com/a/images/t_PDP_1728_v1,f_auto/t_product_v1/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/air-force-1-07-shoes-WrLlWX.png",
//   },
//   {
//     id: 4,
//     title: "Air Jordan 1 Low SE",
//     description: "Fresh look, familiar feel. Every time the AJ1 gets a remake, you get the classic sneaker in new colours and textures. Premium materials and accents give modern expression to an all-time favourite.",
//     price: 1549000,
//     image:
//       "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d8d666d5-f68a-4488-ae2a-a7203c3e6861/air-jordan-1-low-se-shoes-H7DD5v.png",
//   },
// ];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    const detailProduct = await retrieveDataById("products", id);
    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        data: detailProduct,
      });
    }
    return NextResponse.json({
      status: 404,
      message: "Not Found",
      data: {},
    });
  }

  const products = await retrieveData("products");

  return NextResponse.json({
    status: 200,
    message: "Success",
    data: products,
  });
}
