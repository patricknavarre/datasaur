/********************
 * HELPER FUNCTIONS *
 ********************/

const makeDino = function(newSpecies, newPeriod, newCarnivore, newExtinct = false) {
  return {
    species: newSpecies,
    period: newPeriod,
    carnivore: newCarnivore,
    extinct: newExtinct,
  }
  
}

const makeExtinct = function(dino) {
  const newDino = makeDino(dino.species, dino.period, dino.carnivore);
  newDino.extinct = true;

  return newDino;
}

const makeSingular = function(dino) {
  const newDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct)
  if (dino.species.endsWith('us') === true) {
    newDino.species = newDino.species.slice(0, -2)
  }
  return newDino
}


const truncateSpecies = function (obj) {
  if (obj.species.length > 10) {
    return makeDino(obj.species.slice(0, 7) + "...", obj.period, obj.carnivore, obj.extinct)
  } else {
    return makeDino(obj.species, obj.period, obj.carnivore, obj.extinct)
  }
}

const isCarnivore = function(dino){
  const newDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct);
  return newDino.carnivore;
}


const isExtinct = function(dino){
  const newDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct);
  return newDino.extinct;
}

const isTriassic = function(dino){
  const newDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct);
  
  if (newDino.period === 'Triassic'){
    return true;
  } else {
    return false;
  }
}

const isJurassic = function(dino){
  const newDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct);

  if (newDino.period === 'Jurassic'){
    return true;
  } else {
    return false;
  }
}

const isCretaceous = function(dino){
  const newDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct);

  if (newDino.period === 'Cretaceous'){
    return true;
  } else {
    return false
  }
}

/***********************
 * ITERATION FUNCTIONS *
 **********************/

const singularizeDinos = function(dinos) {
  return dinos.map(makeSingular)
}

const truncateDinos = function(dinos) {
  return dinos.map(truncateSpecies)
}

const makeAllExtinct = function(dinos) {
  return dinos.map(makeExtinct)
}

const carnivoresOnly = function(dinos) {
  return dinos.filter(isCarnivore)
}
//  helper function for isHerbivore

const isHerbivore = function(dino){
  const newDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct);

  if (newDino.carnivore === false)
  return newDino;
}

const herbivoresOnly = function(dinos) {
  return dinos.filter(isHerbivore);
}

//  helper function for notExtinct

const isNotExtinct = function(dino) {
  const newDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct);

  if (newDino.extinct === false)
  return newDino;
}

const extinctOnly = function(dinos) {
  return dinos.filter(isExtinct)
}

const notExtinct = function(dinos) {
  return dinos.filter(isNotExtinct);
}

const triassicOnly = function(dinos) {
  return dinos.filter(isTriassic)
}

//  helper function for isNotTriassic 

const isNotTriassic = function(dino) {
  const newDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct);

  if (newDino.period === 'Triassic'){
    return false
  }else {
    return true
  }  
  }

const notTriassic = function(dinos) {
  return dinos.filter(isNotTriassic)
}

/*********************************
 * TEST SETUP CODE - DON'T TOUCH!*
 ********************************/

  if (typeof makeDino === 'undefined') {
    makeDino = undefined
  }

  if (typeof makeSingular === 'undefined') {
    makeSingular = undefined
  }

  if (typeof truncateSpecies === 'undefined') {
    truncateSpecies = undefined
  }

  if (typeof makeExtinct === 'undefined') {
    makeExtinct = undefined
  }

  if (typeof isCarnivore === 'undefined') {
    isCarnivore = undefined
  }

  if (typeof isExtinct === 'undefined') {
    isExtinct = undefined
  }

  if (typeof isNotExtinct === 'undefined') {
    isNotExtinct = undefined
  }

  if (typeof isTriassic === 'undefined') {
    isTriassic = undefined
  }

  if (typeof isJurassic === 'undefined') {
    isJurassic = undefined
  }

  if (typeof isCretaceous === 'undefined') {
    isCretaceous = undefined
  }

  if (typeof singularizeDinos === 'undefined') {
    singularizeDinos = undefined
  }

  if (typeof truncateDinos === 'undefined') {
    truncateDinos = undefined
  }

  if (typeof makeAllExtinct === 'undefined') {
    makeAllExtinct = undefined
  }

  if (typeof carnivoresOnly === 'undefined') {
    carnivoresOnly = undefined
  }

  if (typeof herbivoresOnly === 'undefined') {
    herbivoresOnly = undefined
  }

  if (typeof extinctOnly === 'undefined') {
    extinctOnly = undefined
  }

  if (typeof notExtinct === 'undefined') {
    notExtinct = undefined
  }

  if (typeof triassicOnly === 'undefined') {
    triassicOnly = undefined
  }

  if (typeof notTriassic === 'undefined') {
    notTriassic = undefined
  }


module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct,
  isCarnivore,
  isExtinct,
  isNotExtinct,
  isTriassic,
  isJurassic,
  isCretaceous,
  singularizeDinos,
  truncateDinos,
  makeAllExtinct,
  carnivoresOnly,
  herbivoresOnly,
  extinctOnly,
  notExtinct,
  triassicOnly,
  notTriassic,
}
