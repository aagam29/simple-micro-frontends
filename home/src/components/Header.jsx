import React from 'react'
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div className="p-4 bg-gray-900 text-white flex justify-between items-center">
            <Link to="/">
                <span className="text-2xl font-bold" >
                    Awesome Doctors
                </span>
            </Link>
        </div>
    );
}
export default Header;