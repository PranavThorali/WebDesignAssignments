 README - Assignment 03

 Overview
This project includes an HTML file (`comp.html`), a CSS file (`style.css`), and a JavaScript file (`script.js`). The project dynamically manages a student records table, allowing users to add, delete, and edit student records while maintaining sequential numbering.

 Functions in script.js

 1. window.onload
- Ensures that the table is visible when the page loads.
- Disables the submit button by default.

 2. addStudent()
- Finds the next available student number.
- Creates a new row with student details and an expandable details row.
- Appends the new row to the table.
- Displays an alert confirming the addition.

 3. handleCheckboxChange(checkbox)
- Changes the background color of a row when its checkbox is selected.
- Displays action buttons (Edit, Delete, Expand) when selected.
- Enables the submit button when at least one checkbox is checked.

 4. deleteStudent(button, studentNumber)
- Removes a student and their details row.
- Calls `renumberStudents()` to keep student numbers sequential.
- Displays an alert confirming deletion.

 5. renumberStudents()
- Renumbers all student records sequentially after a deletion.
- Updates student and teacher numbers dynamically.
- Ensures buttons and expandable details update accordingly.

 6. editStudent(studentNumber)
- Prompts the user to edit a student’s details.
- Displays a confirmation alert when details are updated.

 7. toggleDetails(button)
- Expands or collapses a student’s details row.
- Changes the button icon to indicate expansion (`▼`) or collapse (`▶`).


 HTML Tags in comp.html

 1. <table> and <tr>
- Defines the student records table.
- Each student has a row with their information.
- The details row follows each student row and is hidden by default.

 2. <th> and <td>
- Headers (`th`) define column names like Student, Advisor, Award Status, etc.
- Data cells (`td`) store individual student records.

 3. <button>
- Buttons for adding students, deleting students, editing details, and expanding/collapsing details.

 4. <input type="checkbox">
- Allows users to select rows.
- Used to enable/disable the submit button.

 5. <script>
- Links `script.js` to enable interactivity.

---

 CSS Styles in `style.css`

 1. body
- Defines background colors, fonts, and alignment.

 2. header
- Styled with gradients and centered text.

 3. table, th, td
- Applies border styling, spacing, and text alignment.

 4. .student-details
- Styles the hidden details row.

 5. button[disabled]
- Grays out disabled buttons and prevents interaction.

 6. @media (Responsive Design)
- Adjusts layout for smaller screens.
