document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    //form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const address = document.getElementById('address').value;
    const pinCode = document.getElementById('pinCode').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const foodOptions = document.querySelectorAll('input[name="food"]:checked');
    const foods = Array.from(foodOptions).map(option => option.value);
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;
  
    // Append values to the table
    const tableBody = document.getElementById('dataTableBody');
    const newRow = tableBody.insertRow();
    newRow.innerHTML = `
      <td>${firstName}</td>
      <td>${lastName}</td>
      <td>${address}</td>
      <td>${pinCode}</td>
      <td>${gender}</td>
      <td>${foods.join(', ')}</td>
      <td>${state}</td>
      <td>${country}</td>
    `;
  
    // Clear form fields
    clearForm();
  });
  
  function clearForm() {
    document.getElementById('myForm').reset();
  }
  