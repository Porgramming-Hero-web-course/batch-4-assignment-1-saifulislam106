{

function countWordOccurrences(sentence:string , word:string):number{
    return sentence.toLowerCase().split((word.toLowerCase())).length-1;
}

// console.log(countWordOccurrences("My country name is Bangladesh. I love bangladesh.Bangladesh is a beautifull country.  !", "Bangladesh"));

}

