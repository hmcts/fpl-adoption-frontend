const { Question, goTo } = require('@hmcts/one-per-page');
const { form, text } = require('@hmcts/one-per-page/forms');
const { answer } = require('@hmcts/one-per-page/checkYourAnswers');
const Joi = require('joi');

class NumberOfChildren extends Question {
  get form() {
    return form({
      numberOfChildren: text.joi(
        'Please enter valid number of children in application',
        Joi.number().required().min(1).max(10)
      )
    });
  }

  answers() {
    return answer(this, { section: 'application-details' });
  }

  next() {
    return goTo(this.journey.steps.CheckYourAnswers);
  }
}

module.exports = NumberOfChildren;
