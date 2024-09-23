import { create } from "zustand";

interface AppointmentProps {
	appointmentListStartPage: number;
	appointmentListEndPage: number;
	appointmentListPageLimit: number;

	doctorStartPage: number;
	doctorEndPage: number;
	doctorPageLimit: number;

	pageNoIndex: number;
	setPageNoIndex: (index: number) => void;

	setItemPerPage: (pageNo: number) => void;

	nextPage: (listStartName: string, listEndName: string, pagelimit: number, pageNumber: number) => void;
}

const useAppointmentStateManagement = create<AppointmentProps>((set) => ({
	appointmentListStartPage: 0,
	appointmentListEndPage: 7,
	appointmentListPageLimit: 7,

	pageNoIndex: 1,
	setPageNoIndex: (index) => set(() => ({ pageNoIndex: index })),

	doctorStartPage: 0,
	doctorEndPage: 7,
	doctorPageLimit: 7,

	nextPage: (listStartName, listEndName, pagelimit, pageNumber) => set(() => ({ [listStartName]: pageNumber, [listEndName]: pageNumber + pagelimit })),

	setItemPerPage: (pageNumber) => set(() => ({ appointmentListStartPage: 0, appointmentListEndPage: pageNumber, appointmentListPageLimit: pageNumber })),
}));

export default useAppointmentStateManagement;
