---
layout: default
title:  "Generate UUID as id column in Hibernate"
date:   21-02-22 19:10:50 +0100
categories: coding
tags: [java, hibernate]
---

Generate UUID as column type with Hibernate:

```java
@Id
@GeneratedValue(generator = "UUID")
@GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
@Column(name = "id", updatable = false, nullable = false)
private UUID id;
```
Add the code above to your entity.



