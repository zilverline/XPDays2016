
$("#foobar li").on("click", function(event) {
  event.preventDefault();
  $("#bar").append('<li>foobar</li>')
});

$('#foobar input[name=color]').on('change', function(event) {
  event.preventDefault();
  $('#container').show();
  if(event.target.value == 'red') {
    $('#when-blue').hide();
    $('#when-red').show();
  } else {
    $('#when-blue').show();
    $('#when-red').hide();
  }
});

