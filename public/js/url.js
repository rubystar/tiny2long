$(document).ready(function() {
  $("#tiny_url_form").submit(function() {
    $.ajax({
      url: '/urls',
      method: 'GET',
      data: $(this).serialize(),
      dataType: 'json',
      success: function(data) {
        alert(data);
      }
    });
    return false;
  });
});