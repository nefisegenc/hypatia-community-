import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as nodemailer from "nodemailer";

admin.initializeApp();

interface JoinRequest {
    name: string;
    email: string;
    reason?: string;
    createdAt: admin.firestore.Timestamp;
}

const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || "your-email@example.com";
const APP_EMAIL = process.env.APP_EMAIL || "noreply@hypatia.com";
const APP_EMAIL_PASSWORD = process.env.APP_EMAIL_PASSWORD;

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: APP_EMAIL,
        pass: APP_EMAIL_PASSWORD,
    },
});

export const onNewJoinRequest = functions.firestore
    .document("joinRequests/{requestId}")
    .onCreate(async (snap) => {
        const data = snap.data() as JoinRequest;

        const mailOptions = {
            from: APP_EMAIL,
            to: NOTIFICATION_EMAIL,
            subject: "Yeni Topluluk Katılım Başvurusu",
            html: `
                <h2>Yeni Başvuru Detayları</h2>
                <p><strong>Ad Soyad:</strong> ${data.name}</p>
                <p><strong>E-posta:</strong> ${data.email}</p>
                ${data.reason ? `<p><strong>Katılım Nedeni:</strong> ${data.reason}</p>` : ""}
                <p><strong>Başvuru Tarihi:</strong> ${data.createdAt.toDate().toLocaleString("tr-TR")}</p>
            `,
        };

        try {
            await transporter.sendMail(mailOptions);
            console.log("Başvuru bildirimi e-postası gönderildi");
        } catch (error) {
            console.error("E-posta gönderimi başarısız oldu:", error);
        }
    });