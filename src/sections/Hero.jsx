import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion';
import heroimg from '../assets/mernaphoto-removebg-preview.png';
import { Sparkles, ArrowRight } from 'lucide-react';
import { TRANSITION_EASE, TRANSITION_EASE_SLOW } from '../utils/motion';
import { useHeroTypewriter } from '../hooks/useHeroTypewriter';

// Thin elegant blinking cursor matching luxury brand colors
const TypewriterCursor = ({ height = '0.78em', className = '' }) => (
    <span
        aria-hidden="true"
        className={`inline-block w-[2.5px] sm:w-[3.5px] bg-gold rounded-full ml-1 align-baseline select-none animate-cursor-blink ${className}`}
        style={{
            height,
            verticalAlign: '-0.06em',
            boxShadow: '0 0 10px rgba(201, 166, 107, 0.5)',
        }}
    />
);

// Vertical Dotted Pattern Grid on right side with staggered reveal & subtle float
const DottedPattern = ({ className = '' }) => (
    <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className={`grid grid-cols-1 gap-2.5 opacity-30 ${className}`}
    >
        {[...Array(6)].map((_, i) => (
            <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.08, duration: 0.4 }}
                className="w-1.5 h-1.5 rounded-full bg-taupe hover:bg-gold transition-colors duration-300"
            />
        ))}
    </motion.div>
);

// Animated counter for stats
const AnimatedStatNumber = ({ value = 1 }) => {
    const [displayValue, setDisplayValue] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        const duration = 1200; // ms
        const startTime = performance.now();

        const step = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(easeOut * value);
            setDisplayValue(current);

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };

        requestAnimationFrame(step);
    }, [isInView, value]);

    return (
        <span ref={ref} className="font-sans text-base sm:text-lg font-bold text-charcoal leading-tight">
            {displayValue}+ Year
        </span>
    );
};

const Hero = () => {
    const heroRef = useRef(null);
    const [isFinePointer, setIsFinePointer] = useState(() => {
        if (typeof window === 'undefined') return false;
        return window.matchMedia('(pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    });

    // Parallax mouse values
    const rawMouseX = useMotionValue(0);
    const rawMouseY = useMotionValue(0);

    const springConfig = { damping: 35, stiffness: 120, mass: 0.5 };
    const smoothMouseX = useSpring(rawMouseX, springConfig);
    const smoothMouseY = useSpring(rawMouseY, springConfig);

    // Parallax transforms for background blobs (very subtle, luxury feel)
    const blob1X = useTransform(smoothMouseX, [-0.5, 0.5], [-24, 24]);
    const blob1Y = useTransform(smoothMouseY, [-0.5, 0.5], [-18, 18]);

    const blob2X = useTransform(smoothMouseX, [-0.5, 0.5], [20, -20]);
    const blob2Y = useTransform(smoothMouseY, [-0.5, 0.5], [16, -16]);

    const portraitParallaxX = useTransform(smoothMouseX, [-0.5, 0.5], [-10, 10]);
    const portraitParallaxY = useTransform(smoothMouseY, [-0.5, 0.5], [-8, 8]);

    // Continuous human typewriter effect for Hero introduction lines
    const { displayedLines, activeLineIndex } = useHeroTypewriter({
        lines: ["Hi!", "I'm Merna", "UI/UX designer"],
        typeSpeed: 135,
        deleteSpeed: 50,
        linePause: 400,
        fullTextPause: 2000,
        restartPause: 500,
    });

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const fineQuery = window.matchMedia('(pointer: fine)');
        const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

        const updatePointer = () => {
            setIsFinePointer(fineQuery.matches && !motionQuery.matches);
        };

        fineQuery.addEventListener?.('change', updatePointer);
        motionQuery.addEventListener?.('change', updatePointer);

        if (!fineQuery.matches || motionQuery.matches) {
            return () => {
                fineQuery.removeEventListener?.('change', updatePointer);
                motionQuery.removeEventListener?.('change', updatePointer);
            };
        }

        const handleMouseMove = (e) => {
            if (!heroRef.current) return;
            const rect = heroRef.current.getBoundingClientRect();
            // Normalized offset from center: -0.5 to 0.5
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            rawMouseX.set(x);
            rawMouseY.set(y);
        };

        const handleMouseLeave = () => {
            rawMouseX.set(0);
            rawMouseY.set(0);
        };

        const el = heroRef.current;
        if (el) {
            el.addEventListener('mousemove', handleMouseMove, { passive: true });
            el.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (el) {
                el.removeEventListener('mousemove', handleMouseMove);
                el.removeEventListener('mouseleave', handleMouseLeave);
            }
            fineQuery.removeEventListener?.('change', updatePointer);
            motionQuery.removeEventListener?.('change', updatePointer);
        };
    }, [rawMouseX, rawMouseY]);

    const scrollToSection = (id) => {
        const target = document.getElementById(id);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <section
            ref={heroRef}
            id="hero"
            className="relative min-h-screen pt-28 sm:pt-32 pb-16 lg:py-0 flex items-center bg-[#FAF7F2] overflow-hidden selection:bg-gold/30"
        >
            {/* Soft Ambient Organic Background Waves & Shapes with Mouse Parallax */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 bg-[#FAF7F2]">
                {/* Large top-right soft beige organic arch gradient */}
                <motion.div
                    style={isFinePointer ? { x: blob1X, y: blob1Y } : {}}
                    className="absolute -top-24 -right-24 w-[550px] h-[550px] lg:w-[750px] lg:h-[750px] rounded-full bg-gradient-to-br from-[#EFE7DE]/80 via-[#EBE2D7]/50 to-transparent blur-3xl opacity-70 will-change-transform"
                />
                {/* Left side subtle warm ivory glow */}
                <motion.div
                    style={isFinePointer ? { x: blob2X, y: blob2Y } : {}}
                    className="absolute top-1/3 -left-32 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-[#F5F0EA] via-[#EFE7DE]/40 to-transparent blur-3xl opacity-60 will-change-transform"
                />
            </div>

            {/* Main Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-8rem)]">

                    {/* LEFT COLUMN: Typewriter Text & CTAs */}
                    <div className="lg:col-span-6 flex flex-col justify-center text-left pt-6 lg:pt-0">
                        {/* Greeting */}
                        <div className="inline-flex items-center gap-2 mb-4">
                            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal tracking-tight flex items-baseline">
                                <span>{displayedLines[0] || '\u00A0'}</span>
                                {activeLineIndex === 0 && (
                                    <TypewriterCursor height="0.82em" />
                                )}
                            </h2>
                            <span
                                className={`text-3xl sm:text-4xl animate-wave inline-block transform-gpu origin-bottom-right cursor-default transition-all duration-300 ${
                                    displayedLines[0].length >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                                }`}
                            >
                                👋
                            </span>
                        </div>

                        {/* Main Name / Headline */}
                        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold text-charcoal leading-[1.08] tracking-tight mb-4 min-h-[1.08em] flex items-baseline">
                            <span>{displayedLines[1] || '\u00A0'}</span>
                            {activeLineIndex === 1 && (
                                <TypewriterCursor height="0.75em" className="w-[3px] sm:w-[4px] ml-1.5" />
                            )}
                        </h1>

                        {/* Job Title */}
                        <p className="font-sans text-xl sm:text-2xl text-charcoal/80 font-medium mb-10 sm:mb-12 tracking-wide min-h-[1.5em] flex items-baseline">
                            <span>{displayedLines[2] || '\u00A0'}</span>
                            {activeLineIndex === 2 && (
                                <TypewriterCursor height="0.85em" />
                            )}
                        </p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4, ease: TRANSITION_EASE }}
                            className="flex flex-wrap items-center gap-4 sm:gap-5"
                        >
                            {/* Primary CTA with Premium Sheen & Elevation */}
                            <motion.button
                                whileHover={{ scale: 1.025, y: -2 }}
                                whileTap={{ scale: 0.98, y: 0 }}
                                transition={{ type: 'spring', damping: 20, stiffness: 350 }}
                                onClick={() => scrollToSection('contact')}
                                className="group relative px-8 py-4 rounded-full bg-[#705D4F] hover:bg-charcoal text-[#FAF7F2] font-medium text-base shadow-lg shadow-taupe/20 transition-all duration-300 hover:shadow-2xl hover:shadow-charcoal/20 cursor-pointer flex items-center gap-2 overflow-hidden"
                            >
                                {/* Light-sweep sheen */}
                                <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out pointer-events-none" />
                                <span className="relative z-10">Get in touch</span>
                                <ArrowRight
                                    size={16}
                                    className="relative z-10 transform transition-transform duration-300 group-hover:translate-x-1 text-champagne"
                                />
                            </motion.button>

                            {/* Secondary CTA with Smooth Border & Tint Transition */}
                            <motion.button
                                whileHover={{ scale: 1.025, y: -2 }}
                                whileTap={{ scale: 0.98, y: 0 }}
                                transition={{ type: 'spring', damping: 20, stiffness: 350 }}
                                onClick={() => scrollToSection('projects')}
                                className="px-8 py-4 rounded-full bg-ivory-light/90 border border-champagne/80 hover:border-gold/60 text-charcoal font-medium text-base shadow-xs transition-all duration-300 hover:bg-champagne/20 hover:shadow-md cursor-pointer"
                            >
                                My projects
                            </motion.button>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: Profile Image Composition & Decorative Elements */}
                    <div className="lg:col-span-6 relative flex justify-center items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.94 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.25, ease: TRANSITION_EASE_SLOW }}
                            style={isFinePointer ? { x: portraitParallaxX, y: portraitParallaxY } : {}}
                            className="relative w-full max-w-[460px] sm:max-w-[500px] lg:max-w-[540px] aspect-[4/5] flex items-center justify-center will-change-transform"
                        >

                            {/* Subtle Dotted Pattern Grid on right edge */}
                            <DottedPattern className="absolute top-12 -right-6 sm:-right-10 z-10 hidden sm:block" />

                            {/* Outer Layer: Soft Organic Beige Background Arch / Circle Container */}
                            <div className="absolute inset-x-4 inset-y-6 sm:inset-x-6 sm:inset-y-4 rounded-[140px] sm:rounded-[180px] bg-gradient-to-b from-[#ECE3D6]/90 via-[#F3EDE2] to-[#E5DACB]/80 shadow-inner border border-white/60 z-0" />

                            {/* Secondary Layer: Decorative Soft Curved Backdrop Shape with gentle breathing animation */}
                            <motion.div
                                animate={{ scale: [1, 1.02, 1] }}
                                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute bottom-4 right-2 w-[85%] h-[80%] rounded-[120px] bg-gradient-to-tr from-[#E6DACB]/50 to-[#FAF7F2]/30 blur-xs z-0"
                            />

                            {/* Merna Profile Portrait Image with Subtle Ambient Float */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                                className="relative z-10 w-full h-full flex items-end justify-center pb-2 will-change-transform"
                            >
                                <img
                                    src={heroimg}
                                    alt="Merna - UI/UX Designer"
                                    className="w-auto h-[85%] max-h-[480px] object-contain rounded-2xl drop-shadow-md select-none pointer-events-none"
                                />
                            </motion.div>

                            {/* Floating Statistics Card (Using Existing Portfolio Data) with Smooth Entrance & Gentle Floating */}
                            <motion.div
                                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ delay: 0.7, duration: 0.7, ease: TRANSITION_EASE }}
                                className="absolute bottom-6 left-2 sm:left-4 z-30"
                            >
                                <motion.div
                                    animate={{ y: [0, -6, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                                    whileHover={{ scale: 1.03, y: -8 }}
                                    className="bg-ivory-light/95 backdrop-blur-md border border-champagne/60 hover:border-gold/60 p-4 sm:p-5 rounded-2xl shadow-xl shadow-charcoal/8 hover:shadow-2xl hover:shadow-charcoal/15 flex items-center gap-3.5 transition-all duration-300 cursor-default"
                                >
                                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-champagne/30 border border-gold/30 flex items-center justify-center text-gold shrink-0 group">
                                        <Sparkles size={20} className="text-gold animate-pulse" />
                                    </div>
                                    <div className="text-left">
                                        <AnimatedStatNumber value={1} />
                                        <p className="font-sans text-xs sm:text-sm font-medium text-taupe mt-0.5">
                                            UI/UX Experience
                                        </p>
                                    </div>
                                </motion.div>
                            </motion.div>

                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
