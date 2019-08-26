// Ionic Starter App

angular.module('starter', [
  'ionic',
  'starter.controllers',
  'starter.services',
  'ngCordova',
  'ionic.service.core',
  'ionic.service.push'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }

    /*Comprobamos si tenemos conexión activa a Internet */
    if (window.Connection) {
      if (navigator.connection.type == Connection.NONE) {
        console.log("Internet Disconnected")
        $ionicPopup.confirm({
            title: "Internet Disconnected",
            content: "The internet is disconnected on your device."
          })
          .then(function(result) {
            if (!result) {
              ionic.Platform.exitApp();
            }
          });
      }
    }

    /* PUBLICIDAD
    if (window.device && typeof AdMob !== "undefined") {
        var admob_key = device.platform == "Android" ? "ca-app-pub-8146453982516408/6463977376" : "IOS_PUBLISHER_KEY";

        AdMob.createBanner( {
          adId: admob_key,
          position: AdMob.AD_POSITION.BOTTOM_CENTER,
          isTesting: true,
          adSize: 'SMART_BANNER',
          success: function(){
             console.log('create banner');
          },
          error: function(){
            console.log('failed to create banner');
          }
        });
    }
    */
  });
})


.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  .state('tab.monday', {
    url: '/monday',
    views: {
      'tab-monday': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'MenuCtrl'
      }
    }
  })

  .state('tab.tuesday', {
    url: '/tuesday',
    views: {
      'tab-tuesday': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'MenuCtrl'
      }
    }
  })

  .state('tab.wednesday', {
    url: '/wednesday',
    views: {
      'tab-wednesday': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'MenuCtrl'
      }
    }
  })

  .state('tab.thursday', {
    url: '/thursday',
    views: {
      'tab-thursday': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'MenuCtrl'
      }
    }
  })

  .state('tab.friday', {
    url: '/friday',
    views: {
      'tab-friday': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'MenuCtrl'
      }
    }
  })

  .state('tab.saturday', {
    url: '/saturday',
    views: {
      'tab-saturday': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'MenuCtrl'
      }
    }
  })

  // Muestra automaticamente el menú del dia actual.
  switch (moment().weekday()) {
    case 1:
      $urlRouterProvider.otherwise('/tab/monday');
      break;
    case 2:
      $urlRouterProvider.otherwise('/tab/tuesday');
      break;
    case 3:
      $urlRouterProvider.otherwise('/tab/weekday');
      break;
    case 4:
      $urlRouterProvider.otherwise('/tab/thursday');
      break;
    case 5:
      $urlRouterProvider.otherwise('/tab/friday');
      break;
    case 6:
      $urlRouterProvider.otherwise('/tab/saturday');
      break;
    case 7:
      $urlRouterProvider.otherwise('/tab/monday');
      break;
    default:
      $urlRouterProvider.otherwise('/tab/monday');
  }
});
