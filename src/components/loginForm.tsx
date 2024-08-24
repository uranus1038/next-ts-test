'use client'
import Link from "next/link";
import Swal from "sweetalert2";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import axios from 'axios'
// components
import Layout from "@/layout/layout";
import {
    FaMagnifyingGlass
} from 'react-icons/fa6';

export default function LoginForm() {
    const [email, setEmail] = useState<string>("");
    const [passWord, setPassWord] = useState<string>("");
    const [Error, setError] = useState<string>("");
    const router = useRouter();
    // function ใช้งานสำหรับการเข้าสู่ระบบ
    const OnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            // ใช้ next-auth ในการตรวจสอบสิทธิเข้าสู่ระบบ
            const result = await signIn("credentials", {
                email, passWord, redirect: false
            })
            if (result?.status === 200) {
                setError("");
                Swal.fire({
                    text: "เข้าสู่ระบบเสร็จสิ้น",
                    icon: "success",
                    confirmButtonText: 'ตกลง',
                    customClass: {
                        confirmButton: 'bg-black',
                    }
                }).then((result) => {
                    if (result.isConfirmed) {
                        // หาก login สำเร็จจะให้ redirect ไปที่หน้าแรก
                        router.replace("/");
                    }
                });

            } else if (result?.status === 401) {
                setError("รหัสผ่านหรืออีเมลล์ของท่านไม่ถูกต้อง");
            } else {
                setError("เกิดข้อผิดพลาดระหว่างการประมวลผล")
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <main >
            <form onSubmit={OnSubmit}>
                {
                    (Error !== "") ?
                        <div className="mb-6 px-6 py-4 text-center text-sm text-red-600 rounded-md w-full bg-red-200">
                            {Error}
                        </div> :
                        null
                }
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">อีเมลล์</label>
                    <input onChange={(e) => { setEmail(e.target.value) }} value={email} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="john.doe@company.com" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">รหัสผ่าน</label>
                    <input onChange={(e) => { setPassWord(e.target.value) }} value={passWord} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="•••••••••" required />
                </div>
                <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 " required />
                    </div>
                    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 ">จดจำฉันในระบบ</label>
                </div>
                <button type="submit" className="w-full px-8 py-2 bg-black text-white hover:text-black hover:bg-white border border-black">
                    เข้าสู่ระบบ
                </button>
                <p className="text-sm mt-4">ยังไม่มีชื่อผู้เข้าใช้งาน? <Link href={"/creation"} className="hover:underline text-blue-600 ">สมัครสมาชิก</Link></p>
            </form>
        </main>
    );
}
