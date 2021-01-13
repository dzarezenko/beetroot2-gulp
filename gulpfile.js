var { task, series, parallel, watch } = require('gulp');

function task1(callback) {
  console.log("Task 1...");

  callback();
}

function task2(callback) {
  console.log("Task 2...");

  callback();
}
 
task('task1', task1);
task('task2', task2);
task('task3', series(task1, task2));
task('task4', parallel(task1, task2));
task('watch', () => {
  watch('./sass/**/*.scss', series(task1, task2));
});
