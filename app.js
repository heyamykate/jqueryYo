$(document).ready(function() {
    
    $('.terminate').click(function () {
        $('.description').hide();
    });
    
    $('.restore').click(function () {
        $('.description').show();
    });
    
    $('.alert-name').on('click', function () {
        var hipName = $('#name').val();
        var sideNote = $('<p>sweet name brah.</p>');
        alert(hipName + ', eh?');
        
        sideNote.appendTo('div.name');
    });
    
})