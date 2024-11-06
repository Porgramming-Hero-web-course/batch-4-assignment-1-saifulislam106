{

    type Circle = {
        shape: "circle";
        redius: number
    };

    type Rectengle = {
        shape: "rectengle";
        height: number;
        width: number
    }
    // using type union   
    type Shape = Circle | Rectengle;
 
     // using type guard 
    const isCircle = (figure: Shape): figure is Circle =>  figure.shape === "circle";
    const isRectengle = (figure: Shape): figure is Rectengle =>  figure.shape === "rectengle";

    const calculateShapeArea = (figure:Shape): number=>{
        if(isCircle(figure)){
            return Math.PI * figure.redius *figure.redius;
        }
        else if(isRectengle(figure)){
            return figure.height * figure.width;
        }
        return 0;
    }
 

    const areaCircle = calculateShapeArea({ shape: "circle",
        redius: 4})

    const areaRectengle = calculateShapeArea({ shape: "rectengle",height:5, width:7})

    // console.log(areaCircle);
    // console.log(areaRectengle);

    
    



}