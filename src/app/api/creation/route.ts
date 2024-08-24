import { NextResponse, NextRequest } from "next/server";
import connectMongoDB from "../../../../lib/mongodb";
import User from "../../../../models/user";
import bcrypt from 'bcrypt';
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
// สร้าง interface สำหรับเก็บข้อมูล Document ของ mongodb
interface IUser {
    _id:string ;
    name :string ;
    tel:string
    email :string;
    passWord:string ;
    role:string;
}
export async function POST(req: NextRequest) {
    try {
        const { Name, tel, email, passWord } = await req.json();
        console.log(Name + " "+ tel + " "+ email + " "+ passWord);
        //เช็คว่าข้อมูลที่ส่งมาต้องไม่ใช่ข้อมูลที่ว่างเปล่าและต้องเป็นข้อมูลที่ถูกต้อง
        if(Name && tel && email && passWord && validatePhoneNumber(tel) &&validateEmail(email))
        {
            const hashPassword: string = await bcrypt.hash(passWord, 8);
            await connectMongoDB();
            const userEmail:IUser | null = await User.findOne({ email }).exec();
            // เช็คว่ามีอีเมลล์นี้อยู่ในระบบไหม
            if (userEmail) {
                return NextResponse.json({ message: 'อีเมลล์นี้ถูกใช้งานไปแล้ว'} , {status:409});
            } else {
                const newUser:IUser | null = await User.create({ name:Name, tel, email, passWord: hashPassword });
                if (newUser) {
                    return NextResponse.json({ message: 'ลงทะเบียนผู้ใช้งานสำเร็จ' }, {status:200});
                } else {
                    return NextResponse.json({ message: 'เกิดข้อผิดพลาดในการลงทะเบียน' } , {status:500});
                }
            }
        }else
        {
            return NextResponse.json({ message: 'ข้อมูลที่ส่งมานั้นไม่ถูกต้อง' }, { status: 400 });
        }
        
    } catch
    {
        return NextResponse.json({ message: 'เกิดข้อผิดพลาดขึ้นในระหว่างประมวลผล' }, { status: 500 });
    }
}