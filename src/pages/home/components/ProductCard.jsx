import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({product}) => {
    const {id, title, brand, category, thumbnail, rating, price} = product || {}
  return (
  <Link to={`fake-data-details/${id}`} state={{product}} >
    <div className="shadow shadow-gray-500 rounded-lg">
        <div>
            <img src={thumbnail} alt={title}/>
        </div>
        <div className="p-4">
        <div className="flex items-center justify-between text-xs text-gray-600 ">
               <div className="flex items-center gap-1">
               <FaStar />  <p> {rating } </p>
               </div>
                <p>${price} </p>
            </div>
            <div className="flex items-center justify-between text-xs text-gray-600 ">
                <p>{brand ? brand : "Kichu ekta" } </p>
                <p>{category} </p>
            </div>
            <h1 className="text-xl font-medium">{title} </h1>
        </div>
    </div>
  </Link>
  )
}
export default ProductCard