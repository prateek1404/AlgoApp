var heapSort = function(ar)
{
console.log(ar);
var heapSize=0;
for(var a in ar)
{
 heapSize =insertIntoHeap(a,ar,heapSize);
}
for(var i=0;i<ar.length;i++)
{
swap(ar,0,heapSize-1);
heapSize--;
bubbleDown(0,heapSize,ar);
}
}

var swap = function(ar,i,j)
{
   var temp = ar[i];
   ar[i] = ar[j];
   ar[j] = temp;
   return ar;

}

var insertIntoHeap = function(toInsert,ar,heapSize){

if(heapSize==ar.length)
 {
    return heapSize;
 }
 ar[heapSize]= ar[toInsert];
 bubbleUp(heapSize,heapSize,ar);
 heapSize++;
 return heapSize;

}

var bubbleUp = function(index,heapSize,ar){

// bubble up till 0 maintaing heap order
//keep swapping till you find a parent which is larger than the one inserted
var parentIndex = Math.floor((index-1)/2);
while(index!=0 && ar[parentIndex]<ar[index])
{
    swap(ar,index,parentIndex);
    index = parentIndex;
    parentIndex = Math.floor((parentIndex-1)/2);
}


}

var bubbleDown= function(index,heapSize,ar)
{

while(index<heapSize)
{
var max = index;
var leftChild = (index*2)+1;
var rightChild = (index*2)+2;
if(leftChild<heapSize && ar[leftChild]>max)
{
max = leftChild;
}
if(rightChild <heapSize && ar[rightChild]>ar[max])
{
max = rightChild;
}
if(max ==index)
{
 break;
}
else
{
  swap(ar,index,max);
  index=max;
}
}

}


var ar = [45,1,32,66,34,55,643,4,644];
heapSort(ar);
console.log(ar);
