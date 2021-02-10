const book1 = {
  name: 'The Hobbit',
  author: 'J.R.R. Tolkien',
  year: 1937,
};

const book2 = {
  name: 'The Little Prince',
  author: 'Antoine de Saint-Exupéry',
  year: 1943,
};


const bookUtils = {
  getFirstPublished: function () {
    if (book1.year < book2.year) {
      return book1.name;
    }
    return book2.name;
  },
  setNewEdition: function(book,editionYear) {
    book.latestEdition = editionYear;
  },
  setLanguage: function(book,language) {
    book.language = language;
  },
  setTranslation: function(book,language,translator) {
    book.translation = {
      translator,
      language,
    }
  },
  setPublisher: function(book,name,location) {
    book.publisher = {
      name,
      location,
    }
  },
  isSamePublisher: function(book1,book2) {
    if (book1.publisher.name === book2.publisher.name && book1.publisher.location === book2.publisher.location) {
      return 'The same publisher and location.';
    }
    return 'Not the same.';
  },
};

console.log(bookUtils.getFirstPublished());
bookUtils.setNewEdition(book1,2012);
bookUtils.setLanguage(book1,'English');
bookUtils.setTranslation(book1,'Hebrew','Remi Herpaz, Menahem Eini and Itzhak Pir');
bookUtils.setPublisher(book1,'Lalala','Israel');
bookUtils.setPublisher(book2,'GaGaGa','USA');
console.log(book1);
console.log(bookUtils.isSamePublisher(book1,book2));