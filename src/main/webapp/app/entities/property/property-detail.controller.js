(function() {
    'use strict';

    angular
        .module('assessoriaTorrellesApp')
        .controller('PropertyDetailController', PropertyDetailController);

    PropertyDetailController.$inject = ['$scope', '$rootScope', '$stateParams', '$translate', 'previousState', 'DataUtils', 'entity', 'Property', 'Location', 'User', 'Photo'];

    function PropertyDetailController($scope, $rootScope, $stateParams, $translate, previousState, DataUtils, entity, Property, Location, User, Photo) {
        var vm = this;

        vm.property = entity;
        vm.previousState = previousState.name;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;

        vm.language = function () {
            return $translate.proposedLanguage();
        };

        var unsubscribe = $rootScope.$on('assessoriaTorrellesApp:propertyUpdate', function(event, result) {
            vm.property = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
