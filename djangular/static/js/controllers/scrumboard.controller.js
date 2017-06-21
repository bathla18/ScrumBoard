(function(){
    'use strict';

    angular.module('scrumboard.demo')
                .controller('ScrumboardController', [ '$scope', '$http', '$location', ScrumboardController]);

    function ScrumboardController($scope, $http, $location){
        $scope.data = [];

        $http.get('/scrumboard/lists').then((res) => {
            $scope.data = res.data;
        });

        $scope.add = function(list, title){
            var card = {
                title:title,
                list:list.id
            };

            $http.post('/scrumboard/cards/', card).then(
                (success) => {
                    list.cards.push(card);
                },
                (error) => {
                });
        }

        $scope.logout = function(){
            $http.get('/auth_api/logout').then((res) => {
                $location.url('/login');
            });
        }
    }
}());