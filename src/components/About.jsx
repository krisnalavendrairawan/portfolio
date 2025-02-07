import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Wrench } from 'lucide-react';
import myfoto1 from '/img/myfoto1.jpg';

const About = () => {
    const [activeTab, setActiveTab] = useState(1);

    const tech = [
        {
            id: 1,
            name: 'HTML',
            imageUrl: '/img/skills/html.png',
            status: 'Advanced'
        },
        {
            id: 2,
            name: 'CSS',
            imageUrl: '/img/skills/css.png',
            status: 'Intermediate'
        },
        {
            id: 3,
            name: 'JavaScript',
            imageUrl: '/img/skills/js.png',
            status: 'Intermediate'
        },
        {
            id: 4,
            name: 'PHP',
            imageUrl: '/img/skills/php.png',
            status: 'Intermediate'
        },
        {
            id: 5,
            name: 'Laravel',
            imageUrl: '/img/skills/laravel.png',
            status: 'Intermediate'
        },
        {
            id: 12,
            name: 'CodeIgniter',
            imageUrl: '/img/skills/codeigniter.png',
            status: 'Beginner'
        },
        {
            id: 6,
            name: 'React',
            imageUrl: '/img/skills/react.png',
            status: 'Intermediate'
        },
        {
            id: 7,
            name: 'TypeScript',
            imageUrl: '/img/skills/ts.png',
            status: 'Beginner'
        },
        {
            id: 8,
            name: 'Python',
            imageUrl: '/img/skills/phyton.png',
            status: 'Beginner'
        },
        {
            id: 9,
            name: 'NodeJS',
            imageUrl: '/img/skills/node.png',
            status: 'Beginner'
        },
        {
            id: 10,
            name: 'Bootstrap',
            imageUrl: '/img/skills/boostrap.png',
            status: 'Advanced'
        },
        {
            id: 11,
            name: 'Tailwind',
            imageUrl: '/img/skills/tailwind.png',
            status: 'Intermediate'
        },
    ];

    const tools = [
        {
            id: 1,
            name: 'Git',
            imageUrl: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
            status: 'Version Control'
        },
        {
            id: 2,
            name: 'GitHub',
            imageUrl: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
            status: 'Git Hosting'
        },
        {
            id: 3,
            name: 'Gitlab',
            imageUrl: '/img/skills/gitlab.png',
            status: 'Git Hosting'
        },
        {
            id: 4,
            name: 'Bitbucket',
            imageUrl: '/img/skills/bitbucket.png',
            status: 'Git Hosting'
        },
        {
            id: 5,
            name: 'MySQL',
            imageUrl: '/img/skills/mysql.png',
            status: 'Database'
        },
        {
            id: 6,
            name: 'PostgreSQL',
            imageUrl: '/img/skills/postgre.png',
            status: 'Database'
        },
        {
            id: 7,
            name: 'MongoDB',
            imageUrl: '/img/skills/mongo.png',
            status: 'Database'
        },
        {
            id: 8,
            name: 'Figma',
            imageUrl: '/img/skills/figma.png',
            status: 'Design'
        },
        // Add other tools as needed
    ];

    return (
        <div id="about" className="bg-gradient-to-b from-gray-900 to-black min-h-screen py-16">
            {/* About Me Section */}
            <motion.section
                className="max-w-6xl mx-auto px-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 backdrop-blur-lg border border-gray-700/50 shadow-xl">
                    <header className="mb-12">
                        <motion.div
                            className="flex items-center space-x-4 mb-2"
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                About Me
                            </h2>
                            <div className="h-px flex-grow bg-gradient-to-r from-blue-400/50 to-purple-500/50" />
                        </motion.div>
                    </header>

                    <div className="grid md:grid-cols-12 gap-12 items-center">
                        <motion.div
                            className="md:col-span-5 relative"
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-lg" />
                            <img
                                className="w-full rounded-2xl relative z-10 border-2 border-white/10 shadow-2xl"
                                src={myfoto1}
                                alt="Profile"
                            />
                        </motion.div>

                        <motion.div
                            className="md:col-span-7 space-y-6"
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <p className="text-lg text-gray-300 leading-relaxed">
                                Hi everyone! I'm a full-stack web developer.
                                I have several years of experience in web development, specializing in building responsive
                                and user-friendly applications using modern technologies.
                            </p>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                My job is to build your website to be functional and user-friendly yet still attractive.
                                I provide a personal touch to your product and ensure that the website catches attention and is easy to use.
                                If you are interested in hiring me, please contact me through the provided channels.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Skills Section */}
            <motion.section
                id='skills'
                className="max-w-6xl mx-auto px-6 mt-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <header className="mb-12">
                    <motion.div
                        className="flex items-center space-x-4 mb-2"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Skills
                        </h2>
                        <div className="h-px flex-grow bg-gradient-to-r from-blue-400/50 to-purple-500/50" />
                    </motion.div>
                </header>

                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 backdrop-blur-lg border border-gray-700/50 shadow-xl">
                    <div className="flex space-x-4 mb-8">
                        <button
                            onClick={() => setActiveTab(1)}
                            className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${activeTab === 1
                                ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-purple-500/30'
                                : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            <Code2 className="w-5 h-5" />
                            <span>Tech Stack</span>
                        </button>
                        <button
                            onClick={() => setActiveTab(2)}
                            className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${activeTab === 2
                                ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-purple-500/30'
                                : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            <Wrench className="w-5 h-5" />
                            <span>Tools</span>
                        </button>
                    </div>

                    <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ${activeTab === 1 ? 'block' : 'hidden'}`}>
                        {tech.map((item) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="group"
                            >
                                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                                    <div className="relative flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            <img
                                                alt={item.name}
                                                src={item.imageUrl}
                                                className="w-10 h-10 md:w-12 md:h-12 object-contain transition-transform duration-300 group-hover:scale-110"
                                            />
                                        </div>
                                        <div className="overflow-hidden">
                                            <h3 className="text-sm md:text-base text-white font-medium group-hover:text-purple-400 transition-colors duration-300 truncate">
                                                {item.name}
                                            </h3>
                                            <p className="text-xs md:text-sm text-gray-400 group-hover:text-purple-300 transition-colors duration-300 truncate">
                                                {item.status}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ${activeTab === 2 ? 'block' : 'hidden'}`}>
                        {tools.map((item) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="group"
                            >
                                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 rounded-xl transition-all duration-300" />
                                    <div className="relative flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            <img
                                                alt={item.name}
                                                src={item.imageUrl}
                                                className="w-10 h-10 md:w-12 md:h-12 object-contain transition-transform duration-300 group-hover:scale-110"
                                            />
                                        </div>
                                        <div className="overflow-hidden">
                                            <h3 className="text-sm md:text-base text-white font-medium group-hover:text-purple-400 transition-colors duration-300 truncate">
                                                {item.name}
                                            </h3>
                                            <p className="text-xs md:text-sm text-gray-400 group-hover:text-purple-300 transition-colors duration-300 truncate">
                                                {item.status}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>
        </div>
    );
};

export default About;