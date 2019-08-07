module.exports = function (grunt) {
	grunt.initConfig({
		browserify: {
			'./dist/main.js': ['./src/scripts/main.js']
		},
		copy: {
			sourceToDist: { 
				files: [
					{
						expand: true,
						cwd: './src',
						src: ['**'],
						dest: './dist'
					}
				]
			},
			jschartingToDist: {
				files: [
					{
						expand: true,
						cwd: './node_modules/jscharting',
						src: ['**'],
						dest: './dist/jscharting'
					}
				]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-browserify');

	grunt.registerTask(
		'default',
		[
			'copy:sourceToDist',
			'copy:jschartingToDist'
		]);
}