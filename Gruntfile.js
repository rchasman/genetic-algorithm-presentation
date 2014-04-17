// Generated on 2014-04-09 using generator-bespoke v0.8.0

module.exports = function(grunt) {

  var config = {
    clean: {
      public: 'public/**/*'
    },
    jade: {
      src: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: '**/*.jade',
          dest: 'public/',
          ext: '.html'
        }],
        options: {
          pretty: true
        }
      }
    },
    processing: {
      src: {
        files: [{
          expand: true,
          cwd: 'src/scripts/',
          src: '**/*.pde',
          dest: 'public/scripts/',
          ext: '.js'
        }]
      }
    },
    stylus: {
      src: {
        files: [{
          expand: true,
          cwd: 'src/styles/',
          src: '**/*.styl',
          dest: 'public/styles/',
          ext: '.css'
        }],
        options: {
          compress: false
        }
      }
    },
    image: {
      src: {
        files: [{
          expand: true,
          cwd: 'src/styles/',
          src: '**/*.jpg',
          dest: 'public/styles/',
          ext: '.jpg'
        }]
      }
    },
    coffee: {
      src: {
        files: [{
          expand: true,
          cwd: 'src/scripts/',
          src: '**/*.coffee',
          dest: 'public/scripts/',
          ext: '.js'
        }]
      }
    },
    copy: {
      src: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: [
            '**/*',
            '!<%= jade.src.files[0].src %>',
            '!<%= stylus.src.files[0].src %>',
            '!<%= coffee.src.files[0].src %>'
          ],
          dest: 'public/'
        }]
      }
    },
    watch: {
      jade: {
        files: '<%= jade.src.files[0].cwd + jade.src.files[0].src %>',
        tasks: 'jade'
      },
      jade: {
        files: '<%= image.src.files[0].cwd + image.src.files[0].src %>',
        tasks: 'image'
      },
      processing: {
        files: '<%= processing.src.files[0].cwd + processing.src.files[0].src %>',
        tasks: 'processing'
      },
      stylus: {
        files: '<%= stylus.src.files[0].cwd + stylus.src.files[0].src %>',
        tasks: 'stylus'
      },
      coffee: {
        files: '<%= coffee.src.files[0].cwd + coffee.src.files[0].src %>',
        tasks: 'coffee'
      },
      copy: {
        files: [
          '<%= copy.src.files[0].cwd + copy.src.files[0].src[0] %>',
          '!<%= jade.src.files[0].cwd + jade.src.files[0].src %>',
          '!<%= processing.src.files[0].cwd + processing.src.files[0].src %>',
          '!<%= stylus.src.files[0].cwd + stylus.src.files[0].src %>',
          '!<%= image.src.files[0].cwd + image.src.files[0].src %>',
          '!<%= coffee.src.files[0].cwd + coffee.src.files[0].src %>'
        ],
        tasks: 'copy:src'
      },
      public: {
        files: [
          'public/**/*',
          '!public/bower_components/**/*'
        ],
        options: {
          livereload: 35732
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 8000,
          hostname: '*', // Remove this line if you only want the server available locally
          base: 'public',
          keepalive: true,
          middleware: function(connect, options) {
            return [
              require('connect-livereload')({
                port: config.watch.public.options.livereload
              }),
              connect.static(options.base)
            ];
          }
        }
      }
    },
    open: {
      server: {
        path: 'http://localhost:<%= connect.server.options.port %>'
      }
    },
    concurrent: {
      compile: {
        tasks: [
          'jade',
          'stylus',
          'coffee',
          'copy'
        ],
        options: {
          logConcurrentOutput: false
        }
      },
      server: {
        tasks: [
          'connect',
          'open',
          'watch:jade',
          'watch:processing',
          'watch:stylus',
          'watch:coffee',
          'watch:copy',
          'watch:public'
        ],
        options: {
          logConcurrentOutput: true
        }
      }
    },
    useminPrepare: {
      html: 'public/index.html',
      options: {
        dest: 'public'
      }
    },
    usemin: {
      html: 'public/index.html'
    },
    'gh-pages': {
      public: {
        options: {
          base: 'public',
        },
        src: '**/*'
      }
    }
  };

  grunt.initConfig(config);

  // Load all Grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['compile', 'useminPrepare', 'concat', 'uglify', 'cssmin', 'usemin']);
  grunt.registerTask('compile', ['clean', 'concurrent:compile']);
  grunt.registerTask('server', ['compile', 'concurrent:server']);
  grunt.registerTask('deploy', ['default', 'gh-pages:public']);

};
