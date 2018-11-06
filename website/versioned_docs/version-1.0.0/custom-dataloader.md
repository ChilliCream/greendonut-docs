---
id: version-1.0.0-custom-dataloader
title: Custom DataLoader
original_id: custom-dataloader
---

There are various reasons to create a custom _DataLoader_ and we will describe here the most common
reasons.

1.  Dedicated interface and implementation for _DI_ (Dependency Injection), better readability and
    brevity

**Interface**

```csharp
public interface IUserDataLoader
    : IDataLoader<string, User>
{ }
```

**Note**

> - Also derive from the `IDispatchableDataLoader` interface if needed because of manual dispatching
>   for instance.

**Implementation**

```csharp
public class UserDataLoader
    : DataLoaderBase<string, User>
    , IUserDataLoader
{
    protected override Task<IReadOnlyList<Result<User>>> Fetch(IReadOnlyList<string> keys)
    {
        // Here goes our implementation for data fetching
    }
}
```

2.  Custom _DataLoader_ Logic

**Implementation**

```csharp
public class UserDataLoader
    : IDataLoader<string, User>
{
    public IDataLoader<TKey, TValue> Clear()
    {
        // Here goes our logic
    }

    public Task<TValue> LoadAsync(TKey key)
    {
        // Here goes our logic
    }

    public Task<IReadOnlyList<TValue>> LoadAsync(params TKey[] keys)
    {
        // Here goes our logic
    }

    public Task<IReadOnlyList<TValue>> LoadAsync(IReadOnlyCollection<TKey> keys)
    {
        // Here goes our logic
    }

    public IDataLoader<TKey, TValue> Remove(TKey key)
    {
        // Here goes our logic
    }

    public IDataLoader<TKey, TValue> Set(TKey key, Task<TValue> value)
    {
        // Here goes our logic
    }
}
```

**Note**

> - For manual dispatching support implement the `IDispatchableDataLoader` interface.
