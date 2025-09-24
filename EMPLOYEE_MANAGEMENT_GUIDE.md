# Employee Management with Firebase Auth Integration

## Overview

The LeadTracker.ai application includes a comprehensive employee management system that automatically:
- Creates Firebase Authentication accounts for new employees
- Sets temporary passwords
- Sends password reset emails to employees
- Stores employee data in the database

## How It Works

### Employee Creation Process

1. **Admin adds employee** through the "Add Employee" dialog
2. **Firebase Auth account created** with employee's email and display name
3. **Temporary password generated** (meets Firebase security requirements)
4. **Password reset email sent** using Firebase Auth's email service
5. **Employee data stored** in the application database
6. **Employee receives email** with link to set their own password

### Email Flow

```
Admin fills form → Firebase Auth user created → Password reset email sent → Employee clicks link → Employee sets password → Employee can login
```

## Setup Requirements

### 1. Firebase Admin SDK Configuration

Add these environment variables to your `.env` file:

```env
# Firebase Admin SDK Configuration (Required)
FIREBASE_PROJECT_ID=studio-5063047183-aa053
FIREBASE_PRIVATE_KEY_ID=your-private-key-id
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@studio-5063047183-aa053.iam.gserviceaccount.com
FIREBASE_CLIENT_ID=your-client-id

# Firebase Web API Key (Required for email sending)
FIREBASE_WEB_API_KEY=AIzaSyCjA4ek_FRNB61JM7xrYAT3s1eoL94qhnE

# App URL (Optional - defaults to localhost:3000 in development)
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

### 2. Getting Firebase Admin Credentials

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select project: `studio-5063047183-aa053`
3. Go to **Project Settings** → **Service Accounts**
4. Click **Generate new private key**
5. Download the JSON file
6. Extract the values and add them to your `.env` file

### 3. Firebase Auth Email Configuration

1. In Firebase Console, go to **Authentication** → **Templates**
2. Click on **Password reset** template
3. Customize the email template:
   - **Sender name**: Your Company Name
   - **Subject**: Welcome - Set Your Password
   - **Email body**: Customize with your branding

## Current Implementation Features

### ✅ Automatic Account Creation
- Creates Firebase Auth user with employee email
- Sets display name from employee name
- Generates secure temporary password

### ✅ Email Integration
- Uses Firebase Auth REST API for reliable email delivery
- Sends password reset emails automatically
- Includes custom continue URL pointing to login page

### ✅ Error Handling
- Handles duplicate email addresses
- Provides fallback manual reset links if email fails
- Graceful degradation when Firebase Admin is not configured

### ✅ Security Features
- Temporary passwords meet Firebase security requirements
- Password reset links expire automatically
- Email verification workflow

### ✅ User Experience
- Clear success/error messages
- Console logging for debugging
- Fallback options for email delivery issues

## Using the Employee Management System

### Adding an Employee

1. Navigate to `/employees` page
2. Click **"Add Employee"** button
3. Fill out the employee form:
   - Full Name
   - Email Address
   - Phone Number
   - Role (from predefined list)
   - Department (from predefined list)
   - Address
4. Click **"Add Employee"**

### What Happens Next

**Success Scenario:**
- Employee is created in Firebase Auth
- Employee data is saved to database
- Password reset email is sent automatically
- Success message shows: "Successfully added employee [Name]. Password reset email has been sent to [email]."

**Email Failure Scenario:**
- Employee is still created in Firebase Auth and database
- Manual reset link is provided in console
- Message shows: "Successfully added employee [Name]. Email sending failed - please share the reset link manually (check console)."

**Configuration Missing Scenario:**
- Employee is added to database only
- Message shows: "Employee added to database. Firebase Auth integration requires environment variables to be configured."

## Employee Experience

### Setting Up Their Account

1. **Receives email** with subject like "Reset your password"
2. **Clicks the link** in the email
3. **Redirected to password reset page**
4. **Sets their own password**
5. **Can now login** with their email and new password

### Login Process

1. Go to `/auth/login`
2. Enter email and password
3. Access the application based on their role

## Troubleshooting

### Email Not Received

**Check these items:**
- Employee's spam/junk folder
- Email address was entered correctly
- Firebase Auth is properly configured
- `FIREBASE_WEB_API_KEY` is set in environment variables

**Solutions:**
- Check console for manual reset link
- Resend email through Firebase Console
- Verify email template is configured

### Environment Variable Issues

**Error**: "Firebase Admin not configured. Missing: [variables]"

**Solution:**
1. Ensure all required environment variables are set
2. Restart your development server
3. Check that private key includes proper `\n` line breaks

### Duplicate Email Error

**Error**: "An account with this email already exists."

**Solution:**
- Use a different email address, or
- Delete the existing user from Firebase Auth Console, or
- Update the existing employee record instead

## Development vs Production

### Development Mode
- Uses `http://localhost:3000` as continue URL
- Console logging shows detailed information
- Manual reset links provided as fallback

### Production Mode
- Uses `NEXT_PUBLIC_APP_URL` for continue URL
- Reduced console logging
- Email delivery monitoring through Firebase Console

## Security Best Practices

### Environment Variables
- Never commit `.env` file to version control
- Use different service accounts for development/production
- Restrict service account permissions

### Password Security
- Firebase handles password requirements automatically
- Users must set strong passwords through reset flow
- Temporary passwords are randomly generated and secure

### Email Security
- Password reset links expire automatically
- Links are single-use only
- Firebase handles email delivery securely

## Monitoring and Maintenance

### Firebase Console Monitoring
- Check Authentication → Users for new accounts
- Monitor email delivery in Authentication → Templates
- Review error logs for failed operations

### Application Monitoring
- Check console logs for employee creation status
- Monitor success/failure rates
- Track email delivery issues

## Advanced Configuration

### Custom Email Templates
Customize the password reset email in Firebase Console:

```html
<p>Welcome to [Company Name]!</p>
<p>You have been added as an employee. Click the link below to set your password:</p>
<p><a href="%LINK%">Set Password</a></p>
<p>This link expires in 1 hour.</p>
<p>If you have questions, contact your administrator.</p>
```

### Role-Based Access
The system supports role-based employee management:
- Employees are assigned roles and departments
- Future enhancements can include role-based permissions
- Integration with existing authentication system

## API Reference

### addEmployeeAction Function

**Location**: `/src/lib/actions.ts`

**Parameters**: FormData with employee information

**Returns**: Success/error message with optional reset link

**Process**:
1. Validates employee data
2. Initializes Firebase Admin SDK
3. Creates Firebase Auth user
4. Adds employee to database
5. Sends password reset email
6. Returns result with appropriate messaging

This comprehensive employee management system provides a seamless onboarding experience while maintaining security and reliability through Firebase Auth integration.
