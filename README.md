## About The Project - Tony Nguyen - Technical test

#### backend-repo
- Set up a basic Express server using TypeScript that connects to Firebase Firestore.
- The server should have endpoints to perform basic CRUD operations on a Firestore collection.

#### frontend-repo
- Build a website with Nextjs + React MUI + Redux to connect Express server + Firebase SDK backend with basic authentication and fetch data from Firestore

## Essential environment variables
- .env.example

## Prerequisites

1. Backend
- Express
- Firebase SDK, Firebase Admin, Firestore

2. Frontend
- NodeJS 16+
- Nextjs 14
- React-Redux, Redux toolkits
- React MUI 5+

## Run project:

Please read `README.md` of single repository to run the project accordingly. Order should be 
1. Run backend project
2. Run frontend project

* Missing requirement:
Make FE repo able to test API calling locally using Firebase Emulator if I run `npm run build && firebase emulators:start --only functions` on BE repo

