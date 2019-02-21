var tabBtn = $('.nav li');
var tabContent = $('.tab-content div')
tabBtn.on('click', openTab);

function openTab(el) {
  //Prevents browser default things
  el.preventDefault();

  var target = el.currentTarget,
    aBtn = $(target).find('a'),
    href = $(aBtn).attr('href');

  //Remove classes
  tabBtn.removeClass('active');
  tabContent.removeClass('active');
  //Add Classes
  $(target).addClass('active');
  $(href).addClass('active');

}
