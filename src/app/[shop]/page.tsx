"use client"
import { Service } from "@/controller/Api";
import { iMenu } from "@/interfaces/menu.interface";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";


export default function Home() {
  const [menu,setMenu] = useState({} as iMenu)
  const {shop} = useParams()
  const api = Service()

  async function getShop(){
    const res: iMenu | undefined= await api.getEstablishByUrl(shop)
    console.log(res)
    if(res){
      setMenu(res)
    }
  }
  useEffect(()=>{
    getShop()
  },[])
  return (
    <main className="flex min-h-screen bg-gray-50 flex-col items-center justify-between py-24">
     <div className="flex gap-4 w-full overflow-x-auto px-2 md:justify-center">{menu.id && menu.product.map((prod)=>{
      return <div className="bg-[#574E6D] rounded-[55px] p-6 flex items-center justify-between gap-4 w-52 flex-col">
        <p>{prod.name}</p>
        <p>{prod.description}</p>
        <p>R$ {prod.price}</p>
      </div>
     })}</div>
    </main>
  );
}
