class Node {
    constructor(value){
        this.value = value || null;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor() {
        this._head = null;
    }

    append(value){
        if(this._head === null){
            this._head = new Node(value);
        } else {
            let node = this._head;
            while(node.nextNode !== null){
                node = node.nextNode;
            }
            node.nextNode = new Node(value);
        }
    }

    prepend(value){
        if(this._head === null){
            this._head = new Node(value);
        } else {
            let node = this._head;
            this._head = new Node(value);
            this._head.nextNode = node;
        }
    }

    size(){
        let counter = 0;
        let node = this._head;
        while(node !== null){
            node = node.nextNode;
            counter++;
        }
        return counter;
    }

    head(){
        return this._head;
    }

    tail(){
        let node = this._head;
        while (node.nextNode !== null){
            node = node.nextNode;
        }
        return node;
    }

    at(index){
        let counter = 0;
        let node = this._head;
        for(counter; counter < index; counter++){
            node = node.nextNode;
            if(node === null){
                return "Sorry, that index doesn't exist.  Rememeber indexes start at zero!";
            }
        }
        return node;
    }

    pop(){
        //size returns n items
        let size = this.size();
        //at is based on 0 index, so -1 for the index and -1 for the second to last
        let node = this.at(size - 1);
        node = null;
        node = this.at(size - 2);
        node.nextNode = null;
    }

    contains(value){
        let node = this._head;
        for(let i = 0; i < this.size(); i++){
            if(node.value === value){
                return true;
            }
            node = node.nextNode;
        }
        return false;
    }

    find(value){
        let node =  this._head;
        if(node !== null){
            for(let i = 0; i < this.size(); i++){
                if(node.value === value){
                    return i;
                }
                node = node.nextNode;
            }
        }
        return null;
    }

    toString(){
        let node = this._head;
        if(node === null){
            return "null";
        }
        let string = `( ${node.value} )`;
        node = node.nextNode;
        while(node !== null){
            string += ` -> ( ${node.value} )`;
            node = node.nextNode;
        }
        string += ` -> null`
        return string;
    }

    insertAt(value, index){
        if(index === 0){
            this.prepend(value);
        } else {
            let node = this.at(index - 1);
            let pointer = node.nextNode;
            node.nextNode = new Node(value);
            node = node.nextNode;
            node.nextNode = pointer;
        }
    }

    removeAt(index){
        if(index === this.tail()){
            this.pop();
        } else {
            let prevNode = this.at(index - 1);
            let nextNode = this.at(index + 1);
            let node = this.at(index);
            prevNode.nextNode = nextNode;
            node = null;
        }
    }
}