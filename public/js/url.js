$(document).ready(function() {
  $("#tiny_url_form").submit(function() {
    var input = $("#tiny_url_input").val()
    $.ajax({
      url: '/api/urls?url=' + input,
      method: 'GET',
      dataType: 'json',
      beforeSend: function() {
        $("#loading_spinner").show();
      },
      success: function(data) {
        console.log('success');
        var long_url_text = "<h3>Long Url: <span style=color:red;>" + data['long_url'] + "</span></h3>";
        $('#long_url_container').html(long_url_text);
        $("#loading_spinner").hide();
      },
      complete: function(data) {
        console.log('completed');
        $("#loading_spinner").hide();
      }
    });
    return false;
  });
});