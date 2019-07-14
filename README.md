# HashTables
CS concepts showing the implimtaion of HashTables in javascript.

Hash tables are used to `implement associative arrays, or mapping of key-values pairs`.  

Hash Functions: Hash tables are implemented by taking a key value and running it through a hash function.  A hash function maps string to numbers which will then correspond to indexes in an array.  The same process is used for both storing and retrieving the key-value.

Collisions:  In the case where two or more key values are mapped to the number/same index, this is called a collision.  The most common way to deal with collisions is called `Chaining`.  This is where you just store all of the key-values in a Linked List or Array on that same index.  Then you can just scan through each enter and find the key value you are looking for.    
 
The Big O for a hash table is `O(n)` in the worst case scenario and `O(1)` in the average case. 
