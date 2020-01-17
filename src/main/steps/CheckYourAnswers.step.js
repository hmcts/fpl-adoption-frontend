const { CheckYourAnswers: CYA, section } = require('@hmcts/one-per-page/checkYourAnswers');

class CheckYourAnswers extends CYA {
  sections() {
    return [
      section('eligibility-details', { title: 'Eligibility' }),
      section('application-details', { title: 'Application details' })
    ];
  }
}

module.exports = CheckYourAnswers;
