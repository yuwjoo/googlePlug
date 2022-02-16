//解决bt不能ctrl+c复制文字
document.body.addEventListener("keyup", ev=>{
	if(ev.ctrlKey && (ev.keyCode || ev.which || ev.charCode) == 67){
		let input = document.createElement("input");
		document.body.appendChild(input);
		input.value = getSelection().getRangeAt(0).toString();
		input.select();
		document.execCommand("copy");
		document.body.removeChild(input);
	}
})