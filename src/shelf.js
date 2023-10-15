

function shelfBook(book, shelf){
  if (shelf.length === 3) return;
  shelf.splice(0, 0, book)

    // Code for if the books were in alphabetical order, 
    // which is what I thought was happening initially:
    
    // title = book.title
    // shelf.push(book);
    // shelf.sort((a, b) => {
    //   if (a.title < b.title) {
    //     return -1;
    //   } else if (a.title > b.title) {
    //     return 1
    //   }
    //   return 0;
    // });
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
  for (var i = 0; i < shelf.length; i++) {
    var titles = []; 
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