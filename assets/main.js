

function isComputer() {
  var course = document.getElementsByClassName('course');
  for (var i = 0; i < course.length; i++) {
    if (course[i].classList.value.indexOf("computerfilter") > -1) {
      course[i].style.display = "block";
    } else {
      course[i].style.display = "none";
    }
  }
  myInput.scrollIntoView();

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
  myInput.scrollIntoView();

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
  myInput.scrollIntoView();
}


      var menuStatus = false;
      var listTitle = document.getElementsByClassName('myDropdown');
    function openlist(e) {
      if (!menuStatus) {
        e.nextElementSibling.style.display = "block";
        e.getElementsByTagName('i')[0].style.transform = "rotate(180deg)";
        menuStatus = true;
      } else {
        e.nextElementSibling.style.display = "none";
        e.getElementsByTagName('i')[0].style.transform = "rotate(0deg)";

        menuStatus = false;
      }
    }

    function mySearch() {
      var input, filter, table, tr, td, i;
      var count = 1;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      table = document.getElementById("coursetable");
      courses = table.getElementsByClassName("course");
      for (i = 0; i < courses.length; i++) {
        course = courses[i].getElementsByTagName("h4")[0];
        if (course) {
          if (course.innerHTML.toUpperCase().indexOf(filter) > -1) {
            courses[i].style.display = "block";
            count = 0;
          } else {
            courses[i].style.display = "none";
          }
        }
      }
      if (count){
        document.getElementById('noResult').innerHTML = "<br><br>\
عفواَ هذا الكورس غير متوفر الان ";
      }
      else{
        document.getElementById('noResult').innerHTML = "";

}
    }
    function seeAll() {
      var table, tr, td, i;
      table = document.getElementById("coursetable");
      courses = table.getElementsByClassName("course");
      for (i = 0; i < courses.length; i++) {
        courses[i].style.display = "block";
        }
    }
