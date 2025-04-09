import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"

const FakeData = () => {

    const [data, setData] = useState(null)

    useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])

  return (
    <section className="text-center px-2 ">
         <h1 className="heading ">Products</h1>
        <p className="sub-heading mb-4 mt-1 ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores iure
          maxime nisi voluptas suscipit, error voluptate!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
            {
                data?.products?.map(product=> <ProductCard product={product} /> )
            }
        </div>  

    </section>
  )
}
export default FakeData