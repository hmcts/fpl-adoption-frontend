declare module "@hmcts/one-per-page" {
  export class Journey {
    steps: { [key: string]: BaseStep }
  }

  export class Redirector {
    redirect(req: any, res: any, next: any): void
  }

  export class Form {

  }

  export class Answer {

  }

  export class Section {

  }

  export class BaseStep {
    constructor(...args: any[]);

    ready(...args: any[]): void;

    waitFor(...args: any[]): void;

    static bind(...args: any[]): void;

    static path: string;

    static pathToBind: string;

    journey: Journey
  }

  export class EntryPoint extends Redirect {
    constructor(...args: any[]);

    handler(...args: any[]): void;

    static bind(...args: any[]): void;

    static path: string;

    static pathToBind: string;

  }

  export class ExitPoint extends Page {
    constructor(...args: any[]);

    static bind(...args: any[]): void;

    static path: string;

    static pathToBind: string;

  }

  export class Page extends BaseStep {
    constructor(...args: any[]);

    handler(...args: any[]): void;

    static bind(...args: any[]): void;

    static path: string;

    static pathToBind: string;

  }

  export class Question extends Page {
    constructor(...args: any[]);

    answers(...args: any[]): void;

    handler(...args: any[]): void;

    next(...args: any[]): void;

    parse(...args: any[]): void;

    renderPage(...args: any[]): void;

    retrieve(...args: any[]): void;

    store(...args: any[]): void;

    storeErrors(...args: any[]): void;

    validate(...args: any[]): void;

    values(...args: any[]): void;

    static bind(...args: any[]): void;

    static path: string;

    static pathToBind: string;

  }

  export class Redirect extends BaseStep {
    constructor(...args: any[]);

    handler(...args: any[]): void;

    static bind(...args: any[]): void;

    static path: string;

    static pathToBind: string;

  }

  export const checkboxField: any;

  export const field: any;

  export function branch(redirectors: any): void;

  export function form(args: any): void;

  export function goTo(step: any): Redirector;

  export function journey(app: any, userOpts: any): any;

  export function parseBool(bool: any): any;

  export namespace middleware {
    function requireSession(req: any, res: any, next: any): void;

  }

}
