$('#navbar-portfolio').on('show.bs.collapse', function() {
    $('.portfolio-banner').css('transform', 'translate(-50%, 10%)');
});

$('#navbar-portfolio').on('hide.bs.collapse', function() {
    $('.portfolio-banner').css('transform', 'translate(-50%, -50%)');
});