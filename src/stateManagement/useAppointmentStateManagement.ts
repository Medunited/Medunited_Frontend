import { create } from "zustand";

type AddAppointmentDetails = {
	doctorName: string;
	department: string;
	date: string;
	time: string;
	visitedOrFirstTime: string;
	patientName: string;
	patientNumber: string;
	patientEmailAddress: string;
};

interface LoginProps {
	appointmentDetails: AddAppointmentDetails;
	setAddAppointment: (name: string, value: string) => void;
}

const useAppointmentStateManagement = create<LoginProps>((set) => ({
	appointmentDetails: {
		doctorName: "",
		department: "",
		date: "",
		time: "",
		visitedOrFirstTime: "",
		patientName: "",
		patientNumber: "",
		patientEmailAddress: "",
	},
	setAddAppointment: (name, value) => set((store) => ({ appointmentDetails: { ...store.appointmentDetails, [name]: value } })),
}));

export default useAppointmentStateManagement;
