var accordionBtn = $('.accordion');
accordionBtn.on('click', toggleAccordion);

function toggleAccordion(el) {
  var targetAccordion = el.currentTarget;

  if ($(targetAccordion).next('.panel').css('display') == 'block') {
    $(targetAccordion).next('.panel').slideUp();
  }else {
    $(accordionBtn).next('.panel').slideUp();
    $(targetAccordion).next('.panel').slideDown();
  }
}
