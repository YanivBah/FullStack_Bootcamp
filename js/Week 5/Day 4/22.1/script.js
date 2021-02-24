const form = document.querySelector("form[name='form']");

const windowCheck = e => {
  const name = document.querySelector('input[type="text"]').value;
  const age = document.querySelector('input[type="number"]').value;
  const email = document.querySelector('input[type="email"]').value;

  const window = confirm(`Before we send your form to us, please confirm the info.
  Full Name: ${name}
  Age: ${age}
  E-Mail: ${email}`);
  !window ? e.preventDefault() : alert('Congratulations You Successfully Sent This Form');
}

form.addEventListener('submit', windowCheck);
