angular.module('adf.dialog.ngMaterial', ['ngMaterial'])
  .factory('dialogService', function($mdDialog) {
    'use strict';
    var dialog = {};
    dialog.open = function(options) {
      $mdDialog.show(options);
    };
    dialog.close = function(fn) {
      fn();
      $mdDialog.hide();
    }
    return dialog;
});