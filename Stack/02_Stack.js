// node class
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class StackClass{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    // top element of the Stack
    peek(){
        return this.top;
    }

    // insert a value into the stack
    push(value){
        // make the node 
        const newNode = new Node(value);
        if(this.length === 0){
            this.top = newNode;
            this.bottom =newNode;
        }else{
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }

    // remove top value from the stack
    pop(){
        if(!this.top){
            return null;
        }
        const holdingPointer = this.top;
        this.top  = this.top.next;
        this.length--;
        return holdingPointer;
    }
    
    printStack(){
        if(this.length === 0){
            return 'stack is empty';
        }else{
        }
    }

}


const myStack = new StackClass();
myStack.peek();
myStack.push(10);
myStack.push(20);
myStack.pop();
myStack.printStack();
console.log(myStack.printStack());
