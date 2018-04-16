'use strict';

(function () {
    angular.module('mainApp', ['appControllers', 'ngRoute'])
        //.controller('mainCtrl', MainCtrl)
        .config(function ($routeProvider, $locationProvider) {
            $locationProvider.hashPrefix('');

            $routeProvider.when('/addproducts/', {
                controller: 'addProductCtrl',
                templateUrl: 'modals/addproducts.html',
                access: {restricted: true}
            });
            $routeProvider.when('/searchproducts/', {
                templateUrl: 'modals/searchproducts.html',
                access: {restricted: true}
            });
            $routeProvider.otherwise({
                controller: 'pieCtrl',
                templateUrl: 'modals/piechart.html',
                access: {restricted: true}
            });

        });

    angular.module('appControllers', [])
        .controller('pieCtrl', PieCtrl)
        .controller('addProductCtrl', AddProductCtrl);

    //Controllers
    // function MainCtrl($scope) {
    //     console.log('controller loaded');
    // }

    function PieCtrl() {
        console.log('pie loaded');
    }

    function AddProductCtrl() {
        console.log('add product loaded');
    }
})();

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