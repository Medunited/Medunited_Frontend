import { create } from "zustand";

interface AppointmentProps {
	appointmentListStartPage: number;
	appointmentListEndPage: number;
	appointmentListPageLimit: number;

	doctorStartPage: number;
	doctorEndPage: number;
	doctorPageLimit: number;

	nextPage: (listStartName: string, listEndName: string, pagelimit: number, pageNumber: number) => void;
}

const useAppointmentStateManagement = create<AppointmentProps>((set) => ({
	appointmentListStartPage: 0,
	appointmentListEndPage: 7,
	appointmentListPageLimit: 7,

	doctorStartPage: 0,
	doctorEndPage: 7,
	doctorPageLimit: 7,

	nextPage: (listStartName, listEndName, pagelimit, pageNumber) => set(() => ({ [listStartName]: pageNumber, [listEndName]: pageNumber + pagelimit })),
}));

export default useAppointmentStateManagement;
