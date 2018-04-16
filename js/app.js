'use strict';

(function () {
    angular.module('mainApp', ['appControllers', 'ngRoute'])
        .config(function ($routeProvider, $locationProvider) {
            $locationProvider.hashPrefix('');

            $routeProvider.when('/addproducts/', {
                controller: 'addProductCtrl',
                templateUrl: 'modals/addproducts.html',
                access: {restricted: true},
                css:'css/style.css'
            });
            $routeProvider.when('/searchproducts/', {
                controller: 'searchProduct',
                templateUrl: 'modals/searchproducts.html',
                access: {restricted: true},
                css:'css/style.css'
            });
            $routeProvider.otherwise({
                controller: 'pieCtrl',
                templateUrl: 'modals/piechart.html',
                access: {restricted: true},
                css:'css/style.css'
            });

        });

    angular.module('appControllers', [])
        .controller('pieCtrl', PieCtrl)
        .controller('addProductCtrl', AddProductCtrl);

    function PieCtrl($scope,$http) {
        $scope.getRequest = function(){
            $http.get('https://api.github.com/users/luisxcam').then(function(response){
                console.log(response.data);
            });
        }

        $scope.getRequest();
    }

    function AddProductCtrl() {
        console.log('add product loaded');
    }

    function SearchProduct(){
        console.log('search for product');
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