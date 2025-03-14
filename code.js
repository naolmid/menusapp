window.addEventListener('DOMContentLoaded', (event) => {
  const rowButton = document.querySelector('#foodd');

  if (rowButton) {
    rowButton.focus(); 
    rowButton.style.outline = "none";
  }
})


function updateDivHeight() {
  const div = document.getElementById('table1');
  const pageWidth = window.innerWidth;
  if(pageWidth >= 100){
  div.style.height = pageWidth / 20 + 'vh';
  div.style.width = '100%';
}
}
updateDivHeight();
window.addEventListener('resize', updateDivHeight);


  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      var nfdfood = document.getElementById('nfdfood');
      if (content.style.display == "block") {
        content.style.display = "none";
       
      } else {
        content.style.display = "block";
      }
    });
  }
  
  function clickedbkft(){
  var a = document.getElementById("breakfast").style.display = "block";
  document.getElementById("foodbut").style.display = "none";  
  document.getElementById("drinks").style.display = "none";
   
  }
  
  function clickedfd(){
    document.getElementById("foodbut").style.display = "block";
    document.getElementById("breakfast").style.display = "none";  
    document.getElementById("drinks").style.display = "none";
  }
  
  function clickeddrks(){
    document.getElementById("drinks").style.display = "block";
    document.getElementById("breakfast").style.display = "none";  
    document.getElementById("foodbut").style.display = "none";
  }
  



  




 