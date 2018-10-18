'use strict'
require("@babel/polyfill");
import { comSet } from './import/common.js';
import { topSet } from './import/top.js';

let option = {
	SP_WIDTH: 768, PC_WIDTH: 1200, UA: 'pc',

	SMOOTH: {
		TRIGGER: "a[href^='#']",
		FIXED: "header.is-global",
		DURATION: 500,
		DELAY: 0,
		EASE: "easeOutQuint",
		OFFSET: 0,
		VERTICAL: true,
		HORIZON: false,
		STOP: true,
	},

	SP_TELL_TRIGGER: ".is-tel",

	FIXED_IMAGE_TEXT_TRIGGER: ".is-textFixed",

	MATCH_HEIGHT: ".is-matchHeight",

	MOVIE: {
		TRIGGER: "#movie",
		ID: "QXPpUrwGwks",
	},

	SLIDER: {
		TRIGGER: ".c-sliderBlock",
		OPTION: {
			autoplay: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			speed: 800,
			dots: false,
			arrows: false,
			//variableWidth: true,
			//centerMode: true,
			infinite: false,
			responsive: [{
				breakpoint: 768,
				settings: {
					centerMode: false,
				}
			}],
		}
	},
	INVIEW: {
		TRIGGER: ".is-inview",
		ONE: ".is-inview-one",
		HOOK: 0.8,
	},
	GRAPH_OP: {
		TARGET: "graph",
		TYPE: 'doughnut',
		WIDTH: '50',
		HEIGHT: '50',
		DATA: {
			labels: ['01','02','03'],
			datasets: [{
				data: [62,33,5],
				backgroundColor: ['#ffba00', '#ffd800', '#fff100'],
			}]
		},
		OPTIONS: {
			responsive: true,
			cutoutPercentage: 60,
			legend: {
				display: false
			},
			tooltips: {
				enabled: false
			}
		},
		DURATION: 750
	},
}

const init = () => {
	//UA判定
	const uaSet = require('./import/modules/device/ua.js').default;
	let UA = new uaSet();
	option.UA = UA.dvType();

	comSet(option);
	topSet(option);

	
}
init();