$(document).ready(function(){
  //when button is clicked
  $('.addbutton').click(function(){
    //store item in var
    var listitem = $("#item");
    //append item to box2 as list item
    $(".box2 ul").append("<li>" + listitem.val() + "</li>");
    listitem.val('').focus();
  });
  //resets list
  $('.resetbutton').click(function(){
    $('.box2 ul li').remove();
  });
});
