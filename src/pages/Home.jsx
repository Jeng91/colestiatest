import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import VideoBackground from '../components/VideoBackground';
import Button from '../components/Button';
import { ArrowRight, ArrowLeft, Globe, Shield, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { teamMembers } from '../data/teamData';

// Partner logos
import logoFlips from '../assets/partners/flips.png';
import logoFraction from '../assets/partners/fraction.jpg';
import logoCulture from '../assets/partners/culture.png';
import logoDIP from '../assets/partners/dip.png';
import logoMSU from '../assets/partners/msu.png';
import logoSEC from '../assets/partners/sec.png';

// Director images
import director1 from '../assets/director/1.ปรัชญา ปิ่นแก้ว.png';
import director2 from '../assets/director/2.พันธุ์ธัมม์ ทองสังข์.png';
import director3 from '../assets/director/3.บัณฑิต ทองดี - Director-Photoroom.png';
import director4 from '../assets/director/4.ศิวาภรณ์ พงษ์สุวรรณ.png';
import director5 from '../assets/director/5.ราเชนทร์ ลิ้มตระกูล-Director.png';
import director6 from '../assets/director/6.ศุภรัฐ บุญมาแย้ม.png';
import director7 from '../assets/director/7.รัฐพงศ์ ภิญโญโสภณ-Sceenwriter.png';

const Home = () => {
    const directorsScrollRef = useRef(null);

    // Directors data array
    const directors = [
        { img: director1, name: 'ปรัชญา ปิ่นแก้ว', role: 'Director / Producer', }, //engName: 'Prachya Pinkaew' },
        { img: director2, name: 'พันธุ์ธัมม์ ทองสังข์', role: 'Director / Producer', }, //engName: 'Phantham Thongsang' },
        { img: director3, name: 'บัณฑิต ทองดี', role: 'Director', }, //engName: 'Bundit Thongdee' },
        { img: director4, name: 'ศิวาภรณ์ พงษ์สุวรรณ', role: 'Sceenwriter / Producer', }, //engName: 'Siwaporn Pongsuwon' },
        { img: director5, name: 'ราเชนทร์ ลิ้มตระกูล', role: 'Director', }, //engName: 'Rachane Limtrakul' },
        { img: director6, name: 'ศุภรัฐ บุญมาแย้ม', role: 'Director / Sceenwriter', }, //engName: 'Suparat Bunmayam' },
        { img: director7, name: 'รัฐพงศ์ ภิญโญโสภณ', role: 'Sceenwriter', } //engName: 'Rattapong Pinyosophon' }
    ];

    const scrollDirectors = (direction) => {
        if (directorsScrollRef.current) {
            const scrollAmount = 400;
            directorsScrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="w-full">
            {/* 1. Hero Section "Dream Crafted" */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <VideoBackground />

                <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >


                        <h1 className="text-5xl md:text-8xl font-display font-bold text-white mb-6 leading-tight">
                            COLESTIA
                        </h1>
                        <h2 className="text-5xl md:text-8xl font-display font-bold text-white mb-6 leading-tight">
                            <span className="text-gradient-main">Dream Crafted.</span>
                        </h2>

                        <p
                            className="text-xl text-white mb-10 max-w-2xl mx-auto font-light leading-relaxed"
                            style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 5)' }}
                        >
                            Crafting stories. Empowering creators.

                            <br /><span className="text-white/100 text-md">Crafting the Next Chapter, Together.</span>
                        </p>

                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <Link to="/about">
                                <Button variant="primary" className="w-full md:w-auto">
                                    Explore Ecosystem <ArrowRight size={18} />
                                </Button>
                            </Link>
                            <Link to="/education">
                                <Button variant="outline" className="w-full md:w-auto">
                                    Investor Education
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
                >
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
                        <div className="w-1 h-2 bg-white rounded-full" />
                    </div>
                </motion.div>
            </section>

            {/* 2. "We Are Colestia" / About Section - Section 1 */}
            <section className="py-2 bg-colestia-bg relative">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        {/* Text Left */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
                                WE ARE <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">COLESTIA</span>
                            </h2>

                            <div className="border-l-4 border-colestia-purple pl-6 space-y-4">
                                <h2 className="text-white text-xl font-bold leading-relaxed">
                                    <strong>colestia</strong> คือพื้นที่ของคนรุ่นใหม่ที่เชื่อในพลังของภาพยนตร์ไทย
                                </h2>
                                <p className="text-white/90 text-base leading-relaxed indent-8">
                                    เราเชื่อว่าภาพยนตร์ที่ดีไม่ควรถูกสร้างขึ้นโดยคนเพียงไม่กี่คน แต่ควรเติบโตจากแรงร่วมใจของทุกคนที่รักในสิ่งเดียวกัน ที่นี่ผู้สร้างไม่ต้องแบกความฝันไว้เพียงลำพัง และผู้ชมไม่ถูกจำกัดให้เป็นแค่ผู้รับชม
                                </p>
                            </div>
                        </motion.div>

                        {/* Image Right */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[400px] rounded-2xl overflow-hidden glass-panel"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
                                alt="Colestia Vision"
                                className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. "We Are Colestia" / About Section - Section 2 */}
            <section className="py-2 bg-colestia-bg relative">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        {/* Image Left */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[400px] rounded-2xl overflow-hidden glass-panel"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2070&auto=format&fit=crop"
                                alt="Creative Collaboration"
                                className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700"
                            />
                        </motion.div>

                        {/* Text Right */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="border-l-4 border-colestia-purple pl-6 space-y-4">
                                <h2 className="text-white text-xl font-bold leading-relaxed">
                                    <strong>ทุกไอเดียควรมีที่ยืน ทุกคนที่รักภาพยนตร์ควรมีโอกาสเป็นส่วนหนึ่งของการสร้างสรรค์</strong>
                                </h2>
                                <p className="text-white/90 text-base leading-relaxed indent-8">
                                    <strong>colestia</strong> จึงเป็นจุดเชื่อมระหว่างผู้สร้างสรรค์และคนรักภาพยนตร์ไทย พื้นที่ที่เปิดโอกาสให้ไอเดียได้เกิดขึ้นจริง ให้คนรุ่นใหม่ได้ลอง ได้เติบโต และได้เห็นผลงานของตัวเองก้าวไปไกลกว่าที่เคย เราเปลี่ยนการรับชมให้กลายเป็นการมีส่วนร่วม และร่วมกันผลักดันภาพยนตร์ไทยให้เดินหน้าอย่างที่ควรจะเป็น
                                </p>
                                <br />
                                <p className="text-white/90 text-base leading-relaxed indent-8">
                                    นี่ไม่ใช่แค่แพลตฟอร์ม แต่คือจุดเริ่มต้นของบทใหม่ของภาพยนตร์ไทย บทที่เราทุกคนกำลังเขียนไปพร้อมกัน
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. Ecosystem Flow Diagram (Visualizing the Brief) 
            <section className="py-24 bg-[#050505]">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-display font-bold text-white mb-16">The Ecosystem Flow</h2>

                    <div className="grid md:grid-cols-3 gap-8 relative">
                        {/* Connecting Line (Desktop) 
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-colestia-purple/30 to-transparent -translate-y-1/2 z-0" />

                        {/* Step 1 
                        <div className="relative z-10 bg-colestia-card p-8 rounded-2xl border border-white/5 mx-auto max-w-xs">
                            <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-400">
                                <Globe size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">External Media</h3>
                            <p className="text-sm text-gray-400">User discovers project through trusted media channels.</p>
                        </div>

                        {/* Step 2 (Colestia) 
                        <div className="relative z-10 bg-colestia-card p-8 rounded-2xl border border-colestia-purple/30 shadow-[0_0_30px_rgba(122,30,166,0.1)] mx-auto max-w-xs">
                            <div className="w-16 h-16 bg-colestia-purple/10 rounded-full flex items-center justify-center mx-auto mb-6 text-colestia-purple">
                                <Shield size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Colestia Portal</h3>
                            <p className="text-sm text-gray-400">In-depth education, project showcase, and risk analysis.</p>
                        </div>

                        {/* Step 3 
                        <div className="relative z-10 bg-colestia-card p-8 rounded-2xl border border-white/5 mx-auto max-w-xs">
                            <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-400">
                                <Zap size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">ICO Portals</h3>
                            <p className="text-sm text-gray-400">Licensed 3rd party portals (TH / InvestaX) handling the sale.</p>
                        </div>
                    </div>
                </div>
            </section> 
*/}
            {/* 4. Directors Section - Horizontal Carousel */}
            <section className="py-24 bg-colestia-bg overflow-hidden">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                            Our <span className="text-gradient-main">Creators</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Visionary leaders driving innovation in film and blockchain technology.
                        </p>
                    </motion.div>

                    {/* Carousel Container */}
                    <div className="relative">
                        {/* Left Arrow */}
                        <button
                            onClick={() => scrollDirectors('left')}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-colestia-purple/20 hover:bg-colestia-purple/40 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hidden md:block"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        {/* Scrollable Directors Container */}
                        <div
                            ref={directorsScrollRef}
                            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-4 md:px-12"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {directors.map((director, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group flex-shrink-0 w-[280px] md:w-[350px]"
                                >
                                    <div className="relative bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/10 group-hover:border-colestia-purple/50 transition-all duration-500 group-hover:shadow-[0_20px_60px_rgba(122,30,166,0.3)] h-full">
                                        <div className="flex flex-col h-full">
                                            {/* Photo Section - Larger */}
                                            <div className="relative w-full h-[380px] md:h-[450px] flex-shrink-0 overflow-hidden">
                                                <img
                                                    src={director.img}
                                                    alt={director.name}
                                                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700"
                                                />
                                                {/* Gradient Overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            </div>

                                            {/* Info Section */}
                                            <div className="flex-1 p-6 flex flex-col">
                                                <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-colestia-purple transition-colors">
                                                    {director.name}
                                                </h3>
                                                <p className="text-colestia-magenta text-sm font-medium mb-3">{director.role}</p>
                                                <p className="text-gray-500 text-xs">{director.engName}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Right Arrow */}
                        <button
                            onClick={() => scrollDirectors('right')}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-colestia-purple/20 hover:bg-colestia-purple/40 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hidden md:block"
                            aria-label="Scroll right"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    {/* Scroll Hint for Mobile */}
                    <p className="text-center text-gray-500 text-sm mt-8 md:hidden">
                        Swipe to see more
                    </p>
                </div>
            </section>



            {/* 5. Partners Section */}
            <section className="py-24 bg-[#050505]">
                <div className="mx-auto px-6 md:px-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                            Our <span className="text-gradient-main">Partners</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            "Partners shaping the future of the media and blockchain technology industries."
                        </p>
                    </motion.div>

                    {/* Partner Grid - 5 columns in a single row */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">

                        {/* Partner 1: กระทรวงวัฒนธรรม */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="group"
                        >
                            <div className="bg-white rounded-2xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_rgba(122,30,166,0.3)] transition-all duration-500 hover:-translate-y-2 h-40 md:h-48 flex items-center justify-center">
                                <img
                                    src={logoCulture}
                                    alt="กระทรวงวัฒนธรรม"
                                    className="max-h-32 md:max-h-40 max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </motion.div>

                        {/* Partner 2: กรมทรัพย์สินทางปัญญา */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15 }}
                            className="group"
                        >
                            <div className="bg-white rounded-2xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_rgba(122,30,166,0.3)] transition-all duration-500 hover:-translate-y-2 h-40 md:h-48 flex items-center justify-center">
                                <img
                                    src={logoDIP}
                                    alt="กรมทรัพย์สินทางปัญญา"
                                    className="max-h-32 md:max-h-40 max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </motion.div>

                        {/* Partner 3: Flips Innovative */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="group"
                        >
                            <div className="bg-white rounded-2xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_rgba(122,30,166,0.3)] transition-all duration-500 hover:-translate-y-2 h-40 md:h-48 flex items-center justify-center">
                                <img
                                    src={logoFlips}
                                    alt="Flips Innovative"
                                    className="max-h-32 md:max-h-40 max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </motion.div>

                        {/* Partner 4: Fraction */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.25 }}
                            className="group"
                        >
                            <div className="bg-white rounded-2xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_rgba(122,30,166,0.3)] transition-all duration-500 hover:-translate-y-2 h-40 md:h-48 flex items-center justify-center">
                                <img
                                    src={logoFraction}
                                    alt="Fraction"
                                    className="max-h-32 md:max-h-40 max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </motion.div>



                        {/* Partner 5: มหาวิทยาลัยมหาสารคาม */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="group"
                        >
                            <div className="bg-white rounded-2xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_rgba(122,30,166,0.3)] transition-all duration-500 hover:-translate-y-2 h-40 md:h-48 flex items-center justify-center">
                                <img
                                    src={logoMSU}
                                    alt="มหาวิทยาลัยมหาสารคาม"
                                    className="max-h-32 md:max-h-40 max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 5. Our Team Section */}
            <section className="py-24 bg-gradient-to-b from-colestia-bg to-[#050505]">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                            Our <span className="text-gradient-main">Team</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            “The leadership team propelling Colestia toward the future of the Thai film industry.”
                        </p>
                    </motion.div>

                    {/* Team Grid - Dynamic from shared data */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group text-center"
                            >
                                <div className="relative mb-6 overflow-hidden rounded-2xl aspect-[3/4]">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                                <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-colestia-purple transition-colors">
                                    {member.name}
                                </h3>
                                <p className="text-colestia-magenta text-sm">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>


                </div>
            </section>
        </div>
    );
};

export default Home;

