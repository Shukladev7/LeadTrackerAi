# Firebase Auth Email Setup Guide

## Step 1: Add Web API Key to Environment Variables

Add this line to your `.env` file:

```env
FIREBASE_WEB_API_KEY=AIzaSyCjA4ek_FRNB61JM7xrYAT3s1eoL94qhnE
```

## Step 2: Configure Firebase Auth Email Templates

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `studio-5063047183-aa053`
3. Navigate to **Authentication** → **Templates**
4. Click on **Password reset** template
5. Customize the email template:
   - **Sender name**: Nirmala Pumps
   - **Subject**: Set Your Password - Nirmala Pumps
   - **Email body**: Customize with your branding

## Step 3: Test Employee Creation

1. Start your development server: `npm run dev`
2. Go to `/employees` page
3. Click "Add Employee"
4. Fill out employee details
5. Submit the form
6. Check console for success/failure messages
7. Employee should receive password reset email

## How It Works

1. **Employee Creation**: Creates Firebase Auth user with temporary password
2. **Email Sending**: Uses Firebase Auth REST API to send password reset email
3. **Employee Experience**: Receives email with link to set their password
4. **Fallback**: If email fails, manual reset link is provided in console

## Troubleshooting

### Email Not Received
- Check spam/junk folder
- Verify email address is correct
- Check Firebase Console for email delivery logs
- Ensure Firebase project has email sending enabled

### API Key Issues
- Verify `FIREBASE_WEB_API_KEY` is set correctly in `.env`
- Restart development server after adding environment variable
- Check Firebase Console for API key restrictions

### Email Template Issues
- Configure email templates in Firebase Console
- Test with a valid email address
- Check Firebase Auth settings for email provider configuration

## Production Deployment

For production deployment:
1. Add `FIREBASE_WEB_API_KEY` to your deployment environment
2. Configure custom email templates with your branding
3. Set up custom domain for email sending (optional)
4. Monitor email delivery in Firebase Console

## Email Template Customization

Recommended email template:

**Subject**: Welcome to Nirmala Pumps - Set Your Password

**Body**:
```
Welcome to Nirmala Pumps!

You have been added as an employee to our system. Please click the link below to set your password:

%LINK%

This link will expire in 1 hour for security reasons.

If you have any questions, please contact your administrator.

Best regards,
Nirmala Pumps Team
```

The system will now automatically send password reset emails to new employees!
