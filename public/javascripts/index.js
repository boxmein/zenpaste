
var toggleIt = function () {
  var that = $("#expand"); 
  if (that.children("span").hasClass("entypo-up-open")) {
    that.children("span").removeClass("entypo-up-open").addClass("entypo-down-open"); 
    $("#metadata").slideUp();
  }
  else {
    that.children("span").removeClass("entypo-down-open").addClass("entypo-up-open"); 
    $("#metadata").slideDown();
  }
}

$("#expand").click(toggleIt);
toggleIt();
Rainbow.color();
