
import { ProductCard } from "@/components/ProductCard/ProductCard";
import { SearchProduct } from "@/components/SearchProduct/SearchProduct";



export default function Home() {
 
  return (
    <main className="flex min-h-screen bg-gray-50 flex-col items-center gap-2 py-12">
     <SearchProduct/>
     <ProductCard/>
    </main>
  );
}
