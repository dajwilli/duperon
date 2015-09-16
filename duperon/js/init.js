jQuery(document).ready(function(){
  $( "input" ).keyup(function() {
    this.value = this.value.replace(/[^0-9\.]/g,'');
    calculateTotals(this);
  });
    
});

function setVariables() {
  var proposed_price = parseInt($("#proposed-sale").val());
  return proposed_price;
}

function calculateTotals(clicked_object)
{
  var test = setVariables();
  var hp_motor = parseInt($( clicked_object ).val());
  var energy_rate = parseInt($( clicked_object ).val());
  $( "#val1" ).text( hp_motor );
  $('#ic-cost-1').text(test);
  console.log($(clicked_object).data('name'));
  console.log(test);
}

$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})