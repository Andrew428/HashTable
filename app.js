/* LinkedList */
import  HashTable from './util/HashTable.js';

window.onload = () => {
  
  let ht = new HashTable(); 
  console.log(ht);


  ht.add('beau', 'person');
  ht.add('fido', 'dog');
  ht.add('rex', 'dinosour');
  ht.add('tux', 'penguin')
  console.log(ht.lookup('tux'))
  ht.print();

};