---
title: 4 types of SDLC -- What I learned in off-the-job training
date: "2021-01-31"
slug: 4-types-of-sdlc
updatedAt: "2021-06-20"
description: Summarise 4 types of SDLC namely Waterfall, V-model, Spiral and Agile.
featured: true
topics:
 - software-development
featuredImage: './task-cards.jpg'
---

<small><em>Photo by <a href="https://unsplash.com/@dtravisphd?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">David Travis</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash.</a> This article is originally published on <a href="https://dev.to/maikomiyazaki">dev.to</a> on  31 Jan 2021.</em></small>

## Introduction

I am participating Apprenticeship programme coordinated by FIT since December 2020. In the programme, we learn about software development in a college for the first six months (we call it off-the-job training. )and moving onto on-the-job training several days a week.

If you are interested in how I got hired as an apprentice by a financial service firm in Ireland, please refer to [my post](https://dev.to/maikomiyazaki/started-software-development-apprenticeship-program-in-fit-ireland-og1).

At the moment, we are on the module of Systems Analysis and Design and I am going to summarize what I've learned so far.

## Why SDLC and who should learn them?

The Software Development Life Cycle is a general term for many SDLC methodologies which are approaches to tactically develop high-quality software.

Developing a piece of software without strategy is like trying to solve an issue while you don't know what it is nor how to solve it. We may think that we know what we want to create and might be possible to jump into coding without a strategy, but along the way you are likely to face issues such as unexpected cost, prolonging schedule or even loss of motivation.
Understanding SDLC is never more important if we are working in a team, but also on your personal project.

So if you are a self-taught developer who


>*..wants to develop a personal project successfully*
>
>*..is working as a freelance and want to gain trust from clients*
>
>*..is stuck with your own project because of the budget issue or loss of motivation*
>
>*..started to look for a software development job*
>
>*..wants to develop software in a team*

Learning SDLC methodologies will help you significantly.



## What is SDLC like?


All SDLC methodologies not only but focus on these phases:

1) __Plan, gather and analyse__
   This phase answers questions like...

    - What are the objectives?

    - Who uses the system?

    - What functionality do we need?

    - How the users use the system?

    - Are they feasible to implement? ...etc

2) __Design__

    - How will the software work?

    - How will it look? ...etc

3) __Implement__

    - How can they be programmed?

4) __Test__

    - Does each unit work?

    - Does each unit work when combined as a group?

    - Does the full system work when all units are integrated?

    - Can the system support the business and users in a real situation? ...etc

5) __Deploy__

6) __Maintenance__

Each methodology approaches these phases differently, but the basic idea about each of them are generally similar.

## What are the basic SDLC Models?

There are many more models out there, but in this section, I am going to summerise 4 types of SDLC models namely Waterfall, V-model, Spiral and Agile.

### Waterfall Model(1956~)
Waterfall methodology is one of the oldest and simplest one amongst the others. It is categorised as a __linear-sequential lifecycle model__, which means the whole process is divided into separate phases, and each phase of the development has to be completed before moving onto the next one.

Like the name “Waterfall”, the flow of the development is moving from the top to the bottom -- from analysing requirements to deployment and maintenance phase -- and it doesn’t allow us to go back to the previous phases even if we want to add or alter a requirement. So if we need alteration, we need to start from the very beginning. That being said, we will not be able to see the prototype or working software until the very end of the project, but the advantage is the ease to manage and monitor the whole process for the development team. 

![Water Model](https://dev-to-uploads.s3.amazonaws.com/i/0cgdqz2zmi7j7i6r9bnv.jpg)

If all the requirements are very clear and unlikely to change over time, this model enables us to deploy the system in an efficient manner, however, it often not applicable for the larger projects where not all of the requirements might not be transparent in the beginning. 

*Used in manufacturing and construction industries*

Reference:
[Waterfall model - wikipedia](https://en.wikipedia.org/wiki/Waterfall_model)

### V-Model(1980s)
The V-Model is similar to the Waterfall Model since it is a sequential type in which each stage begins only after the previous stage has ended. It also has the same development cycle as the Waterfall, however, __each cycle includes planning for tests__ associated with each phase. In other words, the corresponding testing phase of the development phase is planned in parallel. 

Like the Waterfall Model, the steps go through the business requirement analysis, System design, Architecture design, Module design, and then the team dives into the coding phase. After completing the implementation, it goes through all the testing phases that had been planned beforehand.  

![V Model](https://dev-to-uploads.s3.amazonaws.com/i/qlol7zz6u7d4v9mbt2s4.jpg)

This methodology allows the management team to decide everything before getting into the coding phase, more precisely than the Waterfall model. In order to function this model, the clarity of the requirements is also vital like the Waterfall Model. For this reason, the V-Model can be only ideal for the smaller projects but can be problematic to apply if the project requires flexibility for the requirements. 

*Used in medical development field*

Reference:
[SDLC - V model - tutorialspoint](https://www.tutorialspoint.com/sdlc/sdlc_v_model.htm)
[V-model - wikipedia](https://en.wikipedia.org/wiki/V-Model_(software_development))

### Spiral Model(1986)
Unlike these two models above, the Spiral Model does not follow sequential steps but __iterative development__, which begins by specifying and developing just a part of the system and iteratively enhances the evolving versions until the full system is implemented, thus it won’t be an issue if not all the requirements are crystal clear at the beginning of the process. For this reason, this model can be plausible when the customer or the owner of the system has only a vague idea of the requirements, or the requirements are complicated.

 The advantage of the Waterfall Model - systematic control aspect - is included in this model which is the Identification of a requirement, Engineering, Evaluation and Risk Analysis. Compared to the sequential type of models, the Spiral Model requires __customer evaluation__ in the last part of each iteration, so that customer needs to be able to involve in the development more frequently than the former two models. 

![Spiral Model](https://dev-to-uploads.s3.amazonaws.com/i/2tq3xq7srw3noshp4m99.jpg)

A typical iteration is somewhere between 6 months and 2 years and it can also be a long-term commitment owing to the addition or changes for requirements overtime. This flexibility can be a disadvantage as the team might be unable to estimate the end of the project, and it requires more attention from the management team as this structure is more complex than the former two models.

*Used to develop the early version of Windows in Microsoft.*

Reference:
[Difference between agile model and spiral model - stackoverflow](https://stackoverflow.com/questions/4632795/difference-between-agile-model-and-spiral-model)
[What is Spiral model- advantages, disadvantages and when to use it? - TRY QA](http://tryqa.com/what-is-spiral-model-advantages-disadvantages-and-when-to-use-it/)
[Spiral Model SDLC: Top Choice for Large, High-Risk Software Projects? - intellectsoft](https://www.intellectsoft.net/blog/spiral-model-sdlc/)

### Agile Model(2001)
The last model that I am going to mention is Agile, which is a __combination of the iterative process__ like the Spiral model with a __focus on process adaptability__. It produces a working software product at the end of each iteration which may not be true for the Spiral model. 

Every iteration of the Agile model involves cross-functional teams working simultaneously on various areas and these teams are identified as Planning, Requirement Analysis, Design, Engineering, Unit testing and Acceptance Testing. Because of the structure of the model, it doesn’t always require a concrete plan or requirements at the beginning but develops a system through repeated cycles in smaller portions at a time. This style enables us to prioritize developing working systems rather than creating concrete documentation and to be flexible for change rather than following a concrete plan. 

![Agile Model](https://dev-to-uploads.s3.amazonaws.com/i/bxwt0ywaq0cf41dpji1l.jpg)

Every iteration of the Agile model is typically shorter -- 2 to 4 weeks in most cases, therefore you’ll be able to see and monitor the progress through the working system more frequently. That being said, it can be harder to maintain the development because of the adaptability, therefore a management team plays the key role to maintain the direction of the team at all times. Also, each team must be self-organized, highly collaborative and accountable for their own work. 

*Used on nearly any large scale project in any industry*

Reference: 
[Software Engineering | Comparison between Agile model and other models - geeksforgeeks](https://www.geeksforgeeks.org/software-engineering-comparison-between-agile-model-and-other-models/#:~:text=The%20main%20principle%20of%20the%20Spiral%20model%20is%20risk%20handling,but%20customer%20interaction%20is%20less)
[Agile software development - wikipedia](https://en.wikipedia.org/wiki/Agile_software_development)
[Who Uses Agile? - Wrike](https://www.wrike.com/project-management-guide/faq/who-uses-agile/)

## Conclusion

To summarize, the Waterfall and V-Model require strict planning at the beginning of the project, therefore it is often not suitable for many systems that are going to be used in a dynamic environment. This is one of the reasons for not being popular in recent years. On the other hand, the Spiral model or Agile Model can be more sensible for many situations unless you have developed exactly the same system in the past.  So, if I were to build my own development team or develop a software for a client I would adopt Spiral or Agile methodology. Comparing these two methodologies, I would prefer Agile since it lets the team focus on customer satisfaction which I always believe is most important. 

Do you agree? Please share your thoughts in the comments!
