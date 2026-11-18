import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import { PenTool, Box, RefreshCw } from 'lucide-react';
import { TRANSITION_EASE } from '../utils/motion';

const SkillCategory = ({ title, skills, icon: Icon, index = 0 }) => {
    const IconComponent = Icon;
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: index * 0.15, ease: TRANSITION_EASE }}
            whileHover={{ y: -6 }}
            className="group bg-ivory-light p-8 rounded-2xl shadow-sm border border-champagne/40 hover:border-gold/50 hover:shadow-xl hover:shadow-charcoal/8 transition-all duration-300 flex flex-col justify-between"
        >
            <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-champagne/30">
                    <div className="p-2.5 bg-blush/20 rounded-xl group-hover:bg-rose/20 group-hover:scale-105 transition-all duration-300">
                        <IconComponent size={22} className="text-rose group-hover:rotate-6 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-charcoal tracking-tight">{title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                        <motion.span
                            key={skill}
                            whileHover={{ scale: 1.04, y: -1 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: 'spring', damping: 20, stiffness: 350 }}
                            className="px-3.5 py-1.5 bg-ivory text-charcoal rounded-full text-sm font-medium border border-champagne/60 hover:border-gold hover:bg-champagne/15 transition-all duration-200 cursor-default select-none shadow-2xs hover:shadow-xs"
                        >
                            {skill}
                        </motion.span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-ivory relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <SectionTitle title="Skills & Tools" subtitle="My Expertise" />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <SkillCategory
                        index={0}
                        title="UI/UX Design"
                        icon={PenTool}
                        skills={[
                            "User Interface Design", "User Experience Design", "User Research",
                            "User Flows", "Wireframing", "Prototyping",
                            "Information Architecture", "Usability Testing",
                            "Design Thinking", "Interaction Design",
                            "Responsive Design", "Accessibility (WCAG)"
                        ]}
                    />

                    <SkillCategory
                        index={1}
                        title="Tools & Software"
                        icon={Box}
                        skills={[
                            "Figma", "Adobe XD", "Miro",
                            "Sketch", "InVision", "Zeplin",
                            "Photoshop", "Illustrator"
                        ]}
                    />

                    <SkillCategory
                        index={2}
                        title="Workflow & Methods"
                        icon={RefreshCw}
                        skills={[
                            "Agile / Scrum", "Design Systems", "Component Libraries",
                            "Developer Handoff", "Design Specs", "Iterative Design",
                            "A/B Testing", "Feedback Loops"
                        ]}
                    />
                </div>
            </div>
        </section>
    );
};

export default Skills;
