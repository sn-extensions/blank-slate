angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('home.html',
    "<p>Blank Slate</p>\n"
  );

}]);
