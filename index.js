'use strict';

var kraken = require('kraken-js'),
    app = require('express')(),
    options = require('./lib/spec')(app),
    port = process.env.PORT || 8000,
    livereload = require('livereload2');

app.use(kraken(options));

app.listen(port, function(err) {
    console.log('[%s] Listening on http://localhost:%d', app.settings.env, port);
});


// TODO: we should probably do something a little more than pretending to
// console.log an uncaughtException, but let's go ahead and not crash the
// whole process.
process.on('uncaughtException', function(err) {
    // console.log(err);
});

// start up livereload server
var server = livereload.createServer({
    exts: [
        'dust',
        'scss'
    ]
});
server.watch(__dirname + '/config');
server.watch(__dirname + '/controllers');
server.watch(__dirname + '/locales');
server.watch(__dirname + '/models');
server.watch(__dirname + '/public');
