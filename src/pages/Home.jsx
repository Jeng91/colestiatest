import React from 'react';
import { motion } from 'framer-motion';
import VideoBackground from '../components/VideoBackground';
import Button from '../components/Button';
import { ArrowRight, Globe, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

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
                        <div className="inline-block bg-white/10 backdrop-blur-md rounded-full px-4 py-1.5 mb-6 border border-white/20">
                            <span className="text-colestia-magenta text-sm tracking-wider uppercase font-bold">The Future of Investment</span>
                        </div>

                        <h1 className="text-5xl md:text-8xl font-display font-bold text-white mb-6 leading-tight">
                            Cinematic <span className="text-gradient-main">Futures</span>
                        </h1>

                        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                            Velcurve blends world-class production with blockchain innovation.
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

            {/* 2. "We Are Velcurve" / About Section */}
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
                                WE ARE <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">VELCURVE</span>
                            </h2>
                            <p className="text-gray-400 leading-loose mb-6">
                                Velcurve is a media production company that spans films, dramas, series, TV commercials, OTT, and advertising.
                                We have successfully expanded into technology, delivering quality work and recording live audience experiences.
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

            {/* 3. Ecosystem Flow Diagram (Visualizing the Brief) */}
            <section className="py-24 bg-[#050505]">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-display font-bold text-white mb-16">The Ecosystem Flow</h2>

                    <div className="grid md:grid-cols-3 gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-colestia-purple/30 to-transparent -translate-y-1/2 z-0" />

                        {/* Step 1 */}
                        <div className="relative z-10 bg-colestia-card p-8 rounded-2xl border border-white/5 mx-auto max-w-xs">
                            <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-400">
                                <Globe size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">External Media</h3>
                            <p className="text-sm text-gray-400">User discovers project through trusted media channels.</p>
                        </div>

                        {/* Step 2 (Colestia) */}
                        <div className="relative z-10 bg-colestia-card p-8 rounded-2xl border border-colestia-purple/30 shadow-[0_0_30px_rgba(122,30,166,0.1)] mx-auto max-w-xs">
                            <div className="w-16 h-16 bg-colestia-purple/10 rounded-full flex items-center justify-center mx-auto mb-6 text-colestia-purple">
                                <Shield size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Colestia Portal</h3>
                            <p className="text-sm text-gray-400">In-depth education, project showcase, and risk analysis.</p>
                        </div>

                        {/* Step 3 */}
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

            {/* 4. Directors Section */}
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

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Director 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="group relative bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/5 hover:border-colestia-purple/30 transition-all duration-500"
                        >
                            <div className="h-72 overflow-hidden relative">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                                    alt="Director 1"
                                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-colestia-purple transition-colors">
                                    Thanet Chaisiri
                                </h3>
                                <p className="text-colestia-magenta text-sm font-medium mb-3">Executive Director</p>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Award-winning filmmaker with over 20 years of experience in the Thai entertainment industry. Pioneer in integrating blockchain technology with media production.
                                </p>
                            </div>
                        </motion.div>

                        {/* Director 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="group relative bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/5 hover:border-colestia-purple/30 transition-all duration-500"
                        >
                            <div className="h-72 overflow-hidden relative">
                                <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
                                    alt="Director 2"
                                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-colestia-purple transition-colors">
                                    Pimchanok Lertpong
                                </h3>
                                <p className="text-colestia-magenta text-sm font-medium mb-3">Creative Director</p>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Renowned for her distinctive visual storytelling style. Led creative direction for multiple international co-productions and streaming originals.
                                </p>
                            </div>
                        </motion.div>

                        {/* Director 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="group relative bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/5 hover:border-colestia-purple/30 transition-all duration-500"
                        >
                            <div className="h-72 overflow-hidden relative">
                                <img
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop"
                                    alt="Director 3"
                                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-colestia-purple transition-colors">
                                    Weerachai Tanaka
                                </h3>
                                <p className="text-colestia-magenta text-sm font-medium mb-3">Technical Director</p>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Former tech executive with expertise in digital transformation. Bridges the gap between traditional media and emerging Web3 technologies.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <Link to="/team">
                            <Button variant="outline">
                                View Full Team <ArrowRight size={18} />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
