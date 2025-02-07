import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const certificates = [

    {
        title: "MSIB Kampus Merdeka Batch 4 Backend Developer NodeJS",
        issuer: "Hacktiv8",
        date: "2023",
        images: [
            "/img/certificates/msib4page1.jpg",
            "/img/certificates/msib4page2.jpg"
        ],
    },
    {
        title: "MSIB Kampus Merdeka Batch 5 Front End Developer",
        issuer: "Vocasia",
        date: "2020",
        images: [
            "/img/certificates/msib5page1.jpg",
            "/img/certificates/msib5page2.jpg"
        ],
    },
    {
        title: "Best Mentee Vocasia Frontend Developer",
        issuer: "Vocasia",
        date: "2023",
        images: ["/img/certificates/bestmentee.jpg"],
    },
    {
        title: "MTCNA",
        issuer: "Mikrotik",
        date: "2022",
        images: ["/img/certificates/mtcna.jpg"],
    },
    {
        title: "Frontend Developer",
        issuer: "Vocasia",
        date: "2023",
        images: ["/img/certificates/frontend.jpg"],
    },
    {
        title: "Frontend Bootcamp",
        issuer: "Vocasia",
        date: "2023",
        images: ["/img/certificates/frontendbootcamp.jpg"],
    },

    {
        title: "NodeJS for Beginners",
        issuer: "Hacktiv8",
        date: "2023",
        images: ["/img/certificates/nodejsbeginner.jpg"],
    },
    {
        title: "PostgreSQL",
        issuer: "Hacktiv8",
        date: "2023",
        images: ["/img/certificates/postgre.jpg"],
    },

    {
        title: "Deployment",
        issuer: "Hacktiv8",
        date: "2023",
        images: ["/img/certificates/deploy.jpg"],
    },
    {
        title: "Uji Kompetensi Teknik Komputer dan Jaringan",
        issuer: "SMK Pasundan Jatinangor",
        date: "2023",
        images: [
            "/img/certificates/ujikom1.jpg",
            "/img/certificates/ujikom2.jpg"
        ],
    },

];

const CertificateCard = ({ certificate, onClick }) => {
    return (
        <div
            className="w-full h-full cursor-pointer"
            onClick={onClick}
        >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group h-full">
                <div className="relative aspect-[4/3]">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <img
                        src={certificate.images[0]}
                        alt={certificate.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                    {certificate.images.length > 1 && (
                        <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded-full text-xs backdrop-blur-sm">
                            {certificate.images.length} pages
                        </div>
                    )}
                </div>
                <div className="p-6">
                    <h3 className="text-white font-bold text-xl mb-2 group-hover:text-purple-400 transition-colors line-clamp-2">
                        {certificate.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{certificate.issuer}</p>
                    <p className="text-gray-500 text-xs mt-1">{certificate.date}</p>
                </div>
            </div>
        </div>
    );
};

const Carousel = ({ items, selectedIndex, setSelectedIndex, onItemClick }) => {
    // Responsive itemsPerPage
    const getItemsPerPage = () => {
        if (typeof window === 'undefined') return 3;
        if (window.innerWidth < 768) return 1; // mobile
        if (window.innerWidth < 1024) return 2; // tablet
        return 3; // desktop
    };

    const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());

    React.useEffect(() => {
        const handleResize = () => {
            setItemsPerPage(getItemsPerPage());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const totalPages = Math.ceil(items.length / itemsPerPage);
    const currentPage = Math.floor(selectedIndex / itemsPerPage);

    const showPrevious = () => {
        setSelectedIndex((current) => {
            const newIndex = current - itemsPerPage;
            return newIndex >= 0 ? newIndex : items.length - (items.length % itemsPerPage || itemsPerPage);
        });
    };

    const showNext = () => {
        setSelectedIndex((current) => {
            const newIndex = current + itemsPerPage;
            return newIndex < items.length ? newIndex : 0;
        });
    };

    const visibleItems = items.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    return (
        <div className="relative w-full max-w-7xl mx-auto px-4">
            <div className="overflow-hidden">
                <motion.div
                    className="w-full"
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    key={currentPage}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {visibleItems.map((certificate, index) => (
                            <CertificateCard
                                key={currentPage * itemsPerPage + index}
                                certificate={certificate}
                                onClick={() => onItemClick(certificate)}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>

            {totalPages > 1 && (
                <>
                    <button
                        onClick={showPrevious}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-gray-900/80 hover:bg-purple-500/80 p-3 rounded-full text-white transition-colors duration-300 backdrop-blur-sm z-10"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={showNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-gray-900/80 hover:bg-purple-500/80 p-3 rounded-full text-white transition-colors duration-300 backdrop-blur-sm z-10"
                    >
                        <ChevronRight size={24} />
                    </button>

                    <div className="flex justify-center mt-8 gap-2">
                        {Array.from({ length: totalPages }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedIndex(index * itemsPerPage)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentPage === index
                                    ? 'bg-purple-500 w-6'
                                    : 'bg-gray-600 hover:bg-gray-500'
                                    }`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};
const Modal = ({ isOpen, onClose, certificate }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!isOpen || !certificate) return null;

    const showNextImage = () => {
        setCurrentImageIndex((current) =>
            current < certificate.images.length - 1 ? current + 1 : 0
        );
    };

    const showPreviousImage = () => {
        setCurrentImageIndex((current) =>
            current > 0 ? current - 1 : certificate.images.length - 1
        );
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="relative max-w-4xl w-full bg-gray-900 rounded-2xl overflow-hidden max-h-[90vh]"
                    onClick={e => e.stopPropagation()}
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-purple-500/50 transition-colors z-10"
                    >
                        <X size={24} />
                    </button>

                    <div className="relative max-h-[90vh] overflow-auto">
                        <img
                            src={certificate.images[currentImageIndex]}
                            alt={`${certificate.title} - Page ${currentImageIndex + 1}`}
                            className="w-full h-auto max-h-[80vh] object-contain"
                        />

                        {certificate.images.length > 1 && (
                            <>
                                <button
                                    onClick={showPreviousImage}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 text-white rounded-full hover:bg-purple-500/50 transition-colors"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button
                                    onClick={showNextImage}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 text-white rounded-full hover:bg-purple-500/50 transition-colors"
                                >
                                    <ChevronRight size={24} />
                                </button>
                                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                                    {currentImageIndex + 1} / {certificate.images.length}
                                </div>
                            </>
                        )}
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-6">
                        <h3 className="text-white font-bold text-2xl mb-2">{certificate.title}</h3>
                        <p className="text-gray-300">{certificate.issuer}</p>
                        <p className="text-gray-400 text-sm mt-1">{certificate.date}</p>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

const Certificates = () => {
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
                        Certificates
                    </h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto"
                    >
                        several vocational certificates held
                    </motion.p>
                </motion.div>

                <Carousel
                    items={certificates}
                    selectedIndex={activeIndex}
                    setSelectedIndex={setActiveIndex}
                    onItemClick={setSelectedCertificate}
                />

                <Modal
                    isOpen={!!selectedCertificate}
                    onClose={() => {
                        setSelectedCertificate(null);
                    }}
                    certificate={selectedCertificate}
                />
            </div>
        </section>
    );
};

export default Certificates;