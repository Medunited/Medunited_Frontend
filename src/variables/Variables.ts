// Text Color
export const textColor = {
	text_primary_color: "rgb(77, 77, 77)",
	text_primary_light: "rgb(132, 135, 146)",
	text_white: "#fff",
	text_dark: "#000",
};

// Background Colors
export const bgColor = {
	bg_primary_color: "rgb(88, 92, 229)",
	bg_secondary_color: "rgb(30,196,245)",
	bg_primary_color_hover: "rgb(64, 70, 248)",
	input_bg_color: "rgb(248,249,253)",
	bg_color_light: "rgba(0, 0, 0, 0.3)",

	bg_white: "#fff",
	bg_dark: "#000",
};

// Border colors
export const borderColor = {
	border_color: "rgba(132, 135, 146, .2)",
};

// Font Sizes
export const fontSize = {
	font_size_medium: "1.4rem",
	font_size_small: "1.2rem",
};

// Icon Sizes
export const icon = {
	size: "2rem",
};

export const transform = {
	menu_transform: `
	 	transform: scale(0.9);
		transition: transform 0.2s;

		position: relative;

		&:hover {
			transform: scale(1);
		}

		&:active {
			transform: scale(0.9);
		}
	`,

	text_transform: `
	 	transform: scale(0.8);
		transition: transform 0.2s;

		position: relative;

		&:hover {
			transform: scale(0.9);
		}

		&:active {
			transform: scale(0.8);
		}
	`,
};
