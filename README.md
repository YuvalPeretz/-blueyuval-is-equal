# @blueyuval/is-equal

A simple package with one function to determine if two variables are equal (deep object equality as well).

Also, a circular object safe mechanism was implemented.

# How to install:

```bash
npm i @blueyuval/is-equal
```
in the bash console.

# How to use:
Example 1:
```javascript
import isEqual from "@blueyuval/is-equal";

const object1 = {
    value1: 1,
    value2: 2 
}

const object2 = {
    value1: 1,
    value2: 3 
}

isEqual(object1, object2) // → false
```
Example 2:
```javascript
import isEqual from "@blueyuval/is-equal";

const array1 = [1,2,3]

const array2 = [1,3,2]

isEqual(array1, array2) // → false
```
Example 3:
```javascript
import isEqual from "@blueyuval/is-equal";

const student1 = {
    name: 'Yuval',
    address: {
        city: 'San Andreas',
        district: 'GTA',
    }
}

const student2 = {
    name: 'Yuval',
    address: {
        city: 'San Andreas',
        district: 'GTA',
    }
}

isEqual(student1, object2) // → true
```