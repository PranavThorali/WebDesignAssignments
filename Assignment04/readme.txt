
Overview
This project is a feedback form where users can provide input on various fields such as name, phone number, email, and ratings for teachers. It includes client-side validation to ensure correct input.

1. HTML Structure (Form.html)
Tags Used:
<!DOCTYPE html> – Specifies the HTML version (HTML5).
<html> – Root element of the HTML document.
<head> – Contains meta-information and linked styles/scripts.
<title> – Defines the title of the webpage.
<link> – Links the external stylesheet (style.css).
<body> – Contains the main content of the webpage.
Key Elements:
<div> – Used to group and structure content (#container for the main form container).
<h2>, <h3> – Headings for section titles.
<form> – Defines the feedback form (#feedbackForm).
<input> – Various input fields for the form:
Text input (type="text") for first name, last name, and street address.
Radio buttons (type="radio") for selecting the title (Miss, Mr., Mrs.).
Dropdown menu (<select>) to choose a teacher.
Email and phone number input (type="email", type="text") with validation patterns.
<span> – Used for displaying validation error messages.
<button> – Buttons for form submission and reset.
<table> – Displays the submitted form data.


2. CSS Styling (style.css)
Key Styles:
Body and Container Styling:
Sets a light background and centers the form using flexbox.
Adds padding, shadows, and rounded corners for the container (#container).
Form Elements:
Styled with consistent padding, margins, and borders.
#submitButton has a hover effect (background-color: #176228).
Error Messages:
Initially hidden with visibility: hidden;.
Shown with the class .visible (visibility: visible;).
Red text color (color: red;) for error indicators.
Table Styling:
Styled with borders and padding for readability.
Header (<th>) has a green background.


3. JavaScript (script.js)
Features:
Dynamic Content Creation:
Generates checkboxes and text input based on the selected teacher (dynamicCheckboxContainer).
Form Validation:
Validates each input field (first name, last name, phone number, email, and zip code) using regular expressions and length checks.
Displays error messages if validation fails.
Phone Number Formatting:
Automatically formats the phone number as (XXX) XXX-XXXX while typing.
Character Counter:
Tracks and displays the number of characters entered in the street address (charCounter).
Form Submission:
Prevents submission if validation fails.
Adds the valid form data to a table (dataTable) and resets the form.
