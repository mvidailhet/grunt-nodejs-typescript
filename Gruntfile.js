module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        nodemon: {
            dev: {
                script: 'server.js'
            },
            options: {
                ignore: ['node_modules/**', 'Gruntfile.js'],
                env: {
                    PORT: '8181'
                }
            }
        },

        watch: {
            scripts: {
                files: ['server.ts', '!node_modules/**/*.ts'], // the watched files
                tasks: ["newer:tslint:all", "ts:build"], // the task to run
                options: {
                    spawn: false // makes the watch task faster
                }
            }
        },

        concurrent: {
            watchers: {
                tasks: ['nodemon', 'watch'],
                options: {
                    logConcurrentOutput: true
                }
            }
        },

        tslint: {
            options: {
                configuration: grunt.file.readJSON("tslint.json")
            },
            all: {
                src: ["server.ts", "!node_modules/**/*.ts", "!obj/**/*.ts", "!typings/**/*.ts"] // avoid linting typings files and node_modules files
            }
        },

        ts: {
            build: {
                src: ["server.ts", "!node_modules/**/*.ts"], // Avoid compiling TypeScript files in node_modules
                options: {
                    module: 'commonjs', // To compile TypeScript using external modules like NodeJS
                    fast: 'never' // You'll need to recompile all the files each time for NodeJS
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks("grunt-tslint");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-nodemon");
    grunt.loadNpmTasks("grunt-concurrent");

    // Default tasks.
    grunt.registerTask("serve", ["concurrent:watchers"]);
    grunt.registerTask('default', ["tslint:all", "ts:build"]);
};