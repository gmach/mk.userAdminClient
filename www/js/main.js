
var myApp = angular.module('myApp', [
    'ui.router'
]);

myApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/wizard/step1');

    $stateProvider
        .state('wizard', {
            abstract: true,
            url: '/wizard',
            template: '<div>\
      <div ui-view></div>\
      </div>'
        })
        .state('wizard.step1', {
            url: '/step1',
            templateUrl: 'partials/step_1.html'
        })
        .state('wizard.step2', {
            url: '/step2',
            templateUrl: 'partials/step_2.html'
        })
        .state('wizard.finish', {
            url: '/finish',
            templateUrl: 'partials/step_3.html'
        })
}]);


myApp.controller('CandidatesCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.candidate = candidates[Math.floor(Math.random()*candidates.length)];
    $scope.job = job;
    $scope.candidateQuestions = candidateQuestions;
    $scope.recruiterQuestions = recruiterQuestions;
    $scope.skilltests = skilltests;
    $scope.questions = function(skill) {
        return skilltests[skill];
    }
    $scope.checkAnswer = function(a) {
        var iq = this.$parent.sq;
        _(iq.answerOptions).each(function(ao) {
            ao.selected = (ao === a) ? true : false;
        });
        $.ajax({
            type: "POST",
            url: 'http://localhost:8080/iq/check',
            data: iq,
            success: function( data ) {
                        $( ".result" ).html( data );
                     }
        }).done(function() {
            console.log('done');

        }).fail(function() {

            console.log('fail');
        });
       /*
        $http({
            method: 'POST',
            url: 'http://localhost:8080/iq/check',
            data: iq
        }).
            success(function(data, status) {
                $scope.status = status;
                $scope.data = data;
            }).
            error(function(data, status) {
                $scope.data = data || "Request failed";
                $scope.status = status;
            });
*/

    }


/*
    var errorCallback = function(e) {
        console.log('Reeeejected!', e);
    };
    if (Modernizr.getusermedia) {
        var gUM = Modernizr.prefixed('getUserMedia', navigator);
        gUM({video: true, audio: true}, function (localMediaStream) {
            var video = document.querySelector('video');
            video.src = window.URL.createObjectURL(localMediaStream);

            // Note: onloadedmetadata doesn't fire in Chrome when using it with getUserMedia.
            // See crbug.com/110938.
            video.onloadedmetadata = function (e) {
                // Ready to go. Do some stuff.
            };
        }, errorCallback);
    }
*/

}]);




