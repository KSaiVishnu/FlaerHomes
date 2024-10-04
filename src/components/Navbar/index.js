import React from 'react'
import { Link } from 'react-router-dom'

import "./index.css"

function Navbar() {
    return (
        <div>
            <ul className='navbar-ul-list'>
                <li>
                    <Link to="/FlaerHomes"><img className='img-logo' src="https://res.cloudinary.com/dtqmufptd/image/upload/v1727956537/Screenshot_2024-10-03_172525_dviwju.png" alt="logo" />
                    </Link>
                </li>
                <div className="li">
                <li>
                    <Link to="/FlaerHomes">
                        <button className="sidebar-button">
                            Home
                        </button>
                    </Link>
                </li>
                <li>
                    <Link to="/FlaerHomes/mylibrary">
                        <button className="sidebar-button">
                            Library
                        </button>
                    </Link>
                </li>
                </div>
            </ul>
        </div>
    )
}

export default Navbar
