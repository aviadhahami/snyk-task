![](https://image4.owler.com/logo/snyk_owler_20190903_061043_large.png)

## SNYK-TASK
![](./coverage/badge-branches.svg)
![](./coverage/badge-functions.svg)
![](./coverage/badge-lines.svg)
![](./coverage/badge-statements.svg)

> #### Working premise
> In order to save time, I've converted any range given (if any) to the nearest valid semver release, using the 
[find-versions](https://www.npmjs.com/package/find-versions) package;
>



 
#### Usage
Navigate to `https://snyk-task.herokuapp.com/package/<PACKAGE_NAME>/<PACKAGE_VERSION>` 

| Param        | Value           | Default  |
| ------------- |-------------| -----|
| PACKAGE_NAME      | a valid npm package name | none |
| PACKAGE_VERSION      | a valid semver version      |   latest |

> Note that I'm using Heroku as my host. Heroku "turns off" any non-active containers, thus if my container was contacted after a long idle time - the server's first response time might be larger than usual as Heroku needs to spin up the container;
>
>  ¯\\_(ツ)_/¯

#### Description
The code above drills into the deps tree in a BFS-like manner in order to fetch the deps for a given package;

Once a tree was fetched, we save a pointer (via cache) to the relevant node in the tree, s.t. for amy given package, P, `Cache(P) => Tree | Null`. This way we guarantee O(1) exec time for fetching any previously fetched package.
  This may bloat our heap/data store, thus in a "production ready" scenario I would use a different data-store than I've used here (which is just the heap practically). See the `Things I would add` section for more :simple_smile: 

#### Implementation
At each level we're testing whether we've "previously seen" the requested package; if so - we populate the relevant subtree from the cache. Otherwise - we fetch from the NPM registry; 

In order to make sure we don't doubly-fetch packages due to race conditions, the cache is gated by a mutex s.t. no two async tasks write to the cache together;

Front-end wise - I'm using React with Styled Components, served via SSR.

#### Things I would add
1. Garbage collection & TTL
    1. If our storage is limited, then we could use a "garbage collector" (or any TTL-logic mechanism) in order to
    reduce the storage amount. We can achieve this by counting the amount each package was queried and remove the less-frequesnt
    ones.  
1. Memoization
    1. Upon counting each packages' "demand score" (the amount of time a package was being requested) - we can add memoization 
    mechanism in order to speed lookup time;
    2. For a large amount of memoized queries -  we can gate the memoization mechanism with another bloom filter (or other hash mechanism of sort) 
1. Semver ranges logic
    1. Upon multiple requests for the same package but different versions, I'd merge dependency trees w.r.t the package 
    ranges and under semver constraints.   
