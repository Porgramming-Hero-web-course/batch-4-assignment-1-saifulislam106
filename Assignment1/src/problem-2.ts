{

    function removeDuplicates (numsArray :number[]):number[]{
        const removeDuplicateArray =numsArray.filter((element ,idx)=>numsArray.indexOf(element)===idx);
        return removeDuplicateArray;
    }

    // console.log(removeDuplicates([1,1,2,3,3,4,5,6,6]));










}