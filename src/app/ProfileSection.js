'use client';
import Image from "next/image";
import { faBehance, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

export default function ProfileSection() {
  return (
    <div className="over">
      <section id="profile-section" className="relative min-h-screen flex flex-col items-center justify-center bg-white py-8 px-4 md:px-8 overflow-hidden">
        {/* Number indicator with animation */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-4 xs:bottom-16 right-4 z-10 flex items-end gap-1 text-[#232a4d]/60 font-bold text-3xl"
        >
          <div>01</div>
          <div className="text-3xl bg-white leading-none translate-x-1/2 mb-1">
            <span className='text-4xl font-bold bg-gradient-to-tr from-blue-500 to-purple-500 bg-clip-text text-transparent leading-none translate-x-1/2'>+</span>
          </div>
        </motion.div>

        {/* Animated vertical line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute right-4 top-0 h-full w-[2px] bg-blue-500 z-0 origin-top"
        ></motion.div>

        {/* Main content container */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col md:flex-row w-full max-w-6xl gap-8 md:gap-12 relative z-10"
        >
          {/* Profile image with animation */}
          <motion.div
            variants={item}
            className="flex-1 flex justify-center items-center min-w-0"
          >
            <div className="p-1 rounded-lg bg-gradient-to-tr from-blue-400 to-purple-400">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Image
                  src="/profile.jpg"
                  alt="profile"
                  width={400}
                  height={600}
                  className="rounded-lg h-auto object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Profile details with staggered animation */}
          <motion.div
            variants={container}
            className="flex-[2] flex flex-col gap-6 min-w-0 break-words"
          >
            <motion.h1 variants={item} className="text-2xl md:text-4xl font-extrabold text-[#232a4d]">
              Alaa Mohamed Abdelsalam
            </motion.h1>

            <motion.h2 variants={item} className="text-lg md:text-2xl font-medium text-[#232a4d]/80">
              UI/UX Designer
            </motion.h2>

            <motion.p variants={item} className="text-base md:text-lg text-gray-600 max-w-xl">
              UI/UX Designer with a passion for creating meaningful, user-centered digital experiences. Skilled in
              wireframing, prototyping, and interface design using tools like Figma. Experienced in turning ideas
              into polished, real-world projects. Known for a strong eye for detail, creativity, and a drive to
              design with purpose.
            </motion.p>

            <motion.div variants={item}>
              <h3 className="font-bold text-[#232a4d] mb-1 text-lg md:text-xl">
                EDUCATION
              </h3>
              <ul className="text-base md:text-lg text-gray-700">
                <span className="font-bold">
                  Bachelor&apos;s degree in Language & Translation</span>
                <li>
                  Faculty of Alsun, Ain Shams University, Turkish Department
                </li>
              </ul>
            </motion.div>

            <motion.div variants={item}>
              <h3 className="font-bold text-[#232a4d] mb-1 text-lg md:text-xl">
                Communication
              </h3>
              <ul className="text-base md:text-lg text-gray-700 flex flex-col gap-1">
                <motion.li
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="url(#grad1)" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: '#5ec6e7', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#b97adf', stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1v3.5a1 1 0 01-1 1C10.61 21 3 13.39 3 4.5a1 1 0 011-1H7.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
                  </svg>
                  +2 01016023837
                </motion.li>

                <motion.li
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="url(#grad2)" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: '#5ec6e7', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#b97adf', stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                    <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8.2l7.38 6.44a1 1 0 001.24 0L20 8.2V18H4z" />
                  </svg>
                  alaa.mohamed3698@gmail.com
                </motion.li>

                <motion.li
                  variants={fadeIn}
                  className="flex items-center gap-3 mt-1"
                >
                  <motion.a
                    whileHover={{ y: -3 }}
                    href="https://www.behance.net/alaa_abdulsalam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    <FontAwesomeIcon icon={faBehance} style={{ color: '#1769ff', fontSize: 25 }} />
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -3 }}
                    href="https://www.linkedin.com/in/alaa-abdelsalam-b91651325/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    <FontAwesomeIcon icon={faLinkedin} style={{ color: '#0A66C2', fontSize: 25 }} />
                  </motion.a>
                </motion.li>
              </ul>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="Alaa Mohmed UI UX Designer.pdf"
                download="alaa's Resume"
                style={{ textDecoration: "none" }}
              >
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  style={{
                    height: "40px",
                    padding: "7px 14px",
                    borderRadius: "8px",
                    backgroundColor: '#0a66c2',
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    marginTop: "15px",
                    cursor: "pointer"
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                  </svg>
                  Download Resume
                </motion.button>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-6xl mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 border-t pt-8 relative z-10"
        >
          {/* Work Experience */}
          <motion.div
            className="min-w-0 break-words"
          >
            <h3 className="font-bold text-[#232a4d] mb-2 text-lg md:text-xl">Work Experience</h3>
            <ul className="text-base md:text-lg text-gray-700 space-y-1">
              <li><span className="font-semibold">UI / UX Trainee, Codxi</span><br />Mar 2025- Present</li>
            </ul>
          </motion.div>

          {/* Skill */}
          <motion.div
            className="min-w-0 break-words"
          >
            <h3 className="font-bold text-[#232a4d] mb-2 text-lg md:text-xl">Skill</h3>
            <ul className="text-base md:text-lg text-gray-700 space-y-1">
              {[
                "User Research",
                "User Flow",
                "Wireframing",
                "Prototyping",
                "High-Fidelity Design",
                "Branding & Visual Storytelling",
              ].map((skill, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="url(#grad3)" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: '#5ec6e7', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#b97adf', stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                    <path d="M20.285 6.709a1 1 0 00-1.414-1.418l-9.193 9.2-4.243-4.242a1 1 0 00-1.414 1.414l4.95 4.95a1 1 0 001.414 0l9.9-9.904z" />
                  </svg>
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Tools */}
          <motion.div
            className="min-w-0 break-words"
          >
            <h3 className="font-bold text-[#232a4d] mb-2 text-lg md:text-xl">Tools</h3>
            <ul className="text-base md:text-lg text-gray-700 space-y-1">
              {["Figma", "Canva", "Sketch", "Adobe Illustrator", "Adobe Photoshop"].map((tool, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-2"
                >
                  {tool}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}