import React, { useState } from 'react';
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
                            className="text-xl text-white mb-10 max-w-2xl mx-auto font-light leading-relaxed"
                            style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 5)' }}
                        >
                            Crafting stories. Empowering creators. Elevating investors.
                            <br /><span className="text-white/80 text-sm">Invest in the stories that shape tomorrow.</span>
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

                                <br /><span className="text-white/90 text-xl font-display font-bold ">"Power Up! ปลุกพลังสร้างสรรค์หนังไทยกับ Colestia"</span>
                            </h2>
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
            {/* 4. Directors Section - Hover Expand */}
            <section className="py-24 bg-colestia-bg">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                            Our <span className="text-gradient-main">Directors</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Visionary leaders driving innovation in film and blockchain technology.
                        </p>
                    </motion.div>

                    {/* Directors - Expandable Cards */}
                    <div className="space-y-6 max-w-5xl mx-auto">
                        {/* Director 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="group"
                        >
                            {/* Before State - Compact Card */}
                            <div className="relative bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/10 group-hover:border-colestia-purple/50 transition-all duration-500 group-hover:shadow-[0_20px_60px_rgba(122,30,166,0.3)]">
                                <div className="flex flex-col md:flex-row">
                                    {/* Photo Section */}
                                    <div className="relative w-full md:w-80 h-80 md:h-96 flex-shrink-0 overflow-hidden">
                                        <img
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop"
                                            alt="Weerachai Tanaka"
                                            className="w-full h-full object-cover object-top transition-all duration-700"
                                        />
                                    </div>

                                    {/* Info Section */}
                                    <div className="flex-1 p-8 flex flex-col justify-center">
                                        <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2 group-hover:text-colestia-purple transition-colors">
                                            Director 1
                                        </h3>
                                        <p className="text-colestia-magenta text-base font-medium mb-4">Director</p>

                                        {/* Description - Visible on hover */}
                                        <div className="overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-40 opacity-0 group-hover:opacity-100">
                                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                                Description - Award-winning filmmaker with over 20 years of experience in the Thai entertainment industry. Pioneer in integrating blockchain technology with media production.
                                            </p>
                                        </div>

                                        {/* Static short desc */}
                                        <p className="text-gray-500 text-sm group-hover:hidden">Short Description</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Director 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="group"
                        >
                            <div className="relative bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/10 group-hover:border-colestia-purple/50 transition-all duration-500 group-hover:shadow-[0_20px_60px_rgba(122,30,166,0.3)]">
                                <div className="flex flex-col md:flex-row">
                                    <div className="relative w-full md:w-80 h-80 md:h-96 flex-shrink-0 overflow-hidden">
                                        <img
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop"
                                            alt="Weerachai Tanaka"
                                            className="w-full h-full object-cover object-top transition-all duration-700"
                                        />
                                    </div>
                                    <div className="flex-1 p-8 flex flex-col justify-center">
                                        <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2 group-hover:text-colestia-purple transition-colors">
                                            Director 2
                                        </h3>
                                        <p className="text-colestia-magenta text-base font-medium mb-4">Director</p>
                                        <div className="overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-40 opacity-0 group-hover:opacity-100">
                                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                                Description - Renowned for her distinctive visual storytelling style. Led creative direction for multiple international co-productions and streaming originals.
                                            </p>
                                        </div>
                                        <p className="text-gray-500 text-sm group-hover:hidden">Short Description</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Director 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="group"
                        >
                            <div className="relative bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/10 group-hover:border-colestia-purple/50 transition-all duration-500 group-hover:shadow-[0_20px_60px_rgba(122,30,166,0.3)]">
                                <div className="flex flex-col md:flex-row">
                                    <div className="relative w-full md:w-80 h-80 md:h-96 flex-shrink-0 overflow-hidden">
                                        <img
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop"
                                            alt="Weerachai Tanaka"
                                            className="w-full h-full object-cover object-top transition-all duration-700"
                                        />
                                    </div>
                                    <div className="flex-1 p-8 flex flex-col justify-center">
                                        <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2 group-hover:text-colestia-purple transition-colors">
                                            Director 3
                                        </h3>
                                        <p className="text-colestia-magenta text-base font-medium mb-4">Director</p>
                                        <div className="overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-40 opacity-0 group-hover:opacity-100">
                                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                                Description - Former tech executive with expertise in digital transformation. Bridges the gap between traditional media and emerging Web3 technologies.
                                            </p>
                                        </div>
                                        <p className="text-gray-500 text-sm group-hover:hidden">Short Description</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>


                        {/* Director 4 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="group"
                        >
                            <div className="relative bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/10 group-hover:border-colestia-purple/50 transition-all duration-500 group-hover:shadow-[0_20px_60px_rgba(122,30,166,0.3)]">
                                <div className="flex flex-col md:flex-row">
                                    <div className="relative w-full md:w-80 h-80 md:h-96 flex-shrink-0 overflow-hidden">
                                        <img
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop"
                                            alt="Weerachai Tanaka"
                                            className="w-full h-full object-cover object-top transition-all duration-700"
                                        />
                                    </div>
                                    <div className="flex-1 p-8 flex flex-col justify-center">
                                        <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2 group-hover:text-colestia-purple transition-colors">
                                            Director 4
                                        </h3>
                                        <p className="text-colestia-magenta text-base font-medium mb-4">Director</p>
                                        <div className="overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-40 opacity-0 group-hover:opacity-100">
                                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                                Description - Former tech executive with expertise in digital transformation. Bridges the gap between traditional media and emerging Web3 technologies.
                                            </p>
                                        </div>
                                        <p className="text-gray-500 text-sm group-hover:hidden">Short Description</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* View Full Directors Button 
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex justify-center mt-12"
                    >
                        <Link to="/team">
                            <Button variant="outline">
                                View Full Directors <ArrowRight size={18} />
                            </Button>
                        </Link>
                    </motion.div>*/}
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
                                    className="max-h-40 max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
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
                                    className="max-h-40 max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
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
                                    className="max-h-40 max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
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
                                    className="max-h-40 max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
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
                                    className="max-h-40 max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
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
                                    className="max-h-40 max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
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

