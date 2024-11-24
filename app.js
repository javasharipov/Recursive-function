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
	let result = []

	for (let i = 1; i <= a; i++) {
		result.push(i * i)
	}

	console.log(result)
}

{
	// masala 3 method 2
	let a = 5
	let result = []

	function recursive(n) {
		if (n === 0) {
			return
		} else {
			recursive(n - 1)

			result.push(n * n)
		}
	}

	recursive(a)

	console.log(result)
}

{
	// masala 4
	// Bu masalani faqat bir xil usulda ishlansin deyilgan

	function sortDigitsRecursive(num, sorted = '') {
		if (num === 0) return Number(sorted)

		let numStr = String(num)
		let smallest = '9'
		let smallestIndex = 0

		for (let i = 0; i < numStr.length; i++) {
			if (numStr[i] < smallest) {
				smallest = numStr[i]
				smallestIndex = i
			}
		}

		let remaining =
			numStr.slice(0, smallestIndex) + numStr.slice(smallestIndex + 1)

		return sortDigitsRecursive(Number(remaining), sorted + smallest)
	}

	console.log(sortDigitsRecursive(23761))
}

{
	// masala 5
	// Bu masala ham faqat bitta shartli
	let str = 'whats your name?'

	function removeWord() {
		str = str.slice(0, -1)
		return str
	}

	console.log(removeWord())
}

{
	// masala 6 method 1
	let a = 5
	let arr = []

	for (let i = 0; i < a; i++) {
		arr[i] = a
	}

	console.log(arr)
}

{
	// masala 6 method 2
	function recursive(a, count = a) {
		if (count === 0) return []
		return [a].concat(recursive(a, count - 1))
	}

	console.log(recursive(5))
}

{
	// masala 7 method 1
	let trueOrFalse = 1

	function truthyOrFalsy(value) {
		if (value) {
			return 'true'
		} else {
			return 'false'
		}
	}

	console.log(truthyOrFalsy(trueOrFalse))
	console.log(truthyOrFalsy(0))
	console.log(truthyOrFalsy(''))
	console.log(truthyOrFalsy('Hello'))
}
