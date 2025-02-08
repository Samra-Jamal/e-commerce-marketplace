import { client } from '@/sanity/lib/client'
import React from 'react'
interface Product{
    category:string;
    id:string;
    description: string;
    name: string;
    image: any;
    _id:string;
}
const page = async({params:{id}}:{params:{id:string}}) => {
    const query = `*[type == "food" && _id == $id] {
    name,
    price,
    description,
    category,
    "image":image.asset._ref,
    "id":_id,}[0]`
    const products:Product | null = await client.fetch(query,{id})
    if(!products){
        return(
            <div>
                <h1>Product not found</h1>
            </div>
        )
    }return(
        <div key={products.id}>
            <h1>{products.name}</h1>
        </div>
    )
} 
export default page