import Image from "next/image";
import { FaEnvelope, FaPhone, FaCheck } from "react-icons/fa";

export default function ProfileSection() {
  return (
    <div>
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-white py-8 px-4 md:px-8 border-r border-[#d1d5db] overflow-hidden">
        <div className="flex flex-col md:flex-row w-full max-w-6xl gap-8 md:gap-12">
          {/* صورة البروفايل */}
          <div className="flex-1 flex justify-center items-center min-w-0">
            <div className="p-1 rounded-lg bg-gradient-to-tr from-blue-400 to-purple-400">
              <Image
                src="/profile.jpg"
                alt="profile"
                width={400}
                height={600}
                className="rounded-lg  h-auto object-cover"
              />
            </div>
          </div>
          {/* بيانات شخصية */}
          <div className="flex-[2] flex flex-col gap-6 min-w-0 break-words">
            <h1 className="text-2xl md:text-4xl font-extrabold text-[#232a4d]">Alaa Mohamed Abdelsalam</h1>
            <h2 className="text-lg md:text-2xl font-medium text-[#232a4d]/80">UI/UX Design/Graphic Design</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-xl">
              UI/UX Designer with a passion for creating meaningful, user-centered digital experiences. Skilled in
              wireframing, prototyping, and interface design using tools like Figma. Experienced in turning ideas
              into polished, real-world projects. Known for a strong eye for detail, creativity, and a drive to
              design with purpose.
            </p>
            <div>
              <h3 className="font-bold text-[#232a4d] mb-1 text-lg md:text-xl">EDUCATION</h3>
              <ul className="text-base md:text-lg text-gray-700">
                <span className="font-bold">
                  Bachelor&apos;s degree in Turkish Language
                </span>
                <li>
                  Faculty of Alsun, Ain Shams University, Turkish Department
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-[#232a4d] mb-1 text-lg md:text-xl">Communication</h3>
              <ul className="text-base md:text-lg text-gray-700 flex flex-col gap-1">
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="url(#grad1)"
                    viewBox="0 0 24 24"
                  >
                    <defs>
                      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: '#5ec6e7', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#b97adf', stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1v3.5a1 1 0 01-1 1C10.61 21 3 13.39 3 4.5a1 1 0 011-1H7.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
                  </svg>
                  +2 01016023837
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="url(#grad2)"
                    viewBox="0 0 24 24"
                  >
                    <defs>
                      <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: '#5ec6e7', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#b97adf', stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                    <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8.2l7.38 6.44a1 1 0 001.24 0L20 8.2V18H4z" />
                  </svg>
                  alaa.mohamed3698@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* الخبرات والمهارات والأدوات */}
        <div className="w-full max-w-6xl mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 border-t pt-8">
          {/* الخبرات */}
          <div className="min-w-0 break-words">
            <h3 className="font-bold text-[#232a4d] mb-2 text-lg md:text-xl">Work Experience</h3>
            <ul className="text-base md:text-lg text-gray-700 space-y-1">
              <li>
                <span className="font-semibold">Store Associate (Bagian Musik)</span><br />
                2019-2020 | Gramedia Pluit Village
              </li>
              <li>
                <span className="font-semibold">Freelace Desain Grafis</span><br />
                2020-2021 | PT. Berlian Jagad Perkasa
              </li>
              <li>
                <span className="font-semibold">Desain Grafis & Team Online</span><br />
                2021-2023 | PT. Ximivogue Indonesia
              </li>
              <li>
                <span className="font-semibold">Desain UI/UX</span><br />
                2023-Sekarang | PT. Yapindo Jaya Abadi
              </li>
            </ul>
          </div>
          {/* المهارات */}
          <div className="min-w-0 break-words">
            <h3 className="font-bold text-[#232a4d] mb-2 text-lg md:text-xl">Skill</h3>
            <ul className="text-base md:text-lg text-gray-700 space-y-1">
              <li className="flex items-center gap-2"><svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="url(#grad3)"
                viewBox="0 0 24 24"
              >
                <defs>
                  <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#5ec6e7', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#b97adf', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <path d="M20.285 6.709a1 1 0 00-1.414-1.418l-9.193 9.2-4.243-4.242a1 1 0 00-1.414 1.414l4.95 4.95a1 1 0 001.414 0l9.9-9.904z" />
              </svg>
                User Research</li>
              <li className="flex items-center gap-2"><svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="url(#grad3)"
                viewBox="0 0 24 24"
              >
                <defs>
                  <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#5ec6e7', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#b97adf', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <path d="M20.285 6.709a1 1 0 00-1.414-1.418l-9.193 9.2-4.243-4.242a1 1 0 00-1.414 1.414l4.95 4.95a1 1 0 001.414 0l9.9-9.904z" />
              </svg>
                User Flow</li>
              <li className="flex items-center gap-2"><svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="url(#grad3)"
                viewBox="0 0 24 24"
              >
                <defs>
                  <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#5ec6e7', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#b97adf', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <path d="M20.285 6.709a1 1 0 00-1.414-1.418l-9.193 9.2-4.243-4.242a1 1 0 00-1.414 1.414l4.95 4.95a1 1 0 001.414 0l9.9-9.904z" />
              </svg>
                Wireframing</li>
              <li className="flex items-center gap-2"><svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="url(#grad3)"
                viewBox="0 0 24 24"
              >
                <defs>
                  <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#5ec6e7', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#b97adf', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <path d="M20.285 6.709a1 1 0 00-1.414-1.418l-9.193 9.2-4.243-4.242a1 1 0 00-1.414 1.414l4.95 4.95a1 1 0 001.414 0l9.9-9.904z" />
              </svg>
                Prototyping</li>
              <li className="flex items-center gap-2"><svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="url(#grad3)"
                viewBox="0 0 24 24"
              >
                <defs>
                  <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#5ec6e7', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#b97adf', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <path d="M20.285 6.709a1 1 0 00-1.414-1.418l-9.193 9.2-4.243-4.242a1 1 0 00-1.414 1.414l4.95 4.95a1 1 0 001.414 0l9.9-9.904z" />
              </svg>
                High-Fidelity Design</li>
              <li className="flex items-center gap-2"><svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="url(#grad3)"
                viewBox="0 0 24 24"
              >
                <defs>
                  <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#5ec6e7', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#b97adf', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <path d="M20.285 6.709a1 1 0 00-1.414-1.418l-9.193 9.2-4.243-4.242a1 1 0 00-1.414 1.414l4.95 4.95a1 1 0 001.414 0l9.9-9.904z" />
              </svg>
                Branding & Visual Storytelling</li>
              <li className="flex items-center gap-2"><svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="url(#grad3)"
                viewBox="0 0 24 24"
              >
                <defs>
                  <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#5ec6e7', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#b97adf', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <path d="M20.285 6.709a1 1 0 00-1.414-1.418l-9.193 9.2-4.243-4.242a1 1 0 00-1.414 1.414l4.95 4.95a1 1 0 001.414 0l9.9-9.904z" />
              </svg>
                Desain Sosial Media & Iklan</li>
            </ul>
          </div>
          {/* الأدوات */}
          <div className="min-w-0 break-words">
            <h3 className="font-bold text-[#232a4d] mb-2 text-lg md:text-xl">Tools</h3>
            <ul className="text-base md:text-lg text-gray-700 space-y-1">
              <li className="flex items-center gap-2">Figma</li>
              <li className="flex items-center gap-2">Adobe Illustrator</li>
              <li className="flex items-center gap-2">Adobe Photoshop</li>
              <li className="flex items-center gap-2">Adobe Premiere</li>
            </ul>
          </div>
        </div>
        {/* ترقيم الصفحة */}
        <div className="absolute bottom-4 right-8 text-2xl text-[#232a4d]/60 font-bold select-none">01 <span className="text-purple-400">+</span></div>
      </section>
    </div>

  );
} 