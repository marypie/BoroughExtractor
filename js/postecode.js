$(document).ready(function() {
  //button handler function
  $("button").click(function(event) {
    event.preventDefault();
    var postecodeAPI = "http://api.postcodes.io/postcodes/";
    var postecode = $("input").val();
    var realCall = postecodeAPI + postecode;
    //callback function 
    function showBorough(data) {
      var borough = data.result.admin_district;
      $("#boroughs").html(borough);
    };
    $.getJSON(realCall, showBorough);
  });
});