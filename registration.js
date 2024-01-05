function submitForm() {
    //// get form data
    const name = document.getElementById('req1').value;
    const email = document.getElementById('req3').value;
    const password = document.getElementById('req5').value;
    const dobString = document.getElementsByName('bday')[0].value;
    const gender = document.getElementById('selection').value;
    const agree = document.getElementById('agree').checked;
  
    // create table row
    const table = document.getElementById('user-table');
    const row = table.insertRow(-1);
    const nameCell = row.insertCell(0);
    const emailCell = row.insertCell(1);
    const passwordCell = row.insertCell(2);
    const dobCell = row.insertCell(3);
    const ageCell = row.insertCell(4);
    const genderCell = row.insertCell(5);
    const agreeCell = row.insertCell(6);
  
    // set cell values
    nameCell.innerHTML = name;
    emailCell.innerHTML = email;
    passwordCell.innerHTML = password;
    dobCell.innerHTML = dobString;
    
    // calculate age based on date of birth
    const dob = new Date(dobString);
    const ageDiffMs = Date.now() - dob.getTime();
    const ageDate = new Date(ageDiffMs);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);
    
    ageCell.innerHTML = age;
    genderCell.innerHTML = gender;
    agreeCell.innerHTML = agree;
  
    // clear form fields
    document.getElementById('req1').value = '';
    document.getElementById('req3').value = '';
    document.getElementById('req5').value = '';
    document.getElementsByName('bday')[0].value = '';
    document.getElementById('selection').value = 'Gender';
    document.getElementById('agree').checked = false;
  
    return false; // prevent form submission
  }
  const birthdateInput = document.getElementById('db');
    
    // Calculate the minimum and maximum dates for the input
    const maxDate = new Date();
    const minDate = new Date(maxDate.getFullYear() - 55, maxDate.getMonth(), maxDate.getDate());
    maxDate.setFullYear(maxDate.getFullYear() - 18);
    
    // Set the minimum and maximum dates for the input
    birthdateInput.setAttribute('min', formatDate(minDate));
    birthdateInput.setAttribute('max', formatDate(maxDate));
    
    // Function to format the date as YYYY-MM-DD
    function formatDate(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
    const dobDate = new Date(dob);
  const ageDiffMs = Date.now() - dobDate.getTime();
  const ageDate = new Date(ageDiffMs);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);