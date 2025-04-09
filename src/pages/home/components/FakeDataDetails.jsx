import { useLocation } from "react-router-dom"

const FakeDataDetails = () => {

    const location = useLocation()
    const {id, title, brand, category, thumbnail, rating, price} = location?.state?.product || {}

  return (
    <div>
        <div>
            <img src={thumbnail} alt={title} />
        </div>
        <h1>{title} </h1>
    </div>
  )
}
export default FakeDataDetails