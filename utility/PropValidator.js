var validateProp = function(obj, property, type, isRequired){
	if(isRequired){
		if(obj && obj[property] && typeof(obj[property]) == type) {
			return true;
		}
		console.error("validateProp function expects the parameter '"+property+"'");
		return false;
	} else {
		if(obj && obj[property]) {
			if(typeof(obj[property]) == type){
				return true;			
			} else {
				console.error("validateProp function expects the parameter '"+property+"' of type '"+type+"' but provided "+typeof property);
				return false;
			}
		}
		return true;
	}
}