
var selectionSort = function(ar)
{
console.log(ar);

for(var i=0; i < ar.length;i++)
{
   var min = i;
   for(var j=i;j<ar.length;j++)
   {
       if(ar[j]<ar[min])
       {
            min = j;
       }
   }
   swap(ar,i,min);
}

console.log(ar);
}
var swap = function(ar,i,j)
{
   var temp = ar[i];
   ar[i] = ar[j];
   ar[j] = temp;
   return ar;

}

var ar = [45,1,32,66,34,55,643,4,644];
selectionSort(ar);
