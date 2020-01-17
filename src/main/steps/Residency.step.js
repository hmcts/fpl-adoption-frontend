const { Question, goTo } = require('@hmcts/one-per-page');
const { form, text } = require('@hmcts/one-per-page/forms');
const { answer } = require('@hmcts/one-per-page/checkYourAnswers');
const Joi = require('joi');

class Residency extends Question {
  get form() {
    return form({
      britishIslesResident: text.joi(
        'Please answer residency question',
        Joi.string().required().valid(['yes', 'no'])
      )
    });
  }

  answers() {
    return answer(this, { section: 'eligibility-details' });
  }

  next() {
    return goTo(this.journey.steps.NumberOfChildren);
  }
}

module.exports = Residency;
