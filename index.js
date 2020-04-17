// add solution here
musicians=[john,rose,arya]
instruments=[beets,carots,onions]
function theBeatlesPlay(musicians,instruments){
  var arr;
  for(let i=0;i<musicians.length;i++){
    arr[i]=`${musicians[i]} plays ${instruments[i]}`
  }
  return(arr)
}
theBeatlesPlay(musicians,instruments)
