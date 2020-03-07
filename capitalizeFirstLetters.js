function capitalizeFirstLetters(argument) {
	// test5 empty string
	if (argument.length===0) {
		return argument
	// test4 simple string
	} else if (argument.indexOf(' ')<0){
		return argument.replace(argument[0], argument[0].toUpperCase())
	// test3 chain of string
	} else {
		return argument.split(' ').map(item=>item.replace(item[0], item[0].toUpperCase())).join(' ')
	}
}

module.exports = capitalizeFirstLetters;8

