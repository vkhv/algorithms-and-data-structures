/** @flow */
const personIsSeller = (name: string) => name[name.length - 1] === 'm';

const search = (name: string, graph: {[string]: Array<string>}) => {
  let searchQueue = [];
  searchQueue = searchQueue.concat(graph[name]);
  // This array is how you keep track of which people you've searched before.
  const searched = [];
  while (searchQueue.length) {
    const person = searchQueue.shift();
    // Only search this person if you haven't already searched them
    if (searched.indexOf(person) === -1) {
      if (personIsSeller(person)) {
        return `${person} is a mango seller!`;
      }
      searchQueue = searchQueue.concat(graph[person]);
      // Marks this person as searched
      searched.push(person);
    }
  }
  return false;
};

export default search;
