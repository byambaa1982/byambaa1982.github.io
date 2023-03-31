---
title: Using Pyspark to Manipulate DataFrames
tags: Technology
---

Pyspark is a powerful framework for distributed computing and processing large datasets. It provides a wide range of functions and tools to manipulate data, allowing users to clean, transform, and analyze data effectively. In this blog post, we will create some handy functions in Pyspark to manipulate DataFrames.

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

Suppose we want to change the age column from an integer to a double data type. We can creaet the changeDataType function to do this as follows:

```python 

def changeDataType(df: DataFrame, columnName: str, castType: str)-> DataFrame:
  return df.withColumn(columnName, F.col(columnName).cast(castType))

new_df = changeDataType(df, 'age', 'double')
new_df.show()

```

This will create a new DataFrame new_df with the age column cast as a double data type. The resulting DataFrame will look like this:

```python 

+-------+----+------+
|   name| age|gender|
+-------+----+------+
|  Alice|25.0|     F|
|    Bob|30.0|     M|
|Charlie|null|     M|
|   Dave|40.0|  null|
+-------+----+------+

```
## The getDifferences Function
Suppose we have another DataFrame with some overlapping rows and we want to subtract those rows from df. We can use the getDifferences function to do this as follows:

```python

def getDifferences(leftDF: DataFrame, rightDF: DataFrame, joinColumns: list)-> DataFrame:
  return leftDF.join(rightDF, joinColumns, 'left_anti')

other_data = [  ("Bob", 30, "M"),  ("Charlie", None, "M")]

other_df = spark.createDataFrame(other_data, schema)
other_df.show()

```
This will create a new DataFrame other_df with two rows that overlap with df.

We can now use the getDifferences function to subtract the overlapping rows from df as follows:

```python 

diff_df = getDifferences(df, other_df, ['name', 'age', 'gender'])
diff_df.show()

```

This will create a new DataFrame diff_df with the rows from df that do not have matching rows in other_df. The resulting DataFrame will look like this:

```python

+-----+---+------+
| name|age|gender|
+-----+---+------+
|Alice| 25|     F|
| Dave| 40|  null|
+-----+---+------+
```
## The printNullCount Function and the nullCheck Functions


Suppose we want to check for null values in the age and gender columns of df. We can use the printNullCount function to print the number of null values for each column as follows:

```python
def printNullCount(df: DataFrame, columns: List[str]):
  print('Number of Nulls:')
  for x in columns:
    print('Nulls for {}: {}'.format(x, df.where(F.col(x).isNull()).count()))

def nullCheck(df: DataFrame, columns: List[str]) -> bool:
  failed = False
  for c in columns: 
    nulls = df.where(F.col(c).isNull()).count()
    if nulls > 0: 
      print('{} failed null check'.format(c))
      failed =

printNullCount(df, ['age', 'gender'])

```

This will print the following output to the console:

```yaml
Number of Nulls:
Nulls for age: 1
Nulls for gender: 1

```
The nullCheck function is similar to the printNullCount function, but instead of printing the results, it returns a Boolean value indicating whether any null values were found in the specified columns.


Pyspark provides a wide range of functions and tools to manipulate large datasets efficiently. In this blog post, we explored some common functions in Pyspark that can be used to clean, transform, and analyze data in a DataFrame. We demonstrated how to use the changeDataType function to change the data type of a column, the getDifferences function to subtract one DataFrame from another based on specified join columns, and the printNullCount and nullCheck functions to check for null values in specified columns. These functions are just a few examples of the many functions available in Pyspark that can help you manipulate data effectively. With the power of Pyspark, you can handle large datasets with ease and gain valuable insights into your data.

