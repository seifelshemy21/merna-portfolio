import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "px-6 py-3 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary: "bg-black text-white hover:bg-gray-800 focus:ring-black shadow-lg hover:shadow-xl",
        secondary: "bg-white text-black border border-gray-200 hover:border-black hover:bg-gray-50 focus:ring-gray-200",
        outline: "border-2 border-black text-black hover:bg-black hover:text-white"
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
