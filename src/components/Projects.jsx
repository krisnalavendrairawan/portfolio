import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Calendar, Building2 } from 'lucide-react';
import { desc } from 'framer-motion/client';

const projects = [
    {
        title: 'Motorin',
        description: 'A modern web application built with Laravel for motorcycle rental services',
        images: [
            '/img/project/rental-motor.png',
            '/img/project/rental-motor2.png' // Add a second image
        ],
        github: '#',
        demo: '#',
        tags: [
            {
                name: "Laravel",
                color: "text-blue-400",
            },
            {
                name: "Bootstrap5",
                color: "text-green-400",
            },
            {
                name: "Jquery",
                color: "text-pink-400",
            },
        ],
    },
    {
        title: 'Stock Online',
        description: 'Online stock is a web-based application created using Laravel 11, to process sales and purchase data for each company.',
        images: [

            '/img/project/onlinestock1.png',
            '/img/project/onlinestock2.png' // Add a second image
        ],
        github: '#',
        demo: '#',
        tags: [
            {
                name: "Laravel",
                color: "text-blue-400",
            },
            {
                name: "Bootstrap5",
                color: "text-green-400",
            },
            {
                name: "Jquery",
                color: "text-pink-400",
            },
        ],
    },
    {
        title: 'Posyandu KIA Digital',
        description: 'A modern web application built with React and Laravel for posyandu services',
        images: [

            '/img/project/kia1.png',
            '/img/project/kia2.png' // Add a second image
        ],
        github: '#',
        demo: '#',
        tags: [
            {
                name: "Laravel",
                color: "text-blue-400",
            },
            {
                name: "React",
                color: "text-green-400",
            },
            {
                name: "Material UI",
                color: "text-pink-400",
            },
        ],
    },
    // Add more projects here
];

const experiences = [
    {
        title: "Data Entry (Internship)",
        company_name: "Balai Pengamatan Antariksa dan Atmosfer (BPAA) Sumedang",
        icon: '/img/companies/lapan.png',
        iconBg: "#2C3E50",
        date: "January 2019 - March 2019",
        points: [
            "Conducted detailed data entry of sunspot observations into Excel spreadsheets.",
            "Assisted in organizing and maintaining astronomical research data.",
            "Gained hands-on experience in scientific data management and documentation.",
            "Contributed to the systematic recording of solar observation findings.",
        ],
    },
    {
        title: "Junior Web Developer (Internship)",
        company_name: "PT Cybers Blitz Nusantara",
        icon: '/img/companies/cbn.png',
        iconBg: "#383E56",
        date: "February 2023 - June 2023",
        points: [
            "Developing and maintaining web applications using YII Framework and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },

];

const ExperienceCard = ({ experience, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="w-full"
        >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-4">
                    <div
                        className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                        style={{ backgroundColor: experience.iconBg }}
                    >
                        <img
                            src={experience.icon}
                            alt={experience.company_name}
                            className="w-3/4 h-3/4 object-contain"
                        />
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-xl group-hover:text-purple-400 transition-colors">
                            {experience.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                            <Building2 className="w-4 h-4 text-gray-400" />
                            <p className="text-gray-400 text-sm">{experience.company_name}</p>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            <p className="text-gray-400 text-xs">{experience.date}</p>
                        </div>
                    </div>
                </div>
                <ul className="space-y-2 pl-5 border-l-2 border-gray-700 ml-8 mt-4">
                    {experience.points.map((point, pointIndex) => (
                        <li
                            key={`experience-point-${index}-${pointIndex}`}
                            className="text-gray-300 text-sm pl-4 relative before:absolute before:left-[-9px] before:top-2 before:w-2 before:h-2 before:bg-purple-500 before:rounded-full"
                        >
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

const ProjectCard = ({ project, index }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prev) =>
            (prev + 1) % project.images.length
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? project.images.length - 1 : prev - 1
        );
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="w-full" // Remove fixed width here
        >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group h-full"> {/* Added h-full */}
                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentImageIndex}
                            src={project.images[currentImageIndex]}
                            alt={`${project.title} image ${currentImageIndex + 1}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="w-full h-[250px] object-cover object-center group-hover:scale-105 transition-transform duration-300"
                        />
                    </AnimatePresence>

                    {/* Image Navigation Buttons */}
                    {project.images.length > 1 && (
                        <>
                            <button
                                onClick={prevImage}
                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm w-8 h-8 rounded-full flex items-center justify-center z-10"
                            >
                                &#10094;
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm w-8 h-8 rounded-full flex items-center justify-center z-10"
                            >
                                &#10095;
                            </button>
                        </>
                    )}

                    <div className="absolute top-4 right-4 flex gap-2">
                        <div
                            onClick={() => window.open(project.github, "_blank")}
                            className="bg-black/50 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center hover:bg-purple-500/50 transition-all cursor-pointer"
                        >
                            <Github className="w-5 h-5 text-white" />
                        </div>
                        <div
                            onClick={() => window.open(project.demo, "_blank")}
                            className="bg-black/50 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center hover:bg-purple-500/50 transition-all cursor-pointer"
                        >
                            <ExternalLink className="w-5 h-5 text-white" />
                        </div>
                    </div>
                </div>

                <div className="p-5">
                    <h3 className="text-white font-bold text-2xl mb-2 group-hover:text-purple-400 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <span
                                key={`${project.title}-${tag.name}`}
                                className={`text-xs px-2 py-1 rounded-full ${tag.color} bg-opacity-10`}
                            >
                                #{tag.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen">
            {/* Work Experience Section */}
            <section className="py-20 container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <p className="text-gray-400 uppercase tracking-wider text-sm mb-2">
                        Professional Journey
                    </p>
                    <h2 className="text-white font-bold text-4xl md:text-5xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Work Experience
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={`experience-${index}`}
                            experience={experience}
                            index={index}
                        />
                    ))}
                </div>
            </section>

            {/* Projects Section */}
            <section id='projects' className="py-20 container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-white font-bold text-4xl md:text-5xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Projects
                    </h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-4 text-gray-400 max-w-3xl"
                    >
                        Explore a collection of projects that demonstrate my skills, creativity,
                        and problem-solving abilities. Each project showcases my expertise in
                        different technologies and my approach to building user-centric solutions.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={`project-${index}`}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Projects;