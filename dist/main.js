/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("\n\n\nclass LinkedList {\n    constructor() {\n        this.head = null\n        this.tail = null\n        this.length = 0\n    }\n    \n\n    append (value) {\n\n        const newNode = new Node(value)\n        \n        if (!this.head) {\n            this.head = newNode\n            this.tail = newNode\n            return this\n        }\n\n        let current = this.head\n\n        while (current.nextNode) {\n            current = current.nextNode\n        }\n        current.nextNode = newNode\n        this.tail = newNode\n        this.length++\n        return this\n    \n    }\n\n    prepend (value) {\n        \n        const newNode = new Node(value)\n\n        if (!this.head) {\n            this.head = newNode\n            this.tail = newNode\n            return this\n        }\n        else {\n            newNode.nextNode = this.head\n            this.head = newNode\n        }\n        this.length++\n        return this\n\n    }\n\n    size () {\n        return list.length\n    }\n\n    Head () {\n        return list.head\n    }\n\n    tail () {\n        return list.tail\n    }\n\n\n    at (index) {\n        \n        let current = this.head\n        \n        let count = 0\n\n        while (current != null) {\n            \n            if (count === index) {\n                return current.value\n            }\n\n            count++\n            current = current.nextNode\n        }\n    }\n\n    pop () {\n\n        if (!this.head) {\n            return null\n        }\n        if (!this.head.nextNode) {\n            return null\n        }\n\n        let secondLast = this.head\n\n\n        while (secondLast.nextNode.nextNode) {\n            secondLast = secondLast.nextNode\n        }\n\n        secondLast.nextNode = null\n        this.tail = secondLast\n        \n        this.length--\n        return this\n\n    }\n\n    contains (value) {\n\n        let current = this.head\n\n        while (current) {\n            \n            if (current.value === value) {\n                return true\n            }\n            current = current.nextNode\n        }\n\n        return false\n\n    }\n\n\n    find (value) {\n\n        let current = this.head\n\n        let count = 0\n\n        while(current) {\n\n            if (current.value === value) {\n                return count\n            }\n\n            count++\n            current = current.nextNode\n        }\n\n        return null\n    }\n\n\n    toString () {\n        \n        let current = this.head\n\n        let str = \"\"\n\n        while (current) {\n            str += \"(\" + current.value + \") -> \"\n            current = current.nextNode\n        }\n\n        return str\n    }\n\n}\n\nconst list = new LinkedList\n\nfunction Node(value) {\n    this.value = value\n    this.nextNode = null\n}\n\n\n\nconsole.log(list.prepend(0))\nconsole.log(list.append(1))\nconsole.log(list.append(2))\nconsole.log(list.append(\"love\"))\nconsole.log(list.size())\nconsole.log(list)\nconsole.log(list.head)\nconsole.log(list.tail)\nconsole.log(list.at(2))\n//console.log(list.pop())\nconsole.log(list.contains(\"love\"))\nconsole.log(list.find(\"love\"))\nconsole.log(list.toString())\n\n\n//# sourceURL=webpack://project-linked-lists/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;