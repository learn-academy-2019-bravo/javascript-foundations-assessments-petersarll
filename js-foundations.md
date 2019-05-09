# Javascript Foundations Assessments

### Without using Google answer the following:

1. List the data types in Javascript. Indicate which are primitives.
boolean, string, undefined, null, objects
2. What's the difference between =, ==, and === in JavaScript?
= would be to name a variable or give it a value. == is equal to but '7' will equal 7, === is an absolute equal. '7' will not equal 7
3. What is the difference between an array's index and length?
an array's index will be the place that value is located in the array, whereas the length would be the total number of items in the array.
4. What are the three parts of a for loop?
(i = 0; i <array.length; i++)
5. What is a function's declaration, argument, and call?
declarations are statements that arent executed but will be called on. arguments is the value that will be called upon when the function is called. when you call a function, you are executing it, or summoning it.
6. What are the three main steps in saving work to github?
git add
git commit
git push
7. What is the terminal command to move directories?
mv
8. Do you have a suggestion for a Check In question?
check in question: what have you struggled most with during your first two week at LEARN Academy
9. What was your favorite topic this week?
objects and classes!
10. What was your "A-ha!" moment this week?
I cannot brute force my mind to work. I need to take a moment, think about something completely different. and then return to the problem.
### Stretch: The following questions are potential interview questions. First, try to answer each question on your own then Google the answer to further your knowledge.

1. Look at this Javascript and try to predict, what will the browser's console show?

``` javascript
var text = 'outside'
function logIt(){
    console.log(text)
    var text = 'inside'
}

logIt()

```
undefined because the variable text is underneath console log so the function does not know what to call.

2. What is JSON? How does it relate to javascript objects?
javascript object notation. it formats and stores data

3. Describe a closure, what is it good for and how do you recognize one?
it has the ability to call itself within a function. For example with a simple addition function, it can be used to call upon itself and continuously add. you can spot one by seeing it call itself within a function  
