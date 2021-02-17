const menuBars = document.getElementById('menu-bars');
const overLay = document.getElementById('overlay');
const navigation1 = document.getElementById('nav1');
const navigation2 = document.getElementById('nav2');
const navigation3 = document.getElementById('nav3');
const navigation4 = document.getElementById('nav4');
const navigation5 = document.getElementById('nav5');
const navigationItems = [navigation1, navigation2, navigation3, navigation4, navigation5];

function navigationAnimation(from, to) {
	navigationItems.forEach((navigation, index) => {
		navigation.classList.replace(`slide-${from}-${index + 1}`, `slide-${to}-${index + 1}`);
	});
};

function toggleNavigation() {
	// toggle menu-bars open/close
	menuBars.classList.toggle('change');
	// toggle menu activation/deActivation and animations
	overLay.classList.toggle('overlay-active');

	if (overLay.classList.contains('overlay-active')) {
		// animate in
		overLay.classList.replace('overlay-slide-left', 'overlay-slide-right');
		navigationAnimation('out', 'in');
	} else {
		// animate out
		overLay.classList.replace('overlay-slide-right', 'overlay-slide-left');
		navigationAnimation('in', 'out');
	};
};

menuBars.addEventListener('click', toggleNavigation);
navigationItems.forEach(navigation => {navigation.addEventListener('click', toggleNavigation)});