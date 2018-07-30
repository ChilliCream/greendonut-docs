---
id: dispatchabledataloader-interface
title: IDispatchableDataLoader
---

## Description

Represents an additional _DataLoader_ feature regarding manual dispatching.

## Methods

### `DispatchAsync()`

**Description:** Dispatches one or more batch requests. In case of auto dispatching we just trigger
an implicit dispatch which could mean to interrupt a wait delay. Whereas in a manual dispatch
scenario it could mean to dispatch explicitly.

**Return Value:** `Task`
