jQuery(document).ready(function(){
  $( "#hp-motor,#energy-rate" ).keyup(function() {
    calculateTotals(this);
  });
    
});

function calculateTotals(clicked_object)
{
  var hp_motor = $( clicked_object ).val();
  $( "#val1" ).text( hp_motor );
    console.log("hit");
}
