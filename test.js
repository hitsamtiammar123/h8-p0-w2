var array=[
    'circle',
    'rectangle',
    'circle',
    'rectangle',
    'square',
    'square'
];

function classify(array){
    var unique=Array.from(new Set(array));

    var result=[];
    for(var i=0;i<unique.length;i++){
        var u=unique[i];
        var counter=0; 
        for(var j=0;j<array.length;j++){
            var a=array[j];
            if(u===a)
                counter++;
        }
        result.push(counter);
    }
    return result;
}

console.log(classify(array));