function getElementsByClassNameFackEdition(name){
	var _arr = [],
	total = getElementsByTagName("*");
	for(var i = 0,length = total.length;i<length;i++){
		var tamgs = total[i].className.split();
		for(var j = 0;j<tamgs.length;j++){
			if(tamgs[j] == name){
				_arr.push(total[i]);
			}
		}
	}
	return _arr;
}