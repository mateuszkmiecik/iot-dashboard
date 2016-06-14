var app = angular.module('iot', ['chart.js']);


app.controller('MainCtrl', function ($scope, $http) {


    var socket = io();

    //socket.on('data', )

    $scope.results = [[1,2]];


    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [] ;
    $scope.onClick = function (points, evt) {
        console.log(points, evt);
    };

    $http.get('/api/get_data').then(function (res) {
        $scope.data.push(res.data.results.map(function (r) {
            return r.val;
        }));
        $scope.labels = res.data.results.map(function (r) {
            var date = new Date(Number(r.date));
            return date.getHours() + ":" + date.getMinutes();
        });
    });
});