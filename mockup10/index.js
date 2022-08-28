// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

//modal two
var modal_two = document.getElementById("myModal_two");

// Get the button that opens the modal
var btn_two = document.getElementById("anotherBtn");

// Get the <span> element that closes the modal
var span_two = document.getElementsByClassName("close_two")[0];

// When the user clicks on the button, open the modal
btn_two.onclick = function() {
  modal_two.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
span_two.onclick = function() {
  modal_two.style.display = "none";
}





//on window Scroll

window.onscroll = function()
{
  scrollFunction()
};
function scrollFunction()
{
  if(document.body.scrollTop > 90|| document.documentElement.scrollTop > 90)
  {
    document.getElementById('showS').className = 'slideRight';
  }
 else
  {
    document.getElementById('showS').className = 'slideNo';
  }
}
//When the user scrolls down 90 pixels from the top of the page, the class name "slideUp" will be added to an element (and removed  or perform "slideNo" when scrolled up again................




var on = document.getElementById('myLogin');

var button = document.getElementById('LogBtn');

var off = document.getElementsByClassName('close_three')[0];


button.onclick = function()
{
    on.style.display = 'flex';
}
off.onclick = function()
{
    on.style.display = 'none';
}
var slideOut = document.getElementById('sideNav');

var bars = document.getElementById('navBtn');

var slideIn = document.getElementsByClassName('close_four')[0];


bars.onclick = function()
{
    slideOut.style.display = 'block';
}
slideIn.onclick = function()
{
    slideOut.style.display = 'none';
}