// Shared Team Data - แก้ไขที่นี่จะอัปเดตทั้ง Home.jsx และ Team.jsx
import jirasinImg from '../assets/team/jirasit.jpg';
import ChumsakImg from '../assets/team/อาจารย์ชุม.jpg';
import PratchayaImg from '../assets/team/ปรัชญาHD.png';
import TanonImg from '../assets/team/ธณณ.png';


export const teamMembers = [
    {
        name: "ปรัชญา ปิ่นแก้ว",
        nameEn: "Pratchaya Pinlaew",
        role: "DIRECTOR",
        image: PratchayaImg
    },
    {
        name: "จิรสิน ขนิษฐานันท์",
        nameEn: "Jirasin Kanisathan",
        role: "CO-FOUNDER / CEO",
        image: jirasinImg
    },
    {
        name: "ฐณณ ธนกรประภา",
        nameEn: "Tanon Thongkrathap",
        role: "CO-FOUNDER / EXECUTIVE DIRECTOR",
        image: TanonImg
    },
    {
        name: "ผศ.ชุมศักดิ์ สีบุญเรือง",
        nameEn: "Chumsak Si Bunruang",
        role: "CO-FOUNDER",
        image: ChumsakImg
    }
];
