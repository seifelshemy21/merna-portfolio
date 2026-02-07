import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import ProjectCard from '../components/ui/ProjectCard';

const projectsData = [
    {
        title: 'ORANGE OASIS',
        description: 'A comprehensive branding and UI design for a modern wellness retreat focused on mindfulness and sustainable living. The project involved creating a cohesive design system, responsive website layouts, and a seamless booking experience.',
        image: 'https://placehold.co/600x400/png?text=Orange+Oasis',
        link: '#' // Placeholder link
    },
    {
        title: 'Kroo Banking App',
        description: 'Lead designer for key features within the Kroo mobile banking application. Focused on improving user retention through gamified saving goals and intuitive spending analysis dashboards. Collaborated closely with fintech developers.',
        image: 'https://placehold.co/600x400/png?text=Kroo+App',
        link: '#' // Placeholder link
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <SectionTitle title="Featured Projects" subtitle="My Work" />

                <div className="grid md:grid-cols-2 gap-12 mt-12">
                    {projectsData.map((project, index) => (
                        <ProjectCard
                            key={index}
                            {...project}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
