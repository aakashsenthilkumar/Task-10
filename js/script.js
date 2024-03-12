
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const tableBody = document.getElementById('dataTableBody');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const address = document.getElementById('address').value;
        const pinCode = document.getElementById('pincode').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
         const foods = Array.from(document.querySelectorAll('input[name="foods"]:checked')).map(checkbox => checkbox.value);
        const state = document.getElementById('state').value;
        const country = document.getElementById('country').value;

        
        const newRow = tableBody.insertRow();
        newRow.insertCell(0).textContent = firstName;
        newRow.insertCell(1).textContent = lastName;
        newRow.insertCell(2).textContent = address;
        newRow.insertCell(3).textContent = pinCode;
        newRow.insertCell(4).textContent = gender;
        newRow.insertCell(5).textContent = foods.join(', ');
        newRow.insertCell(6).textContent = state;
        newRow.insertCell(7).textContent = country;

       
        form.reset();
    });
});


