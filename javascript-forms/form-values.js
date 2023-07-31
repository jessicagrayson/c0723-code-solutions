const $contactForm = document.querySelector('#contact-form');

$contactForm.addEventListener('submit', submitFunction);

function submitFunction(event) {
  event.preventDefault();

  const $formData = {
    name: $contactForm.elements.name.value,
    email: $contactForm.elements.email.value,
    message: $contactForm.elements.message.value,
  };

  console.log($formData);
  $contactForm.reset();
}
