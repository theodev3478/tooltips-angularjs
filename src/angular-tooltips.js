(function() {
    'use strict';

    var directive = function () {
        return {
            restrict: 'A',
            scope: {
                options: '<'
            },
            link: function($scope, element, attrs) {
                element[0].setAttribute("id", new Date().getTime());
                
                $scope.$watch('options', function(options) {
                    tippy(document.getElementById(element.attr('id')), options || {});
                });
            }
        }
    };

    angular
        .module('tooltips', [])
        .directive('tippyToolTip', directive)
})();
