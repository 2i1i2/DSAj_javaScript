// Array class
class MyArray {
	constructor(){
		this.length = 0;
		this.data = {}; // will store all data into this object
	}

	// find the index
	get(index){
		return this.data[index];
	}

	// push item into the array
	push(item){
		this.data[this.length]= item;
		this.length++;
		return this;
	}

	pop(){
		const lastItem = this.data[this.length-1];
		delete this.data[this.length-1];
		this.length--;
		return lastItem;
	}

	// function for delete the item
	delete(index){
		const item = this.data[index];
		return this.shiftItems(index);
	}

	// for shiftitems
	shiftItems(index){
		for(let i = index; i < this.length-1; i++){
			this.data[i] = this.data[i+1];
		}
	}

}

const arrayItem = new MyArray();
arrayItem.push(10);
arrayItem.push(20);
arrayItem.push(30);
arrayItem.push(40);
arrayItem.push(50);
arrayItem.delete(1);
arrayItem.pop();
console.log(arrayItem);

