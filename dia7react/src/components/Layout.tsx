import { Link, Outlet } from "react-router"

export const Layout = () => {
    return <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
        <Outlet />
        <ul>
            <li><Link to="/users/1">Users 1</Link></li>
            <li><Link to="/products/1">Products</Link></li>
        </ul>
    </div>
}