function passvalues()
{
var fullname=document.getElementById("txt").value
var branch=document.getElementById("txt1").value
var year=document.getElementById("txt2").value
localStorage.setItem("textvalues",fullname);
localStorage.setItem("textvalues1",branch);
localStorage.setItem("textvalues2",year);
return false;
}