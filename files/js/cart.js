const image = localStorage.getItem('image') || 'empty';
const title = localStorage.getItem('title') || 'empty';
const price = localStorage.getItem('price') || 'empty';


function cart_page_load(){
	if(image==='empty' || title==='empty' || price==='empty') location.href='/'
	
	document.querySelector("header").style.transform = 'translate(0, 0)';
	document.querySelector(".header__title").style.color = '#000';
	
	document.querySelector('.cart__image img').src = image
	document.querySelector('.cart__title').innerHTML = title;
	document.querySelector('.cart__price').innerHTML = price;
	document.querySelector('.form__titleinput').value = title;
	
}