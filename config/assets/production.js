'use strict';

module.exports = {
  client: {
    lib: {
      css: [
        'lib/bootstrap/dist/css/bootstrap.min.css',
        '/lib/bootstrap/dist/css/bootstrap-theme.min.css',
      ],
      js: [
        '/lib/angular/angular.min.js',
        '/lib/angular-resource/angular-resource.min.js',
        '/lib/angular-animate/angular-animate.min.js',
        '/lib/angular-ui-router/release/angular-ui-router.min.js',
        '/lib/angular-ui-utils/ui-utils.min.js',
        '/lib/angular-bootstrap/ui-bootstrap-tpls.min.js',
        '/lib/angular-file-upload/angular-file-upload.min.js'
      ]
    },
    css: '/dist/application.min.css',
    js: '/dist/application.min.js'
  }
};
