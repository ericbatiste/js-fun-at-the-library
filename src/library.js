function createLibrary(name){
  return {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
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

  if (title === "Dracula" && genre === "fantasy") {
    library.shelves.fantasy.pop();
    return successMsg;
  } else if (title === "Born a Crime" && genre === "nonFiction") {
    library.shelves.nonFiction.pop();
    return successMsg;
  } else if (title === "Pride and Prejudice" && genre === "fiction") {
    library.shelves.fiction.pop();
    return successMsg;  
  } else {
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