import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import { Calendar, Building, Briefcase } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-gray-50">
            <div className="max-w-5xl mx-auto px-6">
                <SectionTitle title="Experience" subtitle="Professional Journey" />

                <div className="relative border-l-2 border-gray-200 ml-3 md:ml-6 space-y-12">
                    <div className="relative pl-8 md:pl-12">
                        {/* Dot */}
                        <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-black border-4 border-white shadow-sm"></div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                                <h3 className="text-xl font-bold flex items-center gap-2">
                                    <Briefcase size={20} className="text-black" />
                                    Junior UI/UX Designer
                                </h3>
                                <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-500 mt-2 md:mt-0">
                                    <span className="flex items-center gap-1"><Building size={14} /> Kroo</span>
                                    <span className="flex items-center gap-1"><Calendar size={14} /> 2023 - Present</span>
                                </div>
                            </div>

                            <ul className="space-y-3 text-gray-600 list-disc list-outside ml-4 mt-6 leading-relaxed">
                                <li>Designed user-centered interfaces for web & mobile apps, focusing on clean aesthetics and usability.</li>
                                <li>Conducted user research and created detailed user flows to optimize navigation paths.</li>
                                <li>Built wireframes and high-fidelity designs using <strong>Figma</strong>, ensuring pixel-perfect execution.</li>
                                <li>Created interactive prototypes and established comprehensive design systems for consistency.</li>
                                <li>Collaborated closely with developers to ensure accurate implementation of designs during handoff.</li>
                                <li>Improved overall UX through strategic layout adjustments, typography choices, and interaction optimization.</li>
                                <li>Designed responsive interfaces that adapt seamlessly across multiple devices (mobile, tablet, desktop).</li>
                                <li>Applied UX methodologies including persona development, journey mapping, and usability testing.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
