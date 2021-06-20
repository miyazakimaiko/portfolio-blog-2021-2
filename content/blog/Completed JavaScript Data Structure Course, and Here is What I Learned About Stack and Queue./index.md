---
title: Completed JavaScript Data Structure Course, and Here is What I Learned About Stack and Queue.
date: "2020-01-03"
slug: what-i-learned-about-stack-and-queue
updatedAt: "2021-06-20"
description: What is stack and queue? Let's identify whether it is suitable for storing vocabulary data.
featured: true
topics:
 - javascript
 - data-structure
featuredImage: './stack-of-casette.jpg'
---

<small><em>Photo by <a href="https://unsplash.com/@jontyson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jon Tyson</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>This article is originally published on dev.to on  3 Jan 2020.</em></small>


In the previous article, I wrote about implementing linked lists on my Chrome Extension. Ended up not using them on the project, but I could see why it can be useful for certain situations.

[Completed JavaScript Data Structure Course, and Here is What I Learned About Linked List](https://miyazakimaiko.com/blog/what-i-learned-about-linked-list/)

Currently, I'm storing the main data as objects in an array like this:

```javascript

// Result of console.log(main-data)
(4)[{...}, {...}, {...}, {...}]
0: {category: "cat1", id: "4", meaning: "information of the vocabulary.", tag: ["tag1", "tag2"], word: "Example Vocab 1"}
1: {category: "cat3", id: "3", meaning: "Hello World", tag: ["tag1", "tag4"], word: "Example Vocab 2"}
2: {category: "cat2", id: "2", meaning: "This is new vocabulary.", tag: ["tag4"], word: "Example"}
3: {category: "cat4", id: "1", meaning: "You can write anything.", tag: ["tag2", "tag4", "tag5"], word: "Sample"}

```

In this situation, insertion and deletion take O(n). So I'm still looking for a data structure that is hopefully O(1).

What I learned after the linked list was stack and queue, so in this article, I'm going to think if I can implement them or not.

<h2>Can stack be the best choice?</h2>

As we can call stacks ‘Last in first out’ data structure, the last element that added to the stack will be removed first.

![image of stacks with javascript](https://thepracticaldev.s3.amazonaws.com/i/i4ylykukh1915ubrgplh.png)

It is just like a stack of anything in real life, like a pile of dirty dishes in the sink. You put another dish to be washed on top of the pile, and once you decide to wash them, you wouldn’t pick one up from the bottom of the pile — you will pick the one you just put it last. It’s the same in stacks for the data structure.

![stack with javascript visualized](https://thepracticaldev.s3.amazonaws.com/i/zos5br0m06z46bo0mrb7.png)

To implement it as a singly linked list, JavaScript code will be like this:

```javascript
class Node {
    constructor(value) {
        // store value in val
        this.val = value;
        // initialize next property empty
        this.next = null;
    }
}

class Stack {
    constructor() {
        // initialize the beginning of the list as first 
        this.first = null;
        // initialize the end of the list as last
        this.last = null;
        // initialize the length of the list as size
        this.size = 0;
    }
}
```
We are going to push a node to the beginning of the list instead of the end. Therefore it’ll be much easier to
 pop. We can write code like this:

```javascript
push(val) {
    // create a new node with value
    const newNode = new Node(val);
    if(this.size === 0) {
        // if nothing in the list, define new node as first and last
        this.first = newNode;
        this.last = this.first;
    } else {
        // otherwise, define next property of new node as current first node 
        newNode.next = this.first;
        // define new node as first
        this.first = newNode;
    }
    // imcrement size of the list
    return this.size++;
}
pop() {
    // define the node which will be removed
    const remove = this.first;
    if(this.size === 1) {
        // if there is only one node in the list, empty first and last
        this.first = null;
        this.last = null;
    } else {
        // otherwise, store 2nd node from the beginning in newFirst
        const newFirst = this.first.next;
        // define next property of removed node empty
        remove.next = null;
        // define newFirst as first
        this.first = newFirst;
    }
    // decrement size of the list
    this.size--;
    return remove.val;
}
```
This structure works best when you want to especially record the current action, and want to make the action to be able to go back/forth. Your text editor can be a good example of this — you can Undo and Redo, but it doesn’t need to be able to pick up one certain point of the previous action.

It is not the best way for my project to store the main data because I want the data to be faster than O(n) when an element is removed/edited not only at the end of the list but anywhere.

<h2>How about queues?</h2>

I have already the answer to this question. It is not suitable for the main data of my project, because the structure is almost the same as the stack which is linked list or array.

![image of queues with javascript](https://thepracticaldev.s3.amazonaws.com/i/2ij98olbgejurv0mz7ov.png)

The difference from the stack is that the first element that was added to the queue will be removed first — which we can call it ‘First in First out’ structure. 

![queue with javascript visualized](https://thepracticaldev.s3.amazonaws.com/i/6drwo70z4dhuzhj4f9dg.png)

To implement it in a singly linked list, JavaScript code will be like this:
```javascript
class Node {
    constructor(value) {
        // store value in val
        this.val = value;
        // initialize next property empty
        this.next = null;
    }
}

class Queue {
    constructor() 
        // initialize the beginning of the list as first 
        this.first = null;
        // initialize the end of the list as last
        this.last = null;
        // initialize the length of the list as size
        this.size = 0;
    }
}
```
Initialization is the same as a stack. To make it easier, when you remove the first node that you added, we are going to add a node at the end, and remove a node from the beginning of the queue.

```javascript
enqueue(val) {
    // create new node
    const newNode = new Node(val);
    if(!this.first) {
        // if nothing in the list, define new node as both first and last
        this.first = newNode;
        this.last = this.first;
    } else {
        // otherwise, define next property of current last node as new node
        this.last.next = newNode;
        // replace last node to new node
        this.last = newNode;    
    }
    // increment the size of the list
    this.size++
    return this;
}
dequeue() {
    // store the node that will be removed in remove
    const remove = this.first;
    if(this.size === 1) {
        // if there is just one node in the list, empty first and last property 
        this.first = null;
        this.last = null;
    } else {
        // otherwise, define 2nd node from the beginning as new first
        this.first = remove.next;
        // empty next property of removed node
        remove.next = null;
    }
    // decrement the size of the list
    this.size--;
    return remove.val;
}
```
Although a queue might not be a suitable data structure for my project, it is commonly used for many occasions. For instance, when we are printing a document with a printer, and if we continuously add more documents to print out, the printer will process the data which was added first. 

Therefore queues are more suitable for the situation where the order is more important for the whole process.

<h2>Conclusion</h2>

Stacks and queues are useful for data that you want to keep them ordered in a certain duration of the process, and also no need to keep them when it’s done. As I am in search of data structure that would be suitable for storing data, stacks and queues are not the best choices this time, but I’m certain that I would be using them very often in the future.

Next article, I’m going to write about binary search trees.