const node = (data = null, next = null) => {
	const value = data;
	const nextNode = next;

	return { value, nextNode };
};

const linkedList = () => {
	let headNode = null;
	let length = 0;

	const addFirst = (value) => {
		headNode = node(value);
	};

	const append = (value) => {
		if (headNode === null) {
			addFirst(value);
			length += 1;
		} else {
			let temp = headNode;
			while (temp.nextNode !== null) {
				temp = temp.nextNode;
			}
			temp.nextNode = node(value);
			length += 1;
		}
	};

	const prepend = (value) => {
		if (headNode === null) {
			addFirst(value);
			length += 1;
		} else {
			const temp = headNode;
			headNode = node(value);
			length += 1;
			headNode.nextNode = temp;
		}
	};
	const size = () => length;
	const head = () => headNode;
	const tail = () => {
		let temp = headNode;
		while (temp.nextNode !== null) {
			temp = temp.nextNode;
		}
		return temp;
	};
	const at = (index) => {
		let temp = headNode;

		for (let i = 1; i <= length; i += 1) {
			if (index !== i) {
				temp = temp.nextNode;
			}

			if (index === i) {
				return temp;
			}
		}
	};
	const pop = () => {
		const temp = at(length - 1);
		length -= 1;
		temp.nextNode = null;
	};
	const contains = (value) => {
		let temp = headNode;
		let found = false;
		for (let i = 1; i <= length; i += 1) {
			if (temp.value === value) {
				found = true;
			}
			temp = temp.nextNode;
		}
		return found;
	};
	const find = (value) => {
		let temp = headNode;
		let indexFound = "Value not found";
		for (let i = 1; i <= length; i += 1) {
			if (temp.value === value) {
				indexFound = `Value "${temp.value}" is at index ${i}`;
			}
			temp = temp.nextNode;
		}

		return indexFound;
	};
	const toString = () => {
		let temp = headNode;
		let nodeList = "";

		for (let i = 1; i <= length; i += 1) {
			nodeList += `(${temp.value})`;
			if (i !== length) {
				nodeList += " -> ";
			}
			temp = temp.nextNode;
		}
		return nodeList;
	};

	return {
		append,
		prepend,
		toString,
		size,
		head,
		tail,
		at,
		pop,
		contains,
		find,
	};
};

const list = linkedList();

list.append("a");
console.log(list.toString()); // a
list.prepend("b");
console.log(list.toString()); // (b) -> (a)
console.log(list.size()); // 2
console.log(list.head()); // {value: b nextNode: {value:a nextNode: null}}
console.log(list.tail()); // {value:a nextNode: null}
console.log(list.at(2)); // {value:a nextNode: null}
list.pop();
console.log(list.toString()); // (b)
console.log(list.contains("a")); // false
console.log(list.find("b")); // Value "b" is at index 1
