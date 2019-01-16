---
id: diagnostics
title: Diagnostic Events
---

This library has recently added _DiagnosticSources_ to offer an
_Instrumentation API_ to collect diagnostic events. To get started we need to
add _two_ packages and implement _two_ classes. So lets get started.

1. We need to add the required packages.

For _.Net Core_ we use the dotnet CLI. Which is perhaps the most preferred way
doing this.

```powershell
dotnet add package System.Diagnostics.DiagnosticSource
dotnet add package Microsoft.Extensions.DiagnosticAdapter
```

And for _.Net Framework_ we still use the following line.

```powershell
Install-Package System.Diagnostics.DiagnosticSource
Install-Package Microsoft.Extensions.DiagnosticAdapter
```

2. After we added those two packages we can start listening to _Green Donut_
   diagnostic events by implementing a _DiagnosticListener_.

First we implement the _DiagnosticListener_.

```csharp
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Diagnostics;
using Microsoft.Extensions.DiagnosticAdapter;

namespace Demo
{
    public class GreenDonutListener
        : DiagnosticListener
    {
        public DispatchingListener()
            : base("GreenDonut")
        { }

        // here you see the complete set of diagnostic events we can listen to.
        // here we usually add just those events we want to listen to.
        // for example if we are not interested to get informed about values
        // loaded from the cache then we just remove the complete method.

        [DiagnosticName("ExecuteBatchRequest")]
        public void EnableExecuteBatchRequest()
        {
            // this event remains empty. it is required to enable the fetch
            // activity. if you remove this event, ExecuteBatchRequest.Start and
            // ExecuteBatchRequest.Stop stop working.
        }

        [DiagnosticName("ExecuteBatchRequest.Start")]
        public void HandleExecuteBatchRequestStart(
            IReadOnlyList<object> keys)
        {
            // here goes our code to handle activity start.
        }

        [DiagnosticName("ExecuteBatchRequest.Stop")]
        public void HandleExecuteBatchRequestStop(
            IReadOnlyList<object> keys,
            IReadOnlyList<object> values)
        {
            // here goes our code to handle activity stop.
        }

        [DiagnosticName("ExecuteSingleRequest")]
        public void EnableExecuteSingleRequest()
        {
            // this event remains empty. it is required to enable the fetch
            // activity. if you remove this event, ExecuteSingleRequest.Start
            // and ExecuteSingleRequest.Stop stop working.
        }

        [DiagnosticName("ExecuteSingleRequest.Start")]
        public void HandleExecuteSingleRequestStart(
            object key)
        {
            // here goes our code to handle activity start.
        }

        [DiagnosticName("ExecuteSingleRequest.Stop")]
        public void HandleExecuteSingleRequestStop(
            object key,
            IReadOnlyList<object> values)
        {
            // here goes our code to handle activity stop.
        }

        [DiagnosticName("BatchError")]
        public void HandleBatchError(
            IReadOnlyList<object> keys,
            Exception exception)
        {
            // here goes our code to handle batch errors which occur during
            // fetch.
        }

        [DiagnosticName("CachedValue")]
        public void HandleCachedValue(object key, object cacheKey, object value)
        {
            // here goes our code to handle values coming from the cache.
        }

        [DiagnosticName("Error")]
        public void HandleError(object key, Exception exception)
        {
            // here goes our code to handle result errors which occur during
            // fetch.
        }
    }
}
```

Then we need to implement an _Observer_ to subscribe to the _Green Donut_

_DiagnosticSource_ which produces the diagnostic events.

```csharp
using System;
using System.Diagnostics;

namespace Demo
{
    public class DispatchingObserver
        : IObserver<DiagnosticListener>
    {
        private readonly DispatchingListener _listener;

        public DispatchingObserver(DispatchingListener listener)
        {
            _listener = listener ??
                throw new ArgumentNullException(nameof(listener));
        }

        public void OnCompleted() { }

        public void OnError(Exception error) { }

        public void OnNext(DiagnosticListener value)
        {
            if (value.Name == _listener.Name)
            {
                value.SubscribeWithAdapter(_listener);
            }
        }
    }
}
```

3. Last but not least we must subscribe to the _Green Donut_ _DiagnosticSource_.

```csharp
// subscribe
var listener = new DispatchingListener();
var observer = new DispatchingObserver(listener);
var subscription = DiagnosticListener.AllListeners.Subscribe(observer);

// unsubscribe
subscription.Dispose();
```

**Note**

> - Remember to dispose your subscription if you would like to stop listening to
>   diagnostic events.
> - Keep in mind that this code is not production ready. It is meant to give you
>   an idea how it works.
