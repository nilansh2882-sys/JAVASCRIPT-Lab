// Name: Nilansh Gupta | Roll Number: BCS2025416 | Assignment: 9, Task: 2
function validateForm(name) {
  const errors = [];

  if (name.trim() === "") {
    errors.push("Name is required");
  }

  return errors;
}

console.log(validateForm("Asha"));
console.log(validateForm(""));
