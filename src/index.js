
exports.min = function min (array) {
if ( array===undefined||array.length===0) {return 0}
else{
  let min=0;
  for(let i=0;i<array.length; i++) {
    if (array[i]<min) {min=array[i];}
  }
return min;
}
  
}




exports.max = function max (array) {
 if ( array===undefined||array.length===0) {return 0}
else {
  let max=0;
  for (let j=0; j<array.length; j++) {
    if (array[j]>max) {max=array[j];}
  }
  return max;
}

}

exports.avg = function avg (array) {
 
  if ( array===undefined||array.length===0) {return 0}
  else {
    let result=0
    for (k=0; k< array.length; k++){
      result=result +array[k];
    }
    return result/ array.length;
  } 
}
