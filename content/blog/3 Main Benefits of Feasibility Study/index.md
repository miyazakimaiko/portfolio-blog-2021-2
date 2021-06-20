---
title: 3 Main Benefits of Feasibility Study
date: "2021-02-07"
slug: three-main-benefits-of-feasibility-study
updatedAt: "2021-06-20"
description: Summary of the main benefits of feasibility study which is a part of the first phase of the software development life cycle.
featured: true
topics:
 - software-development
featuredImage: './handshake.jpg'
---

<small><em>Photo by <a href="https://unsplash.com/@cytonn_photography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Cytonn Photography</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash.</a> This article is originally published on <a href="https://dev.to/maikomiyazaki">dev.to</a> on  25 Jan 2021.</em></small>

## Introduction

I am participating Female Apprenticeship programme coordinated by FIT since December 2020, and I've been writing posts about what I've learned in the Off-the-job training. In this post, I am going to summarize the main benefits of feasibility study which is a part of the first phase of the software development life cycle.

## Table of contents
  * [Benefit 1: Avoid risks to fall a project by the wayside.](#chapter-1)
  * [Benefit 2: Avoid reinventing the wheel.](#chapter-2)
  * [Benefit 3:  Clarify tasks to discover requirements.](#chapter-3)
  * [Conclusion](#chapter-4)


## Benefit 1: Avoid risks to fall a project by the wayside.<a name="chapter-1"></a>

Whether or not we are developing our own personal project or an app for a client, there are a number of risks that'll lead us to give up the project itself. Running feasibility study should play a key role here.


### Economical issues 

Economical issues are one of the factors that may force us to cease the project. Let's say, for example, we've been asked to develop a website for your friend, Bob's restaurant, for free. We readily answered that we can do it since we were just beginning to learn web development, so we thought it would be a great opportunity to upskill. We began to create it on our computer locally right away.

![Developing a website](https://dev-to-uploads.s3.amazonaws.com/i/ql0h1at2g9arwml7v0v3.png)

However, you began to realize that running website costs some money for web servers, domain name and features that Bob requires. So you decided to ask him if he would be able to pay for it, but he replied to us that he cannot afford any of it. What you can do now is to pay it with your money or cease the project. 

If we could run a feasibility study at the very beginning, we could take measures to make a better choice.

So when running the study, we need to ask:

- _What are the required costs?_
- _How much is the budget?_
- _If this project fails, could it put the business at risk?_
- _What is the expected benefit regarding revenue?_
- _Is it a good investment overall?_


### Technical Issues

Other potential risks can arise from technical issues. After few days Bob told us that he can't afford running the website,
he came back and told us that he spared his money. So we restarted creating his website from where we left off. 

We kept working on the project and finally, it was successfully released online. What an achievement!

However, we didn't know the server can be down if the website got many visitors more than it can manage. The tragedy happened because Bob's restaurant was so popular in recent years so the website became viral very very quickly. Now we need to change the webserver that can maintain the number of visitors that the website has, but it costs some money and time.

![Server failure](https://dev-to-uploads.s3.amazonaws.com/i/l6ud7u7cskq068qvaodn.png)

If we could run a feasibility study at the very beginning, we could choose a suitable server in the first place.

Therefore, when running the study we need to list up obligations which can be written with should/must. For instance:

- _The website must be able to maintain .. visitors at once._
- _Users should be able to send a message from query form._
- _The website must transfer the messages to a certain email address. _

### Operational issues

Like the factors mentioned above, the operational problem should be discovered before we began planning the project. For instance, if we are to develop a sales forecast app for a client who has 5 cafes in town, and they want a system to help each shop to bake pastries just right amount in the right time.

Assuming we successfully developed and deployed the project but after several weeks we realized that they rarely use the app. The reason was that each shop was very very busy and they only have just enough staff, so no one could manage to go to the office to open the app and check the forecast when they are running for the customers.

![Not working on smart phone](https://dev-to-uploads.s3.amazonaws.com/i/a9xxvcahb9fpwh1ptk2m.png)

If we could run a feasibility study at the very beginning, we could realize this would happen.

Like the technical issues, we need to list up obligations which can be written with should/must. For instance:

- _The system should be used on a tablet or smartphone easily._
- _The system must be intuitive to understand how to use._

## Benefit 2: Avoid reinventing the wheel.<a name="chapter-2"></a>

In the feasibility study, we can discover resources that can be used for the project. For instance, we need data about sold out items when developing a sales forecast application, so we implemented a form for users to let the system know that the item was sold out. But later on, we discovered that they've been collecting information about soldout items on their cashier system. We could actually fetch the data from there rather than implementing the feature from scratch.

Inventing the wheel might bring advantages, but it is depending on whether it is intentional or not.

![Reinventing the wheel](https://dev-to-uploads.s3.amazonaws.com/i/kxfcx4zicavq2zfyjvym.png)

On top of that, investigating available resources is vital because we have a deadline in many cases, therefore creating what is already out there should be often avoided. As a result, we will be able to spare time to focus on high-risk requirements.

In order to identify what's available, we could ask:

- _What the flowchart of the current system looks like?_
- _Where does the current system collect certain data from?_


## Benefit 3:  Clarify tasks to discover requirements.<a name="chapter-3"></a>

Because we now have an exhaustive list of issues is documented, required information and solution are easier to be identified in the next step. In other words, without the feasibility study, we may be less likely / less confident that the requirements are all-inclusive.


## Conclusion<a name="chapter-4"></a>

Feasibility Study is one of the things I wish I knew about at the very beginning of my freelance web developer journey. I've created many websites for clients and personal projects while teaching myself how to code, but I had always a tough time when it comes to planning and all the process onwards. Shame on me -- I didn't know how vital to take time in understanding if the project itself is worth going forward in terms of technical, operational and economical perspectives. That's one of the reason many of my projects failed to reach deployment. So I believe that knowing why the feasibility study is crucial can be a great starting point to successfully develop projects.

This investigation can be done as a preliminary investigation, so you could do it at the very first meeting with your client but I would also do it when I come up with personal project ideas.

## Resources
[System Analysis & Design - System Planning - tutorialspoint.com](https://www.tutorialspoint.com/system_analysis_and_design/system_analysis_and_design_planning.htm)

Thanks for reading until the end!





