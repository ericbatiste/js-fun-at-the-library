function createTitle(title) {
  return `The ${title}`
}

function buildMainCharacter(name, age, pronouns) {
  return {
    name: name,
    age: age,
    pronouns: pronouns
  }
}

function saveReview(review, reviews) {
  for (var i = 0; i < reviews.length; i++){
    if (reviews[i] === review) return;
  }
  return reviews.push(review)
}

function calculatePageCount(title) {
  for (var i = 0; i < title.length; i++){
  }
  return i * 20;
}

function writeBook(title, mainCharacter, genre) {
  return {
    title: title,
    mainCharacter: mainCharacter,
    pageCount: calculatePageCount(title),
    genre: genre 
  }
}

function editBook(book) {
  return book.pageCount *= .75;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}