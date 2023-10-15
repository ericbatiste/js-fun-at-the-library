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

}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  // takeStock
};