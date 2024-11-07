{

type Person ={
    name:string;
    age:number;
    email:string
}

function validateKeys<T extends Person>(obj: T, keys: (keyof T)[]){
    for(const key of keys){
        if(!(key in obj)){
            return false
        }
    }

    return true

}

const person :Person = {
    name:"robel",
    age:28,
    email:"r@gmail.com"
}

// console.log(validateKeys(person , ["name", "age"]));
// console.log(validateKeys(person , ["name", "roll"]));








}