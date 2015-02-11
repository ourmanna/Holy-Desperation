module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      css: {
        files: [
          '**/*.sass',
          '**/*.scss'
        ],
        tasks: ['compass']
      },
      jade: {
        files: [
          '**/*.jade'
        ],
        tasks: ['jade']
      },
      coffee: {
        files: [
          '**/*.coffee'
        ],
        tasks: ['coffee']
      },
      js: {
        files: [
          'public_html/js/*.js',
          'Gruntfile.js'
        ],
        tasks: ['jshint']
      }
    },
    jade: {
      compile: {
        options: {
          client: false,
          pretty: true
        },
        files: [ {
          cwd: "website",
          src: "**/*.jade",
          dest: "public_html",
          expand: true,
          ext: ".html"
        } ]
      }
    },
    coffee: {
      compile: {
        files: [ {
          cwd: "website/coffee",
          src: "**/*.coffee",
          dest: "public_html/js",
          expand: true,
          ext: ".js"
        } ]
      }
    },
    compass: {
      dist: {
        options: {
          sassDir: 'website/sass',
          cssDir: 'public_html/css',
          outputStyle: 'compressed'
        }
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: ['Gruntfile.js', 'public_html/js/*.js']
    }
  });

  // Load the Grunt plugins.
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks("grunt-contrib-coffee");
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks("grunt-contrib-jade");

  // Register the default tasks.
  grunt.registerTask('default', ['watch']);
};