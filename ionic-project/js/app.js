/**
 * Created by chris on 2016/12/21.
 */

var app = angular.module('myapp', [
    'ionic',
    'myapp.config',
    'myapp.controllers',
    'myapp.service'
]);
app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('tab', {
            url: '/tab',
            templateUrl: 'templates/tabs.html'
        })
        .state('tab.homepage', {
            url: '/homepage',
            views: {
                'tab-homepage': {
                    templateUrl: 'templates/homepage.html'
                }
            }
        })
        .state('tab.hots', {
            url: '/hots',
            views: {
                'tab-hots': {
                    templateUrl: 'templates/hots.html',
                    controller: 'HotsController'
                }
            }
        })
        .state('tab.hotsDetail', {
            url: '/hotsDetail/:param',
            views: {
                'tab-hots': {
                    templateUrl: 'templates/hotsDetail.html',
                    controller: 'HotsDetailController'
                }
            }
        })
        .state('tab.article', {
            url: '/article',
            views: {
                'tab-article': {
                    templateUrl: 'templates/article.html'
                }
            }
        })
        .state('tab.mine', {
            url: '/mine',
            views: {
                'tab-mine': {
                    templateUrl: 'templates/mine.html',
                    controller:'MineController'
                }
            }
        })
        .state('tab.mineLogin', {
            url: '/mineLogin',
            views: {
                'tab-mine': {
                    templateUrl: 'templates/mineLogin.html',
                    controller:'LoginController'
                }
            }
        })
    $urlRouterProvider.otherwise('/tab/homepage');

})