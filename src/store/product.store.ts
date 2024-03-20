import { iProduct } from "@/interfaces/product.interface";
import { create } from "zustand";

interface ProductStore {
    products: iProduct[]
    setProducts: (products:iProduct[])=>void
    filterProducts: iProduct[]
    setFilterProducts: (products:iProduct[])=>void
}


export const productStore = create<ProductStore>()((set)=>({
    products:[] as iProduct[],
    setProducts: (newProducts:iProduct[])=>set(()=>({products:newProducts})),
    filterProducts: [] as iProduct[],
    setFilterProducts: (newProducts:iProduct[])=>set(()=>({filterProducts:newProducts}))
}))