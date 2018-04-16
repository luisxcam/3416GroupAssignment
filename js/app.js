// TODO: Need to check how exactly this chart works or come up with another framework
// google.charts.load("current", {
//     packages: ["corechart"]
// });
// google.charts.setOnLoadCallback(drawChart);

// function drawChart(data) {
//     var data = google.visualization.arrayToDataTable([
//         ['Products', 'Amount'],
//         ['Available Products', 11],
//         ['Used Products', 7]
//     ]);
//     var options = {
//         title: 'Stock Details',
//         pieHole: 0,
//     };
//     var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
//     chart.draw(data, options);
// }
'use strict';
angular.module('mainApp', ['ngRoute'])
    .controller('mainCtrl', MainCtrl)
    .config(function ($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('');
        
        $routeProvider.when('/addproducts', {
            templateUrl: 'modals/addproducts.html'
        });
        $routeProvider.when('/searchproducts', {
            templateUrl: 'modals/searchproducts.html'
        });
        $routeProvider.otherwise({
            templateUrl: 'modals/piechart.html'
        });
        
    });

function MainCtrl($scope) {
    console.log('controller loaded');
}