import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import VideoBackground from '../components/VideoBackground';
import Button from '../components/Button';
import { ArrowRight, ArrowLeft, Globe, Shield, Zap, ChevronLeft, ChevronRight, X } from 'lucide-react';
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
    const [selectedDirector, setSelectedDirector] = useState(null);

    // Directors data array with full biographical information
    const directors = [
        {
            img: director1,
            name: 'ปรัชญา ปิ่นแก้ว',
            role: 'Director / Producer',
            bio: 'ผู้กำกับภาพยนตร์ไทยชื่อดัง ผู้สร้างปรากฏการณ์ภาพยนตร์แอ็กชั่นที่พามวยไทยไปสู่สายตาผู้ชมทั่วโลก เป็นที่รู้จักจากผลงานระดับตำนานอย่าง องค์บาก และ ต้มยำกุ้ง สร้างรายได้รวมทั่วโลกกว่า 1,400 ล้านบาท ทำให้ภาพยนตร์ไทยได้รับความสนใจในตลาดต่างประเทศ โดยเฉพาะในสหรัฐอเมริกา ซึ่งโดดเด่นด้วยการถ่ายทำจริง ไม่ใช้สลิงหรือสตันต์ เน้นพลัง ความสมจริง และเอกลักษณ์แบบไทยแท้ มีบทบาทสำคัญในการฟื้นฟูภาพยนตร์แอ็กชันไทย และสร้างแรงบันดาลใจให้ผู้กำกับรุ่นใหม่ในระดับนานาชาติ และประสบการณ์กำกับภาพยนตร์มากกว่า 20 เรื่อง',
            works: 'องค์บาก (2546), ต้มยำกุ้ง (2548), ช็อคโกแลต (2551), ต้มยำกุ้ง 2 (2556), ลูกทุ่ง ซิกเนเจอร์ (2559)'
        },
        {
            img: director2,
            name: 'พันธุ์ธัมม์ ทองสังข์',
            role: 'Director / Producer',
            bio: 'ผู้กำกับภาพยนตร์และซีรีส์ไทยที่เติบโตจากสายงานเบื้องหลัง เริ่มต้นในฐานะผู้ช่วยผู้กำกับ ก่อนก้าวสู่การกำกับและอำนวยการสร้างเต็มตัว ผลงานของเขาครอบคลุมทั้งดราม่า คอมเมดี้ และซีรีส์คุณภาพ โดยโดดเด่นด้านการเล่าเรื่องที่ลึก ซื่อตรงต่ออารมณ์ และให้ความสำคัญกับตัวละครเป็นศูนย์กลาง เป็นที่รู้จักจากภาพยนตร์ดราม่าคุณภาพอย่าง ไอ้ฟัก และคอมเมดี้ดราม่าที่มีเอกลักษณ์อย่าง มะหมา 4 ขาครับ รวมถึงผลงานซีรีส์ที่ได้รับการยอมรับในระดับสากล ปัจจุบันดำรงตำแหน่งกรรมการผู้จัดการ ฟ้า สตูดิโอส์ ในเครือ GMM Grammy',
            works: 'คู่กรรม (2538), จักรยานสีแดง (2540), ไอ้ฟัก (2547), มะหมา 4 ขาครับ (2550), เพื่อเธอ (2559), พรหมไม่ได้ลิขิต (2561), แพ้กลางคืน (Nyctophobia) (2562)'
        },
        {
            img: director3,
            name: 'บัณฑิต ทองดี',
            role: 'Director',
            bio: 'ผู้กำกับภาพยนตร์ไทยที่ทำงานอยู่ในวงการมาอย่างต่อเนื่องยาวนาน เริ่มต้นจากงานมิวสิกวิดีโอ ก่อนขยับสู่การกำกับละครและภาพยนตร์ โดยมีผลงานครอบคลุมหลายแนว ทั้งดราม่า โรแมนติก สยองขวัญ และภาพยนตร์ลูกทุ่ง จุดเด่นของงานคือการเล่าเรื่องที่เรียบง่าย เข้าถึงอารมณ์ และสะท้อนชีวิตของผู้คนในบริบทสังคมไทย เป็นที่รู้จักจากภาพยนตร์ ปายอินเลิฟ ซึ่งถ่ายทอดบรรยากาศและชีวิตวัยรุ่นภาคเหนือได้อย่างเป็นธรรมชาติ รวมถึง พุ่มพวง ภาพยนตร์ชีวประวัติที่ถ่ายทอดชีวิตของพุ่มพวง ดวงจันทร์ ด้วยมุมมองตรงไปตรงมา และได้รับการตอบรับอย่างกว้างขวาง ปัจจุบันบัณฑิตดำรงตำแหน่งนายกสมาคมผู้กำกับภาพยนตร์ไทย และมีบทบาททั้งในฐานะผู้สร้างผลงานและผู้ถ่ายทอดประสบการณ์ให้กับคนรุ่นใหม่ในวงการ',
            works: 'มนุษย์เหล็กไหล (2549), ปายอินเลิฟ (2552), พุ่มพวง (2554), ฝัน-หวาน-อาย-จูบ (2551), รักนี้หัวใจมีครีบ (2555), ดับแสงรวี (2566)'
        },
        {
            img: director4,
            name: 'ศิวาภรณ์ พงษ์สุวรรณ',
            role: 'Sceenwriter / Producer',
            bio: 'ศิวาภรณ์ พงษ์สุวรรณ เป็นนักเขียนบทและผู้กำกับภาพยนตร์ไทยที่ทำงานอยู่กับภาพยนตร์แนวคอมเมดี้และดราม่าเป็นหลัก เริ่มต้นจากการเขียนบทในช่วงต้นทศวรรษ 2000 และค่อย ๆ ขยายบทบาทสู่การกำกับและการดูแลภาพรวมของงานผลิต ด้วยแนวทางการเล่าเรื่องที่เรียบง่าย เป็นกันเอง และผูกโยงอารมณ์ขันเข้ากับชีวิตประจำวันของคนไทย ผลงานอย่าง สยิว ซึ่งเป็นงานกำกับเรื่องแรก ทำให้เป็นที่รู้จักในวงการหนังอิสระยุคนั้น ขณะที่บทภาพยนตร์อย่าง Fake โกหก...ทั้งเพ และ เอ็กซ์แมน แฟนพันธุ์เอ็กซ์ แสดงให้เห็นความถนัดในการเขียนบทคอมเมดี้ที่อิงจากสถานการณ์ใกล้ตัวและความสัมพันธ์ของผู้คน นอกจากนี้ทำหน้าที่โปรดิวเซอร์ ในภาพยนตร์ บองสรันโอน: คน รัก ผี ซึ่งเป็นงานที่ผสมผสานความเชื่อ เรื่องผี และอารมณ์แบบโรแมนติกคอมเมดี้ได้อย่างลงตัวตลอดเส้นทางการทำงาน ศิวาภรณ์มุ่งเล่าเรื่องที่จริงใจ ไม่ซับซ้อนเกินจำเป็น และเปิดพื้นที่ให้มุมมองของผู้หญิงได้ปรากฏอย่างเป็นธรรมชาติในภาพยนตร์ไทย',
            works: 'สยิว (2546), Fake โกหก...ทั้งเพ (2546), เอ็กซ์แมน แฟนพันธุ์เอ็กซ์ (2547), บองสรันโอน: คน รัก ผี (2558)'
        },
        {
            img: director5,
            name: 'ราเชนทร์ ลิ้มตระกูล',
            role: 'Director',
            bio: 'ผู้กำกับภาพยนตร์ไทยที่เติบโตมาจากสายมิวสิกวิดีโอในช่วงยุค 90s ก่อนก้าวสู่การกำกับภาพยนตร์เรื่องแรกในปี พ.ศ. 2538 ผลงานในแนวโรแมนติกและแอ็กชัน โดยให้ความสำคัญกับอารมณ์ของตัวละครและการเล่าเรื่องที่เข้ากับบริบทยุคสมัย นอกจากบทบาทผู้กำกับแล้ว ยังทำงานในฐานะโปรดิวเซอร์ และมีส่วนสำคัญในการขับเคลื่อนวงการภาพยนตร์ไทยมาอย่างต่อเนื่อง เป็นที่รู้จักอย่างกว้างขวางจากภาพยนตร์ โลกทั้งใบให้นายคนเดียว ซึ่งกลายเป็นหนังรักคลาสสิกของไทย และสร้างชื่อเสียงให้เขาในฐานะผู้กำกับรุ่นใหม่ของยุคนั้น ต่อมาได้กลับมาสร้างผลงานที่เข้าถึงผู้ชมรุ่นใหม่ผ่าน ฝัน-หวาน-อาย-จูบ และภาพยนตร์แอ็กชัน จีจ้า ดื้อสวยดุ ที่ช่วยเปิดพื้นที่ให้ภาพลักษณ์นักแสดงหญิงในหนังแอ็กชันไทย ในฐานะโปรดิวเซอร์มีผลงานที่ประสบความสำเร็จหลายเรื่องเช่น มือปืน/โลก/พระ/จัน ซึ่งสร้างรายได้สูง และโปรเจกต์สำคัญอื่น ๆ ที่ตอกย้ำบทบาทของเขาทั้งในเชิงสร้างสรรค์และเชิงอุตสาหกรรม',
            works: 'โลกทั้งใบให้นายคนเดียว (2538), มือปืน/โลก/พระ/จัน (2544), ฝัน-หวาน-อาย-จูบ (2551), จีจ้า ดื้อสวยดุ (2552)'
        },
        {
            img: director6,
            name: 'ศุภรัฐ บุญมาแย้ม',
            role: 'Director / Sceenwriter',
            bio: 'ผู้กำกับภาพยนตร์ไทยแนวอินดี้ที่ทำงานกับเรื่องราวของชีวิต ความรู้สึก และความสัมพันธ์ของผู้คนอย่างใกล้ชิด เน้นอารมณ์มากกว่าความหวือหวา และให้พื้นที่กับตัวละครได้ค่อย ๆ เติบโตไปตามจังหวะของเรื่อง ทั้งในภาพยนตร์อิสระและโปรเจกต์ที่เชื่อมโยงกับวงการกระแสหลัก รวมถึงการเข้าฉายในเทศกาลภาพยนตร์เป็นที่รู้จักจากภาพยนตร์ The Unreasonable Man – ไม่รู้…มันคืออะไร แต่ชอบ ซึ่งเล่าเรื่องความรักในมุมที่ไม่พยายามหาคำอธิบาย และได้รับการฉายในหอภาพยนตร์ รวมถึงเทศกาลภาพยนตร์อิสระหลายแห่ง ต่อมาคือ Fantasy Friend ภาพยนตร์ดราม่าที่ว่าด้วยมิตรภาพและช่วงเวลาการเติบโต นอกจากนี้มีส่วนร่วมในงานเขียนบทและการพัฒนาโปรเจกต์อย่าง บองสรันโอน: คน รัก ผี รวมถึงซีรีส์ Rock and Soul จังหวะร็อก ปาฏิหาริย์รัก',
            works: 'Fantasy Friend (2556), The Unreasonable Man – ไม่รู้…มันคืออะไร แต่ชอบ (2557), บองสรันโอน: คน รัก ผี (2558)'
        },
        {
            img: director7,
            name: 'รัฐพงศ์ ภิญโญโสภณ',
            role: 'Sceenwriter',
            bio: 'นักเขียนบทไทยที่ทำงานครอบคลุมทั้งภาพยนตร์ ซีรีส์ ละครโทรทัศน์ และละครเวที มีผลงานโดดเด่นด้วยการเล่าเรื่องที่ยึดโยงกับชีวิตจริงของผู้คน ผสมผสานทั้งดราม่าและคอมเมดี้เพื่อสะท้อนประเด็นสังคมอย่างตรงไปตรงมา และเป็นที่ยอมรับในวงการ จากผลงานที่ได้รับรางวัลการเขียนบทจากหลายสถาบันระดับประเทศ โดยเฉพาะละครเวที Tea Box ชายชรากับหมาบ้า ซึ่งแสดงให้เห็นความละเอียดอ่อนด้านอารมณ์และความเข้าใจมนุษย์อย่างลึกซึ้ง ขณะเดียวกัน ผลงานภาพยนตร์และละครอย่าง หมอตลอดกาล และ บริษัทบำบัดหนี้ ก็ช่วยตอกย้ำภาพลักษณ์ของนักเขียนบทที่สามารถสื่อสารประเด็นสังคมผ่านเรื่องเล่าเข้าใจง่ายนอกจากงานสร้างสรรค์ ยังมีบทบาทในฐานะผู้สอนด้านการเขียนบท และเป็นหนึ่งในผู้ผลักดันประเด็นสิทธิและสวัสดิการของนักเขียนบทในวงการ เพื่อยกระดับวิชาชีพให้เติบโตอย่างยั่งยืน',
            works: 'อวสานมนุษย์เงินเดือน (2564), บริษัทบำบัดหนี้ (2564), Tea Box ชายชรากับหมาบ้า (2564), หมอตลอดกาล (2567)'
        }
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
                            colestia
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
                                We are <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">colestia</span>
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

                                                {/* View More Button */}
                                                <button
                                                    onClick={() => setSelectedDirector(director)}
                                                    className="mt-auto px-4 py-2 bg-colestia-purple/20 hover:bg-colestia-purple/40 text-white rounded-lg transition-all duration-300 text-sm font-medium border border-colestia-purple/30 hover:border-colestia-purple/60"
                                                >
                                                    ดูเพิ่มเติม
                                                </button>
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

            {/* Director Detail Modal */}
            {selectedDirector && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    onClick={() => setSelectedDirector(null)}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="bg-[#0a0a0a] border border-colestia-purple/30 rounded-2xl max-w-3xl w-full max-h-[80vh] overflow-y-auto relative shadow-[0_20px_60px_rgba(122,30,166,0.4)]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedDirector(null)}
                            className="absolute top-4 right-4 z-10 p-2 bg-colestia-purple/20 hover:bg-colestia-purple/40 rounded-full transition-all duration-300 group"
                            aria-label="Close modal"
                        >
                            <X size={24} className="text-white group-hover:rotate-90 transition-transform duration-300" />
                        </button>

                        {/* Director Image */}
                        <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-t-2xl">
                            <img
                                src={selectedDirector.img}
                                alt={selectedDirector.name}
                                className="w-full h-full object-cover object-top"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="p-8 space-y-6">
                            {/* Name and Role */}
                            <div>
                                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                                    {selectedDirector.name}
                                </h2>
                                <p className="text-colestia-magenta text-lg font-medium">
                                    {selectedDirector.role}
                                </p>
                            </div>

                            {/* Biography */}
                            <div className="space-y-3">
                                <h3 className="text-xl font-bold text-white border-l-4 border-colestia-purple pl-4">
                                    ประวัติ
                                </h3>
                                <p className="text-gray-300 leading-relaxed text-base indent-8">
                                    {selectedDirector.bio}
                                </p>
                            </div>

                            {/* Notable Works */}
                            <div className="space-y-3">
                                <h3 className="text-xl font-bold text-white border-l-4 border-colestia-purple pl-4">
                                    ผลงานเด่น
                                </h3>
                                <p className="text-gray-300 leading-relaxed text-base">
                                    {selectedDirector.works}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
};

export default Home;

