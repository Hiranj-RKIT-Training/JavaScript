
Check out the live version of the project here: [Live Demo](https://hiranj-rkit-training.github.io/JavaScript/)
# **JavaScript Introduction**
JavaScript is a versatile, high-level programming language primarily used for creating dynamic, interactive effects within web browsers. It enables you to implement complex features on web pages, such as real-time updates, multimedia, animations, and more.
# **Use of JavaScript**
JavaScript is widely used for:
- Creating dynamic and interactive web content.
- Form validation and user input handling.
- Manipulating HTML and CSS to update content in real-time.
- Server-side development using frameworks like Node.js.
- Game development and mobile application development.
# **Ways to Include JavaScript**
JavaScript can be included in HTML documents in the following ways:
1. Inline JavaScript: Inside an HTML tag using the 'onclick', 'onchange', etc. attributes.
2. Internal JavaScript: Within a <script> tag inside the HTML file.
3. External JavaScript: Linking an external JavaScript file using the <script src='filename.js'> tag.
# **Syntax of JavaScript**
JavaScript uses a syntax similar to other programming languages such as Java and C.
A basic syntax example:
```javascript
let message = 'Hello, World!';
console.log(message);
```
# **Basic Event of JavaScript**
Events are actions that can be detected by JavaScript, allowing developers to execute code in response.
Some common events:
- `onclick`: When a user clicks on an element.
- `onchange`: When the value of an input changes.
- `onmouseover`: When a user moves the mouse over an element.

Example:
```html
<button onclick="alert('Button clicked!')">Click Me</button>
```
# **Basic Validation with JavaScript**
JavaScript is commonly used for form validation to ensure users provide the correct input before submitting data.
Example:
```html
<form onsubmit="return validateForm()">
    <label for="email">Email:</label>
    <input type="text" id="email" name="email">
    <input type="submit" value="Submit">
</form>
<script>
function validateForm() {
    let x = document.getElementById('email').value;
    if (x === '') {
    alert('Email must be filled out');
    return false;
    }
}
</script>
```
