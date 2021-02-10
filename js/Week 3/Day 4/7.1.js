const theHobbit = {
  title: 'The Hobbit',
  author: 'J.R.R. Tolkien',
  year: '1937',
  pages: '310',
  language: 'English',
};

function book(bookname) {
  return `
  The book ${bookname.title} was written by ${bookname.author} in the year ${bookname.year}.
  The first edition have ${bookname.pages} pages and written in ${bookname.language}.`
}

console.log(book(theHobbit));