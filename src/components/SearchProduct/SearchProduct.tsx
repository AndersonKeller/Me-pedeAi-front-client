"use client"
import { productStore } from "@/store/product.store"
import {Search} from "lucide-react"
export const SearchProduct=()=>{
    const {products,setFilterProducts} = productStore()
   
    const search=(e:string)=>{
        const filtered = products.filter((prod)=>prod.name.includes(e))
        e!==""?setFilterProducts(filtered):setFilterProducts(products)
    }
    return <fieldset className="relative">
        <Search className="absolute left-3 top-[30%]"/>
        <input onChange={(e)=> search(e.target.value)} type="text" placeholder="Pesquisar..." className="pl-10 w-full"  />
    </fieldset>
}