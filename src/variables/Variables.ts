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
	bg_secondary_color_light: "rgb(26, 161, 202)",
	bg_primary_color_hover: "rgb(64, 70, 248)",
	input_bg_color: "rgb(248,249,253)",
	bg_color_light: "rgba(0, 0, 0, 0.3)",

	bg_white: "#fff",
	bg_dark: "#000",

	bg_green: "rgb(45, 204, 112)",
	bg_yellow_dark: "rgb(244,193,24)",
	bg_red_dark: "rgb(252,96,81)",
};

// Border colors
export const borderColor = {
	border_color: "rgba(132, 135, 146, .2)",
};

// Font Sizes
export const fontSize = {
	font_size_big: "1.8rem",
	font_size_medium: "1.4rem",
	font_size_medium_1: "1.65rem",
	font_size_small: "1.2rem",
};

// Icon Sizes
export const icon = {
	size: "2rem",
};

// Margin
export const marginTop = {
	big: "3rem",
	medium: "2rem",
	small: "1rem",
};

// Padding
export const padding = {};

// Border-radius
export const borderRadius = `10px`;

// Transforms
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
