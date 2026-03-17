import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import Button from '../ui/Button';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0">
                    <h2 className="text-2xl font-bold mb-2">MERNA</h2>
                    <p className="text-gray-400 text-sm">© {new Date().getFullYear()} All rights reserved.</p>
                </div>

                <div className="flex items-center space-x-6">
                    <a
                        href="https://www.linkedin.com/in/merna-galal-bb6192381"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500 transition-colors"
                    >
                        <Linkedin size={20} />
                    </a>

                    <a
                        href="mailto:mernagalal81@gmail.com"
                        className="hover:text-blue-500 transition-colors"
                    >
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
