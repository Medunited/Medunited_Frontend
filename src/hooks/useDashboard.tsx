import { BsPersonFillAdd } from "react-icons/bs";
import { FaUserNurse, FaBed, FaWarehouse } from "react-icons/fa";

import { bgColor } from "../variables/Variables";
import { FaUserDoctor, FaPersonWalking } from "react-icons/fa6";
import { MdPhoneIphone } from "react-icons/md";

const overviewDetails = [
	{ text: "Admitted patients", icon: <BsPersonFillAdd />, count: 629, bgColor: bgColor.bg_green, page: "" },
	{ text: "Appointments", icon: <FaUserNurse />, count: 68, bgColor: bgColor.bg_yellow_dark, page: "/appointments" },
	{ text: "Rooms Occupied", icon: <FaBed />, count: 64 + "%", bgColor: bgColor.bg_secondary_color, page: "" },
	{ text: "Total Revenue", icon: <FaUserDoctor />, count: 18, bgColor: bgColor.bg_red_dark, page: "" },
];

const navlistItems = [
	{ text: "Patients", onClick: "" },
	{ text: "Appointments", onClick: "" },
	{ text: "Earnings", onClick: "" },
];

const patientAppointment = [
	{ icon: <FaPersonWalking />, text: "Walk-in", count: "558 (79%)", bgColor: bgColor.bg_green },
	{ icon: <MdPhoneIphone />, text: "User App", count: "60 (13%)", bgColor: bgColor.bg_yellow_dark },
	{ icon: <FaWarehouse />, text: "Kiosk", count: "52 (9%)", bgColor: bgColor.bg_secondary_color },
];

const todayPatients = [
	{ firstName: "Samantha", lastName: "Smith", time: "12:00 pm", doctor: "Dr. Joseph Williamson" },
	{ firstName: "Samantha", lastName: "Smith", time: "2:00 pm", doctor: "Dr. Prince Ogbonna" },
	{ firstName: "Samantha", lastName: "Smith", time: "1:00 pm", doctor: "Dr. Christian Nzeanorue" },
	{ firstName: "Samantha", lastName: "Smith", time: "11:00 am", doctor: "Dr. Joseph William" },
	{ firstName: "Samantha", lastName: "Smith", time: "3:00 pm", doctor: "Dr. Joseph Williamson" },
	{ firstName: "Samantha", lastName: "Smith", time: "4:00 pm", doctor: "Dr. Joseph Williamson" },
	{ firstName: "Samantha", lastName: "Smith", time: "9:00 am", doctor: "Dr. Joseph Williamson" },
	{ firstName: "Samantha", lastName: "Smith", time: "10:00 am", doctor: "Dr. Joseph Williamson" },
	{ firstName: "Samantha", lastName: "Smith", time: "12:00 pm", doctor: "Dr. Joseph Williamson" },
];

const doctors = [
	{ profession: "Cardiac Surgeon", availability: "Available", name: "Dr. Joseph Williamson" },
	{ profession: "Cardiac Surgeon", availability: "In 20 mins", name: "Dr. Prince Ogbonna" },
	{ profession: "Cardiac Surgeon", availability: "Not available", name: "Dr. Christian Nzeanorue" },
	{ profession: "Cardiac Surgeon", availability: "11:00 am", name: "Dr. Joseph William" },
	{ profession: "Cardiac Surgeon", availability: "3:00 pm", name: "Dr. Joseph Williamson" },
	{ profession: "Cardiac Surgeon", availability: "4:00 pm", name: "Dr. Joseph Williamson" },
	{ profession: "Cardiac Surgeon", availability: "9:00 am", name: "Dr. Joseph Williamson" },
	{ profession: "Cardiac Surgeon", availability: "10:00 am", name: "Dr. Joseph Williamson" },
	{ profession: "Cardiac Surgeon", availability: "12:00 pm", name: "Dr. Joseph Williamson" },
];

const reviewEmojis = [
	{ id: 4, name: "Excellent", code: "😍", bgColor: bgColor.bg_green },
	{ id: 3, name: "Good", code: "😁", bgColor: bgColor.bg_yellow_dark },
	{ id: 2, name: "OK", code: "😐", bgColor: bgColor.bg_secondary_color },
	{ id: 1, name: "Poor", code: "😢", bgColor: bgColor.bg_red_dark },
];

const reviewQuestions = [
	{ id: 1, question: "How was the treatment at our hospital?", excelletPercent: "20%", goodPercent: "30%", OK: "40%", poorPercent: "10%" },
	{ id: 2, question: "How was the cleaniless at our hospital?", excelletPercent: "10%", goodPercent: "40%", OK: "40%", poorPercent: "10%" },
	{ id: 3, question: "How was the hospital staff behaviour?", excelletPercent: "30%", goodPercent: "30%", OK: "30%", poorPercent: "10%" },
];

export { overviewDetails, navlistItems, patientAppointment, todayPatients, reviewEmojis, reviewQuestions, doctors };
