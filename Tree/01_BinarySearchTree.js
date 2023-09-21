

class Node {
    constructor(value){
        this.right = null;
        this.left = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(value){
        let newNode = new Node(value);
       if(this.root === null){
         this.root = newNode;
       }else{
        let currentNode = this.root;
        while(true){
            if( value < currentNode.value){
             // left
             if(!currentNode.left){
                currentNode.left = newNode;
                return this;
             }   
            currentNode = currentNode.left;
            }else{
                // right
                if(!currentNode.right){
                    currentNode.right = newNode;
                    return this;
                }
                currentNode = currentNode.right;
            }
        }
       }
    }
}


const tree = new BinarySearchTree();
tree.insert(40);
tree.insert(30);
tree.insert(25)
tree.insert(35);
tree.insert(50);
tree.insert(45);
tree.insert(60);

JSON.stringify(traverse(tree.root));

function traverse(node){
    const tree = {
        value: node.value
    }

    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}
