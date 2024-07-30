import admin from 'firebase-admin';

import * as serviceAccount from './../service-account-key.json'; // Path to your service account key file

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount)
});

export const authAdmin = admin.auth();
