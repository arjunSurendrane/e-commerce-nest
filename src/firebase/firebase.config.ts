import { initializeApp, applicationDefault } from 'firebase-admin/app';

const firebaseAppConfig = initializeApp({
  credential: applicationDefault(),
  projectId: '<FIREBASE_PROJECT_ID>',
});

export default firebaseAppConfig;
