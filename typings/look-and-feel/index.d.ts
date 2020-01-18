declare module "@hmcts/look-and-feel" {
  export function configure(app: any, {
    baseUrl,
    express,
    nunjucks,
    webpack,
    development
  }: any): any;
}

