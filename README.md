<!DOCTYPE html>
<html>
<title>TEST LOGIN</title>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="./my2.css" class="css">
    <script src="https://code.jquery.com/jquery-3.4.1.js"
        integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous">
    </script>
    <script src="./my.js"></script>
</head>
<body>
<br/><br/>
<h1 align="center" class="h1"><u> ONLINE QUIZ ON C PROGRAMMING AND DATASTRUCTRES</u> </h1>
<div class="imgcontainer">
      <img src="logo.jpg" alt="Avatar" class="avatar">
    </div>
 <form class="myForm" id="myForm" action="test.html">

    <div class="container">
      <label for="uname"><b>FULL NAME</b></label>
      <input type="text" placeholder="Enter Your Full Name" id="txt" name="uname" required>

      <label for="psw"><b>BRANCH</b></label>
      <input type="text" placeholder="Enter Your Branch" id="txt1" name="psw" required>
        <label for="psw"><b>YEAR</b></label>
      <input type="text" placeholder="Enter Your Year" id="txt2" name="psw" required>
    </div>
  <button onclick="passvalues()"><span><b>CLICK HERE TO GOTO TEST</b></span></button>
  </form>
  </div>
<script>
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
</script>

</body>
</html>
