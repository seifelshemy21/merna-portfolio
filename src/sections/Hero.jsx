import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import heroBg from '../assets/meroheader.png';

const Hero = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroBg})` }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 z-0"></div>

            {/* Content Container */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-gray-300 font-medium tracking-widest uppercase mb-4 block text-sm md:text-base">UI/UX Designer</span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
                        Hello, I'm <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Merna</span>.
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Experienced UI/UX Designer with over 1 year of experience, currently working as a Junior UI/UX Designer at Kroo. Passionate about creating user-centered, accessible, and visually clean digital experiences.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            variant="primary"
                            className="text-black bg-black border-none"
                            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                        >
                            View Projects
                        </Button>
                        <Button
                            variant="outline"
                            className="bg-transparent border-white text-white hover:bg-white hover:text-black"
                            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                        >
                            Contact Me
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator (Optional but nice for full hero) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-3 bg-white/50 rounded-full"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
