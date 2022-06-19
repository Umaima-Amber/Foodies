//active navbar
let nav = document.queryselecter(".navigation-wrap");
window.onscroll = function() {
	if(document.documentElement.scrollTop > 20){
		nav.classlist.add("scroll-on");
}else{
	nav.classlist.remove("scroll-on")
	}
}
	
//nav hide
let nav= document.queryselecter('.nav-link');
let navcollpase = document.queryselecter('.navbar-collapse.collapes');
navbar.forEach(function(a){
	a.addEventlistener("Click",function(){
		navcollpase.classlist.remove("show");
	})
})