import { Question, goTo, Redirector, Form, Answer } from '@hmcts/one-per-page';
import { form, text } from '@hmcts/one-per-page/forms';
import { answer } from '@hmcts/one-per-page/checkYourAnswers';
import * as Joi from 'joi';

export class Residency extends Question {
  get form(): Form {
    return form({
      britishIslesResident: text.joi(
        'Please answer residency question',
        Joi.string().required().valid(['yes', 'no'])
      )
    });
  }

  answers(): Answer {
    return answer(this, { section: 'eligibility-details' });
  }

  next(): Redirector {
    return goTo(this.journey.steps.NumberOfChildren);
  }
}
