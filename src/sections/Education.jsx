import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
    return (
        <section id="education" className="py-20 bg-ivory-dark">
            <div className="max-w-5xl mx-auto px-6">
                <SectionTitle title="Education & Courses" subtitle="Learning Journey" />

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Education Column */}
                    <div>
                        <h3 className="text-2xl font-bold text-charcoal mb-8 flex items-center gap-2">
                            <GraduationCap className="text-rose" /> Academic Background
                        </h3>

                        <div className="space-y-8 pl-4 border-l-2 border-champagne">
                            <div className="relative pl-6">
                                <span className="absolute -left-[9px] top-1 w-4 h-4 bg-rose rounded-full border-4 border-ivory"></span>
                                <h4 className="text-lg font-bold text-charcoal">Management Information Systems</h4>
                                <p className="text-taupe">High Institute for Management Information Systems</p>
                                <p className="text-taupe/80 text-sm mt-1">Modern Academy – Egypt</p>
                                <span className="inline-block px-3 py-1 mt-3 bg-champagne/40 text-charcoal text-xs font-bold rounded-full">Undergraduate</span>
                            </div>
                        </div>
                    </div>

                    {/* Courses Column */}
                    <div>
                        <h3 className="text-2xl font-bold text-charcoal mb-8 flex items-center gap-2">
                            <Award className="text-rose" /> Certifications & Courses
                        </h3>
                        <div className="space-y-8 pl-4 border-l-2 border-champagne">
                            <div className="relative pl-6">
                                <span className="absolute -left-[9px] top-1 w-4 h-4 bg-gold rounded-full border-4 border-ivory"></span>
                                <h4 className="text-lg font-bold text-charcoal">UI/UX Design Specialization</h4>
                                <p className="text-taupe">Coursera / Google OR Similar Provider</p>
                                <p className="text-taupe/80 text-sm mt-1">Completed 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
