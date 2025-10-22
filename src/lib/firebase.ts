import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const missingKeys = [
    { key: "NEXT_PUBLIC_FIREBASE_API_KEY", value: firebaseConfig.apiKey },
    { key: "NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN", value: firebaseConfig.authDomain },
    { key: "NEXT_PUBLIC_FIREBASE_PROJECT_ID", value: firebaseConfig.projectId },
    { key: "NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET", value: firebaseConfig.storageBucket },
    { key: "NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID", value: firebaseConfig.messagingSenderId },
    { key: "NEXT_PUBLIC_FIREBASE_APP_ID", value: firebaseConfig.appId },
].filter(({ value }) => !value);

if (typeof window !== "undefined" && missingKeys.length > 0) {
    throw new Error(
        `Eksik Firebase yapılandırması: ${missingKeys.map(({ key }) => key).join(", ")}. ` +
            "Lütfen .env.local dosyanı güncelle."
    );
}

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app);
