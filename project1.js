const booksId = [1, 2, 3, 4, 5];
const booksTitle = ['Start with why', 'But how do it know', 'Clean Code', 'Zero to One', 'You dont know JS'];
const booksAuthor = ['Simon Sinek', 'J. Clark Scott', 'Robert Cecil Martin', 'Peter Thiel', 'Kyle Simpson'];
const booksPrice = [80.0, 59.9, 50.0, 45.0, 39.9];
const booksQuantity = [31, 22, 5, 12, 9];

function findBookById(id){
    for(i=0; i<=booksId.length; i++){
        if(booksId.includes(id)){
            console.log("book is found")
        }else{
            console.log("book NOT is found")
        }
    }
}
function findBookByTitle(title){
    for(i=0; i<=booksTitle.length; i++){
        if(booksTitle.includes(title)){
            console.log("book is found")
        }else{
            console.log("book NOT is found")
        }
    }
}
function findBookByAuthor(author){
    for(i=0; i<=booksAuthor.length; i++){
        if(booksAuthor.includes(author)){
            console.log("book is found")
        }else{
            console.log("book NOT is found")
        }
    }
}
findBookByAuthor('Peter Thiel')
