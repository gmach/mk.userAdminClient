module.exports = function(grunt) {


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'), // the package file to use

        qunit: {
            all: ['tests/*.html']
        },


        bower: {
            target: {
                rjsConfig: 'www/js/common.js'
            }
        },


        // grunt-express will serve the files from the folders listed in `bases`
        // on specified `port` and `hostname`
        express: {
            all: {
                options: {
                    port: 9000,
                    hostname: "localhost",
                    bases: ['www'], // Replace with the directory you want the files served from
                    // Make sure you don't use `.` or `..` in the path as Express
                    // is likely to return 403 Forbidden responses if you do
                    // http://stackoverflow.com/questions/14594121/express-res-sendfile-throwing-forbidden-error
                    livereload: true
                }
            }
        },

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            bower: {
                files: ['bower.json'],
                tasks: ['bowerInstall']
            },
            js: {
                files: ['www/js/{,*/}*.js'],
                tasks: ['jshint'],
                options: {
                    livereload: true
                }
            },
            jstest: {
                files: ['tests/{,*/}*.js'],
                tasks: ['test:watch']
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            sass: {
                files: ['www/css/{,*/}*.{scss,sass}'],
                tasks: ['sass:server', 'autoprefixer']
            },
            styles: {
                files: ['www/css/{,*/}*.css'],
                tasks: ['newer:copy:styles', 'autoprefixer']
            },
            livereload: {
                options: {
                    livereload: true
                },
                files: [
                    'www/{,*/}*.html',
                    'www/partials/*.html',
                    '.tmp/styles/{,*/}*.css',
                    'www/img/{,*/}*'
                ]
            }
        },

        // Compiles Sass to CSS and generates necessary files if requested
        sass: {
            options: {
                loadPath: [
                    'bower_components'
                ]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'www/css',
                    src: ['*.scss'],
                    dest: '.tmp/css',
                    ext: '.css'
                }]
            },
            server: {
                files: [{
                    expand: true,
                    cwd: 'www/css',
                    src: ['*.scss'],
                    dest: '.tmp/css',
                    ext: '.css'
                }]
            }
        },


        // grunt-open will open your browser at the project's URL
        open: {
            all: {
                // Gets the port from the connect configuration
                path: 'http://localhost:<%= express.all.options.port%>'
            }
        }


    });
// load up your plugins
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-bower-requirejs');
    grunt.loadNpmTasks('grunt-express');
    grunt.loadNpmTasks('grunt-open');

    grunt.registerTask('default', ['qunit']);
    grunt.registerTask('server',[
        'express',
        'open',
        'watch'
    ]);
    // A very basic default task.
    grunt.registerTask('fuck', 'Log some stuff.', function() {
        grunt.log.write('Logging some stuff...').ok();
    });
};
