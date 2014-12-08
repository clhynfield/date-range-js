'use strict';

module.exports = function(grunt) {
  // Project Configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    mochaTest: {
      src: ['tests/*.js'],
      options: {
        reporter: 'spec',
        require: 'index.js'
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('test', ['mochaTest']);
};
