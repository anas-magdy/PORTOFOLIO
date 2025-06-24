'use client';
import Image from 'next/image';

export default function Project() {
    return (
        <div>
            <div className="min-h-screen bg-white px-4 md:px-16 py-10 relative">
                {/* الخط الجانبي */}
                <div className="absolute bottom-4 xs:bottom-16 right-4 z-10 flex items-end gap-1 text-[#232a4d]/60 font-bold text-3xl">
                    <div>02</div>
                    <div className="text-3xl bg-white leading-none translate-x-1/2 mb-1">
                        <span className='text-4xl font-bold bg-gradient-to-tr from-blue-500 to-purple-500 bg-clip-text text-transparent leading-none translate-x-1/2'>+</span>
                    </div>
                </div>
                <div className="absolute right-4 top-0 h-full w-[2px] bg-blue-500 z-0"></div>

                <div className="flex flex-col md:flex-row gap-10">
                    <div className="flex-1 flex flex-col gap-6">
                        <h1 className="text-2xl md:text-4xl font-bold text-blue-900">Stylemate Online Fashion App</h1>
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                            StyleMate streamlines online shopping by offering personalized fashion recommendations based on individual size, fabric, and style preferences, and builds trust with community features like photo reviews and size-matching badges. It addresses sizing uncertainty and event-based outfit planning, while enhancing the shopping experience through real-time order tracking.
                        </p>

                    </div>
                </div>

                <div className="flex flex-wrap ">
                    <div className="w-full md:w-1/2 lg:w-1/3 px-6 mt-30 mb-30 flex justify-center">
                        <Image
                            src="/Frame 34276.jpg"
                            alt="Fitur UKOM AI"
                            width={800}
                            height={500}
                            className="w-full max-h-[623px] max-w-[300px] rounded-md"
                        />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 px-18 mt-60 flex justify-center mt-10">
                        <Image
                            src="/Frame 34274.png"
                            alt="Fitur UKOM AI Dark"
                            width={800}
                            height={500}
                            className="w-full  max-h-[623px] max-w-[300px] rounded-md"
                        />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 px-18 mt-30 flex justify-center mt-10">
                        <Image
                            src="/Frame 34280.jpg"
                            alt="Fitur UKOM AI Dark"
                            width={800}
                            height={500}
                            className="w-full  max-h-[623px] max-w-[300px] rounded-md"
                        />
                    </div>

                </div>
            </div>
            <div className="min-h-screen bg-white px-4 md:px-16 py-10 relative mt-20">
                {/* الخط الجانبي */}
                <div className="absolute bottom-4 xs:bottom-16 right-4 z-10 flex items-end gap-1 text-[#232a4d]/60 font-bold text-3xl">
                    <div>03</div>
                    <div className="text-3xl bg-white leading-none translate-x-1/2 mb-1">
                        <span className='text-4xl font-bold bg-gradient-to-tr from-blue-500 to-purple-500 bg-clip-text text-transparent leading-none translate-x-1/2'>+</span>
                    </div>
                </div>
                <div className="absolute right-4 top-0 h-full w-[2px] bg-blue-500 z-0"></div>

                <div className="flex flex-col md:flex-row gap-10">
                    <div className="flex-1 flex flex-col gap-6">
                        <h1 className="text-2xl md:text-4xl font-bold text-blue-900">YallaFood</h1>
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                            Coordinating group food orders is often messy, with multiple preferences, missed items, and confusing communication. This app simplifies the process by combining group chat with a shared cart, allowing users to add their own meals—even from different restaurants—and track the order together. The result is a smooth, accurate, and stress-free group ordering experience.
                        </p>

                    </div>
                </div>

                <div className="flex flex-wrap ">
                    <div className="w-full md:w-1/2 lg:w-1/3 px-6 mt-30 mb-30 flex justify-center">
                        <Image
                            src="/proj2_1.png"
                            alt="Fitur UKOM AI"
                            width={800}
                            height={500}
                            className="w-full max-h-[623px] max-w-[300px] rounded-md"
                        />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 px-18 mt-60 flex justify-center mt-10">
                        <Image
                            src="/proj2_2.png"
                            alt="Fitur UKOM AI Dark"
                            width={800}
                            height={500}
                            className="w-full  max-h-[623px] max-w-[300px] rounded-md"
                        />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 px-18 mt-30 flex justify-center mt-10">
                        <Image
                            src="/proj2_3.png"
                            alt="Fitur UKOM AI Dark"
                            width={800}
                            height={500}
                            className="w-full  max-h-[623px] max-w-[300px] rounded-md"
                        />
                    </div>

                </div>
            </div>

        </div>

    )
}
