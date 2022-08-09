console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//Create a global variable named `basket` and set it to an empty array.

// - Create a function called `addItem`. It should:
// - take an input parameter for a string `item`
// - add the new item to the global array `basket`. 
// - return `true` indicating the item was added

basket = [];

function addItem(item, basket){
   basket.push(item);
   for(i=0; i < basket.length; i++){
        if (item === basket[i]){
            return true;
        }
   }
}

console.log(`Test - expect true, ${addItem('root beer', basket)}`);
console.log(`Test - expect true, ${addItem('ice cream', basket)}`);
console.log(`Test - expect true, ${addItem(-12, basket)}`);
console.log(`Test - expect undefined, ${addItem(-"root beer", basket)}`);


// - Create a function called `listItems`. It should:
// - loop over the items in the `basket` array
// - console.log each individual item on a new line



function listItems(array){
    for (item of array){
        console.log(item);
    }
}
  

basket = ['carrot', 'cabbage', 'potato', 'squash'];
listItems(basket);
console.log(`Test - should be carrot, cabbage, potato, squash - ${listItems(basket)}`);

//I know this doesn't work, because it's a console.log inside a console.log,
//the function clearly works, but I'm not sure how this issue is addressed. 


// - Create a function called `empty`. It should:
// - reset the `basket` to an empty array



function empty(basket){
    basket = [];
    return basket;
}

console.log(`Test, should be empty - ${empty(basket)}`);



// 1. Add a global `const` named `maxItems` and set it to 5.

// 2. Create a function called isFull(). It should:
//   - return `false` if the basket contains *less* than max number of items
//   - return `true` otherwise (equal or more than maxItems)


var maxItems = 5;

//decided to use var, because I was getting an initialization error, and wanted to continue the problem,
//even though we haven't addressed scope yet.

function isFull(array){
    if (array.length >= maxItems){
        return true;
    }
    else{
        return false;
    }
}

basket = ['orange', 'banana', 'apple'];
console.log(`Test - expect false: ${isFull(basket)}`);
basket = [1, 'orange', 2, 'banana', -3];
console.log(`Test - expect true: ${isFull(basket)}`);


// 3. Update the required `addItem` function to:
//   - Use the `isFull` function to prevent more than `maxItems` from being added to the basket. 
//   - If an item was added to the array, return `true`
//   - If there was no room and the item could not be added return `false`



function addItem2(item, basket){
    if (isFull(basket) === false){
        basket.push(item);
    }
    for(i=0; i < basket.length; i++){
         if (item === basket[i]){
             return true;
         }
    }
    return false;
 }

 basket = [1, 2, 3, 4, 5]
 console.log(`Basket is full - expect true - ${isFull(basket)}.`);
 console.log(`Item was added to basket - expect false - ${addItem2(6, basket)}`);
 console.log(basket);  //to check contents of basket

 basket = ['apple', 'orange', 'banana'];
 console.log(`Basket is full - expect false - ${isFull(basket)}.`);
 console.log(`Item was added to basket - expect true - ${addItem2('kiwi', basket)}`);
 console.log(basket); //to check contents of basket


// 4. Create a function called `removeItem`. It should:
//   - Take an input parameter for a string `item`
//   - Use [Array.indexOf](/) to find the index of the first matching item in the basket.
//   - Use [Array.splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) to remove the first matching item from the basket.
//   - Return the item removed or `null` if the item was not found

function removeItem(item, array){
    for (i=0; i < array.length; i++){
        if (item === array[i]){
            x = array.indexOf(item);
            array.splice(x, 1);
            return item;
        }
    }
return null;
}



let bugs = ['ant', 'worm', 'bee', 'beetle', 'ant'];

console.log(`Should be bee - ${removeItem('bee', bugs)}`);
console.log(`Should be array, minus bee - ${bugs}`);
console.log(`Should be 2 - ${x}`)


bugs = ['ant', 'worm', 'bee', 'beetle', 'ant'];

console.log(`Should be ant - ${removeItem('ant', bugs)}`);
console.log(`Should be array, minus first ant - ${bugs}`);
console.log(`Should be 0 - ${x}`)



bugs = ['ant', 'worm', 'bee', 'beetle', 'ant'];

console.log(`Should be null - ${removeItem('roach', bugs)}`);
console.log(`Should be full array - ${bugs}`);
console.log(`Should be undefined - ${x}`)
//not sure about this last bit.

