
class MyHelper extends Helper {

  // before/after hooks
  _before() {
    // remove if not used
  }

  _after() {
    // remove if not used
  }

  // add custom methods here
  // If you need to access other helpers
  // use: this.helpers['helperName']
async dragAndDropOffset(selector, xoffset, yoffset)
{
  
    let wd = this.helpers['WebDriverIO'].browser;
    wd.buttonDown();
    wd.moveTo(wd.element(selector), this.xoffset, this.yoffset);
    wd.buttonUp();
}
}

module.exports = MyHelper;
