import { Menu, X } from "lucide-react"
import { useState, useEffect } from 'react';
import logo from "../assets/images/logo.png"
import { navItems } from '../constants/index';

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen)
  }

  // Close mobile drawer when clicking on a nav item
  const handleNavItemClick = () => {
    setMobileDrawerOpen(false)
  }

  // Prevent body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup in case component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileDrawerOpen]);

  // Close drawer when clicking outside (on overlay)
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setMobileDrawerOpen(false)
    }
  }

  // Close drawer on escape key press
  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape' && mobileDrawerOpen) {
        setMobileDrawerOpen(false)
      }
    }

    if (mobileDrawerOpen) {
      document.addEventListener('keydown', handleEscapeKey)
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [mobileDrawerOpen])

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 bg-white/10">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          {/* Logo + Title */}
          <div className="flex items-center flex-shrink-0">
            <img src={logo} alt="logo" className="h-10 w-13 mr-2" />
            <span className="text-xl tracking-tight font-semibold">Maple</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="hover:text-blue-500 transition">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex justify-center space-x-6 items-center">
            <a href="#" className="py-2 px-3 border rounded-md hover:text-blue-500 transition">
              Blog
            </a>
            <a
              href=""
              className="py-2 px-3 rounded-md text-white shadow-md"
              style={{ background: "linear-gradient(to right, #2068FA, #1546C8)" }}
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button 
              onClick={toggleNavbar}
              className="p-2 rounded-lg hover:bg-gray-100/20 transition-colors duration-200"
              aria-label={mobileDrawerOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative w-6 h-6">
                <Menu 
                  className={`absolute inset-0 transition-all duration-300 ${
                    mobileDrawerOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
                  }`} 
                />
                <X 
                  className={`absolute inset-0 transition-all duration-300 ${
                    mobileDrawerOpen ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Overlay */}
        {mobileDrawerOpen && (
          <div
            className="fixed inset-0 top-0 z-40 lg:hidden"
            onClick={handleOverlayClick}
          >
            {/* Backdrop */}
            <div 
              className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
                mobileDrawerOpen ? 'opacity-100' : 'opacity-0'
              }`}
            />
            
            {/* Dropdown Panel */}
            <div
              className={`absolute top-0 left-0 right-0 w-full min-h-screen
              bg-white/95 backdrop-blur-xl shadow-2xl
              flex flex-col transform transition-transform duration-300 ease-out ${
                mobileDrawerOpen ? 'translate-y-0' : '-translate-y-full'
              }`}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-neutral-200">
                <div className="flex items-center">
                  <img src={logo} alt="logo" className="h-8 w-10 mr-2" />
                  <span className="text-lg font-semibold text-gray-900">Maple</span>
                </div>
                <button
                  onClick={toggleNavbar}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              {/* Content Area */}
              <div className="flex-1 flex flex-col justify-center items-center px-6 py-12">
                {/* Navigation Items */}
                <ul className="space-y-6 text-center mb-12">
                  {navItems.map((item, index) => (
                    <li key={index}>
                      <a 
                        href={item.href} 
                        onClick={handleNavItemClick}
                        className="block py-4 px-8 text-xl font-medium text-gray-700 hover:text-blue-600 
                        hover:bg-blue-50 rounded-xl transition-all duration-200 border border-transparent 
                        hover:border-blue-100 hover:shadow-md"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                  <a 
                    href="#" 
                    onClick={handleNavItemClick}
                    className="flex-1 py-4 px-6 text-center border-2 border-gray-300 rounded-xl 
                    hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 
                    font-medium text-lg"
                  >
                    Blog
                  </a>
                  <a
                    href=""
                    onClick={handleNavItemClick}
                    className="flex-1 py-4 px-6 rounded-xl text-white text-center shadow-lg 
                    hover:shadow-xl transition-all duration-200 font-medium text-lg transform hover:scale-105"
                    style={{ background: "linear-gradient(to right, #2068FA, #1546C8)" }}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar;