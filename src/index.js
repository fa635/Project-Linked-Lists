


class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    

    append (value) {

        const newNode = new Node(value)
        
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
            return this
        }

        let current = this.head

        while (current.nextNode) {
            current = current.nextNode
        }
        current.nextNode = newNode
        this.tail = newNode
        this.length++
        return this
    
    }

    prepend (value) {
        
        const newNode = new Node(value)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
            return this
        }
        else {
            newNode.nextNode = this.head
            this.head = newNode
        }
        this.length++
        return this

    }

    size () {
        return list.length
    }

    Head () {
        return list.head
    }

    tail () {
        return list.tail
    }


    at (index) {
        
        let current = this.head
        
        let count = 0

        while (current != null) {
            
            if (count === index) {
                return current.value
            }

            count++
            current = current.nextNode
        }
    }

    pop () {

        if (!this.head) {
            return null
        }
        if (!this.head.nextNode) {
            return null
        }

        let secondLast = this.head


        while (secondLast.nextNode.nextNode) {
            secondLast = secondLast.nextNode
        }

        secondLast.nextNode = null
        this.tail = secondLast
        
        this.length--
        return this

    }

    contains (value) {

        let current = this.head

        while (current) {
            
            if (current.value === value) {
                return true
            }
            current = current.nextNode
        }

        return false

    }


    find (value) {

        let current = this.head

        let count = 0

        while(current) {

            if (current.value === value) {
                return count
            }

            count++
            current = current.nextNode
        }

        return null
    }


    toString () {
        
        let current = this.head

        let str = ""

        while (current) {
            str += "(" + current.value + ") -> "
            current = current.nextNode
        }

        return str
    }

}

const list = new LinkedList

function Node(value) {
    this.value = value
    this.nextNode = null
}



console.log(list.prepend(0))
console.log(list.append(1))
console.log(list.append(2))
console.log(list.append("love"))
console.log(list.size())
console.log(list)
console.log(list.head)
console.log(list.tail)
console.log(list.at(2))
//console.log(list.pop())
console.log(list.contains("love"))
console.log(list.find("love"))
console.log(list.toString())
