/**
 * Premium Motion Design Tokens & Variants
 * Identity: Warm luxury, high-end editorial UI/UX
 */

export const TRANSITION_EASE = [0.22, 1, 0.36, 1]; // Smooth luxury ease-out
export const TRANSITION_EASE_SLOW = [0.16, 1, 0.3, 1];
export const TRANSITION_SPRING = { type: 'spring', damping: 25, stiffness: 200 };
export const TRANSITION_SPRING_BOUNCY = { type: 'spring', damping: 18, stiffness: 300 };

export const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            delay: custom * 0.1,
            ease: TRANSITION_EASE,
        },
    }),
};

export const fadeIn = {
    hidden: { opacity: 0 },
    visible: (custom = 0) => ({
        opacity: 1,
        transition: {
            duration: 0.6,
            delay: custom * 0.1,
            ease: TRANSITION_EASE,
        },
    }),
};

export const scaleIn = {
    hidden: { opacity: 0, scale: 0.94 },
    visible: (custom = 0) => ({
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.8,
            delay: custom * 0.12,
            ease: TRANSITION_EASE,
        },
    }),
};

export const staggerContainer = (staggerDelay = 0.1, delayChildren = 0.1) => ({
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: staggerDelay,
            delayChildren: delayChildren,
        },
    },
});

export const lineExpand = {
    hidden: { scaleX: 0 },
    visible: {
        scaleX: 1,
        transition: {
            duration: 0.8,
            ease: TRANSITION_EASE,
        },
    },
};

export const timelineDraw = {
    hidden: { scaleY: 0 },
    visible: {
        scaleY: 1,
        transition: {
            duration: 1,
            ease: TRANSITION_EASE,
        },
    },
};

