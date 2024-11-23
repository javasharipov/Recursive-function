{
	// 1 masala 1 method
	let a = 3,
		b = 8

	for (let i = a; i <= b; i++) {
		if (i % 2 === 0) {
			console.log(i)
		}
	}
}

{
	// 2 masala 2 method
	let a = 3,
		b = 8

	function recursive(i = a) {
		if (i <= b) {
			if (i % 2 === 0) console.log(i)
			recursive(i + 1)
		}
	}

	recursive()
}

{
	// masala 2 method 1

	let a = 45

	let b = 1
	let array = []

	for (let i = 10; i < a; i += 10) {
		array.push(i)
	}
	console.log(array)
}

{
	// masala 2 method 2

	let a = 45

	let b = 1

	let array = []

	function recursive(i = 10) {
		if (i < a) {
			array.push(i)
			recursive(i + 10)
		}
	}
	recursive()
	console.log(array)
}

{
	// masala 3 method 1

	let a = 5

	let array = []

	for (let i = 2; i <= a; i *= 1) {}
}
