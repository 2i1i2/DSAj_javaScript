
// making a node class
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// Stack class
class Stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    // top item in the stack
    peek(){
        return this.top;
    }

    // insert an item into the stack
    push(value){
      const newNode = new Node(value);
      if(this.length === 0){
        this.top = newNode;
        this.bottom = newNode;
      }else{
        const holdingPointer = this.top;
        this.top = newNode;
        this.top.next = holdingPointer;
      }
      this.length++;
      return this;

    }
    // what to remove an item 
    pop(){
       if(!this.top){
        return null;
       } 
       const holdingPointer = this.top;
       this.top = this.top.next;
       this.length--;
       return holdingPointer;
    }
}

const myStack = new Stack();
myStack.peek();
myStack.push(10);
myStack.push(34);
myStack.push(50);
myStack.push(60);
myStack.pop();
console.log(myStack.peek())