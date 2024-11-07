{

   interface Profile {
        name:string;
        age:number;
        email:string
   }

//    using partial utility type 

   function updateProfile (profile:Profile ,update:Partial<Profile>):Profile {
    return {...profile , ...update}
   }
    
   const myProfile :Profile= {
        name:"Saiful Islam",
        age:26,
        email:"s@gmail.com"
   }

//    console.log(updateProfile(myProfile ,{age:28}));






}