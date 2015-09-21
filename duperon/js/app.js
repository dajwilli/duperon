var app = angular.module('calculator', []);
app.controller('formController', ['$scope', '$filter',
  function($scope, $filter){
    $scope.val = {};
    //// test values
    // $scope.duperon = {};
    // $scope.duperon.proposed_price = 128000;
    // $scope.duperon.hp_motor = .5;
    // $scope.duperon.energy_rate = .0384;
    // $scope.duperon.operational_run_time = 24;
    // $scope.duperon.maintenance_labor_rate = 60;
    // $scope.duperon.maintenance_man_hours = 1;
    // $scope.duperon.operational_man_hours = .5;
    // $scope.duperon.operational_labor_rate = 50;
    // $scope.duperon.installation_man_hours = 16;
    // $scope.duperon.installation_labor_rate = 75;
    // $scope.duperon.interest_rate = 3;
    // $scope.duperon.annual_maintenance = 3;
    // $scope.duperon.unscheduled_maintenance_labor_cost = 120;
    // $scope.val = $scope.duperon;
    $scope.costs;
    $scope.present_values;
    $scope.ownership_cost;
    $scope.ownership_present_value;

    function duperon_set_cost() {
      if($('#duperon').hasClass('active')){
        $('.ampc.10').text($filter('currency')(650));
      } else {
        if($scope.val.annual_maintenance != null) {
          $('.ampc.10').text($filter('currency')($scope.val.annual_maintenance));        
        } else {
          $('.ampc.10').text($filter('currency')(null ));
        }
      }
    }

    function costs() {
      var cost = [];
      var target_class = ['.icc.', '.ilc.', '.smlc.', '.olc.', '.ec.', '.ampc.', '.umlc.']
      for (var year = 1; year < 21; year++) {
        var total = 0;
        var sub_total;
        for (var class_name=0; class_name<7; class_name++){
          if ($(target_class[class_name]+year).text() == ''){
            sub_total = 0;
          } else {
            sub_total = $(target_class[class_name]+year).text().replace(/[^0-9\.]+/g,"");
          }
          sub_total = parseFloat(sub_total);
          total += sub_total;
        }
        cost.push(total);
        parseFloat($(".icc#"+year).text().replace(',' , ''));
        $scope.costs = cost;
      }
    }
    
    function values() {
      var values = [];
      for(var i=0; i<$scope.costs.length; i++) {
        values.push($scope.costs[i] * Math.pow((1 + ($scope.val.interest_rate / 100)), -(i+1)));
      }
      $scope.present_values = values;
    }

    function ownership_cost() {
      var total = 0;
      for(var i=0; i < $scope.costs.length; i++) {
        total += $scope.costs[i];
      }
      $scope.ownership_cost = total;
    }

    function ownership_value() {
      var total = 0;
      for(var i=0; i < $scope.present_values.length; i++) {
        total += $scope.present_values[i];
      }
      $scope.ownership_present_value = total;
    }

    $scope.calculate = function() {
      duperon_set_cost();
      costs();
      values();
      ownership_cost();
      ownership_value();
    }

    $scope.reset = function() {
      $scope.val = {};
      $scope.calculate();
    };

    }
]);
