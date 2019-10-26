![](https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/snyk-512.png)

## SNYK-TASK

#### Usage

#### Description

#### Implementation

#### Things I would add
1. Memoization
    1. Upon counting each packages' "demand score" (the amount of time a package was being requested) - we can add memoization 
    mechanism in order to speed lookup time;
    2. For a large amount of memoized queries -  we can gate the memoization mechanism with another bloom filter (or other hash mechanism of sort) 
