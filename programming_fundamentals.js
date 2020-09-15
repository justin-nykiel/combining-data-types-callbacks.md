// DRY - do not repeat yourself
// KISS = keep it simple stupid
// Avoid creating a YAGNI - don't add functionality unless it is needed
// Do the simplest thing that could possibly work - easiest way possible
// Don't make me think - make code easily understood and readable
// Write code for the maintainer - make it clear enough that whoever maintains it will not have issues
// Single responsibility principle - each component of code should perform one well defined task
// Avoid premature optimization - don't optimize until you have 100% working code
// Separation of concerns - different areas of functionality should be distinct
// Answer

// Write a ~1 sentence summary for each one - see above
// Which ones surprise you (if any)? single responsibility principle
// Which one is currently giving you the most struggle? - Avoid premature optimization, starting to worry about best code when I should just be worrying about getting working code

const f = l => {
    //declaring a function names f that takes one argument, defines it as l
    let es = 0, p = 0, c = 1, n = 0
    //declares multiple variables and assigns them either 0 or 1
    while (c <= l) {
        //initiates a while loop that will run while c's value is less than or equal to l's value
      n = c + p;
      //assigns the value of n to equal c + p
      [c, p] = [n, c]
     //assigns value of n to c, and c to p
      es += (c % 2 === 0) ? c : 0
      //if c % 2 is 0, es = es + c
    }
    return es
    //gives back new value of es
  }
  
  console.log(f(55))
//   In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a classic ) - are there any other variable names or things that would make this code easier to read and understand? 

//getSumOfEvens - using semantic names like were used in the readme would be more helpful

// If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with f or f2?
//f2

// Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?
//yes it throws a syntax error without it