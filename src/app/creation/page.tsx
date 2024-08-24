import Link from "next/link";
// components
import Layout from "@/layout/layout";
import {
    FaMagnifyingGlass
} from 'react-icons/fa6';
import CreationForm from "@/components/createForm";
export const metadata = {
    title: 'Anusorn.com - เข้าสู่ระบบหรือลงทะเบียน',
    description: 'เข้าสู่ระบบหรือสร้างบัญชีใหม่เพื่อเริ่มใช้งาน Anusorn.com บริการของเราจะช่วยให้คุณจัดการบัญชีและเข้าถึงข้อมูลต่างๆ ได้ง่ายขึ้น',
  };
export default function Creation() {
    return (
        <main >
            <Layout>
                <div className="mt-24 flex justify-center w-full mb-8">
                    <div className="px-8 py-4 w-full max-w-md sm:rounded-lg sm:border">
                        <h1 className="text-center mb-4">ลงทะเบียนสมาชิก Anusorn.com</h1>
                        <CreationForm/>
                    </div>
                </div>
            </Layout>
        </main>
    );
}
