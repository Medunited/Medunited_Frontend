import { create } from "zustand";
import { DoctorProps } from "../containers/doctors/DoctorList";

interface DoctorInfoProps {
	doctorInfo: DoctorProps;
	setDoctorInfo: (doctorDetails: DoctorProps) => void;
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

	setDoctorInfo: (doctorDetails) => set(() => ({ doctorInfo: doctorDetails })),
}));

export default useDoctorInfoStateManagement;
