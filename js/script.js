//フッターのトップに戻るボタン
const arrow = document.getElementById("footer-arrow");
arrow.addEventListener("click", () => window.scroll({top: 0, behavior: "smooth"}));


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