// 10-->5-->16
/*
let myLinkedListObj = {
    head: {
        value: 10,
        next: {
            value: 5,
            next: {
                value: 16,
                next: null
            }
        }
    }
}

*/

// Node class
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value){
        this.head ={
            value: value,
            next: null
        }
       this.tail = this.head;
       this.length = 1;
    }
    append(value){
        /*
       const newNode ={
          value: value,
          next: null
       }
       */

       // instance of the node clas
       const newNode = new Node(value); // for DRY
       this.tail.next = newNode;
       this.tail = newNode;
       this.length++;
       return this;
    }
    prepend(value){
        const newNode = {
            value: value,
            next: null
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    printLinked(){
        const array = [];
        let currentNode = this.head;
        while(currentNode != null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    insert(index, value){
        // checking the index if greater than
        if(index >= this.head){
            return this.append(value);
        }

    }

    reverseLinkedLinst(){
            const basket = [];
            let currentNode = this.head;
            while(currentNode != null){
                basket.push(currentNode.value);
                currentNode = currentNode.next;
            }
            return basket.reverse(basket);
        }
}


const myLinkedList = new LinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.append(5);
myLinkedList.prepend(0);
myLinkedList.printLinked();
console.log(myLinkedList.reverseLinkedLinst());





