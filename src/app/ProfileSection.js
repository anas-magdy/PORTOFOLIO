import Image from "next/image";
import { FaInstagram, FaEnvelope, FaPhone, FaCheck } from "react-icons/fa";

export default function ProfileSection() {
  return (
    <div>
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-white py-8 px-4 md:px-8 border-r border-[#d1d5db] overflow-hidden">
        <div className="flex flex-col md:flex-row w-full max-w-6xl gap-8 md:gap-12">
          {/* صورة البروفايل */}
          <div className="flex-1 flex justify-center items-center min-w-0">
            <div className="p-1 rounded-xl bg-gradient-to-tr from-blue-400 to-purple-400">
              <Image
                src="/profile.jpg"
                alt="profile"
                width={240}
                height={300}
                className="rounded-xl grayscale w-full max-w-[240px] h-auto object-cover"
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
                <li className="flex items-center gap-2"><FaPhone className="bg-gradient-to-r from-[#5ec6e7] to-[#b97adf] bg-clip-text text-transparent" /> +2 01016023837</li>
                <li className="flex items-center gap-2"><FaEnvelope className="bg-gradient-to-r from-[#5ec6e7] to-[#b97adf] bg-clip-text text-transparent" /> alaa.mohamed3698@gmail.com</li>
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
              <li className="flex items-center gap-2"><FaCheck className="bg-gradient-to-r from-[#5ec6e7] to-[#b97adf] bg-clip-text text-transparent" /> User Research</li>
              <li className="flex items-center gap-2"><FaCheck className="bg-gradient-to-r from-[#5ec6e7] to-[#b97adf] bg-clip-text text-transparent" /> User Flow</li>
              <li className="flex items-center gap-2"><FaCheck className="bg-gradient-to-r from-[#5ec6e7] to-[#b97adf] bg-clip-text text-transparent" /> Wireframing</li>
              <li className="flex items-center gap-2"><FaCheck className="bg-gradient-to-r from-[#5ec6e7] to-[#b97adf] bg-clip-text text-transparent" /> Prototyping</li>
              <li className="flex items-center gap-2"><FaCheck className="bg-gradient-to-r from-[#5ec6e7] to-[#b97adf] bg-clip-text text-transparent" /> High-Fidelity Design</li>
              <li className="flex items-center gap-2"><FaCheck className="bg-gradient-to-r from-[#5ec6e7] to-[#b97adf] bg-clip-text text-transparent" /> Branding & Visual Storytelling</li>
              <li className="flex items-center gap-2"><FaCheck className="bg-gradient-to-r from-[#5ec6e7] to-[#b97adf] bg-clip-text text-transparent" /> Desain Sosial Media & Iklan</li>
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