import { Link } from "react-router-dom"

const Navbar = ()=>{

    const navItems = [
        {title:"Home", route:"/"},
        {title:"About", route:"/about"},
        {title:"Products", route:"/products"},
    ]

    return (
        <nav className="flex items-center justify-between">
            <div id="nav-left">
                <Link to={"/"}>Logo</Link>
            </div>
            <div id="nav-center">
                <ul  className="flex items-center justify-center gap-4" >
                    {
                        navItems.map(({title, route}, idx)=> <li key={idx} className="hover:underline duration-300 " ><Link to={route}>{title}</Link></li> )
                    }
                </ul>

            </div>
            <div id="nav-right">
                <button>Contact</button>
            </div>
        </nav>
    )
}
export default Navbar