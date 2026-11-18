import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
    const [cursorType, setCursorType] = useState('default'); // 'default' | 'hover' | 'project' | 'text' | 'hidden'
    const [cursorText, setCursorText] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(true);
    const [isClicked, setIsClicked] = useState(false);

    // Raw mouse positions - initialize off-screen
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Smooth physics springs for fluid following motion
    const springConfigDot = { damping: 45, stiffness: 650, mass: 0.2 };
    const springConfigRing = { damping: 28, stiffness: 220, mass: 0.5 };

    const dotX = useSpring(mouseX, springConfigDot);
    const dotY = useSpring(mouseY, springConfigDot);

    const ringX = useSpring(mouseX, springConfigRing);
    const ringY = useSpring(mouseY, springConfigRing);

    useEffect(() => {
        // Strict check: Only show on desktop devices with fine pointer (mouse)
        const checkPointer = () => {
            const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
            const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

            if (!hasFinePointer || hasTouch || prefersReducedMotion) {
                setIsTouchDevice(true);
                return false;
            }
            setIsTouchDevice(false);
            return true;
        };

        const isDesktop = checkPointer();
        if (!isDesktop) return;

        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseDown = () => setIsClicked(true);
        const handleMouseUp = () => setIsClicked(false);

        const handleMouseLeave = () => {
            setIsVisible(false);
            setCursorType('default');
        };

        const handleMouseEnter = () => {
            setIsVisible(true);
        };

        // Event delegation for detecting interactive targets
        const handleElementHover = (e) => {
            const target = e.target;
            if (!target) return;

            // Check for project card or element with custom cursor attribute
            const projectEl = target.closest('[data-cursor="project"]');
            if (projectEl) {
                setCursorType('project');
                setCursorText('View');
                return;
            }

            const customTextEl = target.closest('[data-cursor-text]');
            if (customTextEl) {
                setCursorType('custom');
                setCursorText(customTextEl.getAttribute('data-cursor-text') || 'View');
                return;
            }

            // Check for interactive elements (links, buttons, clickable items)
            const interactiveEl = target.closest('a, button, [role="button"], input, textarea, select, .cursor-pointer');
            if (interactiveEl) {
                if (target.closest('input, textarea')) {
                    setCursorType('text');
                } else {
                    setCursorType('hover');
                }
                setCursorText('');
                return;
            }

            setCursorType('default');
            setCursorText('');
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        document.documentElement.addEventListener('mouseleave', handleMouseLeave);
        document.documentElement.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mouseover', handleElementHover, { passive: true });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
            document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mouseover', handleElementHover);
        };
    }, [isVisible, mouseX, mouseY]);

    // Do not render anything into DOM until user moves mouse on a fine-pointer device
    if (isTouchDevice || !isVisible) {
        return null;
    }

    return (
        <div
            className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
            style={{ opacity: isVisible ? 1 : 0 }}
        >
            {/* Center Dot */}
            <motion.div
                className="pointer-events-none fixed top-0 left-0 rounded-full bg-charcoal"
                style={{
                    x: dotX,
                    y: dotY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    width: cursorType === 'project' ? 0 : cursorType === 'hover' ? 4 : 7,
                    height: cursorType === 'project' ? 0 : cursorType === 'hover' ? 4 : 7,
                    opacity: cursorType === 'project' ? 0 : cursorType === 'text' ? 0 : 0.85,
                    scale: isClicked ? 0.7 : 1,
                }}
                transition={{ duration: 0.18, ease: 'easeOut' }}
            />

            {/* Trailing Ring / Project Badge */}
            <motion.div
                className="pointer-events-none fixed top-0 left-0 flex items-center justify-center rounded-full text-center"
                style={{
                    x: ringX,
                    y: ringY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    width:
                        cursorType === 'project'
                            ? 78
                            : cursorType === 'hover'
                            ? 48
                            : cursorType === 'text'
                            ? 20
                            : 34,
                    height:
                        cursorType === 'project'
                            ? 78
                            : cursorType === 'hover'
                            ? 48
                            : cursorType === 'text'
                            ? 30
                            : 34,
                    backgroundColor:
                        cursorType === 'project'
                            ? 'rgba(62, 56, 53, 0.94)' // warm charcoal luxury pill
                            : cursorType === 'hover'
                            ? 'rgba(201, 166, 107, 0.12)' // subtle champagne tint
                            : 'rgba(216, 195, 165, 0.05)',
                    borderColor:
                        cursorType === 'project'
                            ? 'rgba(201, 166, 107, 0.6)'
                            : cursorType === 'hover'
                            ? 'rgba(201, 166, 107, 0.7)'
                            : 'rgba(62, 56, 53, 0.28)',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    backdropFilter: cursorType === 'project' ? 'blur(4px)' : 'blur(0px)',
                    scale: isClicked ? 0.92 : 1,
                    boxShadow:
                        cursorType === 'project'
                            ? '0 10px 25px -5px rgba(62, 56, 53, 0.25), 0 0 15px rgba(201, 166, 107, 0.2)'
                            : 'none',
                }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
                <AnimatePresence mode="wait">
                    {cursorType === 'project' && (
                        <motion.div
                            key="project-text"
                            initial={{ opacity: 0, scale: 0.6 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.6 }}
                            transition={{ duration: 0.18 }}
                            className="flex flex-col items-center justify-center select-none"
                        >
                            <span className="font-sans text-[11px] font-semibold tracking-widest text-[#FAF7F2] uppercase">
                                {cursorText || 'View'}
                            </span>
                            <span className="w-1.5 h-0.5 bg-gold rounded-full mt-0.5" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default CustomCursor;
