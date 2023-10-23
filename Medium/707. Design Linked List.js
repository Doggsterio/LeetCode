class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


var MyLinkedList = function() {
    this.head = null;
    this.tail = null;
    this.length = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.length) {
        return -1;
    }

    let i = 0;
    let currentNode = this.head;
    while (i != index) {
        currentNode = currentNode.next;
        i++;
    }

    return currentNode.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let node = new Node(val);

    if (!this.head) {
        this.head = node;
        this.tail = node;
    } else {
        node.next = this.head;
        this.head = node;
    }

    this.length++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let node = new Node(val);
    
    if (!this.tail) {
        this.head = node;
        this.tail = node;
    } else {
        this.tail.next = node;
        this.tail = node;
    }

    this.length++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index < 0 || index > this.length) {
        return -1;
    }

    if (index === 0) {
        this.addAtHead(val);
    } else if (index === this.length) {
        this.addAtTail(val);
    } else {
        let node = new Node(val);
        let currentNode = this.head;
        let i = 0;

        while(i != index - 1) {
            currentNode = currentNode.next;
            i++;
        }

        node.next = currentNode.next;
        currentNode.next = node;
        this.length++;
    }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.length) {
        return -1;
    }

    if (index === 0) {
        this.head = this.head.next;
    } else {
        let currentNode = this.head;
        let i = 0;

        while(i != index - 1) {
            currentNode = currentNode.next;
            i++;
        }

        currentNode.next = currentNode.next.next;
        if (index === this.length - 1) {
            this.tail = currentNode;
        }
    }
    this.length--;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */