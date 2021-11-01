# [37 Essential JavaScript Interview Questions](https://www.toptal.com/javascript/interview-questions)

1. What is a potential pitfall with using `typeof bar === "object"` to determine if `bar` is an object? How can this pitfall be avoided?

2. What will the code below output to the console and why?
`(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));`
3. What will the code below output to the console and why?
`var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();`
4. What is the significance of, and reason for, wrapping the entire content of a JavaScript source file in a function block?

*...Another feature of this technique is to allow for an easily referenceable (presumably shorter) alias for a global variable. This is often used, for example, in jQuery plugins. jQuery allows you to disable the $ reference to the jQuery namespace, using jQuery.noConflict(). If this has been done, your code can still use $ employing this closure technique, as follows:*
`(function($) { /* jQuery plugin code referencing $ */ } )(jQuery);`
What does this mean?

5. What is the significance, and what are the benefits, of including 'use strict' at the beginning of a JavaScript source file?

6. Consider the two functions below. Will they both return the same thing? Why or why not?
`function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}`

7. What will the code below output? Explain your answer.
`console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);`

8. In what order will the numbers 1-4 be logged to the console when the code below is executed? Why?
`(function() {
    console.log(1); 
    setTimeout(function(){console.log(2)}, 1000);
    setTimeout(function(){console.log(3)}, 0);
    console.log(4);
})();`

9. Write a simple function (less than 160 characters) that returns a boolean indicating whether or not a string is a palindrome.
`function isPalindrome(str) {
  str = str.replace(/\W/g, '').toLowerCase();
  return (str == str.split('').reverse().join(''));
}`

10. Write a sum method which will work properly when invoked using either syntax below.
`console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5`

`function sum(x) {
  if (arguments.length == 2) {
    return arguments[0] + arguments[1];
  } else {
    return function(y) { return x + y; };
  }
}`
How does the else block take in the second parameter? Is it defining a function?

11. For the following snippet, what gets logged to the console when the user clicks on “Button 4” and why? Provide one or more alternate implementations that will work as expected.

`for (var i = 0; i < 5; i++) {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
  btn.addEventListener('click', function(){ console.log(i); });
  document.body.appendChild(btn);
}`

12. What will the code below output to the console and why?

    var arr1 = "john".split('');
    var arr2 = arr1.reverse();
    var arr3 = "jones".split('');
    arr2.push(arr3);
    console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
    console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));


13. What will the code below output to the console and why?

    console.log(1 +  "2" + "2");
    console.log(1 +  +"2" + "2");
    console.log(1 +  -"1" + "2");
    console.log(+"1" +  "1" + "2");
    console.log( "A" - "B" + "2");
    console.log( "A" - "B" + 2);

14. The following recursive code will cause a stack overflow if the array list is too large. How can you fix this and still retain the recursive pattern?
    var list = readHugeList();
    var nextListItem = function() {
        var item = list.pop();
        if (item) {
            // process the list item...
            nextListItem();
        }
    };

15. What is a “closure” in JavaScript? Provide an example.

16. What would the following lines of code output to the console?

    console.log("0 || 1 = "+(0 || 1));
    console.log("1 || 2 = "+(1 || 2));
    console.log("0 && 1 = "+(0 && 1));
    console.log("1 && 2 = "+(1 && 2));

17. What will be the output when the following code is executed? Explain.

console.log(false == '0')
console.log(false === '0')

18. What is the output out of the following code? Explain your answer.

    
    var a={},
        b={key:'b'},
        c={key:'c'};
    
    a[b]=123;
    a[c]=456;
    
    console.log(a[b]);

19. What will the following code output to the console:
    
    console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
    
20. Consider the code snippet below. What will the console output be and why?



    (function(x) {
      return (function(y) {
          console.log(x);
      })(2)
    })(1);
    


21. What will the following code output to the console and why: