
            const dynamicOptions = {
                "option1": ["Amazing", "Content", "Could use a little bit of tuning"],
                "option2": ["Amazing", "Content", "Could use a little bit of tuning"],
                "option3": ["Amazing", "Content", "Could use a little bit of tuning"],
                "option4": ["Amazing", "Content", "Could use a little bit of tuning"],
                "option5": ["Amazing", "Content", "Could use a little bit of tuning"]
            };
            

            document.getElementById("options").addEventListener("change", function() {
                let container = document.getElementById("dynamicCheckboxContainer");
                container.innerHTML = "";
                if (this.value) {
                    let checkbox = document.createElement("input");
                    checkbox.type = "checkbox";
                    checkbox.id = "dynamicCheckbox";
                    container.appendChild(checkbox);
                    
                    let label = document.createElement("label");
                    label.textContent = "Select your rating for the teacher and provide some comments";
                    container.appendChild(label);
                    
                    checkbox.addEventListener("change", function() {
                        if (this.checked) {
                            let input = document.createElement("input");
                            input.type = "text";
                            input.id = "dynamicTextField";
                            input.required = true;
                            container.appendChild(input);
                            
                            let options = dynamicOptions[document.getElementById("options").value] || [];
                            options.forEach(item => {
                                let subCheckbox = document.createElement("input");
                                subCheckbox.type = "checkbox";
                                subCheckbox.value = item;
                                let subLabel = document.createElement("label");
                                subLabel.textContent = item;
                                container.appendChild(subCheckbox);
                                container.appendChild(subLabel);
                            });
                        } else {
                            container.innerHTML = "";
                        }
                    });
                }
            });

           document.getElementById("phoneNumber").addEventListener("input", function(event) {
                let input = event.target.value.replace(/\D/g, "");
                let formatted = "";
                if (input.length > 0) formatted = "(" + input.substring(0, 3);
                if (input.length >= 4) formatted += ") " + input.substring(3, 6);
                if (input.length >= 7) formatted += "-" + input.substring(6, 10);
                event.target.value = formatted;
            });

            document.getElementById("streetAddress2").addEventListener("input", function() {
                document.getElementById("charCounter").textContent = `${this.value.length}/20 characters used`;
            });

            document.getElementById("feedbackForm").addEventListener("input", function() {
                let form = document.getElementById("feedbackForm");
                document.getElementById("submitButton").disabled = !form.checkValidity();
            });
            
            document.getElementById("feedbackForm").addEventListener("submit", function(event) {
                event.preventDefault();
                let formIsValid = true;
            
                console.log("Form validation started.");  // Debugging line
            
                // Validate First Name
                const firstName = document.getElementById("firstName");
                const firstNameError = document.getElementById("firstNameError");
                if (firstName.value.trim().length < 2 || firstName.value.trim().length > 30) {
                    firstNameError.textContent = "First name must be between 2 and 30 characters.";
                    firstNameError.style.display = "block";  // Ensure it's visible
                    console.log("First name error displayed.");
                    formIsValid = false;
                } else {
                    firstNameError.style.display = "none";
                }
            
                // Validate Last Name
                const lastName = document.getElementById("lastName");
                const lastNameError = document.getElementById("lastNameError");
                if (lastName.value.trim().length < 2 || lastName.value.trim().length > 30) {
                    lastNameError.textContent = "Last name must be between 2 and 30 characters.";
                    lastNameError.style.display = "block";
                    formIsValid = false;
                } else {
                    lastNameError.style.display = "none";
                }
            
                // Validate Phone Number
                const phoneNumber = document.getElementById("phoneNumber");
                const phoneError = document.getElementById("phoneError");
                const phonePattern = /^\(\d{3}\) \d{3}-\d{4}$/;
                if (!phonePattern.test(phoneNumber.value)) {
                    phoneError.style.display = "block";
                    formIsValid = false;
                } else {
                    phoneError.style.display = "none";
                }
            
                // Validate Email
                const emailId = document.getElementById("emailId");
                const emailError = document.getElementById("emailError");
                const emailPattern = /^[a-zA-Z0-9._%+-]+@northeastern\.edu$/;
                if (!emailPattern.test(emailId.value)) {
                    emailError.style.display = "block";
                    formIsValid = false;
                } else {
                    emailError.style.display = "none";
                }
            
                // Validate Zip Code
                const zipcode = document.getElementById("zipcode");
                const zipError = document.getElementById("zipError");
                const zipPattern = /^[0-9]{5}$/;
                if (!zipPattern.test(zipcode.value)) {
                    zipError.style.display = "block";
                    formIsValid = false;
                } else {
                    zipError.style.display = "none";
                }
            
                if (formIsValid) {
                    console.log("Form is valid. Submitting...");
                    const tableBody = document.getElementById("dataTable").querySelector("tbody");
                    const row = document.createElement("tr");
                    const data = [
                        firstName.value,
                        lastName.value,
                        phoneNumber.value,
                        emailId.value,
                        zipcode.value,
                        document.getElementById("streetAddress2").value || ""
                    ];
                    data.forEach(value => {
                        const cell = document.createElement("td");
                        cell.textContent = value;
                        row.appendChild(cell);
                    });
                    tableBody.appendChild(row);
                    document.getElementById("feedbackForm").reset();
                    alert("Form submitted successfully!");
                }
            });
            