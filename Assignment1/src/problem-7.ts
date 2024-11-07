{
// class
class Car {
    make:string;
    model:string;
    year: number

    constructor(make:string ,model:string, year:number){
        this.make =make;
        this.model= model;
        this.year = year
    }

    getCarAge(){
        const calculateYear = new Date().getFullYear()
    console.log(calculateYear - this.year , "assuming current year is", calculateYear );
    }
}

const car = new Car ("toyota", "primeo" , 2015)

// car.getCarAge()










}