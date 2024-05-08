const updateProperties = (elem, state) => {
	elem.style.setProperty("--x", `${state.x}px`);
	elem.style.setProperty("--y", `${state.y}px`);
	elem.style.setProperty("--width", `${state.width}px`);
	elem.style.setProperty("--height", `${state.height}px`);
	elem.style.setProperty("--radius", state.radius);
	elem.style.setProperty("--border", "none");
	elem.style.setProperty("border-radius", state.radius);
	elem.style.setProperty(
		"background",
		"radial-gradient(#ff660099 0%, #02002400 70%)"
	);
};

document.querySelectorAll(".cursor").forEach((cursor) => {
	// let onElement;

	const createState = (e) => {
		const defaultState = {
			x: e.clientX,
			y: e.clientY,
			width: 120,
			height: 120,
			radius: "50%",
		};

		// if (onElement != null) {
		// 	const { top, left, width, height } = onElement.getBoundingClientRect();
		// 	const radius = window.getComputedStyle(onElement).borderTopLeftRadius;

		// 	computedState.x = left + width / 2;
		// 	computedState.y = top + height / 2;
		// 	computedState.width = width;
		// 	computedState.height = height;
		// 	computedState.radius = radius;
		// }

		return {
			...defaultState,
		};
	};

	document.addEventListener("mousemove", (e) => {
		const state = createState(e);
		updateProperties(cursor, state);
	});
});
