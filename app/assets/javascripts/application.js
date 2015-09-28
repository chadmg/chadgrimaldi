// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require turbolinks
//= require_tree .

var scrollingToItem = false;
var selectedMenu = "about";

$(document).ready(function() {
console.log("TEST");

var menuItems = [
  {"scroll_to": "about", "elem": $("#about")},
  {"scroll_to": "education", "elem": $("#education")},
  {"scroll_to": "work", "elem": $("#work")},
  {"scroll_to": "projects", "elem": $("#projects")},
  {"scroll_to": "contact", "elem": $("#contact")}
];

var menuItemsLen = menuItems.length;

if($(window).scrollTop() < menuItems[1]["elem"].offset().top) {
  $(".header-tile").removeClass("active");
  $("#header-"+menuItems[0]["scroll_to"]).addClass("active");
  selectedMenu = "about";
}

$(window).scroll(function() {
  console.log("SCROLL");
  console.log("TOP:: "+ $("#work").offset().top );
  var scrollHeight = $(this).scrollTop();
  var set = "";
  for(var i = menuItemsLen - 1; i >= 0; i--) {
    var topOffset = menuItems[i]["elem"].offset().top;
    console.log("scrollheight: " + scrollHeight);
    console.log("offset: " + topOffset);
    if(scrollHeight + 50 + 20 > topOffset) {
      if(selectedMenu == menuItems[i]["scroll_to"]){
        set = selectedMenu;
      }
      else if(!scrollingToItem) {
        var scroll_to = menuItems[i]["scroll_to"];
        // change the selected menu element
        $(".header-tile").removeClass("active");
        $("#header-"+menuItems[i]["scroll_to"]).addClass("active");
        selectedMenu = scroll_to;
        set = selectedMenu;
      }
      break;
    }
  }
  if(set == "") {

  }
});

$(".header-tile").click(function(e) {
  var scrollTo = $(this).attr('id').replace("header-","");
  var elem = $("#"+scrollTo);
  scrollingToItem = true;
  $('html, body').animate({
    scrollTop: elem.offset().top - 50
  }, 1000, function() {
    scrollingToItem = false;
  });
  $(".header-tile").removeClass("active");
  $(this).addClass("active");
});

});