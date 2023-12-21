import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Mip Shoes",
  description: "Shoes Shop",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Home - Mip Shoes",
    description: "Shoes Shop",
  },
  authors: [{ name: "Mip", url: "http://localhost:3000/" }],
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello World
    </main>
  );
}
