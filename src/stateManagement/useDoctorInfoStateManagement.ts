import { create } from "zustand";
import { DoctorProps } from "../containers/doctors/DoctorList";

type Search = {
	doctorName: string;
	patientName: string;
	patient: string;
};

interface DoctorInfoProps {
	doctorInfo: DoctorProps;
	setDoctorInfo: (doctorDetails: DoctorProps) => void;

	searchParam: Search;
	setSearchParam: (searchName: string, searchValue: string) => void;
}

const useDoctorInfoStateManagement = create<DoctorInfoProps>((set) => ({
	doctorInfo: {
		name: "",
		department: "",
		yearsOfExperience: "",
		fees: "",
		rating: 0,
		reviews_number: 0,
		services: [],
		availabilityStart: "",
		availabilityEnd: "",
		ratingStar: null,
	},

	searchParam: {
		doctorName: "",
		patientName: "",
		patient: "",
	},

	setSearchParam: (searchName, searchValue) => set((store) => ({ searchParam: { ...store.searchParam, [searchName]: searchValue } })),

	setDoctorInfo: (doctorDetails) => set(() => ({ doctorInfo: doctorDetails })),
}));

export default useDoctorInfoStateManagement;
