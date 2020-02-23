function double_array(length_a, length_b, body) {
	var arr = [];

	for(var i=0; i < length_a; i++){
	    arr[i] = [];
	    
	    for(var j=0; j < length_b; j++){	        
	        arr[i][j] = body;
	    }	    
	}
	return arr;
}

console.log(double_array(10, 10, 'qwe'));