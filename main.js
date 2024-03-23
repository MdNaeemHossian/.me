function sendMail() {
    var params = {
        name: document.getElementById("name") .value,
        email: document.getElementById("email") .value,
        Comment: document.getElementById("Comment") .value
    }
    emailjs.send("service_502qgcw","template_m9ol0qr",Params).then((res) => {
        console.log(res);
        alert("Your Message Sent successfully");

    })
    .catch(err => console.log(err))
}