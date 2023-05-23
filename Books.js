class Bookstore {
    constructor(name){
      this.name = name
      this.books = []
    }
  
    storeBook(book){
      this.books.push(book)
    }
    getAllBooks(){
      return this.books
    }
    getBooksTotal(){
      if (this.books.lenght === 0){
        return 0
      } else {
        let sumAll = 0;
        for (let i = 0; i < this.books.length; i++) {
        sumAll += this.books[i].quantity;
      }
      return sumAll;
        
      }
      
    }
  }
  
  
  class Book {
    // your code here  
    constructor(title, quantity){
    this.title = title
    this.quantity = quantity
    }
    changeTitle(title){
      this.title = title
    }
  }
  
  
  const book1 = new Book("Eloquent Javascript", 10)
  console.log(book1)
  
  
  const book1 = new Book("JavaScript: As Partes Boas", 4);
const book2 = new Book("CSS Secrets", 2);

console.log(book1);
// Saída:
// Book { title: 'JavaScript: As Partes Boas', quantity: 4 }

console.log(book2);
// Saída:
// Book { title: 'CSS Secrets', quantity: 2 }

const bookstore = new Bookstore("Livraria Ironhack");
bookstore.storeBook(book1);
bookstore.storeBook(book2);

console.log(bookstore);
// Saída:
// Bookstore {
//   name: 'Livraria Ironhack',
//   books: [
//     Book { title: 'JavaScript: As Partes Boas', quantity: 4 },
//     Book { title: 'CSS Secrets', quantity: 2 }
//   ]
// }

console.log(bookstore.getAllBooks());
// Saída:
// [
//   Book { title: 'JavaScript: As Partes Boas', quantity: 4 },
//   Book { title: 'CSS Secrets', quantity: 2 }
// ]

console.log(bookstore.getBooksTotal());
// Saída:
// 6

book1.changeTitle("JavaScript: The Good Parts");

console.log(book1);
// Saída:
// Book { title: 'JavaScript: The Good Parts', quantity: 4 }
  
  
  
  
  
  
  
  
  /* Environment setup. Do not modify the below code. */
  /****************************************************/
 // module.exports = { Bookstore, Book };
  /****************************************************/
  