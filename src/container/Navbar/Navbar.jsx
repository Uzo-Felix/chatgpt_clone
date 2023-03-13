import React from 'react';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { HiOutlineMoon } from 'react-icons/hi';
import { FiLogOut } from 'react-icons/fi';
import {  RxPerson} from 'react-icons/rx';
import {MdClose} from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import Nav from './Nav';
import './Navbar.css';

const Navbar =()=>{
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
        <GiHamburgerMenu className="app__nav" onClick={() => setNavbarOpen((prev) => !prev)}/>
        {navbarOpen && (
            <>
        <nav className="nav">
        <div className="navbar__chat">
            <button>+ New chat</button>
            <p><i>Not seeing what you expected here? Don't worry, your conversation data is preserved! Check back soon</i></p>
        </div>
        <div className="navbar__action">
            <div className="navbar__action-content">
                <div className="navbar__action-content__icon">
                    <RxPerson />
                </div>
                <p>Upgrade to Plus</p>
                <button>NEW</button>
            </div>
            <div className="navbar__action-content">
                <HiOutlineMoon className="navbar__action-content__icon"/>
                <p>Dark mode</p>
            </div>
            <div className="navbar__action-content">
                <BsBoxArrowUpRight className="navbar__action-content__icon"/>
                <p>Updates & FAQ</p>
            </div>
            <div className="navbar__action-content">
                <FiLogOut className="navbar__action-content__icon"/>
                <p>Log out</p>
            </div>
        </div>
    </nav>
            <MdClose className="close" onClick={() => setNavbarOpen(false)}/>
        </>
        )}
         <Nav />
    </>
)};

export default Navbar;