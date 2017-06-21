(function(){
    'use strict';
    angular.module('scrumboard.demo')
        .directive('scrumboardCard', CardDirective);

        function CardDirective(){
            return {
                templateUrl : '/static/html/card.html',
                restrict : 'E',
                controller : ['$scope', '$http', function($scope, $http){
                    $scope.modeloptions = {
                        debounce : 5000
                    }
                    $scope.destList = $scope.list;
                    $scope.edit = false;
                    $scope.update = function(){
                        return $http.put('/scrumboard/cards/' + $scope.card.id + '/', $scope.card );        
                    }

                    $scope.removeCardFromList = function(card, list){
                        var cards = list.cards;
                        list.cards.splice(
                            list.cards.indexOf(card),
                            1
                        );
                    }
                    $scope.move = function(){
                        if($scope.destList == undefined){
                            return;
                        }
                        $scope.card.list = $scope.destList.id; 
                        $scope.update().then((res) => {
                            $scope.removeCardFromList($scope.card, $scope.list);
                            $scope.destList.cards.push($scope.card);
                        });
                    }
                }]
            }
        }
})();