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
	const pop = () => {};
	const contains = (value) => {};
	const find = (value) => {};
	const toString = () => {
		let temp = headNode;
		for (let i = 1; i <= length; i += 1) {
			console.log(temp.value);
			temp = temp.nextNode;
		}
	};

	return { append, prepend, toString, size, head, tail, at };
};

const list = linkedList();

list.append("a");
list.append("b");
list.append("c");
list.append("d");
list.append("e");
list.append("f");

console.log(list.at(5));
