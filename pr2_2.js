var library = [ 
    {
        book_title: 'Bill Gates',
        author: 'The Road Ahead',
        publish_year: 1995
    },
    {
        book_title: 'Steve Jobs',
        author: 'Walter Isaacson',
        publish_year: 2011
    },
    {
        book_title: "Harry Potter and the Sorcerer's Stone ",
        author: 'J.K. Rowling',
        publish_year: 1997
    }];

    function print_info(){
        for (var i = 0; i < library.length; i++){
            console.log('\n');
            console.log('title: ' + library[i].book_title);
            console.log('author: '+ library[i].author);
            console.log('Publish Year: '+ library[i].publish_year);
        }
    }
    
print_info()