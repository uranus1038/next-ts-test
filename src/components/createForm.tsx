'use client'
import { useState } from "react";
import axios from 'axios'
import Swal from "sweetalert2";
import Link from "next/link";
// components
import Layout from "@/layout/layout";
import {
    FaMagnifyingGlass
} from 'react-icons/fa6';
import { error } from "console";

export default function CreationForm() {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [tel, setTel] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [passWord, setPassword] = useState<string>("");
    const [confirmPass, setConfirmPass] = useState<string>("");
    const [Error, setError] = useState<string>("");
    // เช็คว่าเบอร์โทรที่ผู้ใช้งานกรอกเข้ามาถูกหรือไม่
    function validatePhoneNumber(phoneNumber: string): boolean {
        const regex = /^(0[6-9]\d{8}|0[2-9]\d{1}-\d{3}-\d{4})$/;
        return regex.test(phoneNumber);
    }
    // เช็คว่าอีเมลล์ที่ผู้ใช้งานกรอกเข้ามาถูกหรือไม่
    function validateEmail(email: string): boolean {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
        return regex.test(email);
    }
    // function สำหรับสร้างบัญชีผู้ใช้งาน
    const OnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        const Name = firstName + " " + lastName;
        // ป้องกันการรีเฟรชหน้าเบราว์เซอร์
        event.preventDefault();
        if(firstName.length !== 0 || lastName.length !== 0) //เช็คความถูกต้องของชื่อผู้ใช้งาน
        {
            setError("กรุณาใส่ชื่อหรือนามสกุลของท่านให้ถูกต้อง");
        }
        if(!validatePhoneNumber(tel)) //เช็คความถูกต้องของเบอร์โทร
        {
            setError("รูปแบบเบอร์โทรไม่ถูกต้อง");
        }else
        if (!validateEmail(email)) //เช็คความถูกต้องของอีเมลล์
        {
            setError("รูปแบบอีเมลล์ไม่ถูกต้อง");
        }
        if(passWord !== confirmPass) //เช็คว่ารหัสผ่านที่เข้ามาตรงกันมั้ย
        {
            setError("รหัสผ่านไม่ตรงกัน");
        }
        else {
            // หากไม่มีปัญหากับข้อมูลของผู้ลงทะเบียนแล้วก็จะ set value error เป็น ""
            setError("");
            await axios.post("/api/creation", {
                Name, tel, email, passWord
            }, {
                headers: { 'Content-Type': 'application/json' },
            }).then((res) => {
                if(res.status === 200)
                {
                    Swal.fire({
                        text: "ลงทะเบียนสมาชิกเสร็จสิ้น",
                        icon: "success" ,
                        showCancelButton: true,
                        cancelButtonText:"ยกเลิก" ,
                        confirmButtonText: 'เข้าสู่ระบบ',
                        customClass: {
                            confirmButton: 'bg-black',
                        }
                      }).then((result)=>
                      {
                        if (result.isConfirmed) {
                            window.location.href = '/login'
                          }
                      });
                } 
            }).catch((error)=>
            {
                if(error.response.status === 409)
                {
                    setError(error.response.data.message);
                }else
                {
                    setError("เกิดข้อผิดพลาดในการลงทะเบียน");
                }
            })
        }
    }
    return (
        <main >
            <form onSubmit={OnSubmit}>
                
                <div className="mb-6">
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ชื่อ</label>
                    <input onChange={(e) => { setFirstName(e.target.value) }} value={firstName} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="John" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 ">นามสกุล</label>
                    <input onChange={(e) => { setLastName(e.target.value) }} value={lastName} type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Doe" required />
                </div >
                <div className="mb-6">
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">เบอร์โทรติดต่อ</label>
                    <input onChange={(e) => { setTel(e.target.value) }} value={tel} type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="xxx-xxxx-xxx" pattern="[0-9]{3}[0-9]{4}[0-9]{3}" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">อีเมลล์</label>
                    <input onChange={(e) => { setEmail(e.target.value) }} value={email} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="john.doe@company.com"  required/>
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">รหัสผ่าน</label>
                    <input onChange={(e) => { setPassword(e.target.value) }} value={passWord} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="•••••••••" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 ">Confirm password</label>
                    <input onChange={(e) => { setConfirmPass(e.target.value) }} value={confirmPass} type="password" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="•••••••••" required />
                </div>
                <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 " required />
                    </div>
                    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">ยอมรับ<a href="#" className="text-blue-600 hover:underline">เงื่อนไข</a>การใช้งานก่อนดำเนินการต่อ</label>
                </div>
                {
                    (Error !== "") ?
                        <div className="mb-6 px-6 py-4 text-center text-sm text-red-600 rounded-md w-full bg-red-200">
                            {Error}
                        </div> :
                        null
                }
                <button type="submit" className="w-full px-8 py-2 bg-black text-white hover:text-black hover:bg-white border border-black">
                    สมัครสมาชิก
                </button>
                <p className="text-sm mt-4">มีชื่อผู้เข้าใช้งานอยู่แล้ว <Link href={"/login"} className="hover:underline text-blue-600 ">เข้าสู่ระบบ</Link></p>
            </form>

        </main>
    );
}
