function submitContact() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;
  var result = email.split(".", 1);

  firebase.database().ref('Contact/' + name).set({
    name: name,
    subject: subject,
    email: email,
    message: message
  }, function (error) {
    if (error) {
      // The write failed...
    } else {
      location.reload();
      document.getElementById("name").value="";
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
      alert("Message sent !");
    }
  });
}