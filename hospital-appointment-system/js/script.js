const searchInput = document.getElementById('doctor-search');
const doctorCards = document.querySelectorAll('#doctors-list .doctor-card');
const noResults = document.getElementById('no-results');

searchInput.addEventListener('input', function () {
  const query = searchInput.value.toLowerCase();
  let matchCount = 0;

  doctorCards.forEach(function (card) {
    const cardText = card.textContent.toLowerCase();

    if (cardText.includes(query)) {
      card.hidden = false;
      matchCount++;
    } else {
      card.hidden = true;
    }
  });

  if (matchCount === 0) {
    noResults.hidden = false;
  } else {
    noResults.hidden = true;
  }
});

//filter department

const departmentSelector = document.getElementById("department");
const DoctorSelector = document.getElementById("doctor");
const Options = document.getElementById("option[data-department]");

departmentSelector.addEventListener("change", function() {
   const selectedDept = departmentSelector.value;
   Options.forEach(function(option){
      if (selectedDept === ''|| option.dataset.department ===
          selectedDept){
         option.hidden= false;
      } else {
         option.hidden= true;
      }
   });
});

const form = document.getElementById("appointment-form");
const formmessage = document.getElementById("form-message");

form.addEventListener("submit", function(event){
event.preventDefault
})

const name = document.getElementById('patient-name').value;
const email = document.getElementById('email').value;
const phone = document.getElementById('phone').value;
const department = departmentSelect.value;
const doctor = doctorSelect.value;
const date = document.getElementById('date').value;
const time = document.getElementById('time').value;

if ( name === "" ||doctor === "" ||department === "" ||email === "" ||phone === "" ||date === "" ||time === "" )
{formmessage.textContent = "please fill in all fields!";
 formmessage.style.color = 'red';
return
}
formmessage.textContent ="thank you" + name + "! your appointment with" + doctor + "has been reserved.";
formmessage.style.color = "green";
form.reset();