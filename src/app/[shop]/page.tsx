"use client"
import { useRouter, useParams } from "next/navigation";


export default function Home() {
  const route = useRouter()
  const {shop} = useParams()
  console.log(shop)
  // route.push("/originalle")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <div>Welcome</div>
    </main>
  );
}
