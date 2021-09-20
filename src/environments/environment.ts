// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  BACKEND_URL: 'http://localhost:3000/',
  firebaseConfig: {
    apiKey: "AIzaSyCLOs9mbKlNqsOXsbIqHS5Dqf8Dm0dZnpc",
    authDomain: "farsh-burgers.firebaseapp.com",
    projectId: "farsh-burgers",
    storageBucket: "farsh-burgers.appspot.com",
    messagingSenderId: "500897363605",
    appId: "1:500897363605:web:b7875c98fa845432254d9c"
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
