/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

console.log("particles.js loaded - callback");

particlesJS(
	"particles-js",

	{
		particles: {
			number: {
				value: 70,
				density: {
					enable: true,
					value_area: 800,
				},
			},
			color: {
				value: "#ffffff",
			},
			shape: {
				type: "triangle",
				stroke: {
					width: 0,
					color: "#000000",
				},
				polygon: {
					nb_sides: 7,
				},
				image: {
					src: "img/github.svg",
					width: 50,
					height: 50,
				},
			},
			opacity: {
				value: 0.2,
				random: false,
				anim: {
					enable: false,
					speed: 1,
					opacity_min: 0.1,
					sync: false,
				},
			},
			size: {
				value: 5,
				random: true,
				anim: {
					enable: false,
					speed: 40,
					size_min: 0.1,
					sync: false,
				},
			},
			line_linked: {
				enable: true,
				distance: 150,
				color: "#ffffff",
				opacity: 0.3,
				width: 1,
			},
			move: {
				enable: true,
				speed: 3,
				direction: "none",
				random: false,
				straight: false,
				out_mode: "out",
				attract: {
					enable: true,
					rotateX: 600,
					rotateY: 1200,
				},
			},
		},
		interactivity: {
			detect_on: "canvas",
			events: {
				onhover: {
					enable: true,
					mode: "grab",
				},
				onclick: {
					enable: true,
					mode: "push",
				},
				resize: true,
			},
			modes: {
				grab: {
					distance: 150,
					line_linked: {
						opacity: 1,
					},
				},
				bubble: {
					distance: 400,
					size: 5,
					duration: 2,
					opacity: 1,
					speed: 3,
				},
				repulse: {
					distance: 200,
				},
				push: {
					particles_nb: 4,
				},
				remove: {
					particles_nb: 2,
				},
			},
		},
		retina_detect: true,
		config_demo: {
			hide_card: false,
			background_color: "#b61924",
			background_image: "",
			background_position: "50% 50%",
			background_repeat: "no-repeat",
			background_size: "cover",
		},
	}
);
