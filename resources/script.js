// FLEX BOX CAROUSEL
// taken from http://madewithenvy.com/ecosystem/articles/2015/exploring-order-flexbox-carousel/


//one
    $('#one-prev').on('click', function(e) {
        handleEvent(e,'ul#one');
    });
    $('#one-next').on('click', function(e) {
        handleEvent(e,'ul#one');
    });
//two
    $('#two-prev').on('click', function(e) {
        handleEvent(e,'ul#two');
    });
    $('#two-next').on('click', function(e) {
        handleEvent(e,'ul#two');
    });
//three
    $('#three-prev').on('click', function(e) {
        handleEvent(e,'ul#three');
    });
    $('#three-next').on('click', function(e) {
        handleEvent(e,'ul#three');
    });
//four
    $('#four-prev').on('click', function(e) {
        handleEvent(e,'ul#four');
    });
    $('#four-next').on('click', function(e) {
        handleEvent(e,'ul#four');
    });
//five
    $('#five-prev').on('click', function(e) {
        handleEvent(e,'ul#five');
    });
    $('#five-next').on('click', function(e) {
        handleEvent(e,'ul#five');
    });
//six
    $('#six-prev').on('click', function(e) {
        handleEvent(e,'ul#six');
    });
    $('#six-next').on('click', function(e) {
        handleEvent(e,'ul#six');
    });
//seven
    $('#seven-prev').on('click', function(e) {
        handleEvent(e,'ul#seven');
    });
    $('#seven-next').on('click', function(e) {
        handleEvent(e,'ul#seven');
    });
//eight
    $('#eight-prev').on('click', function(e) {
        handleEvent(e,'ul#eight');
    });
    $('#eight-next').on('click', function(e) {
        handleEvent(e,'ul#eight');
    });
//nine
    $('#nine-prev').on('click', function(e) {
        handleEvent(e,'ul#nine');
    });
    $('#nine-next').on('click', function(e) {
        handleEvent(e,'ul#nine');
    });
//ten
    $('#ten-prev').on('click', function(e) {
        handleEvent(e,'ul#ten');
    });
    $('#ten-next').on('click', function(e) {
        handleEvent(e,'ul#ten');
    });

function handleEvent(e,parentNode) {
  var $seats = $(parentNode + ' li.carousel-seat')  
  var $newSeat;
  var $el = $(parentNode + ' li.is-ref');
  var $currSliderControl = $(e.currentTarget);
  // Info: e.target is what triggers the event dispatcher to trigger and e.currentTarget is what you assigned your listener to.

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