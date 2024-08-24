import {
    FaParking,
    FaTshirt,
    FaWifi,
    FaAngleRight,
    FaShoppingBag,
    FaRegClone,
    FaTrain,
    FaChalkboardTeacher
} from 'react-icons/fa'
export default function View() {
    return (
        <div className="flex w-100 xl:flex-row flex-col justify-start gap-4  px-0 ">
            <div className="w-full rounded-sm p-4 border border-gray-300 hover:border-blue-700 cursor-pointer">
                <div className=" flex flex-col gap-4 overflow-hidden">
                    <div>
                        <span className="text-xs font-extrabold  text-white bg-black py-2 px-6 rounded-full w-16 text-center">
                            3/5
                        </span>
                        <span className="ml-2 text-sm text-gray-800 font-bold">
                            คะแนนรีวิว
                        </span>
                    </div>
                    <span className="w-80 truncate text-gray-800 text-sm">
                        ทำเลที่ตั้งและการบริการที่ดีเยี่ยม โรงแรมตั้งอยู่ใกล้กับสวนอุเอโนะและมีสถานีรถไฟ 3 แห่งในบริเวณใกล้เคียง สามารถเดินทางไปยังสถานที่อื่นของเมืองได้อย่างง่ายดาย ห้องพักค่อนข้างเล็ก แต่มีอุปกรณ์ทุกอย่างใช้งานได้ดี ราคาสมเหตุสมผล
                    </span>
                    <div className="flex justify-between items-end w-full mt-8">
                        <div className="flex items-center">
                            <div className="relative w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                                <svg className="absolute w-8 h-8 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                            </div>
                            <p className="ml-2 text-xs font-medium text-black">
                                ผู้เข้าพัก
                            </p>
                        </div>
                        <div className="text-xs font-bold text-blue-600 ">
                            ดูรีวิวทั้งหมด 119 รีวิว
                            <span><FaAngleRight className='inline-flex ml-1' /></span>
                        </div>
                    </div>

                </div>
            </div>
            <div className="w-full rounded-sm p-4 border border-gray-300 hover:border-blue-700 cursor-pointer">
                <div className="flex flex-col xl:gap-4  overflow-hidden">
                    <h1 className="text-sm font-bold text-gray-800">สิ่งอำนวยความสะดวก</h1>
                    <div className="grid xl:grid-cols-3">
                        <div className='text-gray-700 text-sm xl:w-28 xl:truncate'>
                            <FaParking className='inline-flex me-2' />
                            <span >ที่จอดรถ</span>
                        </div>
                        <div className='text-gray-700 text-sm xl:w-28 xl:truncate'>
                            <FaTshirt className='inline-flex me-2' />
                            <span >บริการทำความสะอาด</span>
                        </div>
                        <div className='text-gray-700 text-sm xl:w-28 xl:truncate'>
                            <FaWifi className='inline-flex me-2' />
                            <span >Wifi</span>
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-3">
                        <div className='text-gray-700 text-sm xl:w-28 xl:truncate'>
                            <FaShoppingBag className='inline-flex me-2' />
                            <span >บริการด้านธุรกิจ</span>
                        </div>
                        <div className='text-gray-700 text-sm xl:w-28 xl:truncate'>
                            <FaRegClone className='inline-flex me-2' />
                            <span >พื้นที่ส่วนกลาง</span>
                        </div>
                        <div className='text-gray-700 text-sm xl:w-28 xl:truncate'>
                            <FaChalkboardTeacher className='inline-flex me-2' />
                            <span >แผนกต้อนรับ 24 ชั่วโมง</span>
                        </div>


                    </div>
                    <div className='w-full flex justify-end'>
                        <span className='text-blue-600 font-bold text-xs'>
                            ดูเพิ่มเติม
                            <span><FaAngleRight className='inline-flex ml-1' /></span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="w-full rounded-sm p-4 border border-gray-300 hover:border-blue-700 cursor-pointer">
                <div className="flex flex-col gap-4 overflow-hidden">
                    <h1 className="text-sm font-bold text-gray-800">การเดินทาง</h1>
                    <div className='text-gray-700 text-sm w-96 truncate'>
                        <FaTrain className='inline-flex me-2' />
                        <span >สถานีรถไฟJR Uguisudani
                            ประมาณ 10 นาทีจากโรงแรมโดยการเดินเท้า (690เมตร)</span>
                    </div>
                    <div className='text-gray-700 text-sm w-96 truncate'>
                        <FaTrain className='inline-flex me-2' />
                        <span >สถานีรถไฟอุเอะโนะ
                            ประมาณ 14 นาทีจากโรงแรมโดยการเดินเท้า (1.0กม.)</span>
                    </div>
                    <div className='w-full flex justify-end'>
                        <span className='text-blue-600 font-bold text-xs'>
                            แผนที่
                            <span><FaAngleRight className='inline-flex ml-1' /></span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
