import { IoMdArrowDropdown } from "react-icons/io";
import { SelectDoctorContainer } from "./AppointmentContainerStyles";
import { useRef, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";

const SelectDoctor = () => {
	const departments = ["Cardiology", "Surgery", "Eye", "Cancer", "Cardiology-1", "Cardiology-2"];
	const availableDoctors = ["Joseph Williamson", "Christian Nzeanorue", "Prince Ogbonna", "Christian Nzeanorue-1", "Prince Ogbonna-1"];
	const times = ["09:00 am", "10:00 am", "11:00 am", "12:00 pm", "1:00 pm", "2:00 pm", "3:00 pm"];

	const [selectDoctor, setSelectDoctor] = useState({
		department: "",
		availableDoctor: "",
	});

	// Select Department
	const departmentRef = useRef(null);
	const [showDepartment, setShowDepartment] = useState(false);

	const handleShowDepartment = () => setShowDepartment(!showDepartment);
	const handleCloseDepartment = () => setShowDepartment(false);

	useClickOutside(departmentRef, handleCloseDepartment);

	// Available Doctor
	const doctorRef = useRef(null);
	const [showDoctors, setShowDoctors] = useState(false);

	const handleShowDoctor = () => setShowDoctors(!showDoctors);
	const handleCloseDoctor = () => setShowDoctors(false);

	useClickOutside(doctorRef, handleCloseDoctor);

	return (
		<SelectDoctorContainer>
			<div className="select-doctor-wrapper">
				<div className="heading_1">Select Doctor</div>

				<div className="select-doctor-info">
					<div className="doctor-info">
						<div className="select-department-wrapper">
							<span className="heading_2">Select Department</span>

							<div className="department" onClick={handleShowDepartment}>
								<div className="selected-department">
									<span>{selectDoctor.department ? `${selectDoctor.department} Department` : `${departments[0]} Department`}</span>
									<IoMdArrowDropdown size={19} />
								</div>

								{showDepartment && (
									<ul className="departments-list animate__animated animate__zoomIn animate__faster" ref={departmentRef}>
										{departments.map((department) => (
											<li
												key={department}
												className="department-name"
												onClick={() => {
													handleCloseDepartment();
													setSelectDoctor({ ...selectDoctor, department: department });
												}}>{`${department} Department`}</li>
										))}
									</ul>
								)}
							</div>
						</div>

						<div className="available-doctor">
							<span className="heading_2">Available Doctors</span>

							<div className="selected-available-doctor" onClick={handleShowDoctor}>
								<div className="selected-doctor">
									<span>{selectDoctor.availableDoctor ? `Dr. ${selectDoctor.availableDoctor}` : `Dr. ${availableDoctors[0]}`}</span>
									<IoMdArrowDropdown size={19} />
								</div>

								{showDoctors && (
									<ul className="departments-list animate__animated animate__zoomIn animate__faster" ref={doctorRef}>
										{availableDoctors.map((doctor) => (
											<li
												key={doctor}
												className="doctor-name"
												onClick={() => {
													handleCloseDoctor();
													setSelectDoctor({ ...selectDoctor, availableDoctor: doctor });
												}}>{`Dr. ${doctor}`}</li>
										))}
									</ul>
								)}
							</div>
						</div>
					</div>
					<div className="select-date">
						<span className="heading_2">Select Date</span>

						<div className="dates">Dates here</div>
					</div>
					<div className="select-time">
						<span className="heading_2">Select Time</span>

						<div className="timesContainer">
							{times.map((time) => (
								<button key={time} className="time">
									{time}
								</button>
							))}
						</div>
					</div>
				</div>
			</div>
		</SelectDoctorContainer>
	);
};

export default SelectDoctor;
