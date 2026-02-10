import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6 text-white'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <a href="#hero" className="text-2xl font-bold tracking-tighter">
                    MERNA<span className="text-blue-500">.</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium hover:text-blue-500 transition-colors"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white text-black border-b absolute w-full overflow-hidden"
                    >
                        <div className="px-6 py-4 flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-lg font-medium hover:text-blue-500"
                                    onClick={(e) => {
                                        e.preventDefault();

                                        const id = item.href.replace('#', '');

                                        setIsOpen(false);

                                        setTimeout(() => {
                                            const section = document.getElementById(id);
                                            if (section) {
                                                section.scrollIntoView({ behavior: 'smooth' });
                                            }
                                        }, 100);
                                    }}

                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
