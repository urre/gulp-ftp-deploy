var gulp    = require("gulp");
var gutil   = require( 'gulp-util' );
var ftp     = require( 'vinyl-ftp' );
var secrets = require('../secrets.json');

gulp.task( 'deploy', function() {

    // Create ftp connection. Using secrets.json
    var conn = ftp.create( {
        host: secrets.servers.production.serverhost,
        user: secrets.servers.production.username,
        password: secrets.servers.production.password,
        parallel: 4,
        log: gutil.log
    } );

    // Specify the file patterns you want to deploy
    var globs = [
    'css/**/*',
    'fonts/**/*',
    'img/**/*',
    '*.html'
    ];

    return gulp.src( globs, { base: '.', buffer: false } )
        .pipe( conn.dest( secrets.servers.production.remotepath ) );

} );
