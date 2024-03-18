import { iMenu } from "@/interfaces/menu.interface";

export function Service(){
    const baseUrl = "http://localhost:3333/";
    const headers = {
        "Content-Type": "application/json; charset=utf-8",
      };
    async function getEstablishByUrl(url:string|string[]):Promise<iMenu | undefined>{
        try {
            const res = await fetch(`${baseUrl}shop/${url}`, {
              headers: headers,
            });
            if(res.status===200){
                const data= await res.json();
                const menu = await getMenu(data.establish.id)
                return menu
            }else{
                return undefined
            }
          } catch (error) {
            console.log(error);
          }
    }
    async function getMenu(id:string):Promise<iMenu | undefined> {
        try {
            const res: Response = await fetch(`${baseUrl}client/menu/${id}`, {
              headers: headers,
            });
            if(res.status===200){
                return await res.json();
            }else{
                return undefined
            }
          } catch (error) {
            console.log(error);
          }
    }

    return {getEstablishByUrl}
}