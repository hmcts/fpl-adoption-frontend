import { Answer, Form, goTo, Question, Redirector } from '@hmcts/one-per-page';
import { form, text } from '@hmcts/one-per-page/forms';
import { answer } from '@hmcts/one-per-page/checkYourAnswers';
import * as Joi from 'joi';

export class YourRelationships extends Question {
  get form(): Form {
    return form({
      marriedOrInCivilPartnership: text.joi(
        'Please answer relationship question',
        Joi.string().required().valid(['yes', 'no'])
      )
    });
  }

  answers(): Answer {
    return answer(this, { section: 'application-details' });
  }

  next(): Redirector {
    return goTo(this.journey.steps.CheckYourAnswers);
  }
}
