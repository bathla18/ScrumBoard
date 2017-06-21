(function(){
            'use strict';
            angular.module('scrumboard.demo', [])
                .controller('ScrumboardController', [ '$scope', '$http', ScrumboardController]);

            function ScrumboardController($scope, $http){
                $scope.person = {
                    name: 'joe',
                    age : 30
                };
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
                        (error) => {}
                    );
                }
            }
        }());