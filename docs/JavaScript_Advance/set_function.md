const jobs = {
  set current (jobName) {
    this.jobArray.push(jobName);
  },
  jobArray: []
};

language.current = "Plumber";
language.current = "Architect";

console.log(language.log);
// expected output: Array ["Plumber", "Architect"]