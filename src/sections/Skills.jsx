import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import { PenTool, Box, RefreshCw } from 'lucide-react';

const SkillCategory = ({ title, skills, icon: Icon }) => {
    const IconComponent = Icon;
    return (
        <div className="bg-ivory-light p-8 rounded-2xl shadow-sm border border-champagne/40 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-champagne/30">
                <div className="p-2 bg-blush/20 rounded-lg">
                    <IconComponent size={24} className="text-rose" />
                </div>
                <h3 className="text-xl font-bold text-charcoal">{title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <span
                        key={skill}
                        className="px-3 py-1 bg-ivory text-charcoal rounded-full text-sm font-medium border border-champagne/60 hover:border-rose transition-colors"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-ivory">
            <div className="max-w-7xl mx-auto px-6">
                <SectionTitle title="Skills & Tools" subtitle="My Expertise" />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <SkillCategory
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
                        title="Tools & Software"
                        icon={Box}
                        skills={[
                            "Figma", "Adobe XD", "Miro",
                            "Sketch", "InVision", "Zeplin",
                            "Photoshop", "Illustrator"
                        ]}
                    />

                    <SkillCategory
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
