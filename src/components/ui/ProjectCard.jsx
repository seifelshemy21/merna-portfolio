import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Button from './Button';
import { TRANSITION_EASE } from '../../utils/motion';

const ProjectCard = ({ title, description, image, link, className = '', index = 0 }) => {
    const handleOpenLink = () => {
        if (link && link !== '#') {
            window.open(link, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <motion.div
            data-cursor="project"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
                duration: 0.7,
                delay: (index % 2) * 0.15,
                ease: TRANSITION_EASE,
            }}
            whileHover={{ y: -8 }}
            className={`group/card bg-ivory-light rounded-2xl shadow-md hover:shadow-2xl hover:shadow-charcoal/12 overflow-hidden border border-champagne/45 hover:border-gold/50 transition-all duration-500 flex flex-col justify-between ${className}`}
        >
            {/* Project Image Container with Smooth Zoom & Overlay */}
            <div
                className="relative h-64 sm:h-72 overflow-hidden cursor-pointer bg-ivory-dark"
                onClick={handleOpenLink}
            >
                <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/card:scale-108 will-change-transform"
                />

                {/* Ambient Soft Vignette / Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-charcoal/10 to-transparent opacity-60 group-hover/card:opacity-20 transition-opacity duration-500" />

                {/* Subtle Top-Right Floating Icon Pill on Hover */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-ivory-light/90 backdrop-blur-md border border-champagne/50 flex items-center justify-center text-charcoal opacity-0 group-hover/card:opacity-100 transform translate-y-2 group-hover/card:translate-y-0 transition-all duration-300 shadow-md">
                    <ExternalLink size={15} className="text-gold" />
                </div>
            </div>

            {/* Content Details */}
            <div className="p-7 sm:p-8 flex flex-col flex-grow justify-between">
                <div>
                    <h3 className="text-2xl font-bold text-charcoal mb-3 tracking-tight group-hover/card:text-charcoal transition-colors">
                        {title}
                    </h3>
                    <p className="text-taupe mb-6 line-clamp-3 leading-relaxed text-sm sm:text-base">
                        {description}
                    </p>
                </div>

                <Button
                    variant="outline"
                    className="w-full flex justify-center items-center gap-2 group/btn border-charcoal/80 hover:border-charcoal hover:bg-charcoal hover:text-ivory transition-all duration-300"
                    onClick={handleOpenLink}
                >
                    <span>View Case Study</span>
                    <ExternalLink
                        size={16}
                        className="transform transition-transform duration-300 ease-out group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5"
                    />
                </Button>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
