---
title: Completed JavaScript Data Structure Course, and Here is What I Learned About Hash Table.
date: "2020-01-28"
slug: what-i-learned-about-hash-table
updatedAt: "2021-06-20"
description: What is hash table? Let's identify whether it is suitable for storing vocabulary data.
featured: true
topics:
 - javascript
 - data-structure
featuredImage: './timetable.jpg'
---

<small><em>Photo by Maiko Miyazaki. This article is originally published on <a href="https://dev.to/maikomiyazaki">dev.to</a> on  11 Jan 2020.</em></small>

In the last few articles, I wrote overviews of [Linked List](https://dev.to/maikomiyazaki/completed-javascript-data-structure-course-and-here-is-what-i-learned-about-linked-list-11nm), [Queue, Stack](https://dev.to/maikomiyazaki/should-i-use-stack-queue-data-structures-in-javascript-io), [Binary Search Tree](https://dev.to/maikomiyazaki/completed-javascript-data-structure-course-and-here-is-what-i-learned-about-binary-search-trees-2gje), and [Binary Heap](https://dev.to/maikomiyazaki/completed-javascript-data-structure-course-and-here-is-what-i-learned-about-binary-heap-5a0i) that I learned while taking JavaScript Data Structures and Algorithms Course on Udemy. At the same time, I was in search of a better structure that will improve the time complexity for [my Chrome Extension project](https://chrome.google.com/webstore/detail/vocab-note/obnmagkhjbjbolndeminbibodlfjnabp?hl=en&gl=IE).

Currently, I'm storing the main data as objects in an array like this:

```javascript
// Result of console.log(MainData)
(4)[{...}, {...}, {...}, {...}]
0: {category: "Machine Learning", id: 4, definition: "the action of explaining the meaning of something", tag: ["noun"], word: "interpretation"}
1: {category: "Book1", id: 3, definition: "based on random choice or personal whim, rather than any reason or system.", tag: ["adj"], word: "arbitrary"}
2: {category: "Machine Learning", id: 2, definition: "the quality, condition, or fact of being exact and acurate", tag: ["noun"], word: "precision"}
3: {category: "Book2", id: 1, definition: "using or based on what one feels to be true even without conscious reasoning; instinctive", tag: ["adj"], word: "intuitive"}
```

I'd like to implement features to delete/edit each data efficiently, but in this case, both of feature takes time complexity of O(n).

What I learned after Binary Heap was Hash Table. In this article, I'm going to think about if it can be suitable or not.

<h2>What is Hash Table?</h2>

Hash Table(also called Hash Map) is one of Hash-based structures. It looks similar to arrays -- we map index to values, but for Hash Table, we use **keys** instead of indexes.

![array and hash table](https://dev-to-uploads.s3.amazonaws.com/i/x2661bugqi44pfbxl66o.png)

Like Arrays, Hash Tables are built-in data structures for a lot of computer languages. In JavaScript, **Object** and **Map** provides a very efficient Hash Table structure.

For example, if we have a unique value like names in each data, we can use the name as its key. These features allow us to access a single item very quickly.

If it was a regular array, we needed to loop through each item to find an item. Thus, it takes time complexity of O(n).

```javascript
let StudentResidence = [];

class Student {
    constructor(name, age, grade, licenceEnds) {
        this.name        = name;
        this.age         = age;
        this.grade       = grade;
        this.licenceEnds = licenceEnds;
    }
}

StudentResidence.push(new Student('Tara Joyce', 18, 'A', '11-06-2021'))
StudentResidence.push(new Student('Brian Brown', 19, 'A', '05-06-2020'))
StudentResidence.push(new Student('John Smith', 18, 'B', '07-06-2021'))

// To change Tara's age, we need to look up each item
for (let i=0; i<StudentResidence.length; i++) {
    if(StudentResidence[i].name === 'Tara Joyce') {
        StudentResidence[i].age = 19;
    }
}
```

However, if it was stored in key-value pairs, no need to loop over the data.

```javascript

let StudentResidence = {};

class Student {
    constructor(age, grade, licenceEnds) {
        this.age         = age;
        this.grade       = grade;
        this.licenceEnds = licenceEnds;
    }
}

StudentResidence['Tara Joyce']  = new Student(18, 'A', '11-06-2021');
StudentResidence['Brian Brown'] = new Student(19, 'A', '05-06-2020');
StudentResidence['John Smith']  = new Student(18, 'B', '07-06-2021');

// To change Tara's age, no need to look up each item
StudentResidence['Tara Joyce'].age = 19;

```

We can also implement it with Map.

```javascript
let StudentResidence = new Map();

class Student {
    constructor(age, grade, licenceEnds) {
        this.age         = age;
        this.grade       = grade;
        this.licenceEnds = licenceEnds;
    }
}

StudentResidence.set('Tara Joyce', new Student(18, 'A', '11-06-2021'));
StudentResidence.set('Brian Brown', new Student(19, 'A', '05-06-2020'));
StudentResidence.set('John Smith', new Student(18, 'B', '07-06-2021'));

// To change Tara's age, no need to look up each item
StudentResidence.get('Tara Joyce').age = 19

```


These only take O(1) which is constant time. 

<h2>Why it's that fast?</h2>

What happens behind the scene is that a Hash Table uses a **hash function** to compute an index from the key, and the index tells which array of buckets the value should be stored into. Therefore when we want to find where the value is stored, we can compute the index with the hash function and find out where the desired value is stored.

![hash function picturised](https://dev-to-uploads.s3.amazonaws.com/i/tnkyfmooafebqeyr2eye.png)

Ideally, the hash function assigns each key to a unique bucket, but we need to consider the case when a hash function generates the same index for more than one key.


<h2>Dealing with collisions</h2>

There are many strategies to handle collisions, but we are going to look at two of the common ones here.

<h3>Method 1: Separate Chaining</h3>

With Separate Chaining, we store them at the same bucket nesting another sort of list inside. If it's implemented with Linked List or Array, lookup time will depend on the average number of keys per bucket.

![hash function with separate chaining](https://dev-to-uploads.s3.amazonaws.com/i/w5yz698qfa62bh555yzq.png)

<h3>Method 2: Linear Probing</h3>

Linear Probing is one of Open Addressing strategy, and with Open Addressing Strategy, we only allow one key-value set per bucket. When we find a collision, we search through the array until we find an unoccupied bucket.

![hash function with linear probing](https://dev-to-uploads.s3.amazonaws.com/i/3rdzcc019k7c9of1h2mf.png)

<h2>Should we implement our own hash function?</h2>

When we use JavaScript and trying to be fast and lightweight, firstly we should consider using regular Object or Map because it already handled efficiently. However, implementing our own hash table will help us understand what's going on behind the scene.

<h2>Implementation</h2>

Firstly, we define HashTable as an array.

```javascript
class HashTable {
    constructor(size=53) {
        this.keyMap = new Array(size);
    }
    _hash(key) {
        
    }
    set(key, value) {
        
    }
    get(key) {
        
    }
}
```

<h3>Hash Function</h3>

This hash function generates an index between 0 to 53 from a key.

```javascript
_hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total + WEIRD_PRIME * value) % this.keyMap.length;
    }
    return total;
}

```

<h3>Insertion with Separate Chaining method</h3>

We create Array inside each bucket, so we will need to simply push the key-value pair into the array in the bucket.
```javascript
set(key, value) {
    let index = this._hash(key);
    if (this.keyMap[index] === null) {
        this.keyMap[index] = [];
    } 
    this.keyMap[index].push([key, value]);
}
```

<h3>Lookup</h3>

This only takes O(1) time for finding bucket, plus looping through the array inside the bucket.

```javascript
get(key) {
    let target = this._hash(key);
    if (this.keyMap[target]) {
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[target][i][0] === key) {
                return this.keyMap[target][i][1];
            }
        }
    }
    return undefined;
}
```

<h2>Probably, Hash Table is What I was looking for!<h2>

So go back to the main topic -- What data structure will be suitable for the main data of my Chrome Extension project? The data is a list of vocabulary, and again, it looks like this:
```javascript
// Result of console.log(main-data)
(4)[{...}, {...}, {...}, {...}]
0: {category: "Machine Learning", id: 4, definition: "the action of explaining the meaning of something", tag: ["noun"], word: "interpretation"}
1: {category: "Book1", id: 3, definition: "based on random choice or personal whim, rather than any reason or system.", tag: ["adj"], word: "arbitrary"}
2: {category: "Machine Learning", id: 2, definition: "the quality, condition, or fact of being exact and acurate", tag: ["noun"], word: "precision"}
3: {category: "Book2", id: 1, definition: "using or based on what one feels to be true even without conscious reasoning; instinctive", tag: ["adj"], word: "intuitive"}

```

Only unique words are accepted so that we can implement words as the key. I can simply implement it as Object:

```javascript
MainData = {}

class Word {
    constructor(tag, category, definition) {
        this.tag        = tag
        this.category   = category
        this.definition = definition
    }
}

const saveWord = (word, tag, category, definition) => {
    if (MainData[word] == null) {
        MainData[word] = new Word(tag, category, definition)
    } else {
        alert('This word already exists in the list.')
    }
}
```

With this implementation, main data will look like this:

```javascript
// Result of console.log(MainData)
arbitrary: { category: "Book1", meanings: "based on random choice or personal whim, rather than any reason or system.", tag: ["adj"]};
interpretation: { category: "Machine Learning", meanings: "the action of explaining the meaning of something", tag:["noun"]};
intuitive: { category: "Book2", meanings: "using or based on what one feels to be true even without conscious reasoning; instinctive", tag: ["adj"]};
precision: { category: "Machine Learning", meanings: "the quality, condition, or fact of being exact and acurate", tag: ["noun"]};

```

And Deleting/Editing each object should take only **O(1)**.

<h2>Conclusion</h2>

I've looked through several data structures until now, but Hash Table seems the most sensible for the main data so far. However, I need to keep reminding these words to myself:

>Best Isn't Always Best. We need to be pragmatic about choosing appropriate algorithms -- the fastest one is not always the best for the job. (From The Pragmatic Programmer)

There are so many more data structures out there to learn, and also there's more to know about JavaScript Object and Map. Always think there's room to improve, so we won't lose the chance to make our crafts better.

<h2>Reference</h2>

[JavaScript Data Structures and Algorithms Masterclass - Udemy](https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/)

[JavaScript Hashmap Equivalent - StackOverflow](https://stackoverflow.com/questions/368280/javascript-hashmap-equivalent)

[5 WAYS TO USE A JAVASCRIPT HASHMAP - Sunfish Empire LLC](https://sunfishempire.wordpress.com/2014/08/19/5-ways-to-use-a-javascript-hashmap/)

[Objects and Hash Tables in Javascript - Medium](https://codeburst.io/objects-and-hash-tables-in-javascript-a472ad1940d9)

[Hash table - Wikipedia](https://en.wikipedia.org/wiki/Hash_table#Collision_resolution)

[Are JS objects hash tables? - Quora](https://www.quora.com/Are-JS-objects-hash-tables)

[ Learn to Code with JavaScript Hashes - Codelikethis.](https://codelikethis.com/lessons/javascript/hashes)

[The Pragmatic Programmer - goodreads.com](https://www.goodreads.com/book/show/4099.The_Pragmatic_Programmer)