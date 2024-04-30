// Write your solution here!


const cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

function destructivelyAppendCat(name) {
    cats.push(name)};
    
    destructivelyAppendCat('Ralph');


    function destructivelyPrependCat(name) {
        cats.unshift(name);
      }   

      destructivelyPrependCat("Bob");

      function destructivelyRemoveLastCat() {
        cats.pop();
      }

      destructivelyRemoveLastCat() ;
      
      function destructivelyRemoveFirstCat() {
        cats.shift();
      }
      
      destructivelyRemoveFirstCat();

      function appendCat(name) {
        return [...cats, name];
      }

      const newCats = appendCat("Broom");
      
      function prependCat(name) {
        return [name, ...cats];
      }
      
      const newCats1 = prependCat("Arnold");


      function removeLastCat() {
        return cats.slice(0, -1);
      }

      const newCats2 = removeLastCat();
      
      function removeFirstCat() {
        return cats.slice(1);
      }

      const newCats3 = removeLastCat();
     