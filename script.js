jQuery(window).bind('scroll', function () {
    if (jQuery(window).scrollTop() > 100) {
      jQuery('#headnev').addClass('navbar-fixed-top').removeClass('topnavbar');
      jQuery('body').addClass('bodytopmargin').removeClass('bodynomargin');
    } else {
      jQuery('#headnev').removeClass('navbar-fixed-top').addClass('topnavbar');
      jQuery('body').removeClass('bodytopmargin').addClass('bodynomargin');
    }
  });