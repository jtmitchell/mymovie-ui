// Entry point for browserify

// legacy javascript
global._ = require('underscore');
global.jQuery = require('jquery');
global.toastr = require('toastr');
require('web-starter-kit');

// the angular app
require('./mymovie');
