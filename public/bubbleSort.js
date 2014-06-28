var bubbleSort = function(ar)
{
  console.log(ar);

for(var i=0;i<ar.length;i++)
{
  for(var j=0;j<ar.length-i;j++)
  {
    if(ar[j+1]<ar[j])
    {
      ar =swap(ar,j,j+1);
    }

  }

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
bubbleSort(ar);
