import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Button from './Button';

const ProjectCard = ({ title, description, image, link, className = '' }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className={`bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 ${className}`}
        >
            <div className="relative h-64 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition-colors duration-300"></div>
            </div>

            <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">{title}</h3>
                <p className="text-gray-600 mb-6 line-clamp-3">{description}</p>

                <Button
                    variant="outline"
                    className="w-full flex justify-center items-center gap-2 group"
                    onClick={() => window.open(link, '_blank')}
                >
                    View Case Study
                    <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                </Button>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
