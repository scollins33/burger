$('.devour').on('click', function () {
    $.post(`/api/devour/${$(this).attr('data-id')}`, {target: $(this).attr('data-id')},
        function () { location.reload(); });
});

$('#burgerSubmit').on('click', function () {
    $.post('/api/new', {burgerName: $('#burgerText').val().trim()},
        function () { location.reload(); });
});