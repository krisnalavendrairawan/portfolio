import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Instagram, Facebook } from 'lucide-react';

const socialLinks = [
    {
        Icon: Github,
        href: 'https://github.com/krisnalavendrairawan',
        name: 'GitHub'
    },
    {
        Icon: Linkedin,
        href: 'https://www.linkedin.com/in/krisna-lavendra-irawan-355681201/',
        name: 'LinkedIn'
    },
    {
        Icon: Instagram,
        href: 'https://www.instagram.com/krisna_lavendra_14/',
        name: 'Instagram'
    },
    {
        Icon: Twitter,
        href: 'https://x.com/krisnalavendra1',
        name: 'Twitter'
    },
    {
        Icon: Facebook,
        href: 'https://web.facebook.com/krisna.yudistira.73',
        name: 'Facebook'
    },
];

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-gray-900 to-black py-12">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
                            Krisna Lavendra Irawan
                        </h3>
                        <p className="text-gray-400">
                            Full-stack web developer passionate about creating innovative and user-friendly digital experiences.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {[
                                { name: 'Home', href: '#home' },
                                { name: 'About', href: '#about' },
                                { name: 'Skills', href: '#skills' },
                                { name: 'Projects', href: '#projects' },
                                { name: 'Contact', href: '#contact' }
                            ].map(({ name, href }) => (
                                <li key={name}>
                                    <a
                                        href={href}
                                        className="text-gray-400 hover:text-purple-400 transition-colors"
                                    >
                                        {name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-white mb-4">Connect</h4>
                        <div className="flex space-x-4">
                            {socialLinks.map(({ Icon, href, name }, index) => (
                                <motion.a
                                    key={index}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{
                                        scale: 1.1,
                                        color: '#8b5cf6' // purple-500 
                                    }}
                                    className="text-gray-400 hover:text-purple-500 transition-colors"
                                    title={name}
                                >
                                    <Icon className="w-6 h-6" />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                    <p className="text-gray-400">
                        © {new Date().getFullYear()} Krisna Lavendra Irawan . All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;