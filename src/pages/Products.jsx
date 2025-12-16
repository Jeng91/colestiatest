import React, { useState, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { Calendar, TrendingUp, Users, Filter, X } from 'lucide-react';

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

// Sample movie crowdfunding projects
const movies = [
    {
        id: 1,
        titleTh: 'มหาสงครามแห่งอวกาศ',
        titleEn: 'Space Wars Eternal',
        genre: 'scifi',
        description: 'เรื่องราวของกลุ่มนักรบอวกาศที่ต่อสู้เพื่อปกป้องกาแล็กซี่จากการรุกรานของเอเลี่ยน',
        poster: 'https://images.unsplash.com/photo-1534809027769-b00d750a6bac?q=80&w=800&auto=format&fit=crop',
        currentFunding: 12500000,
        goalFunding: 15000000,
        percentage: 83,
        startDate: '2025-01-01',
        endDate: '2025-03-31',
        investors: 1250,
        featured: ['mostInvested', 'popular'],
        status: 'active'
    },
    {
        id: 2,
        titleTh: 'รักแรกพบ ณ เกาะสวรรค์',
        titleEn: 'First Love Paradise',
        genre: 'romance',
        description: 'เรื่องราวความรักโรแมนติกของคู่รักที่พบกันบนเกาะสวยงามแห่งหนึ่งในทะเลอันดามัน',
        poster: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?q=80&w=800&auto=format&fit=crop',
        currentFunding: 8750000,
        goalFunding: 10000000,
        percentage: 87,
        startDate: '2024-12-15',
        endDate: '2025-02-28',
        investors: 980,
        featured: ['popular', 'closingSoon'],
        status: 'active'
    },
    {
        id: 3,
        titleTh: 'ตำนานอสูรกาย',
        titleEn: 'Legend of the Monster',
        genre: 'horror',
        description: 'สยองขวัญไทยที่พาผู้คนไปสัมผัสกับตำนานอันน่ากลัวในหมู่บ้านห่างไกลความเจริญ',
        poster: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=800&auto=format&fit=crop',
        currentFunding: 6200000,
        goalFunding: 8000000,
        percentage: 77,
        startDate: '2024-11-20',
        endDate: '2025-02-15',
        investors: 720,
        featured: ['closingSoon'],
        status: 'active'
    },
    {
        id: 4,
        titleTh: 'การผจญภัยในป่าลึก',
        titleEn: 'Deep Forest Adventure',
        genre: 'adventure',
        description: 'การเดินทางสุดระทึกของกลุ่มนักสำรวจในป่าดงดิบที่ยังไม่มีใครเคยไปถึง',
        poster: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=800&auto=format&fit=crop',
        currentFunding: 5400000,
        goalFunding: 12000000,
        percentage: 45,
        startDate: '2025-02-01',
        endDate: '2025-04-30',
        investors: 456,
        featured: ['openingSoon'],
        status: 'upcoming'
    },
    {
        id: 5,
        titleTh: 'ผู้พิทักษ์เมือง',
        titleEn: 'City Guardian',
        genre: 'action',
        description: 'นักสู้เพื่อความยุติธรรมที่ปกป้องเมืองจากกลุ่มอาชญากรรมระดับนานาชาติ',
        poster: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=800&auto=format&fit=crop',
        currentFunding: 15000000,
        goalFunding: 20000000,
        percentage: 75,
        startDate: '2024-12-01',
        endDate: '2025-03-15',
        investors: 1580,
        featured: ['mostInvested', 'popular'],
        status: 'active'
    },
    {
        id: 6,
        titleTh: 'ขำขันวุ่นรัก',
        titleEn: 'Crazy Love Comedy',
        genre: 'comedy',
        description: 'คอมเมดี้โรแมนติกที่จะทำให้คุณหัวเราะจนน้ำตาไหลกับเรื่องราวความรักสุดฮา',
        poster: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop',
        currentFunding: 3500000,
        goalFunding: 7000000,
        percentage: 50,
        startDate: '2025-01-15',
        endDate: '2025-03-30',
        investors: 890,
        featured: ['new'],
        status: 'active'
    },
    {
        id: 7,
        titleTh: 'อาณาจักรมังกร',
        titleEn: 'Dragon Kingdom',
        genre: 'fantasy',
        description: 'แฟนตาซีผจญภัยในดินแดนเวทมนตร์ที่เต็มไปด้วยมังกรและสิ่งมหัศจรรย์',
        poster: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?q=80&w=800&auto=format&fit=crop',
        currentFunding: 1200000,
        goalFunding: 18000000,
        percentage: 6,
        startDate: '2025-03-01',
        endDate: '2025-05-31',
        investors: 125,
        featured: ['new', 'openingSoon'],
        status: 'upcoming'
    },
    {
        id: 8,
        titleTh: 'คดีปริศนาฆาตกรรม',
        titleEn: 'Murder Mystery Case',
        genre: 'crime',
        description: 'นักสืบสาวคลี่คลายคดีฆาตกรรมที่ซับซ้อนที่สุดในประวัติศาสตร์',
        poster: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop',
        currentFunding: 9800000,
        goalFunding: 11000000,
        percentage: 89,
        startDate: '2024-11-01',
        endDate: '2025-02-10',
        investors: 1120,
        featured: ['mostInvested', 'closingSoon'],
        status: 'active'
    },
    {
        id: 9,
        titleTh: 'ชีวิตจริงของนักดนตรี',
        titleEn: 'Life of a Musician',
        genre: 'documentary',
        description: 'สารคดีติดตามชีวิตของนักดนตรีระดับโลกและการต่อสู้เพื่อความฝัน',
        poster: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop',
        currentFunding: 2500000,
        goalFunding: 5000000,
        percentage: 50,
        startDate: '2025-01-10',
        endDate: '2025-04-10',
        investors: 320,
        featured: ['new'],
        status: 'active'
    },
    {
        id: 10,
        titleTh: 'น้ำตาแห่งความหวัง',
        titleEn: 'Tears of Hope',
        genre: 'drama',
        description: 'ดราม่าสะเทือนใจเกี่ยวกับครอบครัวที่ต้องเผชิญกับความทุกข์ยากและความหวัง',
        poster: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&auto=format&fit=crop',
        currentFunding: 7800000,
        goalFunding: 9000000,
        percentage: 86,
        startDate: '2024-12-10',
        endDate: '2025-03-01',
        investors: 950,
        featured: ['popular', 'closingSoon'],
        status: 'active'
    },
    {
        id: 11,
        titleTh: 'เด็กน้อยผู้กล้าหาญ',
        titleEn: 'Brave Little Hero',
        genre: 'animation',
        description: 'แอนิเมชั่นสุดน่ารักเกี่ยวกับเด็กชายผู้กล้าที่ออกเดินทางช่วยเหลือโลก',
        poster: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop',
        currentFunding: 500000,
        goalFunding: 15000000,
        percentage: 3,
        startDate: '2025-02-15',
        endDate: '2025-05-15',
        investors: 89,
        featured: ['new', 'openingSoon'],
        status: 'upcoming'
    },
    {
        id: 12,
        titleTh: 'ปริศนามรณะ',
        titleEn: 'Deadly Puzzle',
        genre: 'thriller',
        description: 'ระทึกขวัญสุดลุ้นที่จะทำให้คุณต้องติดตามจนจบเรื่อง',
        poster: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop',
        currentFunding: 10500000,
        goalFunding: 13000000,
        percentage: 80,
        startDate: '2024-12-20',
        endDate: '2025-03-20',
        investors: 1340,
        featured: ['mostInvested', 'popular'],
        status: 'active'
    }
];

// Format currency
const formatCurrency = (amount) => {
    return new Intl.NumberFormat('th-TH', {
        style: 'currency',
        currency: 'THB',
        minimumFractionDigits: 0
    }).format(amount);
};

// Format date
const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('th-TH', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    }).format(date);
};

// Calculate days remaining
const getDaysRemaining = (endDate) => {
    const today = new Date();
    const end = new Date(endDate);
    const diffTime = end - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
};

// Movie Card Component
const MovieCard = ({ movie }) => {
    const daysRemaining = getDaysRemaining(movie.endDate);
    const genre = GENRES.find(g => g.id === movie.genre);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/5 hover:border-colestia-purple/30 transition-all duration-300 hover:shadow-2xl hover:shadow-colestia-purple/10"
        >
            {/* Poster */}
            <div className="relative h-[400px] overflow-hidden">
                <img
                    src={movie.poster}
                    alt={movie.titleTh}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />

                {/* Genre Badge */}
                <div className="absolute top-4 left-4">
                    <span className="text-xs font-bold text-white bg-colestia-purple/80 backdrop-blur-md px-3 py-1.5 rounded-full">
                        {genre?.name}
                    </span>
                </div>

                {/* Status Badge */}
                {movie.status === 'upcoming' && (
                    <div className="absolute top-4 right-4">
                        <span className="text-xs font-bold text-white bg-colestia-cyan/80 backdrop-blur-md px-3 py-1.5 rounded-full">
                            เปิดเร็วๆ นี้
                        </span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-2xl font-display font-bold text-white mb-1">
                    {movie.titleTh}
                </h3>
                <p className="text-sm text-gray-400 mb-3">{movie.titleEn}</p>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {movie.description}
                </p>

                {/* Funding Progress */}
                <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-gray-500">ระดมทุนได้</span>
                        <span className="text-xs font-bold text-colestia-cyan">
                            {movie.percentage}%
                        </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative h-3 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${movie.percentage}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="absolute inset-y-0 left-0 bg-gradient-to-r from-colestia-purple via-colestia-magenta to-colestia-cyan rounded-full"
                        />
                    </div>
                </div>

                {/* Funding Amount */}
                <div className="flex justify-between items-center mb-4 pb-4 border-b border-white/5">
                    <div>
                        <p className="text-xs text-gray-500 mb-1">ระดมทุนได้</p>
                        <p className="text-lg font-bold text-white">
                            {formatCurrency(movie.currentFunding)}
                        </p>
                    </div>
                    <div className="text-right">
                        <p className="text-xs text-gray-500 mb-1">เป้าหมาย</p>
                        <p className="text-lg font-bold text-gray-300">
                            {formatCurrency(movie.goalFunding)}
                        </p>
                    </div>
                </div>

                {/* Dates & Investors */}
                <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Calendar size={14} className="text-colestia-cyan" />
                        <span className="text-xs">
                            เริ่ม: {formatDate(movie.startDate)} - สิ้นสุด: {formatDate(movie.endDate)}
                        </span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                            <Users size={14} className="text-colestia-magenta" />
                            <span className="text-xs">{movie.investors.toLocaleString()} นักลงทุน</span>
                        </div>
                        {daysRemaining > 0 && (
                            <span className="text-xs text-colestia-cyan font-medium">
                                เหลือ {daysRemaining} วัน
                            </span>
                        )}
                    </div>
                </div>

                {/* CTA Button */}
                <Link to={`/project/${movie.id}`}>
                    <Button variant="primary" className="w-full">
                        {movie.status === 'upcoming' ? 'ดูรายละเอียด' : 'ลงทุนเลย'}
                    </Button>
                </Link>
            </div>
        </motion.div>
    );
};

// Featured Section Component
const FeaturedSection = ({ title, movies, icon: Icon }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showAll, setShowAll] = useState(false);
    const scrollRef = React.useRef(null);

    if (movies.length === 0) return null;

    // Number of items visible at once (responsive)
    const itemsPerView = 3;
    const maxIndex = Math.max(0, movies.length - itemsPerView);

    const scrollToIndex = (index) => {
        if (scrollRef.current) {
            const itemWidth = scrollRef.current.scrollWidth / movies.length;
            scrollRef.current.scrollTo({
                left: itemWidth * index,
                behavior: 'smooth'
            });
        }
        setCurrentIndex(index);
    };

    const handlePrev = () => {
        const newIndex = Math.max(0, currentIndex - 1);
        scrollToIndex(newIndex);
    };

    const handleNext = () => {
        const newIndex = Math.min(maxIndex, currentIndex + 1);
        scrollToIndex(newIndex);
    };

    return (
        <div className="mb-16">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    {Icon && <Icon className="text-colestia-cyan" size={24} />}
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
                        {title}
                    </h2>
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={handlePrev}
                        disabled={currentIndex === 0}
                        className={`p-2 rounded-lg border transition-all ${currentIndex === 0
                            ? 'border-white/10 text-gray-600 cursor-not-allowed'
                            : 'border-colestia-purple/30 text-colestia-cyan hover:bg-colestia-purple/10 hover:border-colestia-purple'
                            }`}
                        aria-label="Previous"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>

                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="px-4 py-2 text-sm font-medium text-colestia-cyan hover:text-white border border-colestia-purple/30 rounded-lg hover:bg-colestia-purple/10 transition-all"
                    >
                        {showAll ? 'แสดงน้อยลง' : 'แสดงเพิ่มเติม'}
                    </button>

                    <button
                        onClick={handleNext}
                        disabled={currentIndex >= maxIndex}
                        className={`p-2 rounded-lg border transition-all ${currentIndex >= maxIndex
                            ? 'border-white/10 text-gray-600 cursor-not-allowed'
                            : 'border-colestia-purple/30 text-colestia-cyan hover:bg-colestia-purple/10 hover:border-colestia-purple'
                            }`}
                        aria-label="Next"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>
            </div>

            <div className="relative">
                {showAll ? (
                    // Show all movies in grid
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {movies.map((movie) => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))}
                    </div>
                ) : (
                    // Show carousel with smooth scrolling
                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-hidden scroll-smooth scrollbar-hide"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {movies.map((movie) => (
                            <div key={movie.id} className="min-w-[320px] md:min-w-[380px] flex-shrink-0">
                                <MovieCard movie={movie} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

const Products = () => {
    const [selectedGenre, setSelectedGenre] = useState('all');

    // Filter movies by genre
    const filteredMovies = useMemo(() => {
        if (selectedGenre === 'all') return movies;
        return movies.filter(movie => movie.genre === selectedGenre);
    }, [selectedGenre]);

    // Featured sections
    const mostInvestedMovies = useMemo(() =>
        movies.filter(m => m.featured.includes('mostInvested')).sort((a, b) => b.investors - a.investors),
        []
    );

    const popularMovies = useMemo(() =>
        movies.filter(m => m.featured.includes('popular')),
        []
    );

    const openingSoonMovies = useMemo(() =>
        movies.filter(m => m.featured.includes('openingSoon')),
        []
    );

    const newMovies = useMemo(() =>
        movies.filter(m => m.featured.includes('new')),
        []
    );

    const closingSoonMovies = useMemo(() =>
        movies.filter(m => m.featured.includes('closingSoon')),
        []
    );

    return (
        <div className="pt-28 pb-20 min-h-screen">
            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12 text-center"
                >
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                        ระดมทุน<span className="text-gradient-main">โครงการหนัง</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-4">
                        ร่วมเป็นส่วนหนึ่งในการสร้างสรรค์ผลงานภาพยนตร์คุณภาพ
                    </p>
                    <span className="text-colestia-magenta text-sm border border-colestia-magenta/30 px-3 py-1.5 rounded-full inline-block">
                        แพลตฟอร์มระดมทุนภาพยนตร์
                    </span>
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

                {/* Featured Sections - Only show when no filter is applied */}
                {selectedGenre === 'all' && (
                    <>
                        <FeaturedSection
                            title="🔥 หนังที่คนลงทุนมากที่สุด"
                            movies={mostInvestedMovies}
                            icon={TrendingUp}
                        />

                        <FeaturedSection
                            title="⭐ หนังที่สนใจ"
                            movies={popularMovies}
                        />

                        <FeaturedSection
                            title="🎬 หนังที่กำลังจะเปิดระดมทุน"
                            movies={openingSoonMovies}
                        />

                        <FeaturedSection
                            title="🆕 หนังที่มาใหม่"
                            movies={newMovies}
                        />

                        <FeaturedSection
                            title="⏰ หนังที่กำลังจะปิดระดมทุน"
                            movies={closingSoonMovies}
                        />
                    </>
                )}

                {/* All Movies Grid (filtered) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
                        {selectedGenre === 'all' ? 'โครงการทั้งหมด' : `โครงการหมวด${GENRES.find(g => g.id === selectedGenre)?.name}`}
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredMovies.map((movie) => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))}
                    </div>

                    {filteredMovies.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-gray-500">ไม่พบโครงการในหมวดนี้</p>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default Products;
