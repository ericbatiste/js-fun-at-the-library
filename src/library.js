function createLibrary(name){
  return {
    name: name,
    shelves: {
      fantasy: [],
      nonFiction: [],
      fiction: []
    }
  }
}

function addBook(library, book){
  allShelves = Object.keys(library.shelves)
  for (var i = 0; i < allShelves.length; i++) {
    if (book.genre === allShelves[i]) {
      library.shelves[book.genre].push(book);
    }
  }
  return library;
}

function checkoutBook(library, title, genre){
  for (var i = 0; i < library.shelves[genre].length; i++) {
    if (title === library.shelves[genre][i].title) {
      library.shelves[genre].splice(i, 1);
      return `You have now checked out ${title} from the ${library.name}.`;
    }
  }
  return `Sorry, there are currently no copies of ${title} available at the ${library.name}.`;
}

function takeStock(library, genre) {
  allShelves = Object.values(library.shelves);
  totalBooks = [];
  if (!genre) {
    for (var i = 0; i < allShelves.length; i++) {
      for (var j = 0; j < allShelves[i].length; j++) {
        totalBooks.push(allShelves[i][j]);
      }
    }
    return `There are a total of ${totalBooks.length} books at the ${library.name}.`
  } else {
    for (var i = 0; i < library.shelves[genre].length; i++) {
      if (library.shelves[genre][i].genre === genre){
        
        return `There are a total of ${library.shelves[genre].length} ${genre} books at the ${library.name}.`;
      }
    }
  }
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};