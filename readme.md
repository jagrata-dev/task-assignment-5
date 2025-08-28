## What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans:
The differences between them is depend on their selection criteria, return type and whether if they static or live.

➡️getElementById: It basically select a single element based on their unique id. It returns a single element and if no element with that id exists it will return NULL.

➡️getElementsByClassName: it select element with their class name. It returns a HTML collection which is live. Multiple element can be selected with that given class name. Its element can be accessed using indexing which is kind of a array like format.

➡️querySelector: it select the first element that matches with the given css selector. This allows for highly specific selections using any valid CSS selector. It
returns a single Element object or null.

➡️querySelectorAll: It selects all element that matches the css selector. It returns a NodeList and it does not updated automatically if the DOM changes.  

## How do you create and insert a new element into the DOM?

Ans:
➡️ create a new element: First create a element using document.createElement().

 const createDiv = document.createElement("div")

 ➡️ set content: using innerHTML, innerText content can be set inside the div

 createDiv.innerHTML = `
        <p>visit the site</p>
       <button>Click here</button> 
 `
 ➡️ insert the element into DOM: fist access the parent-div using id or class name and append it to that parent div.

  const parentDiv = document.getElementById("parent-div")
  parentDiv.appendChild(createDiv) 

## What is Event Bubbling and how does it work?

Ans:
It is a concept that describes how events propagate through the DOM

process:
➡️ first click a child element like a <button> inside a <div>.
➡️ the event fist trigger the child 
➡️ then it bubbles up to the parent element
➡️ then it goes to grandparent and so on

<!-- HTML -->
<div id="parent">
  <button id="child">click</button>
</div>

<!-- javascript -->
document.getElementById("parent").addEventListener("click", function() {
    console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", function
() {
    console.log("Child clicked");
});

<!-- output -->
Child clicked
Parent clicked

## What is Event Delegation in JavaScript? Why is it useful?

Ans:
Event Delegation is basically a pattern to handle events efficiently. Instead of adding an event listener to each and every element, we can add an event listener to a parent element and call an event on a particular target using the .target property.

It is much useful for this following:

➡️ Efficiency: If we have huge amount of child elements it is inefficient to handle all that using individuals addEventListener. It is much wise choice to add addEventListener to the parent.

➡️ Simplified code: keeps code simplier and cleaner if we add one addEventListener.

➡️ Handle dynamic element: automatically works for dynamically added element

➡️️ ️Avoid memory leak: prevents memory leaks by using one addEventListener and reduce the necessity of looping operation.

## What is the difference between preventDefault() and stopPropagation() methods?

Ans:
preventDefault():
➡️ It prevents the default behavior of an event

➡️ If an event is triggered like there was a form section in HTML code then the page will reload. So it helps to prevent form submission

stopPropagation():
➡️ It helps event from propagating through the DOM

➡️ If we click a children then if we apply this after the click event then the bubbling effect will stop.




