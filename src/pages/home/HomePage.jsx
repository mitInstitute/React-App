import FakeData from "./components/FakeData"
import Gallery from "./components/Gallery"
import Hero from "./components/Hero"

const HomePage = ()=>{
    return (
        <div className="space-y-20">
            <Hero />
            <Gallery />
            <FakeData />
        </div>
    )
}
export default HomePage