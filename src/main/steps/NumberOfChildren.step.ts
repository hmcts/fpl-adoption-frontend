import { Answer, Form, goTo, Question, Redirector } from '@hmcts/one-per-page';
import { form, text } from '@hmcts/one-per-page/forms';
import { answer } from '@hmcts/one-per-page/checkYourAnswers';
import * as Joi from 'joi';

export class NumberOfChildren extends Question {
  get form (): Form {
    return form({
      numberOfChildren: text.joi(
        'Please enter valid number of children in application',
        Joi.number().required().min(1).max(10)
      )
    });
  }

  answers (): Answer {
    return answer(this, { section: 'application-details', question: 'Number of children in application' });
  }

  next (): Redirector {
    return goTo(this.journey.steps.YourRelationships);
  }
}
