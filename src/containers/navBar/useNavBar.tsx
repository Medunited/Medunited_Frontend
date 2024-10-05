import { FaBed, FaPlusSquare } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { MdAirlineSeatReclineExtra, MdBed, MdCollections, MdOutlinePostAdd } from "react-icons/md";
import { PiCalendarDotsBold } from "react-icons/pi";
import { RiHourglassFill } from "react-icons/ri";

export const dashboardNavLink = [
	{ icon: <MdOutlinePostAdd />, name: "POS", link: "" },
	{ icon: <MdCollections />, name: "Transactions", link: "" },
	{ icon: <MdAirlineSeatReclineExtra />, name: "Bookings", link: "" },
	{ icon: <RiHourglassFill />, name: "Order Status", link: "" },
];

export const mainNavLink = [
	{ icon: <PiCalendarDotsBold />, name: "Appointments", link: "/appointments" },
	{ icon: <FaPlusSquare />, name: "Doctors", link: "/doctors" },
	{ icon: <FaBed />, name: "Patients", link: "/patients" },
	{ icon: <MdBed />, name: "Rooms", link: "" },
	{ icon: <IoPersonSharp />, name: "Staff", link: "" },
];
