import { Link } from "react-router-dom"
import PrimaryBtnWithLink from "./shared/PrimaryBtnWithLink"

const Navbar = ()=>{
    const navItems = [
        {title:"Home", route:"/"},
        {title:"About", route:"/about"},
        {title:"Products", route:"/products"},
    ]

    return (
        <nav className="flex items-center justify-between p-2 bg-gray-500 text-black font-medium text-sm ">
            <div id="nav-left">
                <Link to={"/"} className="font-medium text-xl">Logo</Link>
            </div>
            <div id="nav-center">
                <ul  className="hidden md:flex items-center justify-center gap-4" >
                    {
                        navItems.map(({title, route}, idx)=> <li key={idx} className="hover:underline duration-300 " ><Link to={route}>{title}</Link></li> )
                    }
                </ul>
            </div>
            <div id="nav-right">
                <PrimaryBtnWithLink link="/contact" title="Contact" textColor="white" background="black " />
            </div>
        </nav>
    )
}
export default Navbar