'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
  .directive('dynamic',['$compile',function($compile){
  	return {
    restrict: 'A',
    replace: true,
    link: function (scope, ele, attrs) {
      scope.$watch(attrs.dynamic, function(html) {
        ele.html(html);
        $compile(ele.contents())(scope);
      });
    }
  };
  }])
  .directive('fieldCreator',['$compile',function($compile){
  	return {
        template: "<div > <label>{{Field.Name}} <div id='{{Field.Name}}_Container'></div> </label></div>",
        replace: true,
        restrict: 'AE',
        scope: {
            Field: "=fieldInfo",
            FieldData:"=fieldData"
        },
        link: function (scope, element, attr) {
        	console.log(scope.Field.Type)
        	console.log(scope.FieldData[scope.Field.Name]);
            var input = "<input type='" + scope.Field.Type + "' data-ng-model="+"scope.FieldData["+scope.Field.Name+"]>";
            var html = $compile(input)(scope);
            console.log(element.find('div'));
            element.find('div').append(html);
        }
    }
  }]);