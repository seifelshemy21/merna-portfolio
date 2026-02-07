import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { Mail, Linkedin, Globe, MapPin } from 'lucide-react';

const ContactItem = ({ icon: Icon, title, value, link }) => (
    <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center p-6 bg-gray-50 rounded-xl hover:bg-black hover:text-white transition-all duration-300 group"
    >
        <div className="p-3 bg-white text-black rounded-lg mr-4 group-hover:bg-gray-800 group-hover:text-white">
            <Icon size={24} />
        </div>
        <div>
            <h4 className="text-sm uppercase tracking-wider font-bold opacity-60 mb-1">{title}</h4>
            <p className="text-lg font-medium">{value}</p>
        </div>
    </a>
);

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <SectionTitle title="Get In Touch" subtitle="Contact Me" className="items-center" />

                <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                    I'm currently available for freelance projects and full-time opportunities.
                    If you're interested in working together, please don't hesitate to get in touch.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-12 text-left">
                    <ContactItem
                        icon={Mail}
                        title="Email"
                        value="merna@example.com"
                        link="mailto:merna@example.com"
                    />
                    <ContactItem
                        icon={Linkedin}
                        title="LinkedIn"
                        value="linkedin.com/in/merna"
                        link="#"
                    />
                    <ContactItem
                        icon={Globe}
                        title="Behance"
                        value="behance.net/merna"
                        link="#"
                    />
                    <ContactItem
                        icon={MapPin}
                        title="Location"
                        value="Cairo, Egypt"
                        link="#"
                    />
                </div>

                <div className="p-8 bg-gray-900 rounded-2xl text-white">
                    <h3 className="text-2xl font-bold mb-4">Let's build something amazing together.</h3>
                    <p className="text-gray-400 mb-8">
                        Feel free to reach out for collaborations or just a friendly hello.
                    </p>
                    <Button variant="secondary" onClick={() => window.location.href = 'mailto:merna@example.com'}>
                        Send me an email
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Contact;
