import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FiMoon, FiSun } from 'react-icons/fi';

const Navbar = () => {
    const { darkMode, setDarkMode } = useContext(ThemeContext);

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-700">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className="text-lg font-bold text-gray-900 dark:text-white">Bharath Datta Sai S</h1>

                {/* Dark Mode Toggle Button */}
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="flex items-center space-x-2 px-3 py-2 rounded text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 transition"
                    aria-label="Toggle Dark Mode"
                >
                    {darkMode ? (
                        <>
                            <FiSun className="text-xl" />
                            <span>Light Mode</span>
                        </>
                    ) : (
                        <>
                            <FiMoon className="text-xl" />
                            <span>Dark Mode</span>
                        </>
                    )}
                </button>


                {/* Navigation Links */}
                <ul className="flex space-x-6 text-sm font-medium">
                    <li><a href="#home" className="hover:text-blue-500">Home</a></li>
                    <li><a href="#about" className="hover:text-blue-500">About</a></li>
                    <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
                    <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
