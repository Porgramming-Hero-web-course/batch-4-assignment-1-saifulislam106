{

    function getProperty<T ,K extends keyof T> (obj:T , pName:K):T[K]{
        return obj[pName]
    }

    const person ={name:"saiful" , age:26};
    
    console.log(getProperty(person , "name"));
}