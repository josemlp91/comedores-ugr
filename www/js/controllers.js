angular.module('starter.controllers', [])

.controller('MenuCtrl', function($scope, Menus, $state, $ionicPopup, $rootScope, $ionicUser, $ionicPush) {
  $scope.loading = true

  Menus.then(function(data) {
    $scope.menus = data;
    $scope.loading = false

  }).catch(function(err) {
    $scope.loading = false

    /*Si se produce error en la llamada al servicio*/
    $ionicPopup.alert({
      title: 'Error',
      content: 'Problemas de conexion con el servidor.',
      okText: 'Salir'
    });
  });

  /*
    $scope.identifyUser = function() {
      console.log("Identifica");
      var user = $ionicUser.get();
      if (!user.user_id) {
        // Set your user_id here, or generate a random one.
        user.user_id = $ionicUser.generateGUID();
      };

      // Metadata
      angular.extend(user, {
        name: 'Jose Miguel',
        bio: 'Developer'
      });

      // Identify your user with the Ionic User Service
      $ionicUser.identify(user).then(function() {
        $scope.identified = true;
        console.log('Identified user ' + user.name + '\n ID ' + user.user_id);
      });
    };
  */


  if ($state.current.name === "tab.monday") {
    $scope.menuid = 0;
    $scope.weekday = "monday";
  }
  if ($state.current.name === "tab.tuesday") {
    $scope.menuid = 1;
    $scope.weekday = "tuesday";
  }
  if ($state.current.name === "tab.wednesday") {
    $scope.menuid = 2;
    $scope.weekday = "wednesday";
  }
  if ($state.current.name === "tab.thursday") {
    $scope.menuid = 3;
    $scope.weekday = "thursday";
  }
  if ($state.current.name === "tab.friday") {
    $scope.menuid = 4;
    $scope.weekday = "friday";
  }
  if ($state.current.name === "tab.saturday") {
    $scope.menuid = 5;
    $scope.weekday = "saturday";
  }

})
