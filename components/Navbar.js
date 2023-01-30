import React, { useState } from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useRouter();
  return (
    <div className='Navbar'>
      <img src="/logo.png" alt="logo" className="logo"/>
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link className={`nav-links ${location.pathname === '/' ? 'active' : ''}`} href="/">Home</Link>
        <Link className={`nav-links ${location.pathname === '/about' ? 'active' : ''}`} href="/about">About</Link>
        <Link className={`nav-links ${location.pathname === '/service' ? 'active' : ''}`} href="/service">Service</Link>
        <Link className={`nav-links ${location.pathname === '/contact' ? 'active' : ''}`} href="/contact">Contact</Link>
      </div>
      <div className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
