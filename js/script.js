var mini = document.getElementById('mini'),
	mainImg = document.getElementById('main');



mini.onclick = function (e) {
	var img = event.target.closest('img');
	if (!img) {return;}
	console.log(e.target);
	mainImg.src = e.target.src;
}


