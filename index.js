// add solution here
function theBeatlesPlay(musicians,instruments){
  var arr=[];
  for(let i=0;i<musicians.length;i++){
    arr[i]=`${musicians[i]} plays ${instruments[i]}`
  }
  return(arr)
}
function johnLennonFacts(facts){
  var arr=[];
  while(let i=facts.length > 0){
    arr[i]=`"${facts[i]}" + "!!!"`
  }
}