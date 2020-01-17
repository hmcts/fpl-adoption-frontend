const { Question, goTo } = require('@hmcts/one-per-page');
const { form, text } = require('@hmcts/one-per-page/forms');
const { answer } = require('@hmcts/one-per-page/checkYourAnswers');
const Joi = require('joi');

class YourRelationships extends Question {
  get form() {
    return form({
      marriedOrInCivilPartnership: text.joi(
        'Please answer relationship question',
        Joi.string().required().valid(['yes', 'no'])
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

module.exports = YourRelationships;
