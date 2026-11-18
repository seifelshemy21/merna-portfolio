import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import { TRANSITION_EASE } from '../utils/motion';

const About = () => {
    const paragraphVariants = {
        hidden: { opacity: 0, y: 22 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                delay: i * 0.15,
                ease: TRANSITION_EASE,
            },
        }),
    };

    return (
        <section id="about" className="py-20 bg-ivory-dark z-20 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6">
                <SectionTitle title="About Me" subtitle="Who I Am" />

                <div className="grid md:grid-cols-1 gap-12">
                    <div className="space-y-6 text-lg text-charcoal/90 leading-relaxed">
                        <motion.p
                            custom={0}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={paragraphVariants}
                        >
                            I am a passionate Junior UI/UX Designer with over 1 year of professional experience, dedicated to crafting intuitive and accessible digital products. My approach combines clean visual aesthetics with a deep understanding of user needs, ensuring that every design decision serves a purpose.
                        </motion.p>
                        <motion.p
                            custom={1}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={paragraphVariants}
                        >
                            Currently, I work at <strong className="text-rose font-bold">CG+</strong>, where creativity and technology come together to create meaningful experiences. I’m passionate about transforming ideas into intuitive, visually engaging digital experiences that connect people with brands. I focus on user-centered design, thoughtful interactions, and creating digital products that balance aesthetics with functionality.
                        </motion.p>
                        <motion.p
                            custom={2}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={paragraphVariants}
                        >
                            My focus is on usability, accessibility, and creating designs that not only look good but work perfectly across all devices. Whether it's wireframing a new feature or polishing a high-fidelity prototype, I bring enthusiasm and attention to detail to every project.
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
