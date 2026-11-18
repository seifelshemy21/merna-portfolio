import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "relative inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose/40 overflow-hidden group cursor-pointer";

    const variants = {
        primary: "bg-charcoal text-ivory hover:bg-rose hover:text-ivory focus:ring-charcoal shadow-lg hover:shadow-xl hover:shadow-charcoal/15",
        secondary: "bg-ivory-light text-charcoal border border-champagne hover:border-rose hover:bg-ivory focus:ring-champagne shadow-xs hover:shadow-md",
        outline: "border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-ivory"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.025, y: -1 }}
            whileTap={{ scale: 0.97, y: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 350 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onClick={onClick}
            {...props}
        >
            {/* Subtle luxury light-sweep sheen on hover for primary & secondary */}
            <span
                className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out pointer-events-none"
                aria-hidden="true"
            />
            <span className="relative z-10 flex items-center justify-center gap-2">
                {children}
            </span>
        </motion.button>
    );
};

export default Button;
