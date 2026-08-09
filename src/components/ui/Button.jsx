import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "px-6 py-3 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose/40";

    const variants = {
        primary: "bg-charcoal text-ivory hover:bg-rose hover:text-ivory focus:ring-charcoal shadow-lg hover:shadow-xl",
        secondary: "bg-ivory-light text-charcoal border border-champagne hover:border-rose hover:bg-ivory focus:ring-champagne",
        outline: "border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-ivory"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
