---
layout: post
title:  "Drop all tables in a PostgreSQL schema"
date:   21-02-21 13:24:59 +0100
categories: coding
tags: posgres
---

Sometimes it is required to just drop all tables of a specific schema in PostgreSQL.

In order to delete the whole schema, execute the below command in the SQL query console

```sql
DROP SCHEMA public CASCADE;
CREATE SCHEMA public;
```

This helps to delete tables, that are for instance not deleted during an auto creation of the schema using Hibernate.






