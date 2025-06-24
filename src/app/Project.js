'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Animation variants
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const fadeIn = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

const slideInFromRight = {
    hidden: { opacity: 0, x: 100 },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

export default function Project() {
    return (
        <div>
            {/* Project 1 */}
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={container}
                className="min-h-screen bg-white px-4 md:px-16 py-10 relative"
            >
                {/* Side line and number */}
                <motion.div
                    variants={fadeIn}
                    className="absolute bottom-4 xs:bottom-16 right-4 z-10 flex items-end gap-1 text-[#232a4d]/60 font-bold text-3xl"
                >
                    <div>02</div>
                    <div className="text-3xl bg-white leading-none translate-x-1/2 mb-1">
                        <span className='text-4xl font-bold bg-gradient-to-tr from-blue-500 to-purple-500 bg-clip-text text-transparent leading-none translate-x-1/2'>+</span>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="absolute right-4 top-0 h-full w-[2px] bg-blue-500 z-0 origin-top"
                ></motion.div>

                <div className="flex flex-col md:flex-row gap-10">
                    <motion.div
                        variants={item}
                        className="flex-1 flex flex-col gap-6"
                    >
                        <motion.h1 variants={item} className="text-2xl md:text-3xl font-extrabold text-[#232a4d]">Stylemate Online Fashion App</motion.h1>
                        <motion.p variants={item} className="text-base md:text-lg text-gray-600 ">
                            StyleMate streamlines online shopping by offering personalized fashion recommendations based on individual size, fabric, and style preferences, and builds trust with community features like photo reviews and size-matching badges. It addresses sizing uncertainty and event-based outfit planning, while enhancing the shopping experience through real-time order tracking.
                        </motion.p>
                        <motion.a
                            variants={item}
                            href="https://www.behance.net/gallery/226582143/Stylemate"
                            target='_blank'
                            style={{ textDecoration: "none" }}
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    height: "40px",
                                    padding: "7px",
                                    borderRadius: "8px",
                                    backgroundColor: '#0a66c2',
                                    color: "white",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginTop: "15px",
                                    cursor: "pointer"
                                }}
                            >
                                Case Study
                            </motion.button>
                        </motion.a>
                    </motion.div>
                </div>

                <motion.div
                    variants={container}
                    className="flex flex-wrap"
                >
                    <motion.div
                        variants={scaleUp}
                        className="w-full md:w-1/2 lg:w-1/3 px-6 mt-30 flex justify-center"
                    >
                        <Image
                            src="/Frame 34276.jpg"
                            alt="Stylemate App 1"
                            width={800}
                            height={500}
                            className="w-full max-h-[623px] max-w-[300px] rounded-md"
                        />
                    </motion.div>
                    <motion.div
                        variants={scaleUp}
                        className="w-full md:w-1/2 lg:w-1/3 mt-30 md:mt-60 flex justify-center mt-10"
                    >
                        <Image
                            src="/Frame 34274.png"
                            alt="Stylemate App 2"
                            width={800}
                            height={500}
                            className="w-full max-h-[623px] max-w-[300px] rounded-md"
                        />
                    </motion.div>
                    <motion.div
                        variants={scaleUp}
                        className="w-full md:w-1/2 lg:w-1/3 mt-30 flex justify-center mt-10"
                    >
                        <Image
                            src="/Frame 34280.jpg"
                            alt="Stylemate App 3"
                            width={800}
                            height={500}
                            className="w-full max-h-[623px] max-w-[300px] rounded-md"
                        />
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Project 2 */}
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={container}
                className="min-h-screen bg-white px-4 md:px-16 py-10 relative mt-20"
            >
                {/* Side line and number */}
                <motion.div
                    variants={fadeIn}
                    className="absolute bottom-4 xs:bottom-16 right-4 z-10 flex items-end gap-1 text-[#232a4d]/60 font-bold text-3xl"
                >
                    <div>03</div>
                    <div className="text-3xl bg-white leading-none translate-x-1/2 mb-1">
                        <span className='text-4xl font-bold bg-gradient-to-tr from-blue-500 to-purple-500 bg-clip-text text-transparent leading-none translate-x-1/2'>+</span>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="absolute right-4 top-0 h-full w-[2px] bg-blue-500 z-0 origin-top"
                ></motion.div>

                <div className="flex flex-col md:flex-row">
                    <motion.div
                        variants={item}
                        className="flex-1 flex flex-col gap-6"
                    >
                        <motion.h1 variants={item} className="text-2xl md:text-3xl font-extrabold text-[#232a4d]">YallaFood</motion.h1>
                        <motion.p variants={item} className="text-base md:text-lg text-gray-600 ">
                            Coordinating group food orders is often messy, with multiple preferences, missed items, and confusing communication. This app simplifies the process by combining group chat with a shared cart, allowing users to add their own meals—even from different restaurants—and track the order together. The result is a smooth, accurate, and stress-free group ordering experience.
                        </motion.p>
                        <motion.a
                            variants={item}
                            href="https://www.behance.net/gallery/226600711/Yalla-food"
                            target='_blank'
                            style={{ textDecoration: "none" }}
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    height: "40px",
                                    padding: "7px",
                                    borderRadius: "8px",
                                    backgroundColor: '#0a66c2',
                                    color: "white",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginTop: "10px",
                                    cursor: "pointer"
                                }}
                            >
                                Case Study
                            </motion.button>
                        </motion.a>
                    </motion.div>
                </div>

                <motion.div
                    variants={container}
                    className="flex flex-wrap"
                >
                    <motion.div
                        variants={slideInFromRight}
                        className="w-full md:w-1/2 lg:w-1/3 px-6 mt-30 flex justify-center"
                    >
                        <Image
                            src="/proj2_1.png"
                            alt="YallaFood App 1"
                            width={800}
                            height={500}
                            className="w-full max-h-[623px] max-w-[300px] rounded-md"
                        />
                    </motion.div>
                    <motion.div
                        variants={slideInFromRight}
                        className="w-full md:w-1/2 lg:w-1/3 mt-30 md:mt-60 flex justify-center mt-10"
                    >
                        <Image
                            src="/proj2_2.png"
                            alt="YallaFood App 2"
                            width={800}
                            height={500}
                            className="w-full max-h-[623px] max-w-[300px] rounded-md"
                        />
                    </motion.div>
                    <motion.div
                        variants={slideInFromRight}
                        className="w-full md:w-1/2 lg:w-1/3 mt-30 flex justify-center mt-10"
                    >
                        <Image
                            src="/proj2_3.png"
                            alt="YallaFood App 3"
                            width={800}
                            height={500}
                            className="w-full max-h-[623px] max-w-[300px] rounded-md"
                        />
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Project 3 */}
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={container}
                className="min-h-screen bg-white px-4 md:px-16 py-10 relative mt-20"
            >
                {/* Side line and number */}
                <motion.div
                    variants={fadeIn}
                    className="absolute bottom-4 xs:bottom-16 right-4 z-10 flex items-end gap-1 text-[#232a4d]/60 font-bold text-3xl"
                >
                    <div>04</div>
                    <div className="text-3xl bg-white leading-none translate-x-1/2 mb-1">
                        <span className='text-4xl font-bold bg-gradient-to-tr from-blue-500 to-purple-500 bg-clip-text text-transparent leading-none translate-x-1/2'>+</span>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="absolute right-4 top-0 h-full w-[2px] bg-blue-500 z-0 origin-top"
                ></motion.div>

                <div className="flex flex-col md:flex-row gap-10">
                    <motion.div
                        variants={item}
                        className="flex-1 flex flex-col gap-6"
                    >
                        <motion.h1 variants={item} className="text-2xl md:text-3xl font-extrabold text-[#232a4d]">Subscription Management</motion.h1>
                        <motion.p variants={item} className="text-base md:text-lg text-gray-600 ">
                            Designed a subscription management system to help system providers manage client companies using CRM and ERP platforms. The platform allows assigning and tracking subscriptions per company, monitoring feature usage (such as lead limits), and handling payment cycles, renewal dates, and user access.
                        </motion.p>
                    </motion.div>
                </div>

                <motion.div
                    variants={container}
                    className="flex flex-wrap"
                >
                    <motion.div
                        variants={scaleUp}
                        className="w-full lg:w-1/2 mt-30 flex justify-center"
                    >
                        <Image
                            src="/proj3_1.jpg"
                            alt="Subscription Management 1"
                            width={800}
                            height={500}
                            className="w-full max-h-[427px] max-w-[600px] rounded-md"
                        />
                    </motion.div>
                    <motion.div
                        variants={scaleUp}
                        className="w-full lg:w-1/2 mt-30 lg:mt-60 flex justify-center mt-10 mb-10"
                    >
                        <Image
                            src="/proj3_2.jpg"
                            alt="Subscription Management 2"
                            width={800}
                            height={500}
                            className="w-full max-h-[427px] max-w-[600px] rounded-md"
                        />
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Project 4 */}
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={container}
                className="min-h-screen bg-white px-4 md:px-16 py-10 relative mt-20"
            >
                {/* Side line and number */}
                <motion.div
                    variants={fadeIn}
                    className="absolute bottom-4 xs:bottom-16 right-4 z-10 flex items-end gap-1 text-[#232a4d]/60 font-bold text-3xl"
                >
                    <div>05</div>
                    <div className="text-3xl bg-white leading-none translate-x-1/2 mb-1">
                        <span className='text-4xl font-bold bg-gradient-to-tr from-blue-500 to-purple-500 bg-clip-text text-transparent leading-none translate-x-1/2'>+</span>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="absolute right-4 top-0 h-full w-[2px] bg-blue-500 z-0 origin-top"
                ></motion.div>

                <div className="flex flex-col md:flex-row gap-10">
                    <motion.div
                        variants={item}
                        className="flex-1 flex flex-col gap-6"
                    >
                        <motion.h1 variants={item} className="text-2xl md:text-3xl font-extrabold text-[#232a4d]">Fleet Management</motion.h1>
                        <motion.p variants={item} className="text-base md:text-lg text-gray-600 ">
                            Designed a fleet management system to help companies efficiently track and manage their vehicles, drivers, and logistics operations. The system provides real-time visibility into vehicle status, maintenance schedules, and delivery locations.
                        </motion.p>
                    </motion.div>
                </div>

                <motion.div
                    variants={container}
                    className="flex flex-wrap"
                >
                    <motion.div
                        variants={scaleUp}
                        className="w-full lg:w-1/2 mt-30 flex justify-center"
                    >
                        <Image
                            src="/proj4_1.jpg"
                            alt="Fleet Management 1"
                            width={800}
                            height={500}
                            className="w-full max-h-[427px] max-w-[600px] rounded-md"
                        />
                    </motion.div>
                    <motion.div
                        variants={scaleUp}
                        className="w-full lg:w-1/2 mt-30 lg:mt-60 flex justify-center mt-10 mb-10"
                    >
                        <Image
                            src="/proj4_2.jpg"
                            alt="Fleet Management 2"
                            width={800}
                            height={500}
                            className="w-full max-h-[427px] max-w-[600px] rounded-md"
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    )
}