//solution from algo expert

export class LinkedList {
    value: number
    next: LinkedList | null

    constructor(value: number) {
        this.value = value
        this.next = null
    }
}

//O(n) time -> Look through each node exactly one time
//O(1) space -> Modifying the input that is passed, no extra memory is used except for the variable definitions

//linked list is always sorted in ascending order
//assume you're always given at least one node
function removeDuplicatesFromLinkedList(list: LinkedList): LinkedList {
    //set current node to head of the linked list
    let currentNode: LinkedList | null = list
    while ( currentNode !== null ) {
        let nextNode: LinkedList | null = currentNode.next
        // if the value of the current node and the value of the next node are the same, 
        // reassign the nextNode to its following nextNode and try the while statement again
        while (nextNode !== null && nextNode.value === currentNode.value){
            nextNode = nextNode.next
        }

        //if nextNode.value doesnt equal the currentNode.value then you can be sure there are no more duplicates 
        //of currentNode.value and try the while statement on the next node
        currentNode.next = nextNode
        currentNode = nextNode
    }

    return list
}