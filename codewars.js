{
	// masala 1 code wars
	// Here we should find perfect square of number
	function isSquare(n) {
		return Math.sqrt(n) % 1 === 0
	}
}

{
	// masala 2
	// here we should convert the string into Uppercase
	function makeUpperCase(str) {
		return str.toUpperCase()
	}
}

{
	// masala 3 XO("ooxx") => true
	// XO("xooxx") => false
	// XO("ooxXm") => true
	// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
	// XO("zzoo") => false
	// this was the requirements
	function XO(str) {
		return (
			str.toLowerCase().split('x').length ===
			str.toLowerCase().split('o').length
		)
	}
}

{
	// masala 4
}

{
	// masala 5
}
