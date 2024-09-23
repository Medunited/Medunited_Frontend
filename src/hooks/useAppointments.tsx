const appointmentsList = [
	{ name: "Samantha Chris first", appointmentDate: "18 Jan 21", treatment: "Diagnosing and treating Chest Pain", doctorDept: "Cardiology", bookedWith: "App Appointment", appoitmentBookedDate: "15 Jan, 2021, 02:21 pm", status: "Accepted", appointmentTime: "12:00 pm", doctor: "Dr. Joseph Williamson" },
	{ name: "Samantha Smith", appointmentDate: "18 Jan 21", treatment: "Diagnosing and treating Chest Pain", doctorDept: "Cardiology", bookedWith: "Kiosk Appointment", appoitmentBookedDate: "15 Jan, 2021, 02:21 pm", status: "Pending", appointmentTime: "2:00 pm", doctor: "Dr. Prince Ogbonna" },
	{ name: "Samantha Smith", appointmentDate: "18 Jan 21", treatment: "Diagnosing and treating Chest Pain", doctorDept: "Cardiology", bookedWith: "App Appointment", appoitmentBookedDate: "15 Jan, 2021, 02:21 pm", status: "Accepted", appointmentTime: "1:00 pm", doctor: "Dr. Christian Nzeanorue" },
	{ name: "Samantha Smith", appointmentDate: "18 Jan 21", treatment: "Diagnosing and treating Chest Pain", doctorDept: "Cardiology", bookedWith: "Walk-in Appointment", appoitmentBookedDate: "15 Jan, 2021, 02:21 pm", status: "Pending", appointmentTime: "11:00 am", doctor: "Dr. Joseph William" },
	{ name: "Samantha Smith", appointmentDate: "18 Jan 21", treatment: "Diagnosing and treating Chest Pain", doctorDept: "Cardiology", bookedWith: "App Appointment", appoitmentBookedDate: "15 Jan, 2021, 02:21 pm", status: "Accepted", appointmentTime: "3:00 pm", doctor: "Dr. Joseph Williamson" },
	{ name: "Samantha Smith", appointmentDate: "18 Jan 21", treatment: "Diagnosing and treating Chest Pain", doctorDept: "Cardiology", bookedWith: "Walk-in Appointment", appoitmentBookedDate: "15 Jan, 2021, 02:21 pm", status: "Pending", appointmentTime: "4:00 pm", doctor: "Dr. Joseph Williamson" },
	{ name: "Samantha Smith 7", appointmentDate: "18 Jan 21", treatment: "Diagnosing and treating Chest Pain", doctorDept: "Cardiology", bookedWith: "Kiosk Appointment", appoitmentBookedDate: "15 Jan, 2021, 02:21 pm", status: "Accepted", appointmentTime: "9:00 am", doctor: "Dr. Joseph Williamson" },
	{ name: "Samantha Smith 8", appointmentDate: "18 Jan 21", treatment: "Diagnosing and treating Chest Pain", doctorDept: "Cardiology", bookedWith: "App Appointment", appoitmentBookedDate: "15 Jan, 2021, 02:21 pm", status: "Pending", appointmentTime: "10:00 am", doctor: "Dr. Joseph Williamson" },
	{ name: "Samantha Smith", appointmentDate: "18 Jan 21", treatment: "Diagnosing and treating Chest Pain", doctorDept: "Cardiology", bookedWith: "App Appointment", appoitmentBookedDate: "15 Jan, 2021, 02:21 pm", status: "Accepted", appointmentTime: "12:00 pm", doctor: "Dr. Joseph Williamson" },
	{ name: "Samantha Smith", appointmentDate: "18 Jan 21", treatment: "Diagnosing and treating Chest Pain", doctorDept: "Cardiology", bookedWith: "App Appointment", appoitmentBookedDate: "15 Jan, 2021, 02:21 pm", status: "Accepted", appointmentTime: "3:00 pm", doctor: "Dr. Joseph Williamson" },
	{ name: "Samantha Smith", appointmentDate: "18 Jan 21", treatment: "Diagnosing and treating Chest Pain", doctorDept: "Cardiology", bookedWith: "Walk-in Appointment", appoitmentBookedDate: "15 Jan, 2021, 02:21 pm", status: "Pending", appointmentTime: "4:00 pm", doctor: "Dr. Joseph Williamson" },
	{ name: "Samantha Smith", appointmentDate: "18 Jan 21", treatment: "Diagnosing and treating Chest Pain", doctorDept: "Cardiology", bookedWith: "Kiosk Appointment", appoitmentBookedDate: "15 Jan, 2021, 02:21 pm", status: "Accepted", appointmentTime: "9:00 am", doctor: "Dr. Joseph Williamson" },
	{ name: "Samantha Smith", appointmentDate: "18 Jan 21", treatment: "Diagnosing and treating Chest Pain", doctorDept: "Cardiology", bookedWith: "App Appointment", appoitmentBookedDate: "15 Jan, 2021, 02:21 pm", status: "Pending", appointmentTime: "10:00 am", doctor: "Dr. Joseph Williamson" },
	{ name: "Samantha Smith 14", appointmentDate: "18 Jan 21", treatment: "Diagnosing and treating Chest Pain", doctorDept: "Cardiology", bookedWith: "App Appointment", appoitmentBookedDate: "15 Jan, 2021, 02:21 pm", status: "Accepted", appointmentTime: "12:00 pm", doctor: "Dr. Joseph Williamson" },
	{ name: "Samantha Smith 15", appointmentDate: "18 Jan 21", treatment: "Diagnosing and treating Chest Pain", doctorDept: "Cardiology", bookedWith: "App Appointment", appoitmentBookedDate: "15 Jan, 2021, 02:21 pm", status: "Accepted", appointmentTime: "3:00 pm", doctor: "Dr. Joseph Williamson" },
	{ name: "Samantha Smith", appointmentDate: "18 Jan 21", treatment: "Diagnosing and treating Chest Pain", doctorDept: "Cardiology", bookedWith: "Walk-in Appointment", appoitmentBookedDate: "15 Jan, 2021, 02:21 pm", status: "Pending", appointmentTime: "4:00 pm", doctor: "Dr. Joseph Williamson" },
	{ name: "Samantha Smith", appointmentDate: "18 Jan 21", treatment: "Diagnosing and treating Chest Pain", doctorDept: "Cardiology", bookedWith: "Kiosk Appointment", appoitmentBookedDate: "15 Jan, 2021, 02:21 pm", status: "Accepted", appointmentTime: "9:00 am", doctor: "Dr. Joseph Williamson" },
	{ name: "Samantha Smith", appointmentDate: "18 Jan 21", treatment: "Diagnosing and treating Chest Pain", doctorDept: "Cardiology", bookedWith: "App Appointment", appoitmentBookedDate: "15 Jan, 2021, 02:21 pm", status: "Pending", appointmentTime: "10:00 am", doctor: "Dr. Joseph Williamson" },
	{ name: "Samantha Smith", appointmentDate: "18 Jan 21", treatment: "Diagnosing and treating Chest Pain", doctorDept: "Cardiology", bookedWith: "App Appointment", appoitmentBookedDate: "15 Jan, 2021, 02:21 pm", status: "Accepted", appointmentTime: "12:00 pm", doctor: "Dr. Joseph Williamson" },
	{ name: "Samantha Smith", appointmentDate: "18 Jan 21", treatment: "Diagnosing and treating Chest Pain", doctorDept: "Cardiology", bookedWith: "App Appointment", appoitmentBookedDate: "15 Jan, 2021, 02:21 pm", status: "Accepted", appointmentTime: "3:00 pm", doctor: "Dr. Joseph Williamson" },
	{ name: "Samantha Smith 21", appointmentDate: "18 Jan 21", treatment: "Diagnosing and treating Chest Pain", doctorDept: "Cardiology", bookedWith: "Walk-in Appointment", appoitmentBookedDate: "15 Jan, 2021, 02:21 pm", status: "Pending", appointmentTime: "4:00 pm", doctor: "Dr. Joseph Williamson" },
	{ name: "Samantha Smith 22", appointmentDate: "18 Jan 21", treatment: "Diagnosing and treating Chest Pain", doctorDept: "Cardiology", bookedWith: "Kiosk Appointment", appoitmentBookedDate: "15 Jan, 2021, 02:21 pm", status: "Accepted", appointmentTime: "9:00 am", doctor: "Dr. Joseph Williamson" },
	{ name: "Samantha Smith", appointmentDate: "18 Jan 21", treatment: "Diagnosing and treating Chest Pain", doctorDept: "Cardiology", bookedWith: "App Appointment", appoitmentBookedDate: "15 Jan, 2021, 02:21 pm", status: "Pending", appointmentTime: "10:00 am", doctor: "Dr. Joseph Williamson" },
	{ name: "Samantha Last", appointmentDate: "18 Jan 21", treatment: "Diagnosing and treating Chest Pain", doctorDept: "Cardiology", bookedWith: "App Appointment", appoitmentBookedDate: "15 Jan, 2021, 02:21 pm", status: "Accepted", appointmentTime: "12:00 pm", doctor: "Dr. Joseph Williamson" },
	{ name: "Samantha Smith", appointmentDate: "18 Jan 21", treatment: "Diagnosing and treating Chest Pain", doctorDept: "Cardiology", bookedWith: "App Appointment", appoitmentBookedDate: "15 Jan, 2021, 02:21 pm", status: "Pending", appointmentTime: "10:00 am", doctor: "Dr. Joseph Williamson" },
	{ name: "Samantha Last", appointmentDate: "18 Jan 21", treatment: "Diagnosing and treating Chest Pain", doctorDept: "Cardiology", bookedWith: "App Appointment", appoitmentBookedDate: "15 Jan, 2021, 02:21 pm", status: "Accepted", appointmentTime: "12:00 pm", doctor: "Dr. Joseph Williamson" },
	{ name: "Samantha Smith", appointmentDate: "18 Jan 21", treatment: "Diagnosing and treating Chest Pain", doctorDept: "Cardiology", bookedWith: "App Appointment", appoitmentBookedDate: "15 Jan, 2021, 02:21 pm", status: "Pending", appointmentTime: "10:00 am", doctor: "Dr. Joseph Williamson" },
	{ name: "Samantha Last", appointmentDate: "18 Jan 21", treatment: "Diagnosing and treating Chest Pain", doctorDept: "Cardiology", bookedWith: "App Appointment", appoitmentBookedDate: "15 Jan, 2021, 02:21 pm", status: "Accepted", appointmentTime: "12:00 pm", doctor: "Dr. Joseph Williamson" },
	{ name: "Samantha Smith", appointmentDate: "18 Jan 21", treatment: "Diagnosing and treating Chest Pain", doctorDept: "Cardiology", bookedWith: "App Appointment", appoitmentBookedDate: "15 Jan, 2021, 02:21 pm", status: "Pending", appointmentTime: "10:00 am", doctor: "Dr. Joseph Williamson" },
	{ name: "Samantha Last", appointmentDate: "18 Jan 21", treatment: "Diagnosing and treating Chest Pain", doctorDept: "Cardiology", bookedWith: "App Appointment", appoitmentBookedDate: "15 Jan, 2021, 02:21 pm", status: "Accepted", appointmentTime: "12:00 pm", doctor: "Dr. Joseph Williamson" },
	{ name: "Samantha Smith", appointmentDate: "18 Jan 21", treatment: "Diagnosing and treating Chest Pain", doctorDept: "Cardiology", bookedWith: "App Appointment", appoitmentBookedDate: "15 Jan, 2021, 02:21 pm", status: "Pending", appointmentTime: "10:00 am", doctor: "Dr. Joseph Williamson" },
	{ name: "Samantha Last", appointmentDate: "18 Jan 21", treatment: "Diagnosing and treating Chest Pain", doctorDept: "Cardiology", bookedWith: "App Appointment", appoitmentBookedDate: "15 Jan, 2021, 02:21 pm", status: "Accepted", appointmentTime: "12:00 pm", doctor: "Dr. Joseph Williamson" },
	{ name: "Samantha Smith", appointmentDate: "18 Jan 21", treatment: "Diagnosing and treating Chest Pain", doctorDept: "Cardiology", bookedWith: "App Appointment", appoitmentBookedDate: "15 Jan, 2021, 02:21 pm", status: "Pending", appointmentTime: "10:00 am", doctor: "Dr. Joseph Williamson" },
	{ name: "Samantha Last", appointmentDate: "18 Jan 21", treatment: "Diagnosing and treating Chest Pain", doctorDept: "Cardiology", bookedWith: "App Appointment", appoitmentBookedDate: "15 Jan, 2021, 02:21 pm", status: "Accepted", appointmentTime: "12:00 pm", doctor: "Dr. Joseph Williamson" },
	{ name: "Samantha Smith", appointmentDate: "18 Jan 21", treatment: "Diagnosing and treating Chest Pain", doctorDept: "Cardiology", bookedWith: "App Appointment", appoitmentBookedDate: "15 Jan, 2021, 02:21 pm", status: "Pending", appointmentTime: "10:00 am", doctor: "Dr. Joseph Williamson" },
	{ name: "Samantha Last", appointmentDate: "18 Jan 21", treatment: "Diagnosing and treating Chest Pain", doctorDept: "Cardiology", bookedWith: "App Appointment", appoitmentBookedDate: "15 Jan, 2021, 02:21 pm", status: "Accepted", appointmentTime: "12:00 pm", doctor: "Dr. Joseph Williamson" },
	{ name: "Samantha Smith", appointmentDate: "18 Jan 21", treatment: "Diagnosing and treating Chest Pain", doctorDept: "Cardiology", bookedWith: "App Appointment", appoitmentBookedDate: "15 Jan, 2021, 02:21 pm", status: "Pending", appointmentTime: "10:00 am", doctor: "Dr. Joseph Williamson" },
	{ name: "Samantha Last", appointmentDate: "18 Jan 21", treatment: "Diagnosing and treating Chest Pain", doctorDept: "Cardiology", bookedWith: "App Appointment", appoitmentBookedDate: "15 Jan, 2021, 02:21 pm", status: "Accepted", appointmentTime: "12:00 pm", doctor: "Dr. Joseph Williamson" },
	{ name: "Samantha Smith", appointmentDate: "18 Jan 21", treatment: "Diagnosing and treating Chest Pain", doctorDept: "Cardiology", bookedWith: "App Appointment", appoitmentBookedDate: "15 Jan, 2021, 02:21 pm", status: "Pending", appointmentTime: "10:00 am", doctor: "Dr. Joseph Williamson" },
	{ name: "Samantha Last", appointmentDate: "18 Jan 21", treatment: "Diagnosing and treating Chest Pain", doctorDept: "Cardiology", bookedWith: "App Appointment", appoitmentBookedDate: "15 Jan, 2021, 02:21 pm", status: "Accepted", appointmentTime: "12:00 pm", doctor: "Dr. Joseph Williamson" },
	{ name: "Samantha Smith", appointmentDate: "18 Jan 21", treatment: "Diagnosing and treating Chest Pain", doctorDept: "Cardiology", bookedWith: "App Appointment", appoitmentBookedDate: "15 Jan, 2021, 02:21 pm", status: "Pending", appointmentTime: "10:00 am", doctor: "Dr. Joseph Williamson" },
	{ name: "Samantha Last", appointmentDate: "18 Jan 21", treatment: "Diagnosing and treating Chest Pain", doctorDept: "Cardiology", bookedWith: "App Appointment", appoitmentBookedDate: "15 Jan, 2021, 02:21 pm", status: "Accepted", appointmentTime: "12:00 pm", doctor: "Dr. Joseph Williamson" },
	{ name: "Samantha Smith", appointmentDate: "18 Jan 21", treatment: "Diagnosing and treating Chest Pain", doctorDept: "Cardiology", bookedWith: "App Appointment", appoitmentBookedDate: "15 Jan, 2021, 02:21 pm", status: "Pending", appointmentTime: "10:00 am", doctor: "Dr. Joseph Williamson" },
	{ name: "Samantha Last", appointmentDate: "18 Jan 21", treatment: "Diagnosing and treating Chest Pain", doctorDept: "Cardiology", bookedWith: "App Appointment", appoitmentBookedDate: "15 Jan, 2021, 02:21 pm", status: "Accepted", appointmentTime: "12:00 pm", doctor: "Dr. Joseph Williamson" },
	{ name: "Samantha Smith", appointmentDate: "18 Jan 21", treatment: "Diagnosing and treating Chest Pain", doctorDept: "Cardiology", bookedWith: "App Appointment", appoitmentBookedDate: "15 Jan, 2021, 02:21 pm", status: "Pending", appointmentTime: "10:00 am", doctor: "Dr. Joseph Williamson" },
	{ name: "Samantha Last", appointmentDate: "18 Jan 21", treatment: "Diagnosing and treating Chest Pain", doctorDept: "Cardiology", bookedWith: "App Appointment", appoitmentBookedDate: "15 Jan, 2021, 02:21 pm", status: "Accepted", appointmentTime: "12:00 pm", doctor: "Dr. Joseph Williamson" },
	{ name: "Samantha Smith", appointmentDate: "18 Jan 21", treatment: "Diagnosing and treating Chest Pain", doctorDept: "Cardiology", bookedWith: "App Appointment", appoitmentBookedDate: "15 Jan, 2021, 02:21 pm", status: "Pending", appointmentTime: "10:00 am", doctor: "Dr. Joseph Williamson" },
	{ name: "Samantha Last", appointmentDate: "18 Jan 21", treatment: "Diagnosing and treating Chest Pain", doctorDept: "Cardiology", bookedWith: "App Appointment", appoitmentBookedDate: "15 Jan, 2021, 02:21 pm", status: "Accepted", appointmentTime: "12:00 pm", doctor: "Dr. Joseph Williamson" },
	{ name: "Samantha Smith", appointmentDate: "18 Jan 21", treatment: "Diagnosing and treating Chest Pain", doctorDept: "Cardiology", bookedWith: "App Appointment", appoitmentBookedDate: "15 Jan, 2021, 02:21 pm", status: "Pending", appointmentTime: "10:00 am", doctor: "Dr. Joseph Williamson" },
	{ name: "Samantha Last Final", appointmentDate: "18 Jan 21", treatment: "Diagnosing and treating Chest Pain", doctorDept: "Cardiology", bookedWith: "App Appointment", appoitmentBookedDate: "15 Jan, 2021, 02:21 pm", status: "Accepted", appointmentTime: "12:00 pm", doctor: "Dr. Joseph Williamson" },
];

export { appointmentsList };
