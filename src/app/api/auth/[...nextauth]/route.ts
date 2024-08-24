import NextAuth from 'next-auth';
import { NextApiRequest, NextApiResponse } from 'next';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import User from '../../../../../models/user';
import connectMongoDB from '../../../../../lib/mongodb';
// สร้าง interface สำหรับเก็บข้อมูล Document ของ mongodb
interface IUser {
    _id: string;
    name: string;
    tel: string
    email: string;
    passWord: string;
    role: string;
}
// สร้าง option สำหรับตรวจสอบสิทธิการเข้าใช้งาน
const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
            },
            async authorize(credentials: any) {
                if (!credentials) {
                    return null;
                }
                const { email, passWord } = credentials;
                try {
                    await connectMongoDB();
                    const user: IUser | null = await User.findOne({ email }).exec();
                    if (!user) {

                        return null;
                    }
                    const passWordMatch: boolean = await bcrypt.compare(passWord, user.passWord);
                    if (!passWordMatch) {
                        return null;
                    }
                    return {
                        id:user._id ,
                        name:user.name ,
                        email:user.email,
                        role:user.role,
                    };
                } catch (error) {
                    console.error(error);
                    return null;
                }
            },
        }),
    ],
    pages: {
        // ตรวจสอบสิทธิการเข้าใช้งานหากไม่ได้ login ก็จะให้ redirect มาที่ path /login
        signIn: '/login',
        // ตั้งเวลาหมดอายุของ token ไว้ที่ 60 วิ
        maxAge: 60,
    },
    session: {
        // ใช้ 'jwt' เป็นค่าเฉพาะ
        strategy: 'jwt' as const,
        // ตั้ง token หมดอายุภายใน 2 วัน
        maxAge:2 * 24 * 60 * 60 ,
    },
    //กุญแจลับสำหรับการเข้ารหัสเซสชัน
    secret:  process.env!.JWTSECRET_KEY,
    callbacks: {
        // Callback ที่เรียกเมื่อ JWT (JSON Web Token) ถูกสร้างหรืออัปเดต
        async jwt({ token, user }: any) {
          // เช็คว่ามีข้อมูลผู้ใช้ (user) หรือไม่
          if (user) {
            // ถ้ามี user, นำค่า role จาก user มาตั้งค่าให้กับ token
            token.role = user.role; 
          }
          // คืนค่า token ที่อัปเดต
          return token;
        },
        // Callback ที่เรียกเมื่อ session ถูกสร้างหรืออัปเดต
        async session({ session, token }: any) {
          // เช็คว่ามีข้อมูล token หรือไม่
          if (token) {
            // ถ้ามี token, นำค่า role จาก token มาตั้งค่าให้กับ session
            session.user.role = token.role; 
          }
          // คืนค่า session ที่อัปเดต
          return session;
        },
      },
      

};
// สร้างคำขอร้องในการเข้าสู่ระบบ
const handler = NextAuth(authOptions);
// ส่งออก handler ซึ่งสามารถเรียกใช้ได้ทั้ง GET และ POST
export { handler as GET, handler as POST };