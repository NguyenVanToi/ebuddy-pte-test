## About The Project - Tony Nguyen - Technical test

- Set up a basic Express server using TypeScript that connects to Firebase Firestore.
- The server should have endpoints to perform basic CRUD operations on a Firestore collection.

## Essential environment variables:
- .env.example

## Prerequisites

1. Create new project in Firebase console and get project information to setup `.env`
2. Setup Firebase Admin to get json file for validating token: `service-account-key.json`
3. NodeJS 16+

## Run project:

1. Add the environment variables to the `.env` file (copy the `.env.example` file and rename it to `.env`).
2. Installation packages 
```sh
npm install
```
3.1 Run project locally
```sh
npm run dev
```
3.2 Build project and run 
```sh
npm run build
npm run start
```
