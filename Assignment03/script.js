let studentCount = 1;

window.onload = function() {
    document.getElementById('important').style.display = 'table';
    document.getElementById('submitButton').disabled = true;
};

    function addStudent() {
        const tableBody = document.querySelector("#important tbody");
        
    
        // Find the next available student number
        const currentStudentNumbers = Array.from(tableBody.querySelectorAll("tr:not(.student-details) td:nth-child(2)"))
            .map(td => parseInt(td.textContent.replace("Student ", "")));
        const maxStudentNumber = currentStudentNumbers.length > 0 ? Math.max(...currentStudentNumbers) : 0;
    
        let nextStudentNumber = 1;
        while (currentStudentNumbers.includes(nextStudentNumber)) {
            nextStudentNumber++;
        }
    
        // Create the main student row
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td><input type="checkbox" onchange="handleCheckboxChange(this)"></td>
            <td>Student ${nextStudentNumber}</td>
            <td>Teacher ${nextStudentNumber}</td>
            <td>Fall</td>
            <td>TA</td>
            <td>100%</td>
            <td>Approved</td>
            <td>
                <button onclick="editStudent(${nextStudentNumber})">Edit</button>
                <button onclick="deleteStudent(this, ${nextStudentNumber})">Delete</button>
                <button onclick="toggleDetails(this)" style="color: green;">&#9654;</button>
            </td>
        `;
    
        // Create the details row
        const detailsRow = document.createElement("tr");
        detailsRow.className = "student-details";
        detailsRow.style.display = "none";
        detailsRow.innerHTML = `
            <td colspan="8">
                <div>
                    <strong>Student ${nextStudentNumber} Details:</strong><br>
                    Advisor: Teacher ${nextStudentNumber}<br>
                    Term: Fall<br>
                    Type: TA<br>
                    Percentage: 100%<br>
                    Award Status: Approved<br>
                </div>
            </td>
        `;
    
        alert(`Student ${nextStudentNumber} has been added`);
        // Append the rows to the table
        tableBody.appendChild(newRow);
        tableBody.appendChild(detailsRow);
        
    }

function handleCheckboxChange(checkbox) {
    const row = checkbox.closest('tr');
    const submitButton = document.getElementById('submitButton');
    
    if (checkbox.checked) {
        row.style.backgroundColor = 'yellow';
        row.querySelectorAll('button').forEach(button => button.style.display = 'inline');
    } else {
        row.style.backgroundColor = 'white';
        row.querySelectorAll('button').forEach(button => button.style.display = 'none');
    }

    const anyChecked = document.querySelectorAll('input[type="checkbox"]:checked').length > 0;
    submitButton.disabled = !anyChecked;
    submitButton.style.backgroundColor = anyChecked ? 'orange' : 'gray';
}

function deleteStudent(button, studentNumber) {
    const rowToDelete = button.closest("tr");
    const detailsRow = rowToDelete.nextElementSibling;

    // Remove the details row (if it exists)
    if (detailsRow && detailsRow.classList.contains("student-details")) {
        detailsRow.remove();
    }

    // Remove the main row
    rowToDelete.remove();

    // Renumber the remaining rows
    renumberStudents();

    alert(`Student ${studentNumber} has been deleted`);
}

function renumberStudents() {
    const rows = document.querySelectorAll("#important tbody tr:not(.student-details)");

    rows.forEach((row, index) => {
        const studentNumber = index + 1; // New student number

        // Updating the student number in the second column
        const studentCell = row.querySelector("td:nth-child(2)");
        studentCell.textContent = `Student ${studentNumber}`;

        // Updating the teacher number in the third column
        const teacherCell = row.querySelector("td:nth-child(3)");
        teacherCell.textContent = `Teacher ${studentNumber}`;

        // Updating the buttons in the actions column
        const editButton = row.querySelector("button[onclick^='editStudent']");
        const deleteButton = row.querySelector("button[onclick^='deleteStudent']");
        const toggleButton = row.querySelector("button[onclick^='toggleDetails']");

        editButton.setAttribute("onclick", `editStudent(${studentNumber})`);
        deleteButton.setAttribute("onclick", `deleteStudent(this, ${studentNumber})`);
        toggleButton.setAttribute("onclick", `toggleDetails(this)`);

        // Updating the details row
        const detailsRow = row.nextElementSibling;
        if (detailsRow && detailsRow.classList.contains("student-details")) {
            const detailsDiv = detailsRow.querySelector("div");
            detailsDiv.innerHTML = `
                <strong>Student ${studentNumber} Details:</strong><br>
                Advisor: Teacher ${studentNumber}<br>
                Term: Fall<br>
                Type: TA<br>
                Percentage: 75%<br>
                Award Status: Approved<br>
            `;
        }
    });
}


function editStudent(studentNumber) {
    const newName = prompt(`Edit details of Student ${studentNumber}`, `Student ${studentNumber}`);
    if (newName) {
        alert(`Student ${studentNumber} data updated successfully`);
    }
}

function toggleDetails(button) {
    const detailsRow = button.closest("tr").nextElementSibling;

    if (detailsRow && detailsRow.classList.contains("student-details")) {
        if (detailsRow.style.display === "none") {
            detailsRow.style.display = "table-row";
            button.innerHTML = "&#9660;"; 
        } else {
            detailsRow.style.display = "none";
            button.innerHTML = "&#9654;"; 
        }
    }
}

