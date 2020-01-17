const { EntryPoint, goTo } = require('@hmcts/one-per-page');

class Start extends EntryPoint {
  next() {
    return goTo(this.journey.steps.Residency);
  }
}

module.exports = Start;
