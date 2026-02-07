import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import { PenTool, Box, CheckSquare, Layers, Layout, Grid, RefreshCw } from 'lucide-react';

const SkillCategory = ({ title, skills, icon: Icon }) => (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
            <div className="p-2 bg-gray-50 rounded-lg">
                <Icon size={24} className="text-black" />
            </div>
            <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
                <span
                    key={skill}
                    className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm font-medium border border-gray-200"
                >
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-white">
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
