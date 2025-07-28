'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaUser, FaSearch, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white">
      <nav className="flex items-center justify-between px-4 py-3 md:px-10 lg:px-64">
        {/* Mobile Menu Icon */}
        <div className="flex md:hidden">
          <button onClick={() => setIsOpen(true)} className="text-xl">
            <FaBars />
          </button>
        </div>

        {/* Left Menu */}
        <ul className="hidden md:flex gap-6 items-center text-sm font-medium">
          <li><Link href="#">Home</Link></li>
          <li><Link href="#shop">Shop</Link></li>
          <li><Link href="#blogs">Blogs</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>

        {/* Logo */}
        <div className="flex justify-center items-center">
          <Image src="https://i.ibb.co/xKsytBjj/Group-395.png" alt="Logo" width={80} height={80} className="h-12 w-auto" />
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4 text-xl">
          <Link href="#login" title="Login">
            <FaUser />
          </Link>
          <Link href="#search" title="Search">
            <FaSearch />
          </Link>
          <Link href="#cart" className="relative" title="Cart">
            <FaShoppingCart />
            <span className="absolute -top-2 -right-2 text-xs bg-black text-white w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </Link>
        </div>
      </nav>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <span className="font-bold text-lg">Menu</span>
          <button onClick={() => setIsOpen(false)} className="text-2xl">
            <FaTimes />
          </button>
        </div>

        <ul className="flex flex-col gap-4 p-4 text-base">
          <li><Link href="#" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link href="#shop" onClick={() => setIsOpen(false)}>Shop</Link></li>
          <li><Link href="#blogs" onClick={() => setIsOpen(false)}>Blogs</Link></li>
          <li><Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          <li><Link href="#login" onClick={() => setIsOpen(false)}>Login</Link></li>
          <li><Link href="#search" onClick={() => setIsOpen(false)}>Search</Link></li>
          <li><Link href="#cart" onClick={() => setIsOpen(false)}>Cart</Link></li>
        </ul>
      </div>

      {/* Overlay for closing mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  )
}

