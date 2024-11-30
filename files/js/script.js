

document.querySelector(".buttons__vinyl").addEventListener('click', function(){
	document.querySelector(".main_box").style.transform = 'translate(0, 0)';
});

document.querySelector(".buttons__cassette").addEventListener('click', function(){
	document.querySelector(".main_box").style.transform = 'translate(-100%, 0)';
});

document.querySelector(".buttons__cd").addEventListener('click', function(){
	document.querySelector(".main_box").style.transform = 'translate(-200%, 0)';
});

function page_load(){
	document.querySelector("header").style.transform = 'translate(0, 0)';
	document.querySelector(".header__title").style.color = '#000';
	document.querySelector(".main_box").style.transform = 'translate(0, 0)';	
}
