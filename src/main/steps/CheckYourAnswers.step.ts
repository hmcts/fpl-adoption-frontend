import { Section } from '@hmcts/one-per-page'
import { CheckYourAnswers as CYA, section } from '@hmcts/one-per-page/checkYourAnswers';

export class CheckYourAnswers extends CYA {
  sections (): Section[] {
    return [
      section('eligibility-details', { title: 'Eligibility' }),
      section('application-details', { title: 'Application details' })
    ];
  }
}
