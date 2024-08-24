import Link from "next/link";
import Image from "next/image";
import { FaLocationDot, FaBuilding } from "react-icons/fa6"
import View from "./view";
export default function DetailHotel() {
    return (
        <div className="xl:px-8 py-4 px-0   xl:rounded-lg xl:border">
            <div className="flex justify-between mx-auto">
                <div className="flex-col">
                    <div className="flex flex-row items-center">
                        <h2 className="xl:text-xl text-md font-semibold me-2">
                            Candeo Hotels Ueno Park
                        </h2>
                        <div>
                            <div className="flex items-center mb-2">
                                <svg className="xl:w-4 xl:h-4 w-3 h-3 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className="xl:w-4 xl:h-4 w-3 h-3  text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className="xl:w-4 xl:h-4 w-3 h-3  text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className="xl:w-4 xl:h-4 w-3 h-3  text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className="xl:w-4 xl:h-4 w-3 h-3  text-gray-300 me-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <p className="ms-1 xl:text-sm text-xs font-medium text-gray-500 ">4.95</p>
                                <p className="ms-1 xl:text-sm text-xs font-medium text-gray-500 ">จาก</p>
                                <p className="ms-1 xl:text-sm text-xs font-medium text-gray-500 ">5</p>
                            </div>
                        </div>
                    </div>
                    <p className=" xl:text-sm text-xs font-medium text-gray-800">
                        カンデオホテルズ上野公園
                    </p>
                    <div>
                        <div className="text-gray-600 xl:text-sm text-xs">
                            <FaLocationDot className="inline-flex me-2" />
                            <span className="me-2">1 Chome-2-13 Negishi, Taito, ไทโต, 110-0003 โตเกียว, ญี่ปุ่น</span>
                            <Link href={""} className="hover:underline text-blue-600 font-bold">
                                แสดงบนแผนที่
                            </Link>
                        </div>
                    </div>
                    <div className="w-full  ">
                        <div className="text-gray-600 xl:text-sm text-xs">
                            <FaBuilding className="inline-flex me-2" />
                            <span className="xl:w-96 w-40 truncate inline-flex ">A stay at Candeo Hotels Uenokoen places you in the heart of Tokyo, within a 15-minute walk of Ueno Park and Ueno Zoo. This upscale hotel is 1.6 mi (2.5 km) from Sensoji Temple and 2.3 mi (3.8 km) from Tokyo Skytree.
                                Make use of convenient amenities, which include complimentary wireless internet access and a vending machine.
                                At Candeo Hotels Uenokoen, enjoy a satisfying meal at the restaurant. Buffet breakfasts are available daily for a fee.
                                Featured amenities include dry cleaning/laundry services, a 24-hour front desk, and multilingual staff. Self parking (subject to charges) is available onsite.
                                Make yourself at home in one of the 268 guestrooms featuring refrigerators and LCD televisions. Complimentary wired and wireless internet access keeps you connected, and digital programming provides entertainment. Private bathrooms with shower/tub combinations feature complimentary toiletries and bidets. Conveniences include desks and electric kettles, and housekeeping is provided on request.</span>
                            <span className="me-2"> ...</span>
                            <Link href={""} className="hover:underline text-blue-600 font-bold">
                                เพิ่มเติม
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="xl:block hidden">
                    <span className="me-2">ราคาเริ่มต้น <b>฿ 1,856</b> </span>
                    <a href="#roomService" className="px-6 py-2 border border-black text-gray-800 rounded-sm font-semibold hover:text-white hover:bg-black ">
                        เลือกห้องพัก
                    </a>
                </div>
            </div>
            <div className="mt-4 ">
                <div className="flex xl:flex-row flex-col w-full justify-start">
                    <div className="relative xl:w-80 w-full xl:h-auto h-40 overflow-hidden rounded-md cursor-pointer me-2 xl:mb-0 mb-2">
                        <Image
                            src={"/img/01.webp"}
                            alt="Example image"
                            layout="fill"
                            className="object-cover rounded-md transition-transform duration-300 hover:scale-110"
                            quality={80}
                        />
                    </div>
                    <div className="grid xl:grid-cols-3 grid-cols-1 gap-2 ">
                        {/* ลูปรูปภาพเพื่อแสดงผลตัวอย่างของโรงแรม */}
                        {Array(6).fill(null).map((_, i) => (
                            <div key={i} className="relative xl:w-72 w-full h-40 overflow-hidden rounded-md cursor-pointer">
                                <Image
                                    src={`/img/0${i + 2}.webp`}
                                    alt="Example image"
                                    layout="fill"
                                    className="object-cover rounded-md transition-transform duration-300 hover:scale-110"
                                    quality={80}
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <div className="mt-4 w-full">
                <View />
            </div>
        </div>
    );
}
