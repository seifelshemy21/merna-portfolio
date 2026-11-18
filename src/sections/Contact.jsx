import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { Mail, Linkedin, MapPin, ArrowUpRight } from 'lucide-react';
import { TRANSITION_EASE } from '../utils/motion';

const ContactItem = ({ icon: Icon, title, value, link, index = 0 }) => {
    const IconComponent = Icon;
    const isClickable = link && link !== '#';

    return (
        <motion.a
            href={link}
            target={isClickable ? "_blank" : undefined}
            rel={isClickable ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: TRANSITION_EASE }}
            whileHover={{ y: -4, scale: 1.01 }}
            whileTap={isClickable ? { scale: 0.98 } : {}}
            className="flex items-center justify-between p-6 bg-ivory-light border border-champagne/40 rounded-2xl hover:bg-charcoal hover:text-ivory hover:shadow-xl hover:shadow-charcoal/8 transition-all duration-300 group cursor-pointer"
        >
            <div className="flex items-center">
                <div className="p-3 bg-champagne/30 text-rose rounded-xl mr-4 group-hover:bg-rose group-hover:text-ivory group-hover:scale-105 transition-all duration-300">
                    <IconComponent size={22} className="group-hover:rotate-6 transition-transform duration-300" />
                </div>
                <div>
                    <h4 className="text-xs uppercase tracking-wider font-bold text-taupe group-hover:text-champagne mb-1 transition-colors">
                        {title}
                    </h4>
                    <p className="text-base sm:text-lg font-medium text-charcoal group-hover:text-ivory transition-colors">
                        {value}
                    </p>
                </div>
            </div>

            {isClickable && (
                <div className="w-8 h-8 rounded-full bg-champagne/20 flex items-center justify-center text-taupe group-hover:text-ivory group-hover:bg-rose/40 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                    <ArrowUpRight size={16} />
                </div>
            )}
        </motion.a>
    );
};

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-ivory relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <SectionTitle title="Get In Touch" subtitle="Contact Me" className="items-center text-center" />

                <motion.p
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.15, ease: TRANSITION_EASE }}
                    className="text-lg sm:text-xl text-taupe mb-12 max-w-2xl mx-auto leading-relaxed"
                >
                    I'm currently available for freelance projects and full-time opportunities.
                    If you're interested in working together, please don't hesitate to get in touch.
                </motion.p>

                <div className="grid md:grid-cols-2 gap-6 mb-12 text-left">
                    <ContactItem
                        index={0}
                        icon={Mail}
                        title="Email"
                        value="mernagalal81@gmail.com"
                        link="mailto:mernagalal81@gmail.com"
                    />
                    <ContactItem
                        index={1}
                        icon={Linkedin}
                        title="LinkedIn"
                        value="Merna Galal"
                        link="https://www.linkedin.com/in/merna-galal-bb6192381"
                    />
                    <ContactItem
                        index={2}
                        icon={MapPin}
                        title="Location"
                        value="Cairo, Egypt"
                        link="#"
                    />
                </div>

                {/* Bottom Call to Action Box */}
                <motion.div
                    initial={{ opacity: 0, y: 25, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: TRANSITION_EASE }}
                    className="p-8 sm:p-10 bg-charcoal rounded-3xl text-ivory border border-champagne/30 shadow-2xl shadow-charcoal/15 relative overflow-hidden group"
                >
                    {/* Ambient subtle glow */}
                    <div className="absolute -top-24 -right-24 w-60 h-60 rounded-full bg-rose/10 blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

                    <h3 className="text-2xl sm:text-3xl font-bold text-ivory mb-4 tracking-tight relative z-10">
                        Let's build something amazing together.
                    </h3>
                    <p className="text-champagne mb-8 text-base sm:text-lg relative z-10 max-w-xl mx-auto">
                        Feel free to reach out for collaborations or just a friendly hello.
                    </p>
                    <div className="relative z-10">
                        <Button
                            variant="secondary"
                            className="bg-ivory text-charcoal hover:bg-blush hover:text-charcoal border-none font-semibold px-8 py-3.5 shadow-lg hover:shadow-xl"
                            onClick={() => window.location.href = 'mailto:mernagalal81@gmail.com'}
                        >
                            Send me an email
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
