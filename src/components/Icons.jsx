import React from "react";

export function Edit ({ color = "#333" }) {
	return (
		<svg
			aria-hidden="true"
			focusable="false"
			data-prefix="fal"
			data-icon="pen"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
		>
			<path
				fill={ color }
				d="M493.25 56.26l-37.51-37.51C443.25 6.25 426.87 0 410.49 0s-32.76 6.25-45.26 18.74L12.85 371.12.15 485.34C-1.45 499.72 9.88 512 23.95 512c.89 0 1.78-.05 2.69-.15l114.14-12.61 352.48-352.48c24.99-24.99 24.99-65.51-.01-90.5zM126.09 468.68l-93.03 10.31 10.36-93.17 263.89-263.89 82.77 82.77-263.99 263.98zm344.54-344.54l-57.93 57.93-82.77-82.77 57.93-57.93c6.04-6.04 14.08-9.37 22.63-9.37 8.55 0 16.58 3.33 22.63 9.37l37.51 37.51c12.47 12.48 12.47 32.78 0 45.26z"
			></path>
		</svg>
	);
}

export function Save ({ color = "#333" }) {
	return (
		<svg
			aria-hidden="true"
			focusable="false"
			data-prefix="fal"
			data-icon="save"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 448 512">
			<path
				fill={color}
				d="M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM288 64v96H96V64h192zm128 368c0 8.822-7.178 16-16 16H48c-8.822 0-16-7.178-16-16V80c0-8.822 7.178-16 16-16h16v104c0 13.255 10.745 24 24 24h208c13.255 0 24-10.745 24-24V64.491a15.888 15.888 0 0 1 7.432 4.195l83.882 83.882A15.895 15.895 0 0 1 416 163.882V432zM224 232c-48.523 0-88 39.477-88 88s39.477 88 88 88 88-39.477 88-88-39.477-88-88-88zm0 144c-30.879 0-56-25.121-56-56s25.121-56 56-56 56 25.121 56 56-25.121 56-56 56z"></path>
		</svg>
	);
}

export function Cancel ({ color = "#333" }) {
	return (
		<svg
			aria-hidden="true"
			focusable="false"
			data-prefix="fal"
			data-icon="circle"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
		>
			<path
				fill={color}
				d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216z"
				></path>
		</svg>
	);
}

export function Trash ({ color = "#333" }) {
	return (
		<svg
			aria-hidden="true"
			focusable="false"
			data-prefix="fal"
			data-icon="trash"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 448 512"
		>
			<path
				fill={color}
				d="M440 64H336l-33.6-44.8A48 48 0 0 0 264 0h-80a48 48 0 0 0-38.4 19.2L112 64H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h18.9l33.2 372.3a48 48 0 0 0 47.8 43.7h232.2a48 48 0 0 0 47.8-43.7L421.1 96H440a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8zM171.2 38.4A16.1 16.1 0 0 1 184 32h80a16.1 16.1 0 0 1 12.8 6.4L296 64H152zm184.8 427a15.91 15.91 0 0 1-15.9 14.6H107.9A15.91 15.91 0 0 1 92 465.4L59 96h330z"
				></path>
		</svg>
	);
}
