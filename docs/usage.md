---
id: usage
title: Usage
---

The easiest and fastest way to get started is to instantiate the provided default `DataLoader` which
is part of the _GreenDonut_ package. We really tried to keep the _API_ of _DataLoaders_ congruent to
the [original facebook implementation which is written in JavaScript](https://github.com/facebook/dataloader),
but without making the experience for us .net developers weird.

```csharp
var userLoader = new DataLoader<string, User>(keys => FetchUsers(keys));
```

In order to change the default behavior of the `DataLoader`, we have to create a new instance of
`DataLoaderOptions` and pass it right into the `DataLoader`. Let us see how it would look like.

```csharp
var options = new DataLoaderOptions<string>
{
    SlidingExpiration = TimeSpan.FromHours(1)
};
var userLoader = new DataLoader<string, User>(keys => FetchUsers(keys), options);
```

In most cases it is enough to use the `LoadAsync` method to load data and let the `DataLoader`
handle/manage the cache internally.

```csharp
var userLoader = new DataLoader<string, User>(keys => FetchUsers(keys));
var users = await userLoader.LoadAsync(new[] { "user-key-1", "user-key-2", "user-key-N" });
```

**Note**

> - Be careful when and how reusing `DataLoader` instances, becuase sometimes users have different
    privileges. That implies perhaps a `DataLoader` on a per request base. However, it really
    depends on your application logic and the specific case you try to find a perfect solution for.
