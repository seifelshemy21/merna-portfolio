import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import { GraduationCap, Award } from 'lucide-react';
import { TRANSITION_EASE } from '../utils/motion';

const Education = () => {
    return (
        <section id="education" className="py-20 bg-ivory-dark relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-6">
                <SectionTitle title="Education & Courses" subtitle="Learning Journey" />

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Education Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, ease: TRANSITION_EASE }}
                    >
                        <h3 className="text-2xl font-bold text-charcoal mb-8 flex items-center gap-2.5">
                            <span className="p-1.5 rounded-lg bg-blush/20 text-rose">
                                <GraduationCap size={22} className="text-rose" />
                            </span>
                            <span>Academic Background</span>
                        </h3>

                        <div className="relative space-y-8 pl-4 border-l-2 border-champagne">
                            <div className="relative pl-6 group">
                                <motion.span
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: 'spring', damping: 15, delay: 0.2 }}
                                    className="absolute -left-[9px] top-1 w-4 h-4 bg-rose rounded-full border-4 border-ivory shadow-xs"
                                />
                                <h4 className="text-lg font-bold text-charcoal group-hover:text-gold transition-colors">
                                    Management Information Systems
                                </h4>
                                <p className="text-taupe">High Institute for Management Information Systems</p>
                                <p className="text-taupe/80 text-sm mt-1">Modern Academy – Egypt</p>
                                <motion.span
                                    whileHover={{ scale: 1.05 }}
                                    className="inline-block px-3 py-1 mt-3 bg-champagne/40 text-charcoal text-xs font-bold rounded-full border border-champagne/50 cursor-default"
                                >
                                    Undergraduate
                                </motion.span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Courses Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: TRANSITION_EASE }}
                    >
                        <h3 className="text-2xl font-bold text-charcoal mb-8 flex items-center gap-2.5">
                            <span className="p-1.5 rounded-lg bg-champagne/30 text-gold">
                                <Award size={22} className="text-gold" />
                            </span>
                            <span>Certifications & Courses</span>
                        </h3>

                        <div className="relative space-y-8 pl-4 border-l-2 border-champagne">
                            <div className="relative pl-6 group">
                                <motion.span
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: 'spring', damping: 15, delay: 0.4 }}
                                    className="absolute -left-[9px] top-1 w-4 h-4 bg-gold rounded-full border-4 border-ivory shadow-xs"
                                />
                                <h4 className="text-lg font-bold text-charcoal group-hover:text-gold transition-colors">
                                    UI/UX Design Specialization
                                </h4>
                                <p className="text-taupe">Coursera / Google OR Similar Provider</p>
                                <p className="text-taupe/80 text-sm mt-1">Completed 2023</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;
