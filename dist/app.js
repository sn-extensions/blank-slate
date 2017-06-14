(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

angular.module('app', []);class HomeCtrl {
  constructor($scope, $timeout) {

    // uncomment the permissions you need
    var permissions = [{
      name: "stream-context-item"
    }];

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

    componentManager.streamContextItem(function (item) {
      // perform updates in $timeout so Angular can $apply()
      $timeout(function () {
        $scope.item = item;
        $scope.analyzeNote($scope.item);
      });
    });

    $scope.analyzeNote = function (note) {
      var s = note.content.text;
      s = s.replace(/(^\s*)|(\s*$)/gi, ""); //exclude  start and end white-space
      s = s.replace(/[ ]{2,}/gi, " "); //2 or more space to 1
      s = s.replace(/\n /, "\n"); // exclude newline with a start spacing

      $scope.wordCount = s.split(' ').length;
    };

    // adjust the height as needed
    componentManager.setSize("container", "100%", 45);
  }
}

// required for FireFox
HomeCtrl.$$ngIsClass = true;
angular.module('app').controller('HomeCtrl', HomeCtrl);


},{}]},{},[1]);
