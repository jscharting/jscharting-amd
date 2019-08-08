module.exports = function (grunt) {
	grunt.initConfig({
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

	grunt.registerTask(
		'default',
		[
			'copy:sourceToDist',
			'copy:jschartingToDist'
		]);
}