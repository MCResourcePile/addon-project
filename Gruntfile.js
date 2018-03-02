module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        tree: {
            default: {
                options: {},
                files: [
                    {
                        src: ['src/content/wiki'],
                        dest: 'src/temp/wiki_navigation.json'
                    }
                ]
            }
        },
        'compile-handlebars': {
            wiki: {
                files: [{
                    src: 'src/templates/partials/sidenavs/nav.handlebars',
                    dest: 'src/templates/temp/nav.html'
                }],
                helpers: ['handlebars-helpers', 'src/templates/helpers/*.js'],
                partials: 'src/templates/partials/sidenavs/*.html',
                templateData: 'src/temp/wiki_navigation.json'
            }
        },
        site: {
            public: {
                options: {
                    templates: 'templates', 
                    defaultTemplate: 'full.html'
                },
                src: 'src',
                dest: 'out'
            }
        },
        clean: ['src/temp', 'src/templates/temp'],
        copy: {
            assets: {
                expand: true,
                cwd: 'src/assets',
                src: '**',
                dest: 'out/assets'
            }
        }
    });

    var handlebars = require('handlebars');
    var helpers = require('handlebars-helpers')({
        handlebars: handlebars
    });
    
    grunt.loadNpmTasks('grunt-tree');
    grunt.loadNpmTasks('grunt-compile-handlebars');
    grunt.loadNpmTasks('grunt-site');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['tree', 'compile-handlebars', 'site', 'clean', 'copy']);
}
