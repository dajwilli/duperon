var proposed_price = 0;
var hp_motor = 0;
var energy_rate = 0;
var operational_run_time = 0;
var maintenance_labor_rate = 0;
var maintenance_man_hours = 0;
var operational_man_hours = 0;
var operation_labor_rate = 0;
var installation_man_hours = 0;
var installation_labor_rate = 0;
var interest_rate = 0;

jQuery(document).ready(function(){
  $( "input" ).keyup(function() {
    this.value = this.value.replace(/[^0-9\.]/g,'');
    setVariables();
    calculateTotals(this);
  });
    
});

function setVariables() {
  proposed_price = $("#proposed-sale").val() != '' ? parseFloat($("#proposed-sale").val()) : 0;
  hp_motor = $('#hp-motor').val() != '' ? parseFloat($("#hp-motor").val()) : 0;
  energy_rate = $('#energy-rate').val() != '' ? parseFloat($('#energy-rate').val()) : 0;
  operational_run_time = $('#operational-run').val() != '' ? parseFloat($('#operational-run').val()) : 0;
  maintenance_labor_rate = $('#maintenance-labor').val() != '' ? parseFloat($('#maintenance-labor').val()) : 0;
  maintenance_man_hours = $('#maintenance-man').val() != '' ? parseFloat($('#maintenance-man').val()) : 0;
  operational_man_hours = $('#operational-man').val() != '' ? parseFloat($('#operational-man').val()) : 0;
  operation_labor_rate = $('#operation-labor').val() != '' ? parseFloat($('#operation-labor').val()) : 0;
  installation_man_hours = $('#installation-man').val() != '' ? parseFloat($('#installation-man').val()) : 0;
  installation_labor_rate = $('#installation-labor').val() != '' ? parseFloat($('#installation-labor').val()) : 0;
  interest_rate = $('#interest-rate').val() != '' ? parseFloat($('#interest-rate').val()) : 0;
}

function calculateTotals(clicked_object)
{
  $( "#val1" ).text( hp_motor );
  $('.icc#1').text(proposed_price);
  $('.ilc#1').text(installation_labor_rate * installation_man_hours);
  $('.smlc').text(12 * maintenance_labor_rate * maintenance_man_hours);
  $('.olc').text(365 * operation_labor_rate * operational_man_hours);
  console.log($(clicked_object).data('name'));
  console.log(proposed_price);
}

$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})