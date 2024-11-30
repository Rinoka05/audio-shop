function shop_page_load(){
	document.querySelector("header").style.transform = 'translate(0, 0)';
	document.querySelector(".header__title").style.color = '#000';

	document.querySelectorAll('.shop__showcase').forEach(showcase=>{
		showcase.style.transform = 'translate(0, 0)';
	});
}

let shop_items = document.querySelectorAll('.shop__item');
var image, title, price
for(i = 0; i < shop_items.length; i++){		
	shop_items[i].childNodes[7].addEventListener('click', function(e){						
		localStorage.setItem('image', e.target.parentNode.childNodes[1].childNodes[0].src);
		localStorage.setItem('title', e.target.parentNode.childNodes[3].innerText);		
		localStorage.setItem('price', e.target.parentNode.childNodes[5].innerText);	
		location.href = 'cart.html'			
	});
}