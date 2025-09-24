// Generate Manual Password Reset Link
require('dotenv').config();
const { initializeApp, getApps, cert } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth');

async function generateResetLink(email) {
    try {
        // Initialize Firebase Admin if not already initialized
        if (getApps().length === 0) {
            const serviceAccount = {
                type: "service_account",
                project_id: process.env.FIREBASE_PROJECT_ID,
                private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
                private_key: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
                client_email: process.env.FIREBASE_CLIENT_EMAIL,
                client_id: process.env.FIREBASE_CLIENT_ID,
                auth_uri: "https://accounts.google.com/o/oauth2/auth",
                token_uri: "https://oauth2.googleapis.com/token",
                auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
                client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${process.env.FIREBASE_CLIENT_EMAIL}`
            };

            initializeApp({
                credential: cert(serviceAccount),
                projectId: process.env.FIREBASE_PROJECT_ID,
            });
        }

        const auth = getAuth();
        
        // Generate password reset link
        const resetLink = await auth.generatePasswordResetLink(email, {
            url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:9002'}/auth/login`,
            handleCodeInApp: false,
        });

        console.log('='.repeat(80));
        console.log(`🔗 MANUAL PASSWORD RESET LINK`);
        console.log(`📧 Email: ${email}`);
        console.log(`🔗 Reset Link: ${resetLink}`);
        console.log(`📝 Share this link with the employee`);
        console.log(`⏰ Link expires in 1 hour`);
        console.log('='.repeat(80));
        
        return resetLink;
    } catch (error) {
        console.error('❌ Error generating reset link:', error.message);
        return null;
    }
}

// Get email from command line argument
const email = process.argv[2];
if (!email) {
    console.log('Usage: node generate-reset-link.js <employee-email>');
    console.log('Example: node generate-reset-link.js employee@company.com');
    process.exit(1);
}

generateResetLink(email);
