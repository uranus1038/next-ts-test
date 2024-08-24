import Link from "next/link"
import Image from "next/image"
import {
    FaMagnifyingGlass,
    FaMoneyBill,
    FaBoltLightning,
    FaCreditCard,
    FaUser,
    FaWifi
} from 'react-icons/fa6'
import {
    IoIosBed
} from "react-icons/io";
import {
    ImSpoonKnife
} from "react-icons/im";
import {
    MdOutlineSmokeFree
} from "react-icons/md";
import {
    LuAirVent
} from "react-icons/lu";
export default function Room() {
    return (
        <div className="w-full border  xl:rounded-lg xl:px-8 xl:py-8">
            <div className="flex justify-start xl:flex-row flex-col">
                <div className="flex flex-col">
                    <div className="relative xl:w-64 w-full xl:h-32  h-40 overflow-hidden rounded-md cursor-pointer me-2 xl:mb-0 mb-2">
                        <Image
                            src={"/img/01.webp"}
                            alt="Example image"
                            layout="fill"
                            className="object-cover rounded-md transition-transform duration-300 hover:scale-110"
                            quality={80}
                        />
                    </div>
                    <div className="mt-2">
                        <IoIosBed className="me-2 inline-flex" />
                        <span className="text-md font-bold">เตียงใหญ่ 1 เตียง</span>
                    </div>
                    <div className="mt-2">
                        <MdOutlineSmokeFree className="me-2 inline-flex" />
                        <span className="text-sm font-medium">ห้ามสูบบุรี่</span>
                    </div>
                    <div className="mt-2 text-cyan-600">
                        <FaWifi className="me-2 inline-flex" />
                        <span className="text-sm  font-medium">Wi-Fi ฟรี</span>
                    </div>
                    <div className="mt-2 ">
                        <LuAirVent className="me-2 inline-flex" />
                        <span className="text-sm  font-medium">เครื่องปรับอากาศ</span>
                    </div>
                    <div className="mt-2 mb-2">
                        <button className="text-sm text-blue-600 font-semibold hover:underline">รายละเอียดเพิ่มเติม</button>
                    </div>
                </div>
                <div className="relative overflow-x-auto w-full ">
                    <table className="border rounded-lg border-gray-300 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="overflow-hidden truncate text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3 ">
                                    รายละเอียด
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">
                                    จำนวนผู้เข้าพัก
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">
                                    ราคาวันนี้
                                </th>
                            </tr>
                        </thead>
                        <tbody className="overflow-hidden truncate">
                            <tr className="bg-white border-b">
                                <td scope="row" className="px-6 py-4 ">
                                    <ul className="flex flex-col font-medium text-gray-800">
                                        <li className="mb-2">
                                            <span className=" rounded-sm px-2 py-1 border border-cyan-600 text-cyan-600 text-xs ">
                                                แพ็คเกจทั้งหมด
                                            </span>
                                        </li>
                                        <li>
                                            <ImSpoonKnife className="me-2 inline-flex" />เลือกซื้ออาหารเช้าในราคา <b>฿ 388.80</b>
                                        </li>
                                        <li>
                                            <FaMoneyBill className="me-2 inline-flex text-pink-600" />ขอคืนเงินไม่ได้
                                        </li>
                                        <li>
                                            <FaBoltLightning className="me-2 inline-flex text-cyan-600" />ยืนยันทันที
                                        </li>
                                        <li>
                                            <FaCreditCard className="me-2 inline-flex " />ชำระเงินล่วงหน้าทางออนไลน์
                                        </li>
                                    </ul>
                                </td>
                                <td className="px-6 py-4 text-gray-900 text-center">
                                    <FaUser className="me-2 inline-flex " />
                                    <FaUser className="me-2 inline-flex " />
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-center flex-nowrap">
                                        <div className="flex flex-col  items-end me-2">
                                            <span className=" rounded-sm px-2 py-1 bg-pink-600 text-white text-xs">
                                                ส่วนลด 20 %
                                            </span>
                                            <div className="flex gap-2 items-center ">
                                                <span className="text-xs text-gray-700 line-through">
                                                    ฿ 5,180
                                                </span>
                                                <span className="text-xl font-semibold text-gray-900 ">
                                                    ฿ 5,162
                                                </span>
                                            </div>
                                            <span className="text-gray-900 text-xs font-medium overline decoration-dashed ">
                                                ทั้งหมด (รวมภาษี): ฿ 5,725
                                            </span>
                                            <span className="text-gray-900 text-xs font-medium  ">
                                                1 ห้อง × 1 คืน
                                            </span>
                                        </div>
                                        <div className="flex flex-col text-center items-center">
                                            <p className="font-semibold text-rose-500 text-sm mb-2">เหลือ 2 ห้องสุดท้าย</p>
                                            <button className="rounded-sm text-white bg-black py-2.5 px-10 hover:text-black hover:bg-white border border-black">
                                                จองห้องพัก
                                            </button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-white border-b">
                                <td scope="row" className="px-6 py-4 ">
                                    <ul className="flex flex-col font-medium text-gray-800">
                                        <li>
                                            <ImSpoonKnife className="me-2 inline-flex" />เลือกซื้ออาหารเช้าในราคา <b>฿ 388.80</b>
                                        </li>
                                        <li>
                                            <FaMoneyBill className="me-2 inline-flex text-pink-600" />ขอคืนเงินไม่ได้
                                        </li>
                                        <li>
                                            <FaBoltLightning className="me-2 inline-flex text-cyan-600" />ยืนยันทันที
                                        </li>
                                        <li>
                                            <FaCreditCard className="me-2 inline-flex " />ชำระเงินล่วงหน้าทางออนไลน์
                                        </li>
                                    </ul>
                                </td>
                                <td className="px-6 py-4 text-gray-900 text-center">
                                    <FaUser className="me-2 inline-flex " />
                                    <FaUser className="me-2 inline-flex " />
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-center flex-nowrap">
                                        <div className="flex flex-col  items-end me-2">
                                            <span className=" rounded-sm px-2 py-1 bg-pink-600 text-white text-xs">
                                                ส่วนลด 20 %
                                            </span>
                                            <div className="flex gap-2 items-center ">
                                                <span className="text-xs text-gray-700 line-through">
                                                    ฿ 5,180
                                                </span>
                                                <span className="text-xl font-semibold text-gray-900 ">
                                                    ฿ 5,162
                                                </span>
                                            </div>
                                            <span className="text-gray-900 text-xs font-medium overline decoration-dashed ">
                                                ทั้งหมด (รวมภาษี): ฿ 5,725
                                            </span>
                                            <span className="text-gray-900 text-xs font-medium  ">
                                                1 ห้อง × 1 คืน
                                            </span>
                                        </div>
                                        <div className="flex flex-col text-center items-center">
                                            <p className="font-semibold text-rose-500 text-sm mb-2">เหลือ 2 ห้องสุดท้าย</p>
                                            <button className="rounded-sm text-white bg-black py-2.5 px-10 hover:text-black hover:bg-white border border-black">
                                                จองห้องพัก
                                            </button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
