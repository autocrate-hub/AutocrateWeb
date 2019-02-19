var validateProp = function(obj, property, type, isRequired){
	if(isRequired){
		if(obj && obj[property]){ 
			if(typeof(obj[property]) == type) {
				return true;
			} else{
				console.error("validateProp function expects the parameter '"+property+"' of type '"+type+"' but provided '"+typeof obj[property]+"'");
				return false;
			}
		} else {
			console.error("validateProp function expects the parameter '"+property+"'");
			return false;
		}
	} else {
		if(obj && obj[property]) {
			if(typeof(obj[property]) == type){
				return true;			
			} else {
				console.error("validateProp function expects the parameter '"+property+"' of type '"+type+"' but provided '"+typeof obj[property]+"'");
				return false;
			}
		}
		return true;
	}
}