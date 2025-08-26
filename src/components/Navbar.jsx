import { Menu, X } from "lucide-react"
import { useState } from 'react';
import logo from "../assets/images/logo.png"
import { navItems } from '../constants/index';

const Navbar = () => {

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img src={logo} alt="logo" className="h-10 w-13 mr-2" />
                        <span className="text-xl tracking-tight">Maple</span>
                    </div>
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex justify-center space-x-12 items-center">
                        <a href="#" className="py-2 px-3 border rounded-md">
                            Blog
                        </a>
                        <a
                            href=""
                            className="py-2 px-3 rounded-md text-white"
                            style={{ background: "linear-gradient(to right, #2068FA, #1546C8)" }}
                        >
                            Get Started
                        </a>
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button
                            onClick={toggleNavbar}
                        >
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 w-full p-12 flex flex-col justify-center items-center lg:hidden"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className="py-4">
                                    <a href={item.href} className="">{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex space-x-6">
                            <a href="" className="py-2 border px-3 rounded-md">Blog</a>
                            <a
                                href=""
                                className="py-2 px-3 rounded-md text-white"
                                style={{ background: "linear-gradient(to right, #2068FA, #1546C8)" }}
                            >
                                Get Started
                            </a>

                        </div>
                    </div>

                )}
            </div>
        </nav>
    )
}

export default Navbar