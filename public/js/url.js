$(document).ready(function() {
  $("#tiny_url_form").submit(function() {
    var input = $("#tiny_url_input").val()
    if(input == "" || input == undefined) {
      $("#no_input_error").text("Please provide tiny url")
      $("#no_input_error").show();
      $('#long_url_container').text('');
      return false;
    }
    $.ajax({
      url: '/api/urls?url=' + input,
      method: 'GET',
      dataType: 'json',
      beforeSend: function() {
        $("#no_input_error").hide();
        $("#loading_spinner").show();
        $('#long_url_container').text('');
      },
      success: function(data) {
        var long_url_text = "<h3>Long Url: <span style=color:red;>" + data['long_url'] + "</span></h3>";
        $('#long_url_container').html(long_url_text);
        $("#loading_spinner").hide();
      },
      complete: function(data) {
        $("#loading_spinner").hide();
      }
    });
    return false;
  });
});