import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-6">
                <SectionTitle title="About Me" subtitle="Who I Am" />

                <div className="grid md:grid-cols-1 gap-12">
                    <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                        <p>
                            I am a passionate Junior UI/UX Designer with over 1 year of professional experience, dedicated to crafting intuitive and accessible digital products. My approach combines clean visual aesthetics with a deep understanding of user needs, ensuring that every design decision serves a purpose.
                        </p>
                        <p>
                            Currently, I work at <strong className="text-black">Kroo</strong>, where I collaborate closely with developers and product managers to translate complex requirements into seamless user flows. I believe in the power of minimalism and strong hierarchy to guide users effortlessly through their journey.
                        </p>
                        <p>
                            My focus is on usability, accessibility, and creating designs that not only look good but work perfectly across all devices. Whether it's wireframing a new feature or polishing a high-fidelity prototype, I bring enthusiasm and attention to detail to every project.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
