class HomeCtrl {
  constructor($scope, $timeout) {

    // uncomment the permissions you need
    var permissions = [
      {
        name: "stream-context-item"
      },
      // {
      //   name: "stream-items",
      //   content_types: ["Tag"]
      // }
    ]

    let componentManager = new window.ComponentManager(permissions, function(){
      // on ready
    });

    componentManager.loggingEnabled = false;

    /*
    componentManager.streamItems(function(items){
      // perform updates in $timeout so Angular can $apply()
      $timeout(function(){
        $scope.items = items;
      })
    })
    */

    componentManager.streamContextItem(function(item){
      // perform updates in $timeout so Angular can $apply()
      $timeout(function(){
        $scope.item = item;
        $scope.analyzeNote($scope.item);
      })
    })

    $scope.analyzeNote = function(note) {
      var s = note.content.text;
      s = s.replace(/(^\s*)|(\s*$)/gi,"");//exclude  start and end white-space
      s = s.replace(/[ ]{2,}/gi," ");//2 or more space to 1
      s = s.replace(/\n /,"\n"); // exclude newline with a start spacing

      $scope.wordCount = s.split(' ').length;
    }

    // adjust the height as needed
    componentManager.setSize("container", "100%", 45);
  }
}

// required for FireFox
HomeCtrl.$$ngIsClass = true;
angular.module('app').controller('HomeCtrl', HomeCtrl);
