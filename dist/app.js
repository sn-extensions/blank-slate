(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

angular.module('app', []);class HomeCtrl {
  constructor($scope, $timeout) {

    // uncomment the permissions you need
    var permissions = [
      // {
      //   name: "stream-context-item"
      // },
      // {
      //   name: "stream-items",
      //   content_types: ["Tag"]
      // }
    ];

    let componentManager = new window.ComponentManager(permissions, function () {
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

    /*
    componentManager.streamContextItem(function(item){
      // perform updates in $timeout so Angular can $apply()
      $timeout(function(){
        $scope.item = item;
      })
    })
    */

    // adjust the height as needed
    componentManager.setSize("container", "100%", 45);
  }
}

// required for FireFox
HomeCtrl.$$ngIsClass = true;
angular.module('app').controller('HomeCtrl', HomeCtrl);


},{}]},{},[1]);
