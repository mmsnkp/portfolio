//フッターのトップに戻るボタン
const arrow = document.getElementById("footer-arrow");
arrow.addEventListener("click", () => window.scroll({top: 0, behavior: "smooth"}));



//メニュークリック時のスムーススクロール
const menuAnchor = document.querySelectorAll(".menu-element a");
menuAnchor.forEach((item) => item.addEventListener("click", smoothMenu));

const documentURL = document.URL.split("#")[0];

function smoothMenu(e){
	let splittedURL = e.target.href.split("#");
	if(2 > splittedURL.length){
		return;
	}
	if(documentURL !== splittedURL[0]){
		return;
	}
	e.preventDefault();
	let target = document.querySelector("#" + splittedURL[1]);
	window.scroll({top: target.offsetTop, behavior: "smooth"});
}



//メニューバーをスクロールに合わせて動かす
const menu = document.getElementById("menu");
let menuTop = menu.offsetTop;
window.addEventListener("scroll", fixMenu);

function fixMenu(){
	let currentScroll = scrollY;
	if(menuTop < currentScroll){
		menu.classList.add("fixed");
	}else{
		menu.classList.remove("fixed");
	}
}