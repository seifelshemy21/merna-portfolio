import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-charcoal text-ivory py-12 border-t border-champagne/20">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0 text-center md:text-left">
                    <h2 className="text-2xl font-bold tracking-tight mb-2">
                        MERNA<span className="text-gold font-sans">.</span>
                    </h2>
                    <p className="text-taupe text-sm">© {new Date().getFullYear()} All rights reserved.</p>
                </div>

                <div className="flex items-center space-x-4">
                    <motion.a
                        href="https://www.linkedin.com/in/merna-galal-bb6192381"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.15, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 rounded-full bg-charcoal-light border border-champagne/30 flex items-center justify-center text-ivory hover:text-rose hover:border-rose/60 transition-colors shadow-xs"
                        aria-label="LinkedIn Profile"
                    >
                        <Linkedin size={18} />
                    </motion.a>

                    <motion.a
                        href="mailto:mernagalal81@gmail.com"
                        whileHover={{ scale: 1.15, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 rounded-full bg-charcoal-light border border-champagne/30 flex items-center justify-center text-ivory hover:text-rose hover:border-rose/60 transition-colors shadow-xs"
                        aria-label="Email Merna"
                    >
                        <Mail size={18} />
                    </motion.a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
