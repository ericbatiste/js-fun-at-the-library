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
  if (book.genre === 'fantasy') {
    return library.shelves.fantasy.push(book);
  } else if (book.genre === 'fiction') {
    return library.shelves.fiction.push(book);
  } else if (book.genre === 'nonFiction') {
    return library.shelves.nonFiction.push(book);
  } else {
    return
  };
}

function checkoutBook(library, title, genre){
  var successMsg = `You have now checked out ${title} from the ${library.name}.`
  var sorryMsg = `Sorry, there are currently no copies of ${title} available at the ${library.name}.`
  var allShelves = Object.values(library.shelves);
  var fantasyShelf = allShelves[0];
  var nonFictionShelf = allShelves[1];
  var fictionShelf = allShelves[2];

  if (genre === 'fantasy') {
    for (var i = 0; i < fantasyShelf.length; i++) {
      if (title === fantasyShelf[i].title) {
        library.shelves.fantasy.splice(i, 1);
        return successMsg;
      }
    }
    return sorryMsg;  
  } else if (genre === 'nonFiction') {
    for (var i = 0; i < fantasyShelf.length; i++) {
      if (title === nonFictionShelf[i].title) {
        library.shelves.nonFiction.splice(i, 1);
        return successMsg;
      }
    }
    return sorryMsg;  
  } else if (genre === 'fiction') {
    for (var i = 0; i < fictionShelf.length; i++) {
      if (title === fictionShelf[i].title) {
        library.shelves.fiction.splice(i, 1);
        return successMsg;
      }
    }
    return sorryMsg;  
  }
}

function takeStock(library, genre) {
  var fantasyShelf = library.shelves.fantasy;
  var nonFictionShelf = library.shelves.nonFiction;
  var fictionShelf = library.shelves.fiction;
  var allBooks = fantasyShelf.length + nonFictionShelf.length + fictionShelf.length;

  if (genre === 'fantasy') {
    return `There are a total of ${fantasyShelf.length} fantasy books at the ${library.name}.`;
  } else if (genre === 'nonFiction') {
    return `There are a total of ${nonFictionShelf.length} nonFiction books at the ${library.name}.`;
  } else if (genre === 'fiction') {
    return `There are a total of ${fictionShelf.length} fiction books at the ${library.name}.`;
  } else if (!genre) {
    return `There are a total of ${allBooks} books at the ${library.name}.`;
  } else {
    return
  }
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};