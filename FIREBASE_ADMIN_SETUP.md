# Firebase Admin SDK Setup Guide

This guide explains how to set up Firebase Admin SDK for employee management with automatic account creation and email sending.

## Prerequisites

1. Firebase project with Authentication enabled
2. Firebase Admin SDK service account

## Step 1: Generate Service Account Key

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Go to **Project Settings** (gear icon) > **Service Accounts**
4. Click **Generate new private key**
5. Download the JSON file

## Step 2: Extract Environment Variables

From the downloaded JSON file, extract these values and add them to your `.env` file:

```env
# Firebase Admin SDK Configuration
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_PRIVATE_KEY_ID=your-private-key-id
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@your-project-id.iam.gserviceaccount.com
FIREBASE_CLIENT_ID=your-client-id

# Optional: Your app URL for email links
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

## Step 3: Configure Firebase Authentication

1. In Firebase Console, go to **Authentication** > **Settings**
2. In the **Authorized domains** tab, add your domain
3. In the **Templates** tab, customize the password reset email template if desired

## Step 4: Test Employee Creation

1. Go to the Employees page in your app
2. Click "Add Employee"
3. Fill out the form and submit
4. The system will:
   - Create a Firebase Auth user
   - Generate a password reset link
   - Send an email via Firebase Auth
   - Add the employee to your database

## Troubleshooting

### Missing Environment Variables
If you see: "Firebase Admin not configured. Missing: [variables]"
- Check that all required environment variables are set in your `.env` file
- Restart your development server after adding variables

### Service Account Errors
If you see: "Service account object must contain a string 'project_id' property"
- Ensure `FIREBASE_PROJECT_ID` is set correctly
- Check that the private key is properly formatted with `\n` for line breaks

### Email Not Sending
- Verify your Firebase project has the Authentication service enabled
- Check that the email template is configured in Firebase Console
- Ensure the user's email domain is not blocked

## Fallback Mode

If Firebase Admin is not configured, the system will:
- Still add employees to the database
- Show a warning message about missing configuration
- Allow manual account creation later

## Security Notes

- Never commit the service account JSON file to version control
- Use environment variables for all sensitive configuration
- The private key should include proper line breaks (`\n`)
- Restrict service account permissions to only what's needed

## Production Deployment

For production deployment (Vercel, etc.):
1. Add all environment variables to your deployment platform
2. Ensure `NEXT_PUBLIC_APP_URL` points to your production domain
3. Test employee creation in production environment
