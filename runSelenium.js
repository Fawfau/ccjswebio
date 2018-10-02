// runSelenium.js file with sleenium bootstrap/teardown
const selenium = require("selenium-standalone");

module.exports = {
  bootstrap: (done) => {
    selenium.start((err, child) => {
      if (err) {
        throw err;
      }
      selenium.__child = child;
      done();
    });
  },
  teardown: (done) => {
    // BUG: when use "restart: false" in codecept driver config
    // teardown runs before last instance of driver is killed
    // TODO: remove setTimeout, when codeceptjs bug is fixed
    setTimeout(() => {
      try {
        if (selenium.__child) selenium.__child.kill();
      } catch (e) {}
    }, 3000);
    done();
  }
};