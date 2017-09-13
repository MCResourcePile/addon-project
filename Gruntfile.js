module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        site: {
            public: {
                options: {
                    templates: 'templates', 
                    defaultTemplate: 'default.html'
                },
                src: 'src',
                dest: 'out'
            }
        },
        copy: {
            assets: {
                expand: true,
                cwd: 'src/assets',
                src: '**',
                dest: 'out/assets'
            }
        },
        clean: ['out/']
    });
    
    grunt.loadNpmTasks('grunt-site');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['site', 'copy']);
}
