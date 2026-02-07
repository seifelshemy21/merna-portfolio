import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, className = '' }) => {
    return (
        <div className={`mb-12 ${className}`}>
            {subtitle && (
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-sm font-semibold tracking-widest text-gray-500 uppercase block mb-2"
                >
                    {subtitle}
                </motion.span>
            )}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold text-black"
            >
                {title}
            </motion.h2>
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="h-1 w-20 bg-black mt-4 origin-left"
            />
        </div>
    );
};

export default SectionTitle;
