import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { TRANSITION_EASE } from '../../utils/motion';

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
    const [activeSection, setActiveSection] = useState('');
    const [hoveredItem, setHoveredItem] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);

            // Determine active section for scroll spy
            const sections = ['contact', 'education', 'about', 'experience', 'projects', 'skills', 'hero'];
            const scrollPosition = window.scrollY + 200;

            for (const sectionId of sections) {
                const el = document.getElementById(sectionId);
                if (el) {
                    const top = el.offsetTop;
                    const height = el.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(`#${sectionId}`);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
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
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                ? 'bg-ivory/95 backdrop-blur-md border-b border-champagne/40 shadow-xs py-4 text-charcoal'
                : 'bg-transparent py-6 text-charcoal'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-10 flex justify-between items-center">
                {/* Logo / Name on the left with subtle hover interaction */}
                <motion.a
                    href="#hero"
                    onClick={(e) => handleNavClick(e, '#hero')}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="font-serif text-2xl font-bold tracking-tight text-charcoal flex items-center group cursor-pointer"
                >
                    <span>Merna Galal</span>
                    <span className="text-gold font-sans group-hover:scale-125 transition-transform duration-300 inline-block ml-0.5">.</span>
                </motion.a>

                {/* Navigation links on the right (Desktop) */}
                <div
                    className="hidden md:flex items-center space-x-9"
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    {navItems.map((item) => {
                        const isActive = activeSection === item.href;
                        return (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => handleNavClick(e, item.href)}
                                onMouseEnter={() => setHoveredItem(item.name)}
                                className={`relative text-sm font-medium tracking-wide transition-colors duration-200 py-1 ${isActive
                                    ? 'text-gold'
                                    : 'text-charcoal/80 hover:text-charcoal'
                                    }`}
                            >
                                {item.name}

                                {/* Animated active / hover underline */}
                                {hoveredItem === item.name ? (
                                    <motion.span
                                        layoutId="navbar-hover"
                                        className="absolute bottom-0 left-0 w-full h-0.5 bg-gold rounded-full"
                                        transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                                    />
                                ) : isActive ? (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-rose/70 rounded-full" />
                                ) : null}
                            </a>
                        );
                    })}
                </div>

                {/* Mobile Menu Button with smooth rotation */}
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="md:hidden p-2 text-charcoal focus:outline-hidden cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <AnimatePresence mode="wait" initial={false}>
                        {isOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <X size={24} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Menu size={24} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
            </div>

            {/* Mobile Navigation Drawer with Staggered Link Entrance */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: TRANSITION_EASE }}
                        className="md:hidden bg-ivory-light/98 backdrop-blur-md text-charcoal border-b border-champagne/50 shadow-md absolute top-full left-0 w-full overflow-hidden"
                    >
                        <div className="px-8 py-6 flex flex-col space-y-3">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    initial={{ opacity: 0, x: -16 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.06, duration: 0.3, ease: TRANSITION_EASE }}
                                    className="text-base font-medium text-charcoal hover:text-gold transition-colors py-2 border-b border-champagne/20 flex items-center justify-between"
                                    onClick={(e) => handleNavClick(e, item.href)}
                                >
                                    <span>{item.name}</span>
                                    <span className="text-xs text-taupe font-mono">0{index + 1}</span>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
