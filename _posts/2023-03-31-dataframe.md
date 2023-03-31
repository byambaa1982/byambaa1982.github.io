---
title: Using Pyspark to Manipulate DataFrames
tags: Technology
---

Pyspark is a powerful framework for distributed computing and processing large datasets. It provides a wide range of functions and tools to manipulate data, allowing users to clean, transform, and analyze data effectively. In this blog post, we will explore some common functions in Pyspark to manipulate DataFrames.

```python
from pyspark.sql import SparkSession
from pyspark.sql.functions import *
from pyspark.sql.types import *

spark = SparkSession.builder.appName("example").getOrCreate()

data = [
  ("Alice", 25, "F"),
  ("Bob", 30, "M"),
  ("Charlie", None, "M"),
  ("Dave", 40, None)
]

schema = StructType([
  StructField("name", StringType(), True),
  StructField("age", IntegerType(), True),
  StructField("gender", StringType(), True)
])

df = spark.createDataFrame(data, schema)
df.show()
```

## The changeDataType Function

The first function we will explore is the changeDataType function. This function allows you to change the data type of a column in a DataFrame. The function takes three parameters: a DataFrame, the name of the column you want to change the data type for, and the type you want to cast the column to.

```python 

def changeDataType(df: DataFrame, columnName: str, castType: str)-> DataFrame:
  return df.withColumn(columnName, F.col(columnName).cast(castType))

```

To use this function, you would call it and pass in the DataFrame you want to modify, the name of the column, and the new data type. For example, if you had a DataFrame named df with a column named age that you wanted to change to an integer data type, you would call the function like this:

```python 

diff_df = getDifferences(df1, df2, ['col1', 'col2'])

```

## The printNullCount Function

The printNullCount function is used to count the number of null values in specified columns of a DataFrame and print the results to the console.

```python

def printNullCount(df: DataFrame, columns: List[str]):
  print('Number of Nulls:')
  for x in columns:
    print('Nulls for {}: {}'.format(x, df.where(F.col(x).isNull()).count()))

```

To use this function, you would call it and pass in the DataFrame you want to check and a list of the columns to check for null values. For example, if you had a DataFrame named df and you wanted to check for null values in the age and gender columns, you would call the function like this:

```python

printNullCount(df, ['age', 'gender'])

```

