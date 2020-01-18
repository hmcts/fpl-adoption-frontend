import * as path from 'path';

import * as express from 'express';
import * as expressSession from 'express-session';

import * as lookAndFeel from '@hmcts/look-and-feel';
import { journey } from '@hmcts/one-per-page';

import { Intro } from './steps/Intro.step';
import { Start } from './steps/Start.step';
import { Residency } from './steps/Residency.step';
import { NumberOfChildren } from './steps/NumberOfChildren.step';
import { YourRelationships } from './steps/YourRelationships.step';
import { CheckYourAnswers } from './steps/CheckYourAnswers.step';

const app: express.Application = express();

const baseUrl = 'http://localhost:3000';

lookAndFeel.configure(app, {
  baseUrl,
  express: {
    views: [
      path.resolve(__dirname, 'steps'),
      path.resolve(__dirname, 'views')
    ]
  },
  webpack: {
    entry: [
      path.resolve(__dirname, 'assets/scss/main.scss')
    ]
  },
  nunjucks: {
    filters: {},
    globals: {
      phase: 'ALPHA',
      feedbackLink: baseUrl
    }
  }
});

journey(app, {
  steps: [
    Intro,
    Start,
    Residency,
    NumberOfChildren,
    YourRelationships,
    CheckYourAnswers
  ],
  session: {
    secret: '123456',
    store: new expressSession.MemoryStore()
  }
});

app.listen(3000);
