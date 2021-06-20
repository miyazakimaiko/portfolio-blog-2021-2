---
title: Examples to remember the concept of Abstraction, Generalisation, Decomposition and Encapsulation in one go
date: "2021-03-26"
slug: examples-to-remember-the-concept-pf-abstraction-generalisation-decomposition-and-encapsulation-in-one-go
updatedAt: "2021-06-20"
description: Summary of the four main principles in a setting simulating a retail company similar to IKEA.
featured: true
topics:
 - software-development
featuredImage: './girl-in-ikea.jpg'
---

<small><em>Photo by <a href="https://unsplash.com/@kelvinhan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kelvin Han</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash.</a> This article is originally published on <a href="https://dev.to/maikomiyazaki">dev.to</a> on  26 Mar 2021.</em></small>


Did you just begin to learn Object-Oriented Design/Programming recently? Are you struggling to grasp the general idea of Abstraction, Generalisation, Decomposition and Encapsulation? Are you not sure about the differences between each concept?


If that sounds like you, you are not alone! For newbies, there are so many concepts to remember and it can be overwhelming.

In this post, we'll be looking at the summary of each principle and then move onto each of them. To help us remember the concepts in one go, we will be looking at the four main principles in a setting simulating a retail company similar to IKEA. 

As a result, we'll be able to grasp the general ideas and understand why they are useful.

## Summary

<div class="table-wrapper-paragraph">

Principle | Goal | Related words | Examples 
--- | --- | --- | ---
[Abstraction](#chapter1) | Reduces complexity by showing only relevant information | abstract class, abstract method, extend | A row header for chairs
[Generalization](#chapter2) | Reduces complexity by having an umbrella term | superclass, subclass, interface, implements, extends | Furniture for chairs, tables and chests
[Decomposition](#chapter3) | Reduces complexity by separating problems | association, aggregation, composition | Fitted Kitchen
[Encapsulation](#chapter4) | Restrict access to data to protect them and reduce complexity | getter method, setter method, private, protected, public | System of a restaurant section

</div>

Now let's dive into details.

---

# Abstraction<a name="chapter1"></a>

Abstraction can reduce complexity by **hiding irrelevant information** of things. In other words, it clarfy things by **showing only relevant information**.

Let's look at examples.

Imagine we sell chairs in our retail company. On our website, we listed our products and information to help customers to make purchase decisions. The product pages of chairs would contain those information listed below **without having concepts of abstraction**:

![Without Abstraction](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/sriy9mgljyi7j6860rln.png)

What do you think about the representation? Are some of them irrelevant to customers to make purchase decisions? 

In such a situation, **we usually show only relevant information** to help make our customer's purchase decisions without confusion.

![With Abstraction](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lv6bicjp9hqwuu48b8m5.png)

What we can see here is a much less complex structure because irrelevant information were ignored and rest of them are organized.

**Abstraction is like creating the row header in the picture. They can become attributes within a Chair class**. As a result, it is much easier to create a new type of chair because you have column headers, which is a class in OOP, as a template.

---

# Generalization<a name="chapter2"></a>

Generalization can reduce complexity by creating an umbrella term. In other words, having an umbrella term can reduce redundancy and improve efficiency.

Now, let us continue to use the example of the retail company to look at how generalization can be used.

At the moment, we sell chairs, tables and chests in the retail section of our company. At the moment, we have a column header for chairs including `Product name`, `Type`, `Article number`,  `Width`, `Depth`, `Height`, `Seat width`, `Seat depth`, `Seat height`, `Max. seat height`, `Tested for`.

When we looked at each title carefully, you may notice that some of them are obviously necessary for tables and wardrobes as well, but others are only applicable for chairs.

![Common attributes](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/58o81fc973vaqm0rkfeo.png)

For instance, it is clear that `Width`, `Depth`, `Height` must be included in any products we have, because **they are the key factors for any furniture to evaluate if it is compatible with the customer's usage**.

If that's the case, we can state that `Width`, `Depth`, `Height` as well as `Product name` and `Type` are must-have information to include in an umbrella term which we could name it `Furniture`.

---

#Decomposition<a name="chapter3"></a>

Decomposition can reduce the complexity of a problem by separating it into smaller chunks.

Imagine we started selling more products including kitchen appliances in our retail company. Now, we are planning to sell fitted kitchens and set the fitted kitchen samples at our shop. 

So far, we have specified what to include in a fitted kitchen sample **without decomposition**.

![Without Decomposition](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ic2x160ml068ses2t0ky.png)

What do you think of it? Isn't it complicated and unclear? For now, the list is small enough for the sake of simplicity, but what could happen if we include all the functionalities? 

Without decomposition, an object could have too many responsibilities and purpose.

In such a situation, we usually separate the responsibilities into smaller chunks to make things clearer and easier to maintain.


![With decomposition](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ghsej5fc6xbu980c83z4.png)

There are three types of relationships between the decomposed Fitted Kitchen object and its components, namely **Composition**, **Aggregation** and **Association**.

###Composition (with Dimension)

Composition creates **the strongest relationship**. In the example above, the Fitted Kitchen could have a relationship with `Dimension` because when the Fitted Kitchen is destroyed, `Dimension` should also be destroyed. In other words, *`Dimension` cannot exist without the Fitted Kitchen itself*.

###Aggregation (with Tap, Ventilation fan, Oven...)

Aggregation is **a looser relationship than composition**. In the example, Tap, Ventilation fan, Oven, Hob, Fridge, Freezer and Cupboard could have aggregation relationships with Fitted Kitchen if we decide that *Fitted Kitchen should not be presented to customers without one of the components*. That being said, *each component can exist or be sold individually even though the Fitted Kitchen is destroyed*.

###Association (with Designer)

Association is **a loose relationship**. In the example, `Designer` could have an association relationship with the Fitted Kitchen, if *the existence of Designer does not affect the existence of the Fitted Kitchen and vice versa*. In other words, the Designer can exist and do their job even though the Fitted Kitchen is destroyed.

---

# Encapsulation<a name="chapter4"></a>

Encapsulation can reduce the complexity of issues by bundling data and the methods that work on the data within one unit. 

Let's say we are planning to have a restaurant section in our retail company like IKEA does.

We decided to have three menus like below:

Dish Name | Comes with | Price
--- | --- | --- 
Grilled Salmon | Small soup, French fries | 8.50
Vegetable Soup | Small Salad, A slice of soda bread | 8.00
Beef Sandwich | Small Salad, Crisps | 8.50

Without encapsulation, we are forced to have a buffet-style bar that customer can serve themselves freely. To put it another way, a customer is able to change the Small Salad to Grilled Salmon as the side, because they are set to `public`. As a result, the price and the system of the restaurant would break.

![With Encapsulation](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gdzkexytvqyctplmjxtl.png)

Encapsulation enables the restaurant system to have staff who control the changes in the dishes. In other words, each component of the dish is set to protected or private. They can allow a customer's request if it's allowed, or reject if they cannot change so that prevent direct changes and mistakes.

# Conclusion

As I found these design principles terms a bit demotivating to remember at first, I prefer to include all of them in a single setting. I hope those examples help you to remember and distinguish the differences!

#References

[Object-Oriented Design - Coursera](https://www.coursera.org/learn/object-oriented-design)

[What is Abstraction in OOPs? Java Abstract Class & Method - Guru99](https://www.guru99.com/java-data-abstraction.html#:~:text=Abstraction%20is%20the%20concept%20of,unnecessary%20details%20from%20the%20users.)

[OOP Concept for Beginners: What is Abstraction? - Stackify](https://stackify.com/oop-concept-abstraction/)

[What's the difference between abstraction and generalization? - Stackoverflow](https://stackoverflow.com/questions/19291776/whats-the-difference-between-abstraction-and-generalization#:~:text=While%20abstraction%20reduces%20complexity%20by,functions%20with%20a%20single%20construct.)

[Generalization - SAN JOSÉ STATE UNIVERSITY](http://www.cs.sjsu.edu/faculty/pearce/modules/lectures/oop/basics/generalization.htm)

[Premature Generalization Is Evil - Wiki Wiki Web](https://wiki.c2.com/?PrematureGeneralizationIsEvil)

[Decomposition - BBC Bitesize](https://www.bbc.co.uk/bitesize/guides/zqqfyrd/revision/1)

[OOP Concept for Beginners: What is Encapsulation - Stackify](https://stackify.com/oop-concept-for-beginners-what-is-encapsulation/)