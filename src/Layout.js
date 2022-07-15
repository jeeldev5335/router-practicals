import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const Layout = () => {
    return (
        <React.Fragment>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </React.Fragment>
    );
}

export default Layout;