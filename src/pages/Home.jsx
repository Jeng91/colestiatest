import React, { useState } from 'react';
import { motion } from 'framer-motion';
import VideoBackground from '../components/VideoBackground';
import Button from '../components/Button';
import { ArrowRight, ArrowLeft, Globe, Shield, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Partner logos
import logoFlips from '../assets/partners/flips.png';
import logoFraction from '../assets/partners/fraction.jpg';
import logoCulture from '../assets/partners/culture.png';
import logoDIP from '../assets/partners/dip.png';
import logoMSU from '../assets/partners/msu.png';
import logoSEC from '../assets/partners/sec.png';

const Home = () => {
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


                        <h1 className="!text-50xl md:text-8xl font-display font-bold text-white mb-6 leading-tight">
                            COLESTIA
                        </h1>
                        <h2 className="!text-50xl md:text-8xl font-display font-bold text-white mb-6 leading-tight">
                            <span className="text-gradient-main">Dream Crafted.</span>
                        </h2>

                        <p
                            className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
                            style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 5)' }}
                        >
                            Crafting stories. Empowering creators. Elevating investors.
                            <br /><span className="text-white/60 text-sm">Invest in the stories that shape tomorrow.</span>
                        </p>

                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <Link to="/products">
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

            {/* 2. "We Are Colestia" / About Section */}
            <section className="py-24 bg-colestia-bg relative">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                                WE ARE <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">COLESTIA</span>
                            </h2>
                            <p className="text-gray-400 leading-loose mb-6">
                                "Power Up! ปลุกพลังสร้างสรรค์หนังไทยกับ Colestia"
                            </p>
                            <Button variant="ghost" className="pl-0 text-white group">
                                Read Our Story <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </motion.div>
                        <div className="relative h-[400px] rounded-2xl overflow-hidden glass-panel">
                            {/* Placeholder for About Image */}
                            <img
                                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
                                alt="Velcurve Studio"
                                className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700"
                            />
                        </div>
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
            {/* 4. Directors Section - Spotlight Style */}
            <section className="py-24 bg-gradient-to-b from-[#0a0510] via-[#0f0818] to-[#0a0510]">
                <div className="container mx-auto px-6">
                    {/* Director Spotlight */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="grid lg:grid-cols-12 gap-8 items-center">
                            {/* Left - Director Photo */}
                            <div className="lg:col-span-4">
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="relative"
                                >
                                    <div className="relative rounded-2xl overflow-hidden">
                                        <img
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop"
                                            alt="Director"
                                            className="w-full aspect-[3/4] object-cover"
                                        />
                                        {/* Gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0f0818]/80" />
                                    </div>
                                </motion.div>
                            </div>

                            {/* Center - Name & Quote */}
                            <div className="lg:col-span-5 text-center lg:text-left">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-3">
                                        ปรัชญา ปิ่นแก้ว
                                    </h2>
                                    <p className="text-colestia-magenta text-lg mb-8">
                                        ผู้กำกับภาพยนตร์ องค์บาก ต้มยำกุ้ง และอีกมากมาย
                                    </p>

                                    {/* Quote */}
                                    <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed">
                                        <p>
                                            เราเชื่อว่าศักยภาพของวงการหนังไทยจะเติบโตได้ หากผู้สร้างมีโอกาสเข้าถึง
                                            เงินทุนที่ยุติธรรม และผู้สนับสนุนมีพื้นที่ในการร่วมผลักดันผลงานที่ตนเชื่อมั่น
                                        </p>
                                        <p>
                                            เราจึงสร้างระบบที่เชื่อม ผู้สร้าง ผู้ลงทุน และแฟนผู้สนับสนุน เข้าไว้ด้วยกัน
                                            เพื่อสร้างพื้นที่ที่ทุกคนมีส่วนในการขับเคลื่อนอนาคตของภาพยนตร์ไทย
                                        </p>
                                    </div>


                                </motion.div>
                            </div>

                            {/* Right - Movie Poster 
                            <div className="lg:col-span-3 hidden lg:block">
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    className="relative"
                                >
                                    <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-colestia-purple/20">
                                        <img
                                            src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=600&auto=format&fit=crop"
                                            alt="Movie Poster"
                                            className="w-full aspect-[2/3] object-cover"
                                        />
                                        {/* Glow effect 
                                        <div className="absolute inset-0 bg-gradient-to-t from-colestia-purple/30 to-transparent" />
                                    </div>
                                    {/* Decorative glow 
                                    <div className="absolute -inset-4 bg-colestia-purple/10 blur-3xl -z-10 rounded-full" />
                                </motion.div>
                            </div>*/}
                        </div>

                        <div className="grid lg:grid-cols-12 gap-8 items-center">
                            {/* Left - Director Photo */}
                            <div className="lg:col-span-4">
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="relative"
                                >
                                    <div className="relative rounded-2xl overflow-hidden">
                                        <img
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop"
                                            alt="Director"
                                            className="w-full aspect-[3/4] object-cover"
                                        />
                                        {/* Gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0f0818]/80" />
                                    </div>
                                </motion.div>
                            </div>

                            {/* Center - Name & Quote */}
                            <div className="lg:col-span-5 text-center lg:text-left">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-3">
                                        ปรัชญา ปิ่นแก้ว
                                    </h2>
                                    <p className="text-colestia-magenta text-lg mb-8">
                                        ผู้กำกับภาพยนตร์ องค์บาก ต้มยำกุ้ง และอีกมากมาย
                                    </p>

                                    {/* Quote */}
                                    <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed">
                                        <p>
                                            เราเชื่อว่าศักยภาพของวงการหนังไทยจะเติบโตได้ หากผู้สร้างมีโอกาสเข้าถึง
                                            เงินทุนที่ยุติธรรม และผู้สนับสนุนมีพื้นที่ในการร่วมผลักดันผลงานที่ตนเชื่อมั่น
                                        </p>
                                        <p>
                                            เราจึงสร้างระบบที่เชื่อม ผู้สร้าง ผู้ลงทุน และแฟนผู้สนับสนุน เข้าไว้ด้วยกัน
                                            เพื่อสร้างพื้นที่ที่ทุกคนมีส่วนในการขับเคลื่อนอนาคตของภาพยนตร์ไทย
                                        </p>
                                    </div>


                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* View All Directors Button */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex justify-center mt-16"
                    >
                        <Link to="/team">
                            <Button variant="outline">
                                View Full Directors <ArrowRight size={18} />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* 5. Partners Section */}
            <section className="py-24 bg-[#050505]">
                <div className="container mx-auto px-6">
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
                            “Partners shaping the future of the media and blockchain technology industries.”
                        </p>
                    </motion.div>

                    {/* Partner Grid - 3 columns, 2 rows */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* Partner 1: ก.ล.ต. */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="group"
                        >
                            <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_rgba(122,30,166,0.3)] transition-all duration-500 hover:-translate-y-2 h-48 flex items-center justify-center">
                                <img
                                    src={logoSEC}
                                    alt="ก.ล.ต."
                                    className="max-h-28 max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </motion.div>

                        {/* Partner 2: กระทรวงวัฒนธรรม */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15 }}
                            className="group"
                        >
                            <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_rgba(122,30,166,0.3)] transition-all duration-500 hover:-translate-y-2 h-48 flex items-center justify-center">
                                <img
                                    src={logoCulture}
                                    alt="กระทรวงวัฒนธรรม"
                                    className="max-h-28 max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </motion.div>

                        {/* Partner 3: กรมทรัพย์สินทางปัญญา */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="group"
                        >
                            <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_rgba(122,30,166,0.3)] transition-all duration-500 hover:-translate-y-2 h-48 flex items-center justify-center">
                                <img
                                    src={logoDIP}
                                    alt="กรมทรัพย์สินทางปัญญา"
                                    className="max-h-28 max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </motion.div>

                        {/* Partner 4: มหาวิทยาลัยมหาสารคาม */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.25 }}
                            className="group"
                        >
                            <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_rgba(122,30,166,0.3)] transition-all duration-500 hover:-translate-y-2 h-48 flex items-center justify-center">
                                <img
                                    src={logoMSU}
                                    alt="มหาวิทยาลัยมหาสารคาม"
                                    className="max-h-28 max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </motion.div>

                        {/* Partner 5: Fraction */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="group"
                        >
                            <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_rgba(122,30,166,0.3)] transition-all duration-500 hover:-translate-y-2 h-48 flex items-center justify-center">
                                <img
                                    src={logoFraction}
                                    alt="Fraction"
                                    className="max-h-28 max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </motion.div>

                        {/* Partner 6: Flips Innovative */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.35 }}
                            className="group"
                        >
                            <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_rgba(122,30,166,0.3)] transition-all duration-500 hover:-translate-y-2 h-48 flex items-center justify-center">
                                <img
                                    src={logoFlips}
                                    alt="Flips Innovative"
                                    className="max-h-28 max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;

