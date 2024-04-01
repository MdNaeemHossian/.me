const submit_button = document.getElementById('submit-button');
console.log(submit_button)
submit_button.addEventListener('click', sendMail);

function sendMail(e) {
   e.preventDefault(); // Prevent default form submission behavior
   console.log('comes here');
   console.log(document.getElementById('name'));
   var params = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      Comment: document.getElementById('comment').value,
   };
   console.log(params);
   // return; // Remove this line, as it prevents the code below from executing
   emailjs
      .send('service_502qgcw', 'template_m9ol0qr', params) // Fix Params to params
      .then((res) => {
         console.log(res);
         alert('Your Message Sent successfully');
      })
      .catch((err) => console.log(err));
}
