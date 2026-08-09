import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { Mail, Linkedin, MapPin } from 'lucide-react';

const ContactItem = ({ icon: Icon, title, value, link }) => {
    const IconComponent = Icon;
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-6 bg-ivory-light border border-champagne/40 rounded-xl hover:bg-charcoal hover:text-ivory transition-all duration-300 group"
        >
            <div className="p-3 bg-champagne/30 text-rose rounded-lg mr-4 group-hover:bg-rose group-hover:text-ivory transition-colors">
                <IconComponent size={24} />
            </div>
            <div>
                <h4 className="text-sm uppercase tracking-wider font-bold text-taupe group-hover:text-champagne mb-1">{title}</h4>
                <p className="text-lg font-medium text-charcoal group-hover:text-ivory">{value}</p>
            </div>
        </a>
    );
};

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-ivory">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <SectionTitle title="Get In Touch" subtitle="Contact Me" className="items-center" />

                <p className="text-xl text-taupe mb-12 max-w-2xl mx-auto">
                    I'm currently available for freelance projects and full-time opportunities.
                    If you're interested in working together, please don't hesitate to get in touch.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-12 text-left">
                    <ContactItem
                        icon={Mail}
                        title="Email"
                        value="mernagalal81@gmail.com"
                        link="mailto:mernagalal81@gmail.com"
                    />
                    <ContactItem
                        icon={Linkedin}
                        title="LinkedIn"
                        value="Merna Galal"
                        link="https://www.linkedin.com/in/merna-galal-bb6192381"
                    />
                    {/* <ContactItem
                        icon={Globe}
                        title="Behance"
                        value="behance.net/merna"
                        link="#"
                    /> */}
                    <ContactItem
                        icon={MapPin}
                        title="Location"
                        value="Cairo, Egypt"
                        link="#"
                    />
                </div>

                <div className="p-8 bg-charcoal rounded-2xl text-ivory border border-champagne/30">
                    <h3 className="text-2xl font-bold text-ivory mb-4">Let's build something amazing together.</h3>
                    <p className="text-champagne mb-8">
                        Feel free to reach out for collaborations or just a friendly hello.
                    </p>
                    <Button variant="secondary" className="bg-ivory text-charcoal hover:bg-blush hover:text-charcoal border-none" onClick={() => window.location.href = 'mailto:mernagalal81@gmail.com'}>
                        Send me an email
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Contact;
