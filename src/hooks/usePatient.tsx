const patientList = [
	{ name: "Jimmy Taylor", phone_number: "09037867534", email_address: "nzeanoruec@gmail.com", status: "Discharged", visited_for: "Flue", time: "12 Jun, 21 12:30 pm" },
	{ name: "Jimmy Chris", phone_number: "08037978653", email_address: "nzeanoruec@gmail.com", status: "Consulted", visited_for: "Hipetania, Asthma", time: "12 Jun, 21 12:30 pm" },
	{ name: "Peter Nnanna", phone_number: "09078645635", email_address: "nzeanoruec@gmail.com", status: "Admitted (A2-11)", visited_for: "Cardiac Surgery", time: "12 Jun, 21 12:30 pm" },
	{ name: "Mary Janet", phone_number: "08027389736", email_address: "nzeanoruec@gmail.com", status: "Admitted (B12-08)", visited_for: "Hipetania, Asthma", time: "12 Jun, 21 12:30 pm" },
	{ name: "Jimmy Taylor", phone_number: "09037867534", email_address: "nzeanoruec@gmail.com", status: "Discharged", visited_for: "Skin Alergy", time: "12 Jun, 21 12:30 pm" },
	{ name: "Jimmy Chris", phone_number: "08037978653", email_address: "nzeanoruec@gmail.com", status: "Consulted", visited_for: "Fracture", time: "12 Jun, 21 12:30 pm" },

	{ name: "Peter Nnanna", phone_number: "09078645635", email_address: "nzeanoruec@gmail.com", status: "Admitted (A2-11)", visited_for: "Flue, Cold", time: "12 Jun, 21 12:30 pm" },

	{ name: "Mary Janet", phone_number: "08027389736", email_address: "nzeanoruec@gmail.com", status: "Admitted (B12-08)", visited_for: "Fracture, Surgery", time: "12 Jun, 21 12:30 pm" },
	{ name: "Jimmy Taylor", phone_number: "09037867534", email_address: "nzeanoruec@gmail.com", status: "Discharged", visited_for: "Brain Tumour", time: "12 Jun, 21 12:30 pm" },
	{ name: "Jimmy Chris", phone_number: "08037978653", email_address: "nzeanoruec@gmail.com", status: "Consulted", visited_for: "Cardiac Surgery", time: "12 Jun, 21 12:30 pm" },

	{ name: "Peter Nnanna", phone_number: "09078645635", email_address: "nzeanoruec@gmail.com", status: "Admitted (A2-11)", visited_for: "Fracture", time: "12 Jun, 21 12:30 pm" },

	{ name: "Mary Janet", phone_number: "08027389736", email_address: "nzeanoruec@gmail.com", status: "Admitted (B12-08)", visited_for: "Flue", time: "12 Jun, 21 12:30 pm" },
	{ name: "Jimmy Taylor", phone_number: "09037867534", email_address: "nzeanoruec@gmail.com", status: "Discharged", visited_for: "Flue", time: "12 Jun, 21 12:30 pm" },
	{ name: "Jimmy Chris", phone_number: "08037978653", email_address: "nzeanoruec@gmail.com", status: "Consulted", visited_for: "Flue", time: "12 Jun, 21 12:30 pm" },

	{ name: "Peter Nnanna", phone_number: "09078645635", email_address: "nzeanoruec@gmail.com", status: "Admitted (A2-11)", visited_for: "Flue", time: "12 Jun, 21 12:30 pm" },

	{ name: "Mary Janet", phone_number: "08027389736", email_address: "nzeanoruec@gmail.com", status: "Admitted (B12-08)", visited_for: "Flue", time: "12 Jun, 21 12:30 pm" },
	{ name: "Jimmy Taylor", phone_number: "09037867534", email_address: "nzeanoruec@gmail.com", status: "Discharged", visited_for: "Flue", time: "12 Jun, 21 12:30 pm" },
	{ name: "Jimmy Chris", phone_number: "08037978653", email_address: "nzeanoruec@gmail.com", status: "Consulted", visited_for: "Flue", time: "12 Jun, 21 12:30 pm" },

	{ name: "Peter Nnanna", phone_number: "09078645635", email_address: "nzeanoruec@gmail.com", status: "Admitted (A2-11)", visited_for: "Flue", time: "12 Jun, 21 12:30 pm" },

	{ name: "Mary Janet", phone_number: "08027389736", email_address: "nzeanoruec@gmail.com", status: "Admitted (B12-08)", visited_for: "Flue", time: "12 Jun, 21 12:30 pm" },
	{ name: "Jimmy Taylor", phone_number: "09037867534", email_address: "nzeanoruec@gmail.com", status: "Discharged", visited_for: "Flue", time: "12 Jun, 21 12:30 pm" },
	{ name: "Jimmy Chris", phone_number: "08037978653", email_address: "nzeanoruec@gmail.com", status: "Consulted", visited_for: "Flue", time: "12 Jun, 21 12:30 pm" },

	{ name: "Peter Nnanna", phone_number: "09078645635", email_address: "nzeanoruec@gmail.com", status: "Admitted (A2-11)", visited_for: "Flue", time: "12 Jun, 21 12:30 pm" },

	{ name: "Mary Janet", phone_number: "08027389736", email_address: "nzeanoruec@gmail.com", status: "Admitted (B12-08)", visited_for: "Flue", time: "12 Jun, 21 12:30 pm" },
	{ name: "Jimmy Taylor", phone_number: "09037867534", email_address: "nzeanoruec@gmail.com", status: "Discharged", visited_for: "Flue", time: "12 Jun, 21 12:30 pm" },
	{ name: "Jimmy Chris", phone_number: "08037978653", email_address: "nzeanoruec@gmail.com", status: "Consulted", visited_for: "Flue", time: "12 Jun, 21 12:30 pm" },

	{ name: "Peter Nnanna", phone_number: "09078645635", email_address: "nzeanoruec@gmail.com", status: "Admitted (A2-11)", visited_for: "Flue", time: "12 Jun, 21 12:30 pm" },

	{ name: "Mary Janet", phone_number: "08027389736", email_address: "nzeanoruec@gmail.com", status: "Admitted (B12-08)", visited_for: "Flue", time: "12 Jun, 21 12:30 pm" },
	{ name: "Jimmy Taylor", phone_number: "09037867534", email_address: "nzeanoruec@gmail.com", status: "Discharged", visited_for: "Flue", time: "12 Jun, 21 12:30 pm" },
	{ name: "Jimmy Chris", phone_number: "08037978653", email_address: "nzeanoruec@gmail.com", status: "Consulted", visited_for: "Flue", time: "12 Jun, 21 12:30 pm" },
	{ name: "Peter Nnanna", phone_number: "09078645635", email_address: "nzeanoruec@gmail.com", status: "Admitted (A2-11)", visited_for: "Flue", time: "12 Jun, 21 12:30 pm" },
	{ name: "Mary Janet", phone_number: "08027389736", email_address: "nzeanoruec@gmail.com", status: "Admitted (B12-08)", visited_for: "Flue", time: "12 Jun, 21 12:30 pm" },
	{ name: "Jimmy Taylor", phone_number: "09037867534", email_address: "nzeanoruec@gmail.com", status: "Discharged", visited_for: "Flue", time: "12 Jun, 21 12:30 pm" },
	{ name: "Jimmy Chris", phone_number: "08037978653", email_address: "nzeanoruec@gmail.com", status: "Consulted", visited_for: "Flue", time: "12 Jun, 21 12:30 pm" },

	{ name: "Peter Nnanna", phone_number: "09078645635", email_address: "nzeanoruec@gmail.com", status: "Admitted (A2-11)", visited_for: "Flue", time: "12 Jun, 21 12:30 pm" },

	{ name: "Mary Janet", phone_number: "08027389736", email_address: "nzeanoruec@gmail.com", status: "Admitted (B12-08)", visited_for: "Flue", time: "12 Jun, 21 12:30 pm" },
];

export { patientList };
