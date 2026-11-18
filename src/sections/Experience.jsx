import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import { Calendar, Building, Briefcase } from 'lucide-react';
import { TRANSITION_EASE } from '../utils/motion';

const Experience = () => {
    const listItems = [
        "Designed user-centered interfaces for web & mobile apps, focusing on clean aesthetics and usability.",
        "Conducted user research and created detailed user flows to optimize navigation paths.",
        "Built wireframes and high-fidelity designs using Figma, ensuring pixel-perfect execution.",
        "Created interactive prototypes and established comprehensive design systems for consistency.",
        "Collaborated closely with developers to ensure accurate implementation of designs during handoff.",
        "Improved overall UX through strategic layout adjustments, typography choices, and interaction optimization.",
        "Designed responsive interfaces that adapt seamlessly across multiple devices (mobile, tablet, desktop).",
        "Applied UX methodologies including persona development, journey mapping, and usability testing."
    ];

    return (
        <section id="experience" className="py-20 bg-ivory-dark relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-6">
                <SectionTitle title="Experience" subtitle="Professional Journey" />

                <div className="relative ml-3 md:ml-6 space-y-8 md:space-y-12">
                    {/* Animated Vertical Timeline Line */}
                    <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.9, ease: TRANSITION_EASE }}
                        className="absolute left-0 top-0 bottom-0 w-0.5 bg-champagne origin-top"
                    />

                    <div className="relative pl-6 md:pl-12">
                        {/* Timeline Dot with Pulse Effect */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: 0.3, type: 'spring' }}
                            className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-rose border-4 border-ivory shadow-sm z-10"
                        />

                        {/* Experience Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 25 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.7, delay: 0.2, ease: TRANSITION_EASE }}
                            whileHover={{ y: -4 }}
                            className="bg-ivory-light p-5 sm:p-6 md:p-8 rounded-2xl shadow-sm border border-champagne/40 hover:border-gold/50 hover:shadow-xl hover:shadow-charcoal/8 transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-3 md:gap-0">
                                <h3 className="text-lg md:text-xl font-bold text-charcoal flex items-start md:items-center gap-2 group">
                                    <div className="p-1.5 rounded-lg bg-blush/20 group-hover:bg-blush/40 transition-colors">
                                        <Briefcase size={18} className="text-rose shrink-0" />
                                    </div>
                                    <span>Junior UI/UX Designer</span>
                                </h3>
                                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm text-taupe">
                                    <span className="flex flex-row items-center gap-1.5"><Calendar size={16} /> <span>2023 - Present</span></span>
                                </div>
                            </div>

                            <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-charcoal/85 list-disc list-outside ml-4 mt-4 md:mt-6 leading-relaxed">
                                {listItems.map((item, idx) => (
                                    <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, y: 8 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + idx * 0.05, duration: 0.4 }}
                                        className="hover:text-charcoal transition-colors"
                                    >
                                        {idx === 2 ? (
                                            <>Built wireframes and high-fidelity designs using <strong className="text-charcoal font-semibold">Figma</strong>, ensuring pixel-perfect execution.</>
                                        ) : (
                                            item
                                        )}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
