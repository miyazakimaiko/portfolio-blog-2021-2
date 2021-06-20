---
title: Completed JavaScript Data Structure Course, and Here is What I Learned About Linked List.
date: "2020-01-01"
slug: what-i-learned-about-linked-list
updatedAt: "2021-06-20"
description: What is linked list? Let's identify whether it is suitable for storing vocabulary data.
topics:
 - javascript
 - data-structure
featuredImage: './chain-link-fence.jpg'
featured: true
---

<small><em>This article is originally published on dev.to on  1 Jan 2020.</em></small>

For my very first JavaScript project, I chose to create a chrome extension. What I decided to create was a vocabulary memo space where users can create their own vocabulary list and keep them at the corner of their chrome browser.

But at that time, I did not know any data structures but array. I didn’t even know that data can be inefficient if we use inappropriate data structures.

That was the main reason I decided to take <a src="https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/">JavaScript Algorithms and Data Structures course on Udemy</a>. It took a month to complete it. It was absolutely stimulating. 


![chrome extension vocab note](https://thepracticaldev.s3.amazonaws.com/i/jh8lh8y2xrahzzsx0tvh.jpg)
<figcaption>Vocab Note - Chrome Extension for language learners</figcaption>

At first, I was only using simple arrays and objects to store three types of data in chrome local storage, and using the built-in **unshift** method to store the main vocabulary data -- which took **O(n)** time complexity.

The main data looked like this:

```js
//result of console.log(vocabulary-data)
0: {category: "cat1", id: "4", meaning: "information of the vocabulary.", tag: ["tag1", "tag2"], word: "Example Vocab 1"}
1: {category: "cat3", id: "3", meaning: "Hello World", tag: ["tag1", "tag4"], word: "Example Vocab 2"}
2: {category: "cat2", id: "2", meaning: "This is new vocabulary.", tag: ["tag4"], word: "Example"}
3: {category: "cat4", id: "1", meaning: "You can write anything.", tag: ["tag2", "tag4", "tag5"], word: "Sample"}
```

I also wanted to implement features to remove/edit each vocabulary efficiently. But as long as it's this structure, **removing/editing** a single element also takes **O(n)** time complexity because it involves re-indexing the whole data. 

![singly linked list have to re-index each element](https://thepracticaldev.s3.amazonaws.com/i/avxjy5ngynum7sda7fdp.png)

I realized that it shouldn't be the smartest way, but then, what is?

Well, at that time, I didn't have a clue. That's because I had just started the course, and each data structure has its advantage, so I couldn't decide until I compare all the data structures that I'll be learning during the course.

What I learned first on the course were linked lists. So in this article, I'm going to investigate whether the linked list is suitable for the data or not. And then, I am going through other data structures in future articles.

<h2>Is Singly Linked List a Good Choice?</h2>

Singly linked list looks like this visually:

![singly linked list](https://thepracticaldev.s3.amazonaws.com/i/duj6ou5lm66xrt94e72o.png)

Each box is called a node, and they don’t have indexes. Instead, you need to define what is the starting node(**head**) and the end(**tail**), and **each node contains an arrow to point out which the next node is**.

<h3>Define Node and Singly linked list</h3>

To define Node and Singly linked list in JavaScript, it will look like this:

```js
// define Node
class Node{
    constructor(val) {
        // store value in val
        this.val = val;
        // define next node in next
        this.next = null;
    }
}

// define singly linked list
class SinglyLinkedList{
    constructor() {
        // define what node is head and tail
        this.head = null;
        this.tail = null;
        // define how many node in the list
        this.length = 0;
    }
}
```

<h3> Add node at the end of the list (push)</h3>

To add a node at the end of the list, you just need to (1)**point out the current tail’s next arrow to the new node**, and (2)**define the new node as the new tail**.

```js
push(val) {
    // create a node with the value
    let newEl = new Node(val);
    if (!this.head) {
        // if nothing in the list, the node will be both the head and tail
        this.head = newEl;
        this.tail = newEl;
    } else {
        // otherwise, the node will be placed as the tail
        this.tail.next = newEl;
        this.tail = newEl;
    }
    // increment the length of the list
    this.length += 1;
    return this;
}
```

Pushing takes **O(1)** complexity because it doesn't affect the other data. However, inserting an element in the middle of the list is a different story.

<h3> Inserting node in the middle of the list</h3>

Firstly, create a method called **get** to find the location where to insert the node. There is no index to the each node, so that we can only find location by counting from the beginning of the list.

Here is the example of how to find a node:

```js
// define a number (num) where to find the node
get(num) {
    if(num < 0 || num >= this.length) return null;
    // initialize the head as item
    let item = this.head;
    for (let i = 0; i < this.length; i++) {
        // if the item is at the location that you are looking for, return the item
        if(i === num) return item;
        // else move on to the next node
        item = item.next;
    }
}
```

And then, we can insert a node by using **get**.

```js
insert(index, value) {
    if (index < 0 || index > this.length) return false;
    // if the location we want to insert is the end/the beginning of the list, we just use push/unshift.
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);
    // create new node with the value
    let newNode = new Node(value);
    // define which will be prev and next when inserting the new node
    let prev = this.get(index-1);
    let next = this.get(index);
    // point out next arrow of previous node to the new node
    prev.next = newNode;
    // point out next arrow of new node to the next node 
    newNode.next = next;
    // increment the length of the list
    this.length++;
    return true;
}
```

It is not the most efficient data structure if you are **editing/deleting** node often, because finding a node takes O(n) complexity.

<h2>Is singly linked list useless?</h2>

In the beginning, I thought singly linked list is useless, but it’s actually useful **if the node already exists somewhere else**, and also **if it doesn’t require removing/editing nodes often**. For example, music streaming services might be using it when it comes to shuffling random music. Some of the services, we can’t go back to previous music if we are using the free version, and in that case, singly linked list contains functions only what it needs.

<h2> How About Doubly Linked List?</h2>

Doubly linked list is almost the same as singly linked list, but each node contains **another arrow to point out the previous node** as well as the next node. It looks like this visually:

![how doubly linked list look like](https://thepracticaldev.s3.amazonaws.com/i/7eivjcm6bna3wtt4q6wd.png)

In this case, if you implement it to the music streaming example that I mentioned earlier, you can forward the playlist and also go back to previous music. As well as singly linked list, it doesn’t require to crone each node and you just need to connect previous/next music with arrows. So I think general playlists on music streaming service can be a good example of doubly linked list.

To implement it in JavaScript, simply add **this.prev** property.

It will look like this:

```js
class Node {
    constructor(val) {
        // store value in val
        this.val = val;
        // define next node in next
        this.next = null;
        // define previous node in prev
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        // same as singly linked list
        // define what node is head and tail
        this.head = null;
        this.tail = null;
        // define how many node in the list
        this.length = 0;
    }
}
```

To add a node at the end of the list, you just need to (1)**point out the current tail’s next arrow to the new node**, and (2)**define the new node as the new tail**. Also, don’t forget to (3)**point out the new tail’s prev to the old tail**.

```js
push(val) {
    // create new node with value
    let newNode = new Node(val);
    if(!this.head) {
        // if nothing in the list, the new node is both head and tail
        this.head = newNode;
        this.tail = this.head;
    } else {
        // otherwise, define current tail as currentTail
        let currentTail = this.tail
        // point out next arrow of currentTail to new node
        currentTail.next = newNode;
        // point out prev arrow of new node to currentTail
        newNode.prev = currentTail;
        // define new node as tail
        this.tail = newNode;
    }
    this.length += 1;
    return this;
}
```

<h2>Conclusion</h2>

Both of the linked lists are not suitable for my chrome extension project because removing/editing elements are required regularly. These data structures work well if you are going to display each element one by one, but if you want to display all the data/selected data on a single page, then there’s no point using a linked list.

In the next article, I'm going to write about stacks and queues.

Thanks for reading, please leave a comment if you find any information useful or wrong in this article. I would much appreciate!
