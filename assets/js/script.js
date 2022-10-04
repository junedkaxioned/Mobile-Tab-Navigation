var images = document.querySelectorAll('.image');
var tabLists = document.querySelectorAll('.tab-list');

// function for NavList
tabLists.forEach(function (list, idx) {
  list.addEventListener('click', function () {

    // Loop for remove class
    for (var i = 0; i < tabLists.length; i++) {
      tabLists[i].classList.remove('active');
      images[i].classList.remove('show-image');
    }

    this.classList.add('active');
    images[idx].classList.add('show-image');
  })
})