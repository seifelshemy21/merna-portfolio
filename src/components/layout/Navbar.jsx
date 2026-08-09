import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
    { name: 'Services', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Clients', href: '#experience' },
    { name: 'About Me', href: '#about' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const id = href.replace('#', '');
        setIsOpen(false);
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-ivory/95 backdrop-blur-md border-b border-champagne/40 shadow-xs py-4 text-charcoal'
                    : 'bg-transparent py-6 text-charcoal'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-10 flex justify-between items-center">
                {/* Logo / Name on the left */}
                <a
                    href="#hero"
                    onClick={(e) => handleNavClick(e, '#hero')}
                    className="font-serif text-2xl font-bold tracking-tight text-charcoal hover:opacity-85 transition-opacity"
                >
                    Merna<span className="text-gold font-sans">.</span>
                </a>

                {/* Navigation links on the right (Desktop) */}
                <div className="hidden md:flex items-center space-x-9">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => handleNavClick(e, item.href)}
                            className="text-sm font-medium text-charcoal/80 hover:text-gold transition-colors tracking-wide"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-charcoal focus:outline-hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-ivory-light/98 text-charcoal border-b border-champagne/50 shadow-md absolute top-full left-0 w-full overflow-hidden"
                    >
                        <div className="px-8 py-6 flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-base font-medium text-charcoal hover:text-gold transition-colors py-1 border-b border-champagne/20"
                                    onClick={(e) => handleNavClick(e, item.href)}
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
