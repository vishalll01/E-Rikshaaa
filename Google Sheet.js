const scriptURL = 'https://script.google.com/macros/s/AKfycbxtb135pnx_cOv20pZOwE6D5vdsBZwROkMTcPoHUwPh0bG2RF3jb9OOIfiz3ZX-vC4sTg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})