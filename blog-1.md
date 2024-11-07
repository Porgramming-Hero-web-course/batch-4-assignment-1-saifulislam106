
# The significance of union and intersection types

## Union Type

- Union is importent and most useable type in typescript
- It define with "|" symble
- it's contain verious data type such as string , number, boolean etc and those data type separate by the symble "|"

``` typescipt

type Car = {
        model: string;
        year: number;
        isstearing: boolean
 };

type Bike = {
        model: string;
        year: number;
        cc: strig
};

    // union type

type Vehicle = Car | Bike;
```

## Intersection Type

- Intectersection type combining multiple objects types and reusable petterns
- It define with "&" symble


``` typescipt

type Car = {
        model: string;
        year: number;
        isstearing: boolean
 };

type Bike = {
        name: string;
        price: number;
        cc: strig
};

    // Intersection type

type Vehicle = Car & Bike;
```
