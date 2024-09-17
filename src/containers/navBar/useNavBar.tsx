import { FaPlusSquare } from "react-icons/fa";
import { MdAirlineSeatReclineExtra, MdCollections, MdOutlinePostAdd } from "react-icons/md";
import { PiCalendarDotsBold } from "react-icons/pi";
import { RiHourglassFill } from "react-icons/ri";

export const dashboardNavLink = [
	{ icon: <MdOutlinePostAdd />, name: "POS", link: "" },
	{ icon: <MdCollections />, name: "Transactions", link: "" },
	{ icon: <MdAirlineSeatReclineExtra />, name: "Bookings", link: "" },
	{ icon: <RiHourglassFill />, name: "Order Status", link: "" },
];

export const mainNavLink = [
	{ icon: <PiCalendarDotsBold />, name: "Appointments", link: "" },
	{ icon: <FaPlusSquare />, name: "Doctors", link: "" },
	{ icon: <MdAirlineSeatReclineExtra />, name: "Patients", link: "" },
	{ icon: <RiHourglassFill />, name: "Rooms", link: "" },
	{ icon: <RiHourglassFill />, name: "Staff", link: "" },
];
