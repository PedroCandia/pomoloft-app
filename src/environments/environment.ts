// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  auth: {
    client_id: 'cvundls7pspmk73j6c64brqduhpz6i',
    uri: 'http://localhost:8100/home',
    scope: 'user%3Aread%3Aemail%20user%3Aread%3Abroadcast%20channel%3Amanage%3Abroadcast%20channel%3Aread%3Aredemptions%20chat%3Aread%20channel%3Amoderate%20bits%3Aread%20channel_subscriptions%20channel%3Aread%3Asubscriptions%20channel%3Amanage%3Apredictions%20channel%3Amanage%3Apolls%20channel%3Aedit%3Acommercial%20channel%3Aread%3Acharity%20channel%3Aread%3Apaid_pinned_chat%20channel%3Aread%3Acheers%20moderator%3Aread%3Achatters&redirect_uri=https%3A%2F%2Fapi.streamelements.com%2Fauth%2Ftwitch%2Fcallback'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
