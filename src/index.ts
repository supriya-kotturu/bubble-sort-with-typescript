import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { Sorter } from './Sorter';

const numbersCollection = new NumbersCollection([0, -4, 5, 2]);
const NumSorter = new Sorter(numbersCollection);
NumSorter.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('freaky friday');
const CharSorter = new Sorter(charactersCollection);
CharSorter.sort();
console.log(charactersCollection.data);
