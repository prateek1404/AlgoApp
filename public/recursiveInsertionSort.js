
var recursiveInsertionSort = function(ar,i)
{
if(i==ar.length-1)
{
  return ar;
}
// i represents till where the list is sorted till now
var toInsert = ar[i+1];
var l=i;
var k =0;
while(toInsert>ar[k] && k<=i)
{
 k++;
}
while(l>=k)
{
ar[l+1]=ar[l];
l--;
}
ar[k]=toInsert;
return recursiveInsertionSort(ar,i+1);

console.log(ar);
}

var ar = [45,1,32,66,34,55,643,4,644];
var ar1 =recursiveInsertionSort(ar,0);
console.log(ar1);
