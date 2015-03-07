angular.module('starter.controllers', ['ionic'])

.controller('DashCtrl', ['$scope', '$state', function($scope, $state) {

  var user = $scope.user;
  $scope.master = {};
  $scope.user = angular.copy($scope.master);

  if ($rootScope.isLoggedIn) {
        $scope.name = user.get('name');
    }

}])

.controller('ChatsCtrl', function($scope, $ionicActionSheet, $timeout) {

 // Triggered on a button click, or some other target
 $scope.show = function() {

   // Show the action sheet
   var hideSheet = $ionicActionSheet.show({
     buttons: [
       { text: 'Call 911' },
       { text: 'Send Location' },
       { text: 'Text Help'}
     ],
     titleText: 'Send an Alert',
     cancelText: 'Cancel',
     cancel: function() {
          // add cancel code..
        },
     buttonClicked: function(index) {
       return true;
     }
   });

   // For example's sake, hide the sheet after two seconds
   $timeout(function() {
     hideSheet();
   }, 2000);

 };

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', ['$scope', '$state', function($scope, $state) {
      $scope.master = {};

      $scope.update = function(user) {
        $scope.master = angular.copy(user);
        $state.go('tab.dash');
      };

      $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
      };

      $scope.reset();
}]);
