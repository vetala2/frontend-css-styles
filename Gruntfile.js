module.exports = function (grunt) {
	var SRC_DIR = 'src';

	grunt.initConfig({
		csslint: {
			main: {
				options: {
					csslintrc: 'tasks/.csslintrc'
				},
				src: [
					SRC_DIR + '/**/*.css',
					'!' + SRC_DIR + '/**/reset.css',
					'!' + SRC_DIR + '/**/normalize.css'
				]
			}
		},
		watch: {
			sources: {
				files: [
					SRC_DIR + '/**/*.js',
					SRC_DIR + '/**/*.css',
					SRC_DIR + '/**/*.html'
				],
				//tasks: ['jshint'],
				options: {
					interrupt: true,
					livereload: 35729
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('live', ['watch']);
	grunt.registerTask('test', ['csslint:main']);
	
	//BAT files mirrors
    grunt.registerTask('livereload', ['live']);
	grunt.registerTask('analize', ['test']);
};