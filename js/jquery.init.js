

jQuery(document).ready(function(){
  
  jQuery("#accordion h3").next(".pane").hide();
  jQuery("#accordion h3").toggle(
    function () {
      jQuery(this).addClass("current");
      jQuery(this).next(".pane").show();
    },
    function () {
      jQuery(this).removeClass("current");
      jQuery(this).next(".pane").hide();
    }
  );
  
});
