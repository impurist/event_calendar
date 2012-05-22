/*
 * Smart event highlighting
 * Handles when events span rows, or don't have a background color
 */
jQuery(document).ready(function($) {
  var highlight_colors = {
    "event": "#cfcfcf",
    "allocation": "#66ccff"
  };
  
  // highlight events that have a background color
  $(".ec-event-bg").live("mouseover", function() {
    event_id = $(this).attr("data-event-id");
    event_class_name = $(this).attr("data-event-class");
    $(".ec-event-"+event_id).css("background-color", highlight_colors[event_class_name]);
  });
  $(".ec-event-bg").live("mouseout", function() {
    event_id = $(this).attr("data-event-id");
    event_color = $(this).attr("data-color");
    $(".ec-event-"+event_id).css("background-color", event_color);
  });
  
  // highlight events that don't have a background color
  $(".ec-event-no-bg").live("mouseover", function() {
    ele = $(this);
    ele.css("color", "white");
    ele.find("a").css("color", "white");
    ele.find(".ec-bullet").css("background-color", "white");
    ele.css("background-color", highlight_colors["event"]);
  });
  $(".ec-event-no-bg").live("mouseout", function() {
    ele = $(this);
    event_color = $(this).attr("data-color");
    ele.css("color", event_color);
    ele.find("a").css("color", event_color);
    ele.find(".ec-bullet").css("background-color", event_color);
    ele.css("background-color", "transparent");
  });
});