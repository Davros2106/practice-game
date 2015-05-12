
var copyTask = require('./../practiceGame/.grunt/copytask.js');
var cleanTask = require('./../practiceGame/.grunt/cleantask.js');
var jshintTask = require('./../practiceGame/.grunt/jshinttask.js');
var fileWatchTask = require('./../practiceGame/.grunt/filewatchertask.js');
var lessTask = require('./../practiceGame/.grunt/lesstask.js');
var concatTask = require('./../practiceGame/.grunt/concatTask.js');
var expressTask = require('./../practiceGame/server/server.js');

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: copyTask,
        clean: cleanTask,
        jshint: jshintTask,
        watch: fileWatchTask,
        server: expressTask,
        less: lessTask,
        concat: concatTask

    });

    var port = 35001;
    grunt.registerTask('server', 'starts the express server', function(){
        expressTask.listen(port, function() {
            console.log('Express server listening on ' + port);
        });
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-lesslint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');


    grunt.registerTask('nostart',['jshint','clean:all','concat','copy','less' ]);
    grunt.registerTask('default',['nostart','server','watch']);
};


