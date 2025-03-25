import PrimaryBtnWithLink from "../../../components/shared/PrimaryBtnWithLink"

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-gray-500 to-white w-full h-full md:min-h-screen flex items-center justify-center text-center ">
        <div className="space-y-2.5">
            <h1 className="text-4xl md:text-6xl font-semibold " >Welcome to our Application</h1>
            <p className="font-medium" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus a in itaque atque consequatur esse assumenda eum labore. Animi, itaque.</p>
            <PrimaryBtnWithLink link="/explore"  title="Exlpore now!" textColor="white" background="black" />
        </div>
    </section>
  )
}
export default Hero