angular.module('adf.dialog.bootstrap', ['ui.bootstrap'])
  .factory('dialogService', function($uibModal) {
    'use strict';
    var dialog = {};
    var instance;
    dialog.open = function(options) {
      instance = $uibModal.open(options);
    };
    dialog.close = function(fn) {
      fn();
      instance.close();
    }
    return dialog;
});