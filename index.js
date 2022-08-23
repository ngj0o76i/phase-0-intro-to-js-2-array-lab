// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat = name => cats.push(name)

const destructivelyPrependCat = name => cats.unshift(name)

const destructivelyRemoveLastCat = () => cats.pop()

const destructivelyRemoveFirstCat = () => cats.shift()


const appendCat = (name) => {
  let append = [...cats, name];
  return append;
}
const prependCat = (name) => {
  let prepend = [name, ...cats];
  return prepend;
}
const removeLastCat = () => cats.slice(0, -1)

const removeFirstCat = () => cats.slice(-2)
