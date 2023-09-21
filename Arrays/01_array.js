class MyArray {
    constructor(){
        this.length = 0;
        this.data = {};
    }

    get(index){
        return this.data[index];
    }

    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
    pop(){
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }
    delete(index){
        const item = this.data[index];
        return this.shiftItems(index);
    }
    shiftItems(index){
       for(let i = index; i < this.length-1; i++){
        this.data[i] = this.data[i+1];
       }
    }
}


const newArray = new MyArray();
newArray.push(10);
newArray.push(20);
newArray.push(30);
newArray.push(40);
newArray.pop(); // 60 should be remove
newArray.delete(3); // 60 should be remove
newArray.delete(2);

console.log(newArray)
