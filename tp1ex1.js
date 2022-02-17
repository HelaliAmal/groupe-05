var array=[];
var generateArray=function(){
    var len=prompt("donner le nombre des notes dans le tableau");
    for(var i=0;i<len;i++){
        do{
         Note=prompt("donner la note numero "+(i+1)+".");}
        while((Note <0)&&(Note>20))
        array.push(Note);
    }
}
var NumberOfStudentsMoreThan10=function(){
    var accumulator=0;
    for(var i=0;i<array.length;i++){
        if (array[i]>10){
            accumulator=accumulator+1;
        }
    }
    var result= "Nombre de notes superieures a 10 : "+accumulator;
    return $("#main_div").append(`<p>${result}</p>`);
}
var AVG=function(){
    var Total=0;
    for(var i=0;i<array.length;i++){
        Total=Total+=Number(array[i]);
    }
    var R=Number(Total)/Number(array.length)
    var result= "Moyenne des notes : "+(R)
    return $("#main_div").append(`<p>${result}</p>`);
}
var NoteMax=function(){
    var Max=0;
    for (var i=0;i<array.length;i++){
        if(array[i]>Max){
            Max=array[i];
        }
    }
    var result="Note Maximale est : "+Max;
    return $("#main_div").append(`<p>${result}</p>`);
}
var Search=function(){
    var x=prompt("donner la note particuliere");
   result= array.indexOf(x)+1
   return $("#main_div").append(`<p>l index du ${x} est ${result}</p>`);
}
var SortTab=function(){
 result=array.sort()
 table="["
 for(var i=0;i<result.length;i++){
     table=table+result[i]+"|"
     console.log(table)
 }
 table=table+"]"
 return $("#main_div").append(`<p>${table}</p>`);
}