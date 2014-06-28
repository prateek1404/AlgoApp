
var insertionSort = function(ar)
{
console.log(ar);
for(var i =1; i<ar.length; i++)
{
var l = i;
var toInsert = ar[i];
var k =0;
while(ar[k]<toInsert && k<i)
{
   k++;
}
while(l>k)
{
ar[l]= ar[l-1];
l--;
}
ar[k] =toInsert;     
}
console.log(ar);
}

var ar = [45,1,32,66,34,55,643,4,644];
insertionSort(ar);
