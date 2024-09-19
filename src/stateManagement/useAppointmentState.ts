import { create } from "zustand";

interface AppointmentProps {
	startPage: number;
	endPage: number;

	nextPage: (pageNumber: number) => void;
}

const useAppointmentStateManagement = create<AppointmentProps>((set) => ({
	startPage: 0,
	endPage: 7,
	nextPage: (pageNumber) => set(() => ({ startPage: pageNumber, endPage: pageNumber + 7 })),
}));

export default useAppointmentStateManagement;
