function generate(){
    var verses = {"1 Peter 3:15":"But in your hearts revere Christ as Lord. Always be prepared to give ",
    "1 Peter 5:7":"Cast all your anxiety on him because he cares for you"

   }
   var books = Object.keys(verses);
   var book = books[Math.floor(Math.random() * books.length)]

   var verse = verses[book];
   document.getElementById('verse').innerHTML = verse
   document.getElementById('book').innerHTML = book
}
