jQuery(document).ready(function() {
    jQuery('.toggle-nav').click(function(e) {
        jQuery(this).toggleClass('active');
        jQuery('.menu ul').toggleClass('active');
 
        e.preventDefault();
    });
});

$('a.new-link').click(function() {
    	confirm("Are you sure you want to leave this page?");
});