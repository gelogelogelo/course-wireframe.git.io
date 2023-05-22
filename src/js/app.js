function aside_open(){
    document.getElementById("aside-show").style.width = "250px";
    // document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("aside-overlay").style.display = "block";
}

  
function aside_close() {
    document.getElementById("aside-show").style.width = "0";
    // document.getElementById("main").style.marginLeft = "0";
    document.getElementById("aside-overlay").style.display = "none";
}


function toggleContent() {
    var content = document.querySelectorAll('.content p:not(:first-child)');
    var button = document.getElementById('showMoreButton');
  
    for (var i = 0; i < content.length; i++) {
      if (content[i].style.display === 'none') {
        content[i].style.display = 'block';
        button.textContent = 'Show Less';
      } else {
        content[i].style.display = 'none';
        button.textContent = 'Show More';
      }
    }
  }

  function toggleInstructor() {
    var content = document.querySelectorAll('.content-instructor p:not(:first-child)');
    var button = document.getElementById('showMoreDetails');
  
    for (var i = 0; i < content.length; i++) {
      if (content[i].style.display === 'none') {
        content[i].style.display = 'block';
        button.textContent = 'Show Less';
      } else {
        content[i].style.display = 'none';
        button.textContent = 'Show More';
      }
    }
  }
  



// function aside_open() {
//     document.getElementById("aside-show").style.display = "block";
//     document.getElementById("aside-overlay").style.display = "block";
//   }
  
//   function aside_close() {
//     document.getElementById("aside-show").style.display = "none";
//     document.getElementById("aside-overlay").style.display = "none";
//     // let hide = document.getElementsByClassName('aside');
//     // hide[0].classList.add('hide');
//   }