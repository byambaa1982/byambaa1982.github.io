---
title: How to Create Hive Metastore Databases and Tables in Databricks
tags: Technology
---

If you're using Databricks, you might want to create Hive Metastore databases and tables to organize your data. In this blog post, we'll walk through how to create Hive Metastore databases and tables in Databricks using Python.

First, let's define the directory paths and database names we want to use. We'll store them in a dictionary called all_paths.

```python
all_paths = {
  "database1":"my/example/delta/table1", 
  "database2":"my/example/delta/table2",
  "database3":"my/example/delta/table3",
  "database4":"my/example/delta/table4"
}
```

Next, we'll define a function called createHiveMetastore that creates a Hive Metastore database and tables for a specified directory path and database name. Here's what the function looks like:

```python
def createHiveMetastore(my_dir: str, db :str) -> str:
  files = dbutils.fs.ls(my_dir)
  total = []
  for file in files:
    tbl = file.name.split('/')[0]
    dirpth = f'dbfs:/my/example/dir/{db}'
    pth = f'{my/example/delta/}/{tbl}'
    #Create the database if not exits
    spark.sql(f"CREATE DATABASE IF NOT EXISTS {db}")
    # Create the table
    spark.sql(f"CREATE TABLE IF NOT EXISTS {db}.{tbl} USING DELTA LOCATION '{pth}'")
    print(f"CREATED {db}.{tbl} ")
    total.append(tbl)
  return f"CREATED a total of {len(total)}"
 ```
 
The createHiveMetastore function takes two parameters: my_dir, which represents the directory path where the tables are stored, and db, which represents the name of the database to create or use. The function then uses Databricks' file system utilities (dbutils.fs) to list the files in the specified directory, and creates a Hive Metastore database and tables for each file in the directory. The function returns a string indicating the total number of tables created.

Finally, we'll use a for loop to iterate through the all_paths dictionary and call the createHiveMetastore function for each directory path and database name. Here's what the loop looks like:

```python
for db, my_dir in all_paths.items():
  createHiveMetastore(my_dir, db)
```

This loop iterates through each key-value pair in the all_paths dictionary and calls the createHiveMetastore function for each pair. The createHiveMetastore function then creates a Hive Metastore database and tables for the specified directory path and database name.

And that's it! By following these steps, you can create Hive Metastore databases and tables in Databricks using Python.
