import Gallery from "./components/Gallery"
import Hero from "./components/Hero"

const HomePage = ()=>{
    return (
        <div className="space-y-20">
            <Hero />
            <Gallery />
        </div>
    )
}
export default HomePage