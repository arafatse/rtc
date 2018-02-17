function isComputer() {
  var course = document.getElementsByClassName('course');
  for (var i = 0; i < course.length; i++) {
    if (course[i].classList.value.indexOf("computerfilter") > -1) {
      course[i].style.display = "block";
    } else {
      course[i].style.display = "none";
    }
  }
}
function isLang() {
  var course = document.getElementsByClassName('course');
  for (var i = 0; i < course.length; i++) {
    if (course[i].classList.value.indexOf("langfilter") > -1) {
      course[i].style.display = "block";
    } else {
      course[i].style.display = "none";
    }
  }
}

function isHd() {
  var course = document.getElementsByClassName('course');
  for (var i = 0; i < course.length; i++) {
    if (course[i].classList.value.indexOf("hdfilter") > -1) {
      course[i].style.display = "block";
    } else {
      course[i].style.display = "none";
    }
  }
}


      var menuStatus = false;
      var listTitle = document.getElementsByClassName('myDropdown');
    function openlist(e) {
      if (!menuStatus) {
        e.nextElementSibling.style.display = "block";
        menuStatus = true;
      } else {
        e.nextElementSibling.style.display = "none";
        menuStatus = false;
      }
    }

    function mySearch() {
      var input, filter, table, tr, td, i;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      table = document.getElementById("coursetable");
      tr = table.getElementsByClassName("course");
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("h4")[0];
        if (td) {
          if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "block";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    }
