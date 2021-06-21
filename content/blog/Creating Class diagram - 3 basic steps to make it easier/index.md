---
title: Creating Class diagram - 3 basic steps to make it easier
date: "2021-02-28"
slug: creating-class-diagram-3-basic-steps-to-make-it-easier
updatedAt: "2021-06-20"
description: Summarise steps to discover the path to create a class diagram from a scenario.
featured: true
topics:
 - software-development
featuredImage: './writing-on-sticky-note.jpg'
---

<small><em>Photo by <a href="https://unsplash.com/@brandsandpeople?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Brands&People</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash.</a> This article is originally published on <a href="https://dev.to/maikomiyazaki">dev.to</a> on  28 Feb 2021.</em></small>

A class diagram could play a key role in a solid software design. However, I hardly knew where to start when it comes to the class diagram even though I take the time to analyze requirements.

In this article, we will discuss steps to discover the path to create a class diagram from a scenario.

To summerise, we will go through these steps:

0️⃣ [Our scenario](#chapter-0)

1️⃣ [Write user stories](#chapter-1)

2️⃣ [Create CRC cards](#chapter-2)

3️⃣ [Translate CRC cards into a class diagram](#chapter-3)

4️⃣ [Conclusion](#chapter-4)

Let's get started 😊

## O. Our scenario<a name="chapter-0"></a>

Assuming we have a client who owns 5 cafes and a kitchen where kitchen staff make food items every morning for all shops. The system they need is food ordering software where each shop manager submits food orders for the next few days and the kitchen staff view them. We have a report that summarises objectives, criteria, all the requirements and limitations.

Our goal, for now, is to create a class diagram. But can we start drawing by looking at the report? As long as the report is well organized already aiming to create a class diagram, or if we are experienced, I assume we can. Otherwise, we may want to start by writing **user stories** that help us ensure to meet each requirement.

## 1. Write user stories<a name="chapter-1"></a>

A user story looks like this:

*As an admitted user, I want to add an item with quantity to my order list so that an admitted user can view them.*

Point is to write from the perspective of end-users so that verbs are in the active forms. If we fix the sentence in the **"As a ... , I want to ... so that ... ."** form, we can find important information easily. "so that" part can be eliminated if the objective is obvious.

I personally like writing user stories on Evernote or Spreadsheet, because user stories can be moved around to organize with no hassle.

![Organizing user stories](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cpe8ypmdszr45thgyics.gif)

We can identify objects when looking at **nouns** in the user stories like this:

*"As an __admitted user__, I want to add an __item__ with quantity to my __order list__ so that an __admitted user__ can view them."*

And **verbs** can help identify requirements that the object might have.

*"As an admitted user, I want to __add__ an item with quantity to my order list so that an admitted user can __view__ them."*

With this sentence, we can say that the `order list` object could have the responsibility related to `add` and `view`.

![User stories highlighted](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7ynvp53l8n47pbjvd2es.jpg)

Assuming the above list includes all the requirements we need to implement. For now, we can simply highlight nouns and verbs, so we can look into details in the next step.

## 2. Create CRC cards<a name="chapter-2"></a>

In this section, we'll organize the components that we just highlighted in the user stories. Here we use CRC cards.

CRC cards are a great way to refine and record the components of the system design. They are like a pre-class diagram. What we need are a pen and physical cards - I personally like to use large size post-it, but we could also use online platforms like Lucidchart.

A CRC card has three sections:
    1. **Class name**
    2. **Responsibilities**
    3. **Collaborators**

Firstly, we'd like to find the **class names**. Let's look at the first user story on the list.

"As an __admitted user__,  I want to __add__ an __item__ to __item list__. Each __item__ is created with its __name__, __description__, __production cost__ and __availability__."

In the above sentence, we can see three potential objects: (admitted)user, item, and item list which are all **nouns**. They can be classes, so create CRC cards with their class names.

![CRC cards - class names are defined](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vk7tymuyxcwgf2a5m16f.jpg)

The next section is **Responsibilities**. Here we can focus on **verbs** in the user stories and consider who is responsible for the action. For instance in the sentence, "add" is the responsibility of the class `ItemList`.

But when you think about it, it's a bit strange, right? Because in real-life, if you are a user of a box and if you want to put something into it, the activity itself is not the responsibility of the box but rather the users. So why the `add` is the responsibility of `ItemList`, not the `User`?

Because **in object-oriented thinking, objects are all self-aware, even if it's not a living thing**. So we think all objects can `do` something too.

Imagine our `ItemList` is a living thing that works very hard for you. If a user tells it to put something into it, they'll do it. If they can do it, you should leave the responsibility to them.

So the CRC card for the class `ItemList` can have a list of items and the ability to add an item into the list. 

![CRC card for ItemList class](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/iav6pqs43y5jc7vkiv44.jpg)

Lastly, we'll find **Collaborators**. For `ItemList` class, a collaborator can be `Item` because it's the object that will be added in the `ItemList` using the `add` activity. Therefore they are collaborators to each other.

While creating CRC cards, it is good practice to look at the collaborators' section and place the cards next to each other if they have a relationship. We can move around as you add new information. 

## 3.Translate CRC cards into a class diagram<a name="chapter-3"></a>

When we have covered most of the nouns and verbs on CRC cards, we can move on to translating them into a class diagram. 

It's now much easier to draw it using both user stories and CRC cards. I personally like using [Lucidchart](www.lucidchart.com) that helps create clear diagrams easier.

For instance, I have translated the CRC card to the class like this:

![a CRC card translated to class diagram](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/97zgg49a4mbuwcv188oy.jpg)

Responsibilities in the CRC card such as *its name*, *description*, *production cost*, *availability* was included as **attributes**, and **methods** were evolved from *edit each component* responsibility. Ideas of relationships came from the collaborator section.

Make sure to cross out each user story as you create related class diagram components -- so that we won't miss out on any requirements.

If you have difficulties to identify Objects or relationships, I'll highly recommend taking a look at [Object-Oriented Design course on Coursera](https://www.coursera.org/learn/object-oriented-design) -- You could even learn most of the module by just reading its class note pdf.

## Conclusion<a name="chapter-4"></a>

Creating a class diagram is something that can help us create a solid software design as well as to communicate with other members of the team or future self, but at the same time, we may not have much time to spend on this activity. Using these small techniques would help us achieve a better result at the end of the day.