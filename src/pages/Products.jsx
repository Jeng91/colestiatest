import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { Calendar, Filter, X } from 'lucide-react';
import { projects } from '../data/projectsData';

// Movie genres
const GENRES = [
    { id: 'all', name: 'ทั้งหมด', nameEn: 'All' },
    { id: 'action', name: 'แอ็คชั่น', nameEn: 'Action' },
    { id: 'adventure', name: 'ผจญภัย', nameEn: 'Adventure' },
    { id: 'animation', name: 'แอนิเมชั่น', nameEn: 'Animation' },
    { id: 'comedy', name: 'คอมเมดี้', nameEn: 'Comedy' },
    { id: 'crime', name: 'อาชญากรรม', nameEn: 'Crime' },
    { id: 'documentary', name: 'สารคดี', nameEn: 'Documentary' },
    { id: 'drama', name: 'ดราม่า', nameEn: 'Drama' },
    { id: 'fantasy', name: 'แฟนตาซี', nameEn: 'Fantasy' },
    { id: 'horror', name: 'สยองขวัญ', nameEn: 'Horror' },
    { id: 'romance', name: 'โรแมนติก', nameEn: 'Romance' },
    { id: 'scifi', name: 'ไซไฟ', nameEn: 'Science Fiction' },
    { id: 'thriller', name: 'ระทึกขวัญ', nameEn: 'Thriller' }
];

// Format currency
const formatCurrency = (amount) => {
    return `฿${(amount / 1000000).toFixed(1)}M`;
};

// Format date to Thai
const formatDateThai = (dateString) => {
    const date = new Date(dateString);
    const thaiMonths = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
    const day = date.getDate();
    const month = thaiMonths[date.getMonth()];
    const year = date.getFullYear() + 543;
    return `${day} ${month} ${year}`;
};

// Movie Card Component - Updated Design
const MovieCard = ({ movie }) => {
    const genre = GENRES.find(g => g.id === movie.genre);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group bg-[#1a1a1a] rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300"
        >
            {/* Poster */}
            <div className="relative aspect-[16/9] overflow-hidden">
                <img
                    src={movie.poster}
                    alt={movie.titleTh}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                {/* Genre Badge - Top Left */}
                <div className="absolute top-3 left-3">
                    <span className="bg-colestia-purple text-white text-xs font-bold px-3 py-1.5 rounded-full">
                        {genre?.name}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                {/* Title */}
                <h3 className="text-white font-bold text-xl mb-1">
                    {movie.titleTh}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                    {movie.titleEn}
                </p>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {movie.description}
                </p>

                {/* Progress Bar - White */}
                <div className="mb-4">
                    <div className="flex justify-end items-center mb-2">
                        <span className="text-white text-sm font-bold">
                            {movie.percentage}%
                        </span>
                    </div>
                    <div className="h-2 bg-[#2a2a2a] rounded-full overflow-hidden">
                        <div
                            className="h-full bg-white rounded-full"
                            style={{ width: `${movie.percentage}%` }}
                        />
                    </div>
                </div>

                {/* Funding Amount */}
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <p className="text-gray-500 text-xs mb-1">ระดมทุนได้</p>
                        <p className="text-white font-bold text-lg">
                            {formatCurrency(movie.currentFunding)}
                        </p>
                    </div>
                    <div className="text-right">
                        <p className="text-gray-500 text-xs mb-1">เป้าหมาย</p>
                        <p className="text-white font-bold text-lg">
                            {formatCurrency(movie.goalFunding)}
                        </p>
                    </div>
                </div>

                {/* Date & Investors */}
                <div className="flex items-center justify-between text-xs text-gray-400 mb-5">
                    <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>เริ่ม: {formatDateThai(movie.startDate)} - สิ้นสุด: {formatDateThai(movie.endDate)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" >
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                        <span>{movie.investors.toLocaleString()} นักลงทุน</span>
                    </div>
                </div>

                {/* CTA Button */}
                <Link to={`/project/${movie.id}`}>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative w-full bg-gradient-to-r from-colestia-purple to-colestia-magenta text-white font-bold py-3.5 rounded-full hover:shadow-lg hover:shadow-colestia-purple/50 transition-all overflow-hidden group"
                    >
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                        {/* Button content */}
                        <span className="relative flex items-center justify-center gap-2">
                            ลงทุนเลย
                            <svg
                                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </span>

                        {/* Pulse effect */}
                        <div className="absolute inset-0 rounded-full animate-pulse bg-white/10 opacity-0 group-hover:opacity-100" />
                    </motion.button>
                </Link>
            </div>
        </motion.div>
    );
};

const Products = () => {
    const [selectedGenre, setSelectedGenre] = useState('all');

    // Filter movies by genre
    const filteredMovies = useMemo(() => {
        if (selectedGenre === 'all') return projects;
        return projects.filter(movie => movie.genre === selectedGenre);
    }, [selectedGenre]);

    // Separate movies into Sale and New
    const onSaleMovies = useMemo(() =>
        filteredMovies.filter(m => m.onSale),
        [filteredMovies]
    );

    const newMovies = useMemo(() =>
        filteredMovies.filter(m => m.isNew),
        [filteredMovies]
    );

    return (
        <div className="pt-28 pb-20 min-h-screen bg-black">
            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12 text-center"
                >
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                        ระดมทุน<span className="text-gradient-main">โครงการหนัง</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-4">
                        ร่วมเป็นส่วนหนึ่งในการสร้างสรรค์ผลงานภาพยนตร์คุณภาพ
                    </p>
                </motion.div>

                {/* Genre Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <Filter className="text-colestia-purple" size={20} />
                        <h3 className="text-lg font-semibold text-white">กรองตามประเภท</h3>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {GENRES.map((genre) => (
                            <button
                                key={genre.id}
                                onClick={() => setSelectedGenre(genre.id)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${selectedGenre === genre.id
                                    ? 'bg-gradient-to-r from-colestia-purple to-colestia-magenta text-white shadow-lg shadow-colestia-purple/30'
                                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                                    }`}
                            >
                                {genre.name}
                            </button>
                        ))}
                    </div>

                    {selectedGenre !== 'all' && (
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            onClick={() => setSelectedGenre('all')}
                            className="mt-3 text-sm text-colestia-cyan hover:text-white transition-colors flex items-center gap-2"
                        >
                            <X size={16} /> ล้างตัวกรอง
                        </motion.button>
                    )}
                </motion.div>

                {/* On Sale Section */}
                {onSaleMovies.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-16"
                    >
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
                            ยอดนิยม
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {onSaleMovies.map((movie) => (
                                <MovieCard key={movie.id} movie={movie} />
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* New Section */}
                {newMovies.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
                            ภาพยนตร์มาใหม่
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {newMovies.map((movie) => (
                                <MovieCard key={movie.id} movie={movie} />
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* No Results */}
                {filteredMovies.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-500">ไม่พบโครงการในหมวดนี้</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Products;
