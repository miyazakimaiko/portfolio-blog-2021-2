---
title: Python date & time conversion CheatSheet
date: "2021-04-10"
slug: python-date-time-conversion-cheat-sheet
updatedAt: "2021-06-21"
description: Python cheat sheet of date and time conversion to eliminate such little time-consuming procedures
featured: true
topics:
 - python
featuredImage: './datetime-on-iphone.jpg'
---

<small><em>Photo by <a href="https://unsplash.com/@fabiraw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Fabian Albert</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash.</a> This article is originally published on <a href="https://dev.to/maikomiyazaki">dev.to</a> on  10 Apr 2021.</em></small>

When dealing with data, we often find ourselves handling date and time. Although it is not particularly difficult, I often find myself googling the same conversion over and over again.

In this post, I'll share a cheat sheet of date and time conversion to eliminate such little time-consuming procedures and explain each technique in the following sections.

<a href="https://blogimagesbucket129368.s3-eu-west-1.amazonaws.com/Python+date+%26+time+Conversion+Cheat+Sheet+(1).pdf">Open in PDF</a>

![Python date & time conversion CheatSheet](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/22penwtw672vtmq31wgp.png)

## Table of Contents


1️⃣ [String to DateTime object](#chapter-1)

2️⃣ [DateTime object to String](#chapter-2)

3️⃣ [String to String](#chapter-3)

4️⃣ [UTC timestamp in seconds to DateTime object](#chapter-4)

5️⃣ [UTC timestamp in seconds to String](#chapter-5)

6️⃣ [UTC time string to UTC DateTime object in different GMT](#chapter-6)

7️⃣[24-hour time String to 12-hour time String](#chapter-7)

8️⃣[Download PDF file](#chapter-8)




## String to DateTime object<a name="chapter-1"></a>

Input Example: String `"08/04/2021"`
Output: Datetime object `"2021-04-08 00:00:00"`

We can use `datetime.strptime` to create a DateTime object from a string. `strptime` method takes two arguments -- target string and string to explain the format of the target string.

![String to DateTime object](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/d07appjcwb6dvobr62x8.jpg)


## DateTime object to String<a name="chapter-2"></a>

Input Example: DateTime object `"2021-04-08 00:00:00"`
Output: String `"08/04/2021"`

We can use `datetime.strftime`to convert a DateTime object into String. This `strftime` method takes two arguments -- DateTime object and String to specify desired string format.

![DateTime object to String](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vk5hniejj6f87lxhr3gy.jpg)


## String to String<a name="chapter-3"></a>

Input Example: String `"08/04/2021"`
Output: String `"2021-04-08"`

To convert datetime string into a different format of a string, we first need to convert it into a DateTime object. Then we can use `strptime`to specify and convert into the desired format.

![String to String](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ezgvcmh2sn4qatxersar.jpg)

## UTC timestamp in seconds to DateTime object<a name="chapter-4"></a>

Input Example: float `1617836400.0` (UTC timestamp in seconds)
Output: DateTime object with `"2021-04-08 00:00:00"`

To convert float of timestamp into a DateTime, can use `datetime.fromtimestamp()`. It takes timestamp as an argument and returns DateTime object.

![timestamp to DateTime object](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/823m3uozr95aqlmc0hjo.jpg)


## UTC timestamp in seconds to String<a name="chapter-5"></a>

Input Example: float `1617836400.0` (UTC timestamp in seconds)
Output: String `"08/04/2021"`

To convert float of timestamp into String, we first get a DateTime object. Using `strftime` method, we can then create desired format of String.

![timestamp to String](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qpqzsq96cmkrrq6y501c.jpg)

## UTC time string to UTC DateTime object in different GMT<a name="chapter-6"></a>

Input Example: String `"08-04-2021 08:33:00-0400"` (New York timezone)
Output: DateTime object `"2021-04-08 21:33:00+09:00"` (Tokyo timezone)

To convert an UTC time string, we first convert it into a DateTime object. After that, we can use `astimezone` method to create a DateTime object in specified GMT.

![UTC String to different UTC DateTime object](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xwnxgsb2pvy7rjbkhd6k.jpg)

## 24-hour time String to 12-hour time String<a name="chapter-7"></a>

Input Example: String `"20:00"`
Output: String `"08:00 PM"`

We first need to convert String into a DateTime object. Right after, 12-hour time string can be created using `strftime` method.

![24-hour time String to 12-hour time String](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/g47btuhimb15dulk9h3o.jpg)

## Download PDF file<a name="chapter-8"></a>

<a href="https://blogimagesbucket129368.s3-eu-west-1.amazonaws.com/Python+date+%26+time+Conversion+Cheat+Sheet+(1).pdf">Open PDF</a>

---

Thanks for reading!