

function shelfBook(book, shelf){
  if (shelf.length === 3) return;
  shelf.splice(0, 0, book)
}

function unshelfBook(title, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title) {
      return shelf.splice(i, 1)
    }
  }
}

function listTitles(shelf) {
  var list = [];
  for (var i = 0; i < shelf.length; i++) {
    list.push(shelf[i].title);
  }
  return list.join(', ');
}

function searchShelf(shelf, title) {
  var titles = []; 
  for (var i = 0; i < shelf.length; i++) {
    titles.push(shelf[i].title);
  }
  return titles.includes(title);
}


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};