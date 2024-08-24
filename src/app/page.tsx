 // components
import DetailHotel from "@/components/detailHotel";
import Navbar from "@/components/navbar";
import Room from "@/components/room";
import RoomSearch from "@/components/roomSearch";
import Layout from "@/layout/layout";
import {
  FaMagnifyingGlass
} from 'react-icons/fa6'; 
export const metadata = {
  title: 'Anusorn.com - จองห้องพักในโรงแรมหรูของเรา',
  description: 'สัมผัสประสบการณ์การพักผ่อนที่หรูหราใน Anusorn.com โรงแรมของเรามีห้องพักที่ตกแต่งอย่างสวยงามและสิ่งอำนวยความสะดวกครบครัน จองห้องพักของคุณวันนี้เพื่อรับข้อเสนอพิเศษ',
};
export default function Home() {
  return (
    <main >
      <Layout>
        <div className="mt-20 xl:px-8 px-2">
          <RoomSearch />
        </div>
        <div className="mt-4 px-8">
          <DetailHotel />
          <div className="mt-4 ">
            <div id="roomService" className="items-center xl:text-lg text-sm font-extrabold mb-4 text-gray-800" >
              <span >
                ผลการค้นหา
              </span>
              <FaMagnifyingGlass className="inline-flex me-2 ml-2" />
              <span >"ห้องพักทั้งหมด"</span>
            </div>
          </div>
          <Room />
        </div>
      </Layout>
    </main>
  );
}
