import { EntryPoint, goTo, Redirector } from '@hmcts/one-per-page';

export class Start extends EntryPoint {
  next(): Redirector {
    return goTo(this.journey.steps.Residency);
  }
}
