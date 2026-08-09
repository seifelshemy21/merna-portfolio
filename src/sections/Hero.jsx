import React from 'react';
import { motion } from 'framer-motion';
import heroimg from '../assets/mernaphoto-removebg-preview.png';
import { Sparkles } from 'lucide-react';

// Vertical Dotted Pattern Grid on right side
const DottedPattern = ({ className = '' }) => (
    <div className={`grid grid-cols-1 gap-2.5 opacity-25 ${className}`}>
        {[...Array(6)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-taupe" />
        ))}
    </div>
);

const Hero = () => {
    const scrollToSection = (id) => {
        const target = document.getElementById(id);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen pt-28 sm:pt-32 pb-16 lg:py-0 flex items-center bg-[#FAF7F2] overflow-hidden selection:bg-gold/30"
        >
            {/* Soft Ambient Organic Background Waves & Shapes */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                {/* Large top-right soft beige organic arch gradient */}
                <div className="absolute -top-24 -right-24 w-[550px] h-[550px] lg:w-[750px] lg:h-[750px] rounded-full bg-gradient-to-br from-[#EFE7DE]/80 via-[#EBE2D7]/50 to-transparent blur-3xl opacity-70" />
                {/* Left side subtle warm ivory glow */}
                <div className="absolute top-1/3 -left-32 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-[#F5F0EA] via-[#EFE7DE]/40 to-transparent blur-3xl opacity-60" />
            </div>

            {/* Main Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-8rem)]">

                    {/* LEFT COLUMN: Text & CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="lg:col-span-6 flex flex-col justify-center text-left pt-6 lg:pt-0"
                    >
                        {/* Greeting */}
                        <div className="inline-flex items-center gap-2 mb-4">
                            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal tracking-tight">
                                Hi!
                            </h2>
                            <span className="text-3xl sm:text-4xl animate-wave inline-block transform-gpu origin-bottom-right">
                                👋
                            </span>
                        </div>

                        {/* Main Name / Headline */}
                        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold text-charcoal leading-[1.08] tracking-tight mb-4">
                            I'm Merna
                        </h1>

                        {/* Job Title */}
                        <p className="font-sans text-xl sm:text-2xl text-charcoal/80 font-medium mb-10 sm:mb-12 tracking-wide">
                            UI/UX designer
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center gap-4 sm:gap-5">
                            {/* Primary CTA */}
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="group relative px-8 py-4 rounded-full bg-[#705D4F] hover:bg-charcoal text-[#FAF7F2] font-medium text-base shadow-lg shadow-taupe/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center gap-2"
                            >
                                <span>Get in touch</span>
                            </button>

                            {/* Secondary CTA */}
                            <button
                                onClick={() => scrollToSection('projects')}
                                className="px-8 py-4 rounded-full bg-ivory-light/90 border border-champagne/80 hover:border-taupe/40 text-charcoal font-medium text-base shadow-xs transition-all duration-300 hover:bg-champagne/15 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                            >
                                My projects
                            </button>
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN: Profile Image Composition & Decorative Elements */}
                    <div className="lg:col-span-6 relative flex justify-center items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
                            className="relative w-full max-w-[460px] sm:max-w-[500px] lg:max-w-[540px] aspect-[4/5] flex items-center justify-center"
                        >

                            {/* Subtle Dotted Pattern Grid on right edge */}
                            <DottedPattern className="absolute top-12 -right-6 sm:-right-10 z-10 hidden sm:block" />

                            {/* Outer Layer: Soft Organic Beige Background Arch / Circle Container */}
                            <div className="absolute inset-x-4 inset-y-6 sm:inset-x-6 sm:inset-y-4 rounded-[140px] sm:rounded-[180px] bg-gradient-to-b from-[#ECE3D6]/90 via-[#F3EDE2] to-[#E5DACB]/80 shadow-inner border border-white/60 z-0" />

                            {/* Secondary Layer: Decorative Soft Curved Backdrop Shape */}
                            <div className="absolute bottom-4 right-2 w-[85%] h-[80%] rounded-[120px] bg-gradient-to-tr from-[#E6DACB]/50 to-[#FAF7F2]/30 blur-xs z-0" />

                            {/* Merna Profile Portrait Image */}
                            <div className="relative z-10 w-full h-full flex items-end justify-center pb-2">
                                <img
                                    src={heroimg}
                                    alt="Merna - UI/UX Designer"
                                    className="w-auto h-[85%] max-h-[480px] object-contain rounded-2xl drop-shadow-md"
                                />
                            </div>

                            {/* Floating Statistics Card (Using Existing Portfolio Data) */}
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                                className="absolute bottom-6 left-2 sm:left-4 z-30 bg-ivory-light/95 backdrop-blur-md border border-champagne/60 p-4 sm:p-5 rounded-2xl shadow-xl shadow-charcoal/5 flex items-center gap-3.5"
                            >
                                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-champagne/30 border border-gold/30 flex items-center justify-center text-gold shrink-0">
                                    <Sparkles size={20} className="text-gold" />
                                </div>
                                <div className="text-left">
                                    <p className="font-sans text-base sm:text-lg font-bold text-charcoal leading-tight">
                                        1+ Year
                                    </p>
                                    <p className="font-sans text-xs sm:text-sm font-medium text-taupe mt-0.5">
                                        UI/UX Experience
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
