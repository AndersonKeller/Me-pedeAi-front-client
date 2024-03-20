"use client"
import { Service } from "@/controller/Api"
import { iMenu } from "@/interfaces/menu.interface"
import { productStore } from "@/store/product.store"
import { useParams } from "next/navigation"
import { useState, useEffect } from "react"
import { NotFoundList } from "../SearchProduct/NotFoundList"

export const ProductCard=()=>{
    const [menu,setMenu] = useState({} as iMenu)
    const {shop} = useParams()
    const api = Service()
    const {setProducts,products,filterProducts,setFilterProducts} = productStore()
  
    async function getShop(){
      const res: iMenu | undefined= await api.getEstablishByUrl(shop)
      console.log(res)
      if(res){
        setMenu(res)
        setProducts(res.product)
        setFilterProducts(res.product)
      }
    }
    useEffect(()=>{
      getShop()
    },[])
    return <div className="flex gap-4 w-full overflow-x-auto p-2 md:justify-center">
        {filterProducts.length===0&&
            <NotFoundList/>
        }
        {menu.id && filterProducts.map((prod)=>{
        
       return <div className="bg-primary rounded-[55px] p-6 flex items-center justify-between gap-4 w-52 flex-col">
          <p>{prod.name}</p>
          <p>{prod.description}</p>
          <p>R$ {prod.price}</p>
        </div>
       })}</div>
}