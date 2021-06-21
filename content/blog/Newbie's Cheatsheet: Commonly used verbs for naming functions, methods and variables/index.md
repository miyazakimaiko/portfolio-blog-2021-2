---
title: Newbie's Cheatsheet - Commonly used verbs for naming functions, methods and variables
date: "2021-03-15"
slug: newbies-cheatsheet-commonly-used-verbs-for-naming-functions-methods-and-variables
updatedAt: "2021-06-20"
description: Summarised commonly used verbs found in programming books and Github regardless of the type of programming language, so we can find the best-suited verbs for our own needs.
featured: true
topics:
 - software-development
 - python
 - c-sharp
featuredImage: './dictionary.jpg'
---

<small><em>Photo by <a href="https://unsplash.com/@rvignes?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Romain Vignes</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash.</a> This article is originally published on <a href="https://dev.to/maikomiyazaki">dev.to</a> on  15 Mar 2021.</em></small>

Do you follow your instinct when choosing a verb in your function?

Do you use a number of synonyms for the same purpose inconsistently?

If the answer is yes, you are not the only one. 

In order to write a clean code, or at least to attempt it, we need to know what words are commonly used so that we can use them, and people can understand easier what we are trying to do. 

At the same time, we need to stick with **one word for one concept** rather than using synonyms inconsistently.

In this post, I'll summarise commonly used verbs found in programming books and Github regardless of the type of programming language, so we can find the best-suited verbs for our own needs.

On the tables below, we'll see 5 rows: 
- **The verb**
- **The number of times the verb is written on Github to give us some ideas on how commonly it's used**
- **Its general definition**
- **Examples**
- **Synonyms to avoid using to express the same concept**

Just bear with me, this is not a complete list of common words, so please do let me know in the comment if you find some of the definition is too biased on certain programming languages. I'll also be grateful if you could teach me any other verbs that you think it's common!

I hope this post helps us, newbies choose a suitable verb and stick to it.

### Table of Contents
1️⃣ [Alteration](#chapter-1)

2️⃣ [Creation](#chapter-2)

3️⃣ [Establishment](#chapter-3)

4️⃣ [Obtainment](#chapter-4)

5️⃣ [True or False Statement](#chapter-5)

6️⃣ [Conclusion](#chapter-6)



## 1. Alteration<a name="chapter-1"></a>

<div class="table-wrapper-paragraph">

Verb | Written on Github | Definition | Examples | Synonyms to avoid 
---- | ---------------- | ---------- | -------- | -----------------
set | 2B | Often used to put data in an existing resource such as an attribute of an object. | set_name(), set_store_id() | 
change | 668M | Often used when a whole thing, such as image, is replaced by something else | change_image(), change_colour() | edit
edit | 325M | Often used same as change. It could be used especially when action is responsible for rendering the view. | edit_title(), edit_record() | change
update | 739M | Often used when one or more of the components is updated as a result, and something new could also be added. | update_file() |
add | 1B | Often used to add something into a group of the things. | add_item(), add_member() | append
append | 287M | Often used same as add. It could be used when it does not modify the original group of things but produce the new group. | append_item(), append_element() | add
remove | 824M | Often used when a given thing is removed from a group of the things. | remove_record(), remove_item() | delete
delete | 455M | Often used same as remove, but it could also render nonrecoverable. | delete_record(), delete_item() | remove
save | 478M | Often used when preserving data to avoid loss. | save_json(), save_order() | store
store | 396M | Often used the same way as save. | store_json(), store_order() | save
disable | 586M | Often used to configure a resource an unavailable or inactive state. | disable_user() | hide
hide | 237M | Often has the same intention as disable, by hiding it. | hide_field() | disable
split | 276M | Used when separating parts of a resource. | split_table(), split_group() | separate
separate | 151M | Often used the same way as the verb split. | separate_table(), separate_group() |split 
merge | 312M | Often used when creating a single resource from multiple resource. | merge_records(),  merge_tables() | join
join | 220M | It can be used in a same way as merge. | join_records(),  join_tables() | merge

</div>

## 2. Creation<a name="chapter-2"></a>

<div class="table-wrapper-paragraph">

Verb | Written<br/>on Github | Definition | Examples | Confusing<br/>synonyms 
--- | --- | --- | --- | ---
create | 1B | Used when creating a resource. | create_package(), create_directory() | make, generate
make | 797M | Often used in a same way as create. | make_package(), make_statement() | create, generate
generate | 286M | Often used in a same way as create.  | generate_directory(), generate_statement() | create, make
copy | 1B | Used when creating a resource with the same structure and data as the original one. | copy_file(), copy_graph() | clone
clone | 147M | Could be used in a same way as copy. | clone_file(), clone_graph() | copy

</div>

## 3. Establishment<a name="chapter-3"></a>

<div class="table-wrapper-paragraph">

Verb | Written<br/>on Github | Definition | Examples | Confusing<br/>synonyms 
--- | --- | --- | --- | ---
start | 1B | Generally used when initiating an operation. | start_listening() | begin
begin | 342M | Often used in a same way as start. | begin_listening() | start
open | 854M | Used when changing state of a resource to make it accessible or usable. | open_file() |

</div>

## 4. Obtainment<a name="chapter-4"></a>

<div class="table-wrapper-paragraph">

Verb | Written<br/>on Github | Definition | Examples | Confusing<br/>synonyms 
--- | --- | --- | --- | ---
get | 2B | Generally used to obtain a resource. | get_data(),  get_store_id() | fetch, retrieve
fetch | 146M | Can be used in a same way as get. | fetch_data(), fetch_store_id() | get, retrieve
retrieve | 116M | Can be used in a same way as get or fetch | retrieve_data(), retrieve_store_id() | get, fetch
read | 1B | Used when acquiring data from a source. | read_file() | 
find | 672M | Used when looking for an unknown data in a container. | find_element(), find_keyword() | search
search | 438M | Generally used in a same way as find. It may refer to look for an unknown data from multiple containers. | search_element(), search_keyword() | find
 close | 492M | Used when changing state of a resource to make it inaccessible or unusable. | close_file() |  

 </div>

## 5. True or False Statement<a name="chapter-5"></a>

<div class="table-wrapper-paragraph">

Verb | Written<br/>on Github | Definition | Examples
--- | --- | --- | ---
is | 3B | Used when defining state of a resource. | Method: is_available(), is_correct()<br/>Variables: name_is_available, date_is_correct
has | 1B | Used to define whether a resource contains a certain data. | Method: has_name(), has_date()<br/>Variables: person_has_name, course_has_date
can | 2B | Used to define a certain ability of a resource. | can_load(), can_create() 
should | 1B | Used to define a certain obligation of a resource. | should_render(), should_print_message()

</div>

## 6. Conclusion<a name="chapter-6"></a>

Writing clean code is not a skill that we can obtain overnight. But at the same time, I believe that we can improve the quality of code significantly and constantly by learning the wisdom of other people's clean code. To write this bost, I gained so many ideas from the book [Clean Code written by Robert C. Martin](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship-ebook/dp/B001GSTOAM) and many codes on Github. I especially recommend the book for anyone who is just started coding. Many of the contents might seem going too far for newbies, but I am certain that this book will be my forever reference for my career as a developer. 

Thanks to these people who share their own hard work!

Thanks for reading!