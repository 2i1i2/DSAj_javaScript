// 1-2-3-4-5

/*
let myLinkedList = {
    head: {
        value: 10,
        next: {
            value: 5,
            next: {
                value:16,
                next: null
            }
        }
    }
}


*/

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
        const newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    printLinkedList(){
        const basket = [];
        let currentNode = this.head;

        while(currentNode != null){
            basket.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return basket;
    }

    prepend(value){
        const newNode ={
            value: value,
            next: null
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    
    insert(index, value){
          // check params
          if(index >= this.length){
            return this.append(value);
          }
          const newNode = {
            value: value,
            next: null
          }
          const leader = this.traverseToIndex(index-1);
          const holdingPointer = leader.next;
          leader.next = newNode;
          newNode.next = holdingPointer;
          this.length++;
          return this;
    }
    traverseToIndex(index){
        // check params
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }


    delete(index){
        const leader = this.traverseToIndex(index-1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
        return this;
    }


    

}


const myLinkedList = new LinkedList(12);
myLinkedList.append(32);
myLinkedList.append(45);
myLinkedList.append(55);
myLinkedList.append(76);
myLinkedList.printLinkedList();
myLinkedList.prepend(11);
myLinkedList.insert(2,34);
myLinkedList.delete(2);
console.log(myLinkedList.printLinkedList())
