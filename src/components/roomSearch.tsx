'use client'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { th } from 'date-fns/locale';
import { FaUserGroup , FaMagnifyingGlass } from "react-icons/fa6";
export default function RoomSearch() {
    return (
        <div className="rounded-lg border p-4">
            <div className="flex gap-4 w-full xl:flex-row flex-col">
                <div className="xl:w-2/4 w-full mx-auto border p-4 rounded-lg">
                    <label htmlFor="room" className="block mb-2 text-sm font-medium text-black ">เลือกประเภทของห้อง</label>
                    <select id="room" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                        <option value="US" selected>ห้องพักทั้งหมด</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                </div>
                <div className="w-full mx-auto border p-4 rounded-lg">
                    <label htmlFor="check-in" className="block mb-2 text-sm font-medium text-black ">วันที่เข้าพัก</label>
                    <div id="date" className="flex items-center">
                        <div className="relative">
                            <DatePicker
                                locale={th}
                                dateFormat="dd/MM/yyyy"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 "
                                placeholderText="เช็คอิน" />
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </div>
                        </div>
                        <span className="mx-4 text-gray-500 ">ถึง</span>
                        <div className="relative">
                            <DatePicker
                                locale={th}
                                dateFormat="dd/MM/yyyy"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 "
                                placeholderText="เช็คเอาท์" />
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:w-2/4 w-full max-auto border p-4 rounded-lg">
                    <label htmlFor="number-people" className="block mb-2 text-sm font-medium text-black ">จำนวนผู้เข้าพัก</label>
                    <div className="relative mb-6">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <FaUserGroup className='inline-flex text-gray-500 ' />
                        </div>
                        <input type="text" id="number-people" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  " placeholder="1" />
                    </div>
                </div>
                <button className='xl:w-1/4 w-full '>
                    <div className='p-2.5 rounded-md bg-black border border-black text-white hover:bg-white hover:text-black'>
                        <FaMagnifyingGlass className='inline-flex me-2'/>ค้นหาห้อง
                    </div>
                </button>
            </div>
        </div>
    );
}
