const path = require('path');

const express = require('express');
const expressSession = require('express-session');

const lookAndFeel = require('@hmcts/look-and-feel');
const { journey } = require('@hmcts/one-per-page');

const Intro = require('./steps/Intro.step');
const Start = require('./steps/Start.step');
const Residency  = require('./steps/Residency.step');
const NumberOfChildren  = require('./steps/NumberOfChildren.step');
const CheckYourAnswers  = require('./steps/CheckYourAnswers.step');

const app = express();

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
    CheckYourAnswers
  ],
  session: {
    secret: '123456',
    store: new expressSession.MemoryStore()
  }
});

app.listen(3000);
