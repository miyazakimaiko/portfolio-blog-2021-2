---
title: How to create hourly weather auto-collector using AWS Lambda with Python
date: "2021-02-20"
slug: how-to-create-hourly-weather-auto-collector-using-aws-lambda-with-python
updatedAt: "2021-06-20"
description: We'll create an hourly weather auto-collector using AWS Lambda step-by-step.
featured: true
topics:
 - python
featuredImage: './python.jpg'
---

<small><em>Photo by <a href="https://unsplash.com/@marius?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Marius Masalar</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash.</a> This article is originally published on <a href="https://dev.to/maikomiyazaki">dev.to</a> on  20 Feb 2021.</em></small>

In this post, we'll be creating an hourly weather auto-collector using AWS Lambda. 

This Lambda function will collect the **previous day hourly weather data** from OpenWeatherMap API, clean it, then upload it on the S3 bucket. 

The weather data will look like this:
![Weather data in CSV](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ufekpxkumph3vstylkjz.jpg)

And it will be done once a day, so we'll have yesterday's hourly weather data uploaded daily.

**Assuming we already have:**
- [AWS account](https://aws.amazon.com/)
- Have an S3 bucket where we will upload the data on
- [Free version of OpenWeatherMap API key](https://openweathermap.org/price)

## Steps we will go through

1️⃣ [Create a policy](#chapter-1)

2️⃣ [Create a role](#chapter-2)

3️⃣ [Set up a Lambda Function](#chapter-3)

4️⃣ [Write code to fetch, clean the data from OpenWeatherMap](#chapter-4)

5️⃣ [Install libraries in the same directory](#chapter-5)

6️⃣[Upload the zip file on the Lambda console](#chapter-6)

7️⃣ [Set up CloudWatch](#chapter-7)

➡️ Done!

Let's get started 😊

---

## 1. Create a policy<a name="chapter-1"></a>

To begin with, we first need to create a policy allowing a role to upload files on our S3 bucket.

Open your IAM console, and click `Policies`, then `Create permission` button.

![Create policy](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jby7bk8m2ka8ybj7r5bg.jpg)

On the next page, we'll be able to write a policy in JSON format. It should look like this:
```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": "s3:PutObject",
           "Recource": "arn:aws:s3:::yourbucketnamehere/*"
        }
    ]
}
```

When it's ready, click `Next: Tags` button, then click the `Next` button to review.

Name the policy and click `Create policy`.

----

## 2. Create a role<a name="chapter-2"></a>

Now we will create a role that we will attach the policy we just created.

On the same IAM console, click `Roles`, then `Create role`.
![IAM console](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9j74dil0r8fdmhv2jmhc.jpg)

On the next page, select AWS services as the entity and Lambda as a use case. Click the `Permission` button to go to the next page.
![Create a role](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2o9pl40rqk737lduoj6m.jpg)

On the next page, you can define what permission you are going to give to this role. Search the policy name you have given to the policy we just created.

![attach policy to the role](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6emcgqiu66munsn96whg.jpg)

Check the policy and click the `Next` button. Click the `Next` button again to name your role. 

Then click Create role.

The Lambda function we will be developing in the next step will be allowed to upload files if this role is attached.

----

## 3. Set up Lambda Function<a name="chapter-3"></a>

Next, we will set up our Lambda function.
Open the Lambda console and click `Create` button.

![Lambda console](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rw8lq6bhtos1tehllcbs.jpg)

Select `Author from scratch`, and enter the Function name you like. In this tutorial, we will use Python3.8.

![create lambda function page](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wonl9uxlaxrq70bqpw7q.jpg)

On the Permissions section, select `Use an existing role`. Then choose your role we just created. When it's done, we can click the `Create Function` button.

![Lambda function permissions](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/yo16l2wn865mv0dyl2lg.jpg)

Now we could attempt writing function code on the page, but most of our essential libraries cannot be imported through the Lambda function.

![Lambda function attempt](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wsz9opugwd65j9b8gqd8.jpg)
<figcaption>Attempt to write code</figcaption>

![failed](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zboyp783csgw9125qc56.jpg)
<figcaption>Unable to import modules.</figcaption>

Therefore we will first need to create the `lambda_function.py` file locally and install the necessary libraries on the same directory.

----

## 4. Write code to fetch, clean the data from OpenWeatherMap<a name="chapter-4"></a>

Ok, now we will write code to clean the weather data fetched from OpenWeatherMap API.

Create a folder locally with `lambda_function.py` file in it.

### Step1: Get the data

We start by getting the hourly weather data in a certain location.

In your `lambda_function.py` file, firstly import all the necessary libraries and define `lambda_handler` function.

```python
import os
import sys
import requests
import json
import pandas as pd
from datetime import datetime, date, timedelta, timezone
import boto3
import csv

def lambda_handler(event, context):
    ## We will start writing code here
```

Inside the `lambda_handler` function, we'll fetch weather data from OpenWeatherMap. To do so, firstly assign necessary information into variables.

```python
    api_key = 'your_own_api_key_here'
    url = 'https://api.openweathermap.org/data/2.5/onecall/timemachine'
    yesterday = datetime.now() - timedelta(days=1)
    timestamp = round(datetime.timestamp(yesterday))
    params = {
        'lat': '53.349805',
        'lon': '-6.26031',
        'units': 'metric',
        'dt': timestamp,
        'appid': api_key
    }
```
The geographical coordinates are set to Dublin, Ireland. Please find out your location by googling `longitude and latitude [your location]`. South and East are set to negative.

Now we will send a request to get hourly weather data for yesterday.
```python
result = requests.get(url=url, params=params)
result_json = result.json()
```

In the `result_json` variable, we should have:
```
{'lat': 53.3498,
 'lon': -6.2603,
 'timezone': 'Europe/Dublin',
 'timezone_offset': 0,
 'current': {'dt': 1613668586,
  'sunrise': 1613633820,
  'sunset': 1613670073,
  'temp': 6.92,
  'feels_like': 1.1,
  'pressure': 998,
  'humidity': 76,
  'dew_point': 2.99,
  'uvi': 0.84,
  'clouds': 75,
  'visibility': 10000,
  'wind_speed': 6.17,
  'wind_deg': 240,
  'wind_gust': 12.35,
  'weather': [{'id': 803,
    'main': 'Clouds',
    'description': 'broken clouds',
    'icon': '04d'}]},
 'hourly': [{'dt': 1613606400,
   'temp': 9.62,
   'feels_like': 4.5,
   'pressure': 991,
   'humidity': 81,
   'dew_point': 6.52,
   'clouds': 75,
   'visibility': 10000,
   'wind_speed': 6.17,
   'wind_deg': 160,
   'weather': [{'id': 500,
     'main': 'Rain',
     'description': 'light rain',
     'icon': '10n'}],
   'rain': {'1h': 0.51}},
  {'dt': 1613610000,
   'temp': 9.75,
   'feels_like': 2.49,
   'pressure': 987,
   'humidity': 81,
   'dew_point': 6.65,
   'clouds': 75,
   'visibility': 10000,
   'wind_speed': 9.26,
   'wind_deg': 170,
   'wind_gust': 16.46,
   'weather': [{'id': 500,
     'main': 'Rain',
     'description': 'light rain',
     'icon': '10n'}],
   'rain': {'1h': 0.89}}, .....
```

### Step2: Clean the data

What we want to know is only the hourly data from the JSON data, so we get that part in `weather_data` variable using pandas.

```python
weather_data = pd.json_normalize(data=result_json['hourly'])
```
Result:
![Weather data normalized](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3wrf1200dfay1rxcor48.jpg)

However, what we want to get from this dataframe is only `dt` and `feels_like`, and the data that are still nested inside the 'weather' column, so we will change the above code into this:
```python
weather_data = pd.json_normalize(data=result_json['hourly'], record_path='weather',
                                 meta=['dt','feels_like'])
```

Then we will get only the necessary data.
![Only necessary data](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/j6z9ds3acohjetvj5zu9.jpg)

We can use these data as it is, but I chose to remove some of the columns as they are redundant.
```python
weather_data = weather_data.drop(['main', 'description', 'icon', 'temp', 'clouds'], 1)
```

Now we get the minimum required data in the data frame.
![Cleaned data](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/eiacwtyt4c860ctjy9iv.jpg)

We would also like the `dt` column as easy-to-read format, so we will change it too.

```python
weather_data['dt'] = weather_data['dt'].apply(lambda x: datetime.fromtimestamp(x))
# we will also assign date as a part of file name later on.
date = weather_data['dt'][0].strftime("%m-%d-%Y")
```
Result:
![timestamp into datetime](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bjzg56mpbx953dpc4krw.jpg)

We could also change the format to `"%m/%d/%Y %H:%M:%S"` if you'd like.
```python
weather_data['dt'] = weather_data['dt'].apply(lambda x: x.strftime("%m/%d/%Y %H:%M:%S"))
```

Result:
![date format changed](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vjk1y4hqvtjd9bsbhj38.jpg)

In this tutorial, we don't want the data from 0:00 to 5:00, 21:00 to 23:00, so we'll get rid of them as well.
```python
weather_data = weather_data.drop(weather_data.index[21:])
weather_data = weather_data.drop(weather_data.index[:6])
```
Result:
![hourly weather data from 6am to 8pm](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1cim97v8r3y9yvj09p4e.jpg)

### Step3: Write a file on the S3 bucket

Now we will write the data into a file and upload it on the S3 bucket.

```python
// Convert the data frame into CSV
csv_data = weather_data.to_csv(index=False)

s3 = boto3.resource('s3')
bucket = s3.Bucket('your_bucket_name_here')
key = '{}.csv'.format(date)

with open("/tmp/{}.csv".format(date), 'w') as f:
    csv_writer = csv.writer(f, delimiter=",")
    csv_reader = csv.reader(csv_data.splitlines())
    for row in csv_reader:
        # each row looks like this..
        # ['id', 'dt', 'feels_like']
        # ['801', '02/18/2021 06:00:00', '-2.49']
        # ['801', '02/18/2021 07:00:00', '-1.84']....
        # write each row on f using csv_writer
        csv_writer.writerow(row)
bucket.upload_file("/tmp/{}.csv".format(date), key)
```

----

## 5. Install libraries in the same directory<a name="chapter-5"></a>

In AWS Lambda, many libraries cannot be imported therefore we need to have them in the same directory where we have the `lambda_function.py`.

For our lambda function, we need to have NumPy, Pandas and Requests installed.

I have found [this article](https://korniichuk.medium.com/lambda-with-pandas-fd81aa2ff25e) extremely helpful, so please have a look if you'd like to know the way step by step.

After installing all the libraries, we need to compress all the file. I have mine as `archive.zip` but the name doesn't really matter.

![my files are ready to go](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/z9m7upesnvy6n1i8lh51.jpg)

---

## 6. Upload the zip file on the Lambda console<a name="chapter-6"></a>

In your lambda console, we'll be able to find `Upload a zip file` button inside the `Actions` dropdown. Up load your zip file from there.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/z229eq7xqbhmoajvao7p.jpg)

When it's done, we can run a test from the `Test` button that is located top-right of the page. You'll need to configure the test event, but you don't have to do much here, so just name the test and hit `Create`. Then hit the `Test` again.

![Test Run successful](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dp6c7983v8fexp2ln1a6.jpg)

Sweet! It says the test has run successfully.
Let's see if the CSV file is correctly saved in the S3 bucket.

![CSV file is saved on S3 bucket](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/b1e8ohhrlg6gxo7meph5.jpg)

![CSV file that are uploaded from lambda function](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wa6vcsrsvy3mvqtjnp67.jpg)

It seems the file is uploaded correctly.

## 7. Set up CloudWatch<a name="chapter-7"></a>

Setting Cloudwatch for our lambda function enables the function to run automatically.

Let's open the CloudWatch console. Click the `Create rule` button.
![CloudWatch console](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pphjeo9yaim8lhgi2cmb.jpg)

In the Event Source section, select `Schedule` and set our desired interval. I'll set it to run once a day.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jqpcl0noe5a4yhkn0h79.jpg)

In the Target section, select `Lambda function` and choose our function name from the list. Hit the `Configure details` button.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zw1uimld1gxcacyglw84.jpg)

Name your CloudWatch rule on the next page, and hit `Create rule` button.

![CloudWatch successfully set](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/fq86tbtwkkabr1cd4194.jpg)

Perfect!

Check if your function was run as soon as you created the CloudWatch rule as well as running as your expected interval.

## Complete code in the lambda_function.py

```python
import os
import sys
import requests
import json
import pandas as pd
from datetime import datetime, date, timedelta, timezone
import boto3
import csv


def lambda_handler(event, context):
    api_key = 'your_openweathermap_api_key_here'
    url = 'https://api.openweathermap.org/data/2.5/onecall/timemachine'
    yesterday = datetime.now() - timedelta(days=1)
    timestamp = round(datetime.timestamp(yesterday))
    params = {
        'lat': '53.349805',
        'lon': '-6.26031',
        'units': 'metric',
        'dt': timestamp,
        'appid': api_key
    }
    # Fetch hourly weather data in Dublin from OpenWeatherMap API
    input_file = requests.get(url=url, params=params)
    result_json = input_file.json()
    # Flatten and clean hourly weather data
    weather_data = pd.json_normalize(data=result_json['hourly'], record_path='weather',
                                    meta=['dt', 'temp', 'feels_like', 'clouds'])
    weather_data = weather_data.drop(['main', 'description', 'icon', 'temp', 'clouds'], 1)
    weather_data['dt'] = weather_data['dt'].apply(lambda x: datetime.fromtimestamp(x))
    date = weather_data['dt'][0].strftime("%m-%d-%Y")
    weather_data['dt'] = weather_data['dt'].apply(lambda x: x.strftime("%m/%d/%Y %H:%M:%S"))
    weather_data = weather_data.drop(weather_data.index[21:])
    weather_data = weather_data.drop(weather_data.index[:6])
    csv_data = weather_data.to_csv(index=False)

    #call your s3 bucket
    s3 = boto3.resource('s3')
    bucket = s3.Bucket('your_bucket_name_here')
    key = '{}.csv'.format(date)

    with open("/tmp/{}.csv".format(date), 'w') as f:
        csv_writer = csv.writer(f, delimiter=",")
        csv_reader = csv.reader(csv_data.splitlines())
        # Iterate over each row in the csv using reader object
        for row in csv_reader:
            # row variable is a list that represents a row in csv
            csv_writer.writerow(row)
    #upload the data into s3
    bucket.upload_file("/tmp/{}.csv".format(date), key)
```

## Resources

[AWS Lambda with Pandas and NumPy by Ruslan Korniichuk](https://korniichuk.medium.com/lambda-with-pandas-fd81aa2ff25e)

[AWS Lambda with Pandas and NumPy|Pandas & AWS Lambda|Pandas Lambda with Python3 by BidDataOnlineSchool](https://www.youtube.com/watch?v=vf1m1ogKYrg)