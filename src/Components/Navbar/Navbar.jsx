import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { logo } from "../../Utilities/Constants"
import "../Navbar/Navbar.css"
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const navigate = useNavigate();

    const HandleSubmit = (e) => {
        e.preventDefault();

        if (searchTerm) {
            navigate(`/search/${searchTerm}`)
            setSearchTerm('');
        }

    }


    return (
        <>
            <div className="navbar">
                <Link to='/'><img src={logo} alt="logo" height='40px' width='40px' /></Link>
                <form className="navbar_search" onSubmit={HandleSubmit}>
                    <input type="search" name='search' autoComplete='off' placeholder='Search' value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value) }} />
                    <button name='submit'><SearchIcon /></button>
                </form>
            </div>
        </>
    )
}

export default Navbar