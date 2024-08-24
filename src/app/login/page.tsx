import Link from "next/link";
// components
import Layout from "@/layout/layout";
import {
    FaMagnifyingGlass
} from 'react-icons/fa6';
import LoginForm from "@/components/loginForm";
export const metadata = {
    title: 'Anusorn.com - เข้าสู่ระบบหรือลงทะเบียน',
    description: 'เข้าสู่ระบบหรือสร้างบัญชีใหม่เพื่อเริ่มใช้งาน Anusorn.com บริการของเราจะช่วยให้คุณจัดการบัญชีและเข้าถึงข้อมูลต่างๆ ได้ง่ายขึ้น',
  };
export default function Login() {
    
    return (
        <main >
            <Layout>
                <div className="mt-24 flex justify-center w-full">
                    <div className="px-8 py-4 w-full max-w-md sm:rounded-lg sm:border">
                        <h1 className="text-center mb-4">ลงชื่อเข้าใช้งาน Anusorn.com</h1>
                        <LoginForm/>
                    </div>
                </div>
            </Layout>
        </main>
    );
}
