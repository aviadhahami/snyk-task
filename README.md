![](https://image4.owler.com/logo/snyk_owler_20190903_061043_large.png)

## SNYK-TASK


#### Working premise
In order to save time, I've converted any range given (if any) to the nearest valid semver release, using the 
[find-versions](https://www.npmjs.com/package/find-versions) package;


 
#### Usage
Navigate to `https://snyk-task.herokuapp.com/package/<PACKAGE_NAME>/<PACKAGE_VERSION>` 

| Param        | Value           | Default  |
| ------------- |-------------| -----|
| PACKAGE_NAME      | a valid npm package name | none |
| PACKAGE_VERSION      | a valid semver version      |   latest |

#### Description

#### Implementation

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
