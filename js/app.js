$(document).ready(function(){

  $('.addbutton').click(function(){
    var listitem = $("#item");
    if (!listitem.val()) {
        alert('enter something please');
        return false
    } 
    
    
    $(".box2 ul").append("<li>" + listitem.val() + "</li>");
    listitem.val('');
    
  });
  //reset
  $('.resetbutton').click(function(){
    $('.box2 ul li').remove();
  });
  
  $(".sortable").sortable();
});
