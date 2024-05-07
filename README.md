# the-number `v1.0.0`

> A package that finds various types of information about a number.

This package does a bunch of operations of a number to get information about it. This information includes but not limited to:
* Is it even or odd?
* Is it square?
* It it prime?
* Which numbers is it dividable by?

## Installation

```bash
npm i --save the-number
```

## Usage

```typescript
import { findInformationOf } from 'the-number';

const number = 395;
const info = findInformationOf(number); // collects information

info.forEach(i=>{

    console.log(`This is an information related to ${i.type}.`); // Use type for whatever you want.
    console.log(`It's message says '${i.message}'.`); // Use message to show users what this information is
    if(i.detail) console.log(`There is also a detail: '${i.detail}'`); // Additional detail about message

});

console.log(`395 can be divided by ${info.filter(r=>r.type==='dividable')} different numbers.`);

```