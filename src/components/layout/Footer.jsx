import React from 'react';
import { Github, Linkedin, Mail, Dribbble } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0">
                    <h2 className="text-2xl font-bold mb-2">MERNA</h2>
                    <p className="text-gray-400 text-sm">© {new Date().getFullYear()} All rights reserved.</p>
                </div>

                <div className="flex space-x-6">
                    <a href="#" className="hover:text-blue-500 transition-colors"><Linkedin size={20} /></a>
                    <a href="#" className="hover:text-blue-500 transition-colors"><Dribbble size={20} /></a>
                    <a href="#" className="hover:text-blue-500 transition-colors"><Mail size={20} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
