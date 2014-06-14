var $ = require('./jquery-1.11.1.min');
// ugh this feels dirty that i have to do this...
window.$ = $;
window.jQuery = $;
var imagesloaded = require('./imagesloaded.pkgd');
var imagefill = require('./jquery-imagefill');

$(document).ready(function() {
    $('.albumBox').imagefill();
});
