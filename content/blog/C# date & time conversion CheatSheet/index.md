---
title: C# date & time conversion CheatSheet
date: "2021-04-28"
slug: c-sharp-date-time-conversion-cheat-sheet
updatedAt: "2021-06-21"
description: C# cheat sheet of date and time conversion to eliminate such little time-consuming procedures
featured: true
topics:
 - c-sharp
featuredImage: './japanese-calendar.jpg'
---

<small><em>Photo by <a href="https://unsplash.com/@charlesdeluvio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Charles Deluvio</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash.</a> This article is originally published on <a href="https://dev.to/maikomiyazaki">dev.to</a> on  28 Apr 2021.</em></small>

When dealing with data, we often find ourselves handling date and time. Although it is not particularly difficult, I often find myself googling the same conversion over and over again.

This post will share a cheat sheet of date and time conversion to eliminate such little time-consuming procedures and explain each technique in the following sections.

<a href="https://blogimagesbucket129368.s3-eu-west-1.amazonaws.com/CS+datetime+conversion+cheat+sheet.pdf">Open in PDF</a>

![C sharp datetime conversion cheat sheet](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tdci1rjmybvyo2nlwaw7.jpg)

## Table of Contents
1️⃣ [String to DateTime object](#chapter-1)
2️⃣ [String that is not parsable with Parse() to DateTime object](#chapter-2)
3️⃣ [DateTime Object to String](#chapter-3)
4️⃣ [String to String](#chapter-4)
5️⃣ [DateTime Object to Unix Timestamp in Seconds](#chapter-5)
6️⃣ [Unix Timestamp in Seconds to DateTime Object](#chapter-6)
7️⃣ [UTC timezone String to DateTimeOffset object in a different timezone](#chapter-7)
8️⃣ [24-hour time String to 12-hour time String](#chapter-8)
9️⃣ [Download PDF file](#chapter-9)



## String to DateTime object<a name="chapter-1"></a>

Input Example: String `"31-12-2021"`
Output: Datetime object `"31/12/2021 00:00:00"`

We can use `DateTime.Parse()` to create a DateTime object from a string. `Parse` method takes target string as an argument.

![String to DateTime object with parse method](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8nnwn4xjfryb4gsugqsa.jpg)


## String that is not parsable with Parse() to DateTime object<a name="chapter-2"></a>

Input Example: String `"31122021"`
Output: Datetime object `"31/12/2021 00:00:00"`

We can use `DateTime.ParseExact()` to create a DateTime object from a string that is not parsable with `Parse()` method. `ParseExact()` takes three arguments -- target string, a string to explain the format, and Format Provider which pecifies format of the DateTime conventions associated with language, region, calendar, etc.

![String to DateTime object with ParseExact method](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/s71fqv8mk73e8to3j6cp.jpg)


## DateTime object to String<a name="chapter-3"></a>

Input Example: DateTime object `"31/12/2021 00:00:00"`
Output: String `"2021-12-31"`

We can use `ToString()` methodto convert a DateTime object into String. The method takes desired string format as an argument.

![DateTime object to String](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vupizctlll53dscen4kx.jpg)


## String to String<a name="chapter-4"></a>

Input Example: String `"31122021"`
Output: String `"2021-12-31"`

To convert a string into a different format of a string, we first need to convert it into a DateTime object. Then we can use `ToString()` methodto specify a format and convert it into a string.

![String to String](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/yzg982v0p6gez3jnalh2.jpg)


## DateTime Object to Unix Timestamp in Seconds<a name="chapter-5"></a>

Input Example: DateTime Object `"31/12/2021 00:00:00"`
Output: Long `1640908800` (Unix Timestamp in seconds)

To convert DateTime Object into Unix Timestamp in seconds, we first need to convert the DateTime into a DateTimeOffset object. Then we can use `ToUnixTimeSeconds()` methodto convert it into a timestamp in Long.

![DateTime Object to Unix Timestamp in Seconds](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/uslx062agjgl9ecclqt9.jpg)


## Unix Timestamp in Seconds to DateTime Object<a name="chapter-6"></a>

Input Example: Long `1640908800` (Unix Timestamp in seconds)
Output: DateTime object with `"31/12/2021 00:00:00"`

To convert a Unix timestamp (in seconds) into a DateTime object, we first need to convert the timestamp into a DateTimeOffset object. Then we can use `DateTime` propertyto get the DateTime object.

![Unix Timestamp in Seconds to DateTime Object](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/r1drwrthtloc24nrr504.jpg)


## UTC timezone String to DateTimeOffset object in a different timezone<a name="chapter-7"></a>

Input Example: String `"31-12-2021 08:33:00 -0400"` (New York timezone)
Output: DateTime object `"31/12/2021 21:33:00 +09:00"` (Tokyo timezone)

There are two main steps to convert a UTC timezone String into a DateTimeOffset object in a different timezone. 

Firstly, we need to calculate the UTC offset of the output timezone. To do so, we can use `TimeSoneInfo.FindSystemTimeZoneById`to get the TimeZoneInfo object, and then calculates the offset using `GetUtcOffset()` method.

Next, we create a DateTimeOffset object from the input string using `DateTimeOffset.ParseExact()`. After that, convert the DateTimeOffset using `ToOffset()` method with the offset calculated in the first step.


![UTC timezone String to DateTimeOffset object in a different timezone](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gews5wxe0w5i1bd8sknc.jpg)


## 24-hour time String to 12-hour time String<a name="chapter-8"></a>

Input Example: String `"20:00"`
Output: String `"08:00 pm"`

We first need to convert String into a DateTime object. Right after, 12-hour time string can be created using `ToString` method.

![24-hour time String to 12-hour time String](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hynm2d5hstxotiz197fp.jpg)

## Download PDF file<a name="chapter-9"></a>

<a href="https://blogimagesbucket129368.s3-eu-west-1.amazonaws.com/CS+datetime+conversion+cheat+sheet.pdf">Open PDF</a>


Thanks for reading!

## Resources

[Converting between DateTime and offset - Microsoft docs](https://docs.microsoft.com/en-us/dotnet/standard/datetime/converting-between-datetime-and-offset)

[DateTimeOffset.ToOffset - Microsoft docs](https://docs.microsoft.com/en-us/dotnet/api/system.datetimeoffset.tooffset?view=netframework-4.7.2)

[List of timezone IDs for use with findtimezonebyid - Stackoverflow](https://stackoverflow.com/questions/7908343/list-of-timezone-ids-for-use-with-findtimezonebyid-in-c)