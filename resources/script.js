function handleEvent(e,parentNode) {
  var $seats = $(parentNode + ' li.carousel-seat')  
  var $newSeat;
  var $el = $(parentNode + ' li.is-ref');
  var $currSliderControl = $(e.currentTarget);
  
  $el.removeClass('is-ref');
  if ($currSliderControl.data('toggle') === 'next') {
    $newSeat = next($el);
    $(parentNode).removeClass('is-reversing');
  } else {
    $newSeat = prev($el);
    //$carousel.addClass(parent+'is-reversing');
    $(parentNode).addClass('is-reversing');
  }

  $newSeat.addClass('is-ref').css('order', 1);
  for (var i = 2; i <= $seats.length; i++) {
    $newSeat = next($newSeat).css('order', i);
  }

  $(parentNode).removeClass('is-set');
  return setTimeout(function() {
    return $(parentNode).addClass('is-set');
  }, 50);

  function next($el) {
    if ($el.next().length) {
      return $el.next();
    } else {
      return $seats.first();
    }
  }

  function prev($el) {
    if ($el.prev().length) {
      return $el.prev();
    } else {
      return $seats.last();
    }
  }
}