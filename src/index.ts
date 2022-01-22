import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([0, -4, 5, 2]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('freaky friday');
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(45);
linkedList.add(22);
linkedList.add(-8);
linkedList.add(78);
linkedList.add(7);
linkedList.add(2);
linkedList.sort();
linkedList.print();
