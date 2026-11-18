import React from 'react';
import { motion } from 'framer-motion';
import { TRANSITION_EASE } from '../../utils/motion';

const SectionTitle = ({ title, subtitle, className = '' }) => {
    const isCentered = className.includes('items-center') || className.includes('text-center') || className.includes('mx-auto');

    return (
        <div className={`mb-12 ${className}`}>
            {subtitle && (
                <motion.span
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, ease: TRANSITION_EASE }}
                    className="text-sm font-semibold tracking-widest text-gold uppercase block mb-2"
                >
                    {subtitle}
                </motion.span>
            )}
            <motion.h2
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: 0.1, ease: TRANSITION_EASE }}
                className="text-3xl md:text-4xl font-bold text-charcoal tracking-tight"
            >
                {title}
            </motion.h2>
            <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.75, delay: 0.2, ease: TRANSITION_EASE }}
                className={`h-1 w-20 bg-rose mt-4 rounded-full ${isCentered ? 'origin-center mx-auto' : 'origin-left'}`}
            />
        </div>
    );
};

export default SectionTitle;
