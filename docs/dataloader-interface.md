---
id: dataloader-interface
title: IDataLoader<TKey, TValue>
---

## Description

Represents a minimal set of _DataLoader_ functionality.

## Methods

### `Clear()`

**Description:** Empties the complete cache.

**Return Value:** `IDataLoader<TKey, TValue>`

---

### `LoadAsync(TKey key)`

**Description:** Loads a single value by key. This call may return a cached value or enqueues this
single request for bacthing if enabled.

**Return Value:** `Task<TValue>`

---

### `LoadAsync(params TKey[] keys)`

**Description:** Loads multiple values by keys. This call may return cached values and enqueues
requests which were not cached for bacthing if enabled.

**Return Value:** `Task<IReadOnlyList<TValue>>`

---

### `LoadAsync(IReadOnlyCollection<TKey> keys)`

**Description:** Loads multiple values by keys. This call may return cached values and enqueues
requests which were not cached for bacthing if enabled.

**Return Value:** `Task<IReadOnlyList<TValue>>`

---

### `Remove(TKey key)`

**Description:** Removes a single entry from the cache.

**Return Value:** `IDataLoader<TKey, TValue>`

---

### `Set(TKey key, TValue value)`

**Description:** Adds a new entry to the cache if not already exists.

**Return Value:** `IDataLoader<TKey, TValue>`

---

### `Set(TKey key, Task<TValue> value)`

**Description:** Adds a new entry to the cache if not already exists.

**Return Value:** `IDataLoader<TKey, TValue>`
