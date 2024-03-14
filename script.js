const form = document.getElementById('ageForm');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const dob = new Date(document.getElementById('dob').value);
  const now = new Date();
  const age = now.getFullYear() - dob.getFullYear();
  const monthDiff = now.getMonth() - dob.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < dob.getDate())) {
    resultDiv.innerText = `Your age is ${age - 1} years.`;
  } else {
    resultDiv.innerText = `Your age is ${age} years.`;
  }
});
