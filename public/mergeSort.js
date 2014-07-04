var mergeSortNew = function(ar)
{
  var length = ar.length;
  var mid = Math.floor(length/2);
  var ar1 = ar.slice(0,mid);
  var ar2 = ar.slice(mid);
  if (length ===1 || length===0)
  {
    return ar;
  }
  ar1 = mergeSortNew(ar1);
  ar2 = mergeSortNew(ar2);
   return merge(ar1,ar2);

}

var  merge= function(ar1,ar2)
{
var ar = [];
var k1 = 0;
var k2 = 0;
var k =0;
while(ar1.length!=0 && ar2.length!=0 )
{
if(ar1[0]<ar2[0])
{
 ar.push(ar1.shift());
}
else 
{
  ar.push(ar2.shift());
}

}

if(ar1.length!=0)
{
while(ar1.length!=0)
{
ar.push(ar1.shift());
}
}
else if(ar2.length!=0)
{
while(ar2.length!=0)
{
ar.push(ar2.shift());
}
}

return ar;

}

var ar = [45,1,32,66,34,55,643,4,644];
console.log(ar);
ar=mergeSortNew(ar);
console.log(ar);
