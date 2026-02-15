import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import ProjectCard from '../components/ui/ProjectCard';
import kroo_project from '../assets/kroo_project.png'
import oasis_project from '../assets/oasis_project.png'
import hyundai_project from '../assets/hyundai_project.png'


const projectsData = [
    {
        title: 'ORANGE OASIS',
        description: 'A comprehensive branding and UI design for a modern wellness retreat focused on mindfulness and sustainable living. The project involved creating a cohesive design system, responsive website layouts, and a seamless booking experience.',
        image: oasis_project,
        link: 'https://www.figma.com/design/RelpDAWtcvQaN3x36so7XP/oasis?node-id=0-1&t=Dca6G09Xf9jG2YND-1' // Placeholder link
    },
    {
        title: 'Kroo Loaylty App',
        description: 'Lead designer for key features within the Kroo mobile loyalty application. Focused on improving user retention through gamified saving goals and intuitive spending analysis dashboards. Collaborated closely with fintech developers.',
        image: kroo_project,
        link: 'https://www.figma.com/design/dvhK1fGEJM3NzFZfZOFBQ2/kroo?node-id=0-1&t=7tIkIiahdX194d2f-1' // Placeholder link
    },
    {
        title: 'Hyundai App',
        description: 'Lead designer for key features within the Hyundai mobile application. Focused on improving user retention through gamified saving goals and intuitive spending analysis dashboards. Collaborated closely with Hyundai developers.',
        image: hyundai_project,
        link: 'https://www.figma.com/design/Ux9T7KoPki5ok432YkUrNj/hyundai?node-id=0-1&t=vGa8nNbdgIR0AUVl-1' // Placeholder link
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
