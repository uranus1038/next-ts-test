'use client'
import Image from "next/image";
import Link from "next/link";
import 'next-auth'
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { FaBarsStaggered, FaGlobe } from "react-icons/fa6";
// กำหนดประเภทใหม่สำหรับ session
declare module 'next-auth' {
    interface Session {
        user: {
            name?: string | null
            email?: string | null
            image?: string | null
            role?: string | null // เพิ่ม role เข้ามาใหม่
        }
    }
}
export default function Navbar() {
    // ดึงข้อมูบจาก session ที่เก็บไว้หลังจาก login
    const { data: session } = useSession();
    const [openModel, setOpenModel] = useState<boolean>(false);
    console.log(session);
    return (
        <nav className="bg-white z-50 w-screen fixed top-0 shadow ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div>
                    <ul className=" flex   items-center justify-between gap-6">
                        <li>
                            <Link href={"/"} className="text-xl font-extrabold text-black">Anusorn.com</Link>
                        </li>
                        <li className="lg:block hidden">
                            <Link href={""} className="text-gray-800 hover:underline">
                                ค้นหาห้องพัก
                            </Link>
                        </li>
                        <li className="lg:block hidden">
                            <Link href={""} className="text-gray-800 hover:underline">
                                แกลเลอรี่
                            </Link>
                        </li>
                        <li className="lg:block hidden">
                            <Link href={""} className="text-gray-800 hover:underline">
                                นโยบาย
                            </Link>
                        </li>
                        <li className="lg:block hidden">
                            <Link href={""} className="text-gray-800 hover:underline">
                                ช่วยเหลือ
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className=" flex   items-center justify-between gap-4">
                        <li className="lg:flex hidden items-center">
                            <FaGlobe className="inline-flex me-2" />
                            <span>ไทย</span>
                        </li>
                        {
                            (session) ?
                                (<></>) :
                                (<li className="lg:block hidden">
                                    <Link href={"/login"} className="py-1.5 px-6 text-md text-gray-800 border border-black rounded-full hover:bg-black hover:text-white">
                                        เข้าสู่ระบบ / ลงทะเบียน</Link>
                                </li>)
                        }
                        {
                            (session) ?
                                (<li className="lg:block hidden  ">
                                    <div className="flex bg-gray-100 rounded-sm px-4 py-2 items-center font-medium w-full">
                                        <div onClick={() => {
                                            if (openModel) {
                                                setOpenModel(false);
                                            } else {
                                                setOpenModel(true);
                                            }
                                        }} className="me-2 cursor-pointer relative w-6 h-6 overflow-hidden bg-gray-400 rounded-full ">
                                            <svg className="absolute w-8 h-8 text-gray-100 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                                        </div>
                                        <div className="text-gray-700 font-normal text-sm w-28 truncate">{session?.user?.name}</div>
                                    </div>
                                    {
                                        (openModel) ?
                                            (<div className="fixed shadow-xl  rounded-sm top-20 z-50 bg-white h-auto w-44 px-4 py-2">
                                                <ul className="text-md font-medium gap-4 text-gray-800">
                                                    {
                                                        (session?.user?.role === "user") ?
                                                            (<li className="mb-4 hover:text-blue-600 cursor-pointer">
                                                                <Link href={"/dashboard"}>
                                                                    แผงการควบคุม
                                                                </Link>
                                                            </li>) : (<></>)
                                                    }
                                                    <li className="mb-4 hover:text-blue-600 cursor-pointer">
                                                        โปรไฟล์
                                                    </li>
                                                    <li className="mb-4 hover:text-blue-600 cursor-pointer">
                                                        การจองของฉัน
                                                    </li>
                                                    <hr />
                                                    <li onClick={() => signOut()} className="mb-4 mt-2  hover:text-red-500 cursor-pointer">
                                                        ออกจากระบบ
                                                    </li>

                                                </ul>
                                            </div>) : (null)
                                    }
                                </li>) :
                                (<></>)
                        }
                        <li className="lg:hidden block">
                            <button className="">
                                <FaBarsStaggered className="inline-flex w-6 h-6 text-gray-800" />
                            </button>
                        </li>
                    </ul>
                </div>
            </div >
        </nav >
    );
}
