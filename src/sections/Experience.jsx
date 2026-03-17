import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import { Calendar, Building, Briefcase } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-gray-50">
            <div className="max-w-5xl mx-auto px-6">
                <SectionTitle title="Experience" subtitle="Professional Journey" />

                <div className="relative border-l-2 border-gray-200 ml-3 md:ml-6 space-y-8 md:space-y-12">
                    <div className="relative pl-6 md:pl-12">
                        {/* Dot */}
                        <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-black border-4 border-white shadow-sm"></div>

                        <div className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-3 md:gap-0">
                                <h3 className="text-lg md:text-xl font-bold flex items-start md:items-center gap-2">
                                    <Briefcase size={20} className="text-black shrink-0 mt-0.5 md:mt-0" />
                                    <span>Junior UI/UX Designer</span>
                                </h3>
                                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm text-gray-500">
                                    <span className="flex flex-row items-center gap-1.5"><Building size={16} /> <span className="truncate">Kroo</span></span>
                                    <span className="flex flex-row items-center gap-1.5"><Calendar size={16} /> <span>2023 - Present</span></span>
                                </div>
                            </div>

                            <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-600 list-disc list-outside ml-4 mt-4 md:mt-6 leading-relaxed">
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
