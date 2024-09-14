import { FaWarehouse } from "react-icons/fa";
import { FaPersonWalking } from "react-icons/fa6";
import { MdPhoneIphone } from "react-icons/md";
import { bgColor } from "../../variables/Variables";

export const navlistItems = [
	{ text: "Patients", onClick: "" },
	{ text: "Appointments", onClick: "" },
	{ text: "Earnings", onClick: "" },
];

export const patientAppointment = [
	{ icon: <FaPersonWalking />, text: "Walk-in", count: "558 (79%)", bgColor: bgColor.bg_green },
	{ icon: <MdPhoneIphone />, text: "User App", count: "60 (13%)", bgColor: bgColor.bg_yellow_dark },
	{ icon: <FaWarehouse />, text: "Kiosk", count: "52 (9%)", bgColor: bgColor.bg_secondary_color },
];

export const todayPatients = [
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
