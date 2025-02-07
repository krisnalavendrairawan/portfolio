import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import myfoto from '/img/myfoto.jpg';
import mycv from '/document/cv.pdf';


const Hero = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);

    const toRotate = ["Web Developer",];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    };

    const downloadCV = () => {
        // Replace '/path/to/your/cv.pdf' with the actual path to your CV
        const link = document.createElement('a');
        link.href = mycv;
        link.download = 'Krisna_Lavendra_Irawan_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id='home' className="pt-32 pb-16 lg:pt-52 lg:pb-24 relative bg-gradient-to-b from-gray-900 to-black min-h-screen overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-center bg-cover bg-no-repeat opacity-10" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
            </div>

            {/* Content container */}
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-wrap items-center justify-between">
                    <div className="w-full lg:w-7/12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <span className="inline-block py-2 px-6 text-lg font-bold tracking-wide text-white mb-4 rounded-full bg-gradient-to-r from-blue-600/50 to-purple-600/50 border border-white/20 shadow-lg shadow-purple-500/20 text-center lex justify-center md:justify-center "    >
                                Welcome to my Portfolio
                            </span>


                            <div className="space-y-2">
                                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent leading-tight">
                                    Hi! I'm Krisna Lavendra Irawan
                                </h1>
                                <div className="text-4xl md:text-5xl font-bold text-white/90">
                                    <span className="wrap">
                                        {text}
                                        <span className="border-r-2 border-purple-400 ml-1 animate-blink" />
                                    </span>
                                </div>
                            </div>

                            <div className="flex justify-center md:justify-center lg:justify-start md:mt-3 sm:mt-3">
                                <button
                                    onClick={downloadCV}
                                    className="inline-flex items-center mt-5 px-8 py-3 text-lg font-bold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 group"
                                >
                                    Download CV
                                    <Download className="ml-2 group-hover:scale-110 transition-transform duration-300" size={24} />
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Image content */}
                    <div className="w-full lg:w-4/12 mt-12 lg:mt-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-30 animate-pulse" />
                            <div className="relative rounded-full overflow-hidden border-4 border-white/10 shadow-2xl shadow-purple-500/20">
                                <motion.img
                                    src={myfoto}
                                    alt="Header Img"
                                    className="w-full h-auto rounded-full hover:scale-105 transition-transform duration-300"
                                    animate={{ y: [-10, 10, -10] }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                <motion.div
                    className="w-full h-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl"
                    animate={{
                        x: [-1000, 1000],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            </div>
        </section>
    );
};

export default Hero;