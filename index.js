// Write your solution here!
const cats = [`Milo`, `Otis`, `Garfield`]

function destructivelyAppendCat() {
    cats.push(`Ralph`)
    return cats
}

function destructivelyPrependCat() {
    cats.unshift(`Bob`)
    return cats
}

function destructivelyRemoveLastCat() {
    cats.pop(2)
    return cats
}

function destructivelyRemoveFirstCat() {
    cats.shift(0)
    return cats
}

function appendCat() {
    const copyOfCats = [...cats, `Broom`]
    return copyOfCats
}

function prependCat() {
    const copyOfCats = [`Arnold`, ...cats]
    return copyOfCats
}

function removeLastCat() {
    const copyOfCats = cats.slice(0, -1)
    return copyOfCats
}

function removeFirstCat() {
    const copyOfCats = cats.slice(1)
    return copyOfCats
}